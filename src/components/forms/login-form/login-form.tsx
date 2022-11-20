import React, { FC, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { validateForm } from './form-validator';
import classNames from 'classnames/bind';
import styles from './login-form.module.css';
import preloader from '../../../resources/preloader.svg';
import {
  clearError,
  selectRemember,
  setRemember,
} from '../../../state/authSlice';
import { LoginFormState } from '../../../classes/login-form-state';
import { LoginData } from '../../../models/api';
import { Field } from '../field/field';
import { Input } from '../input/input';

type Props = {
  onSubmit: Function;
  isFetching: boolean;
};

const LoginForm: FC<Props> = ({ onSubmit, isFetching = false }) => {
  const [state, setState] = useState(new LoginFormState());
  const dispatch = useAppDispatch();
  const remember = useAppSelector(selectRemember);
  const cx = classNames.bind(styles);

  const getLoginData = (): LoginData => {
    const res = {
      login: {
        email: state.email.value,
        password: state.password.value,
      },
    };
    return res;
  };

  const fieldChangeHandler = (
    key: keyof LoginFormState,
    newValue: string | boolean,
  ) => {
    setState({
      ...state,
      [key]: { ...state[key], value: newValue },
    } as LoginFormState);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(clearError());

    validateForm(state, setState) && onSubmit(getLoginData());
  };

  return (
    <form className={styles.form} name="email" onSubmit={submitHandler}>
      <Field error={state.email.error}>
        <Input
          isError={!!state.email.error}
          value={state.email.value}
          onChange={(e) => fieldChangeHandler('email', e.target.value)}
          type="text"
          name="email"
          placeholder="Email"
          autoFocus
          disabled={isFetching}
        />
      </Field>
      <Field error={state.password.error}>
        <Input
          isError={!!state.password.error}
          value={state.password.value}
          onChange={(e) => fieldChangeHandler('password', e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          disabled={isFetching}
        />
      </Field>
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          checked={remember}
          onChange={(e) => dispatch(setRemember(e.target.checked))}
          type="checkbox"
          name="remember"
          disabled={isFetching}
        />
        <label className={styles.checkbox__label}>Запомнить</label>
      </div>
      <button
        className={styles.submit_button}
        type="submit"
        disabled={isFetching}
      >
        {isFetching ? <img src={preloader} /> : 'Войти'}
      </button>
    </form>
  );
};

export default LoginForm;
