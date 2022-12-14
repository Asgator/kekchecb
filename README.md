# Тестовое задание на вакансию Front-end Developer

## Основное задание:

Необходимо написать приложение личный кабинет.
В приложении должно быть две страницы:

1. Страница входа
2. Страница со списком контактов

Оформление и данные для заполнения страниц на усмотрение кандидата.

**Обязательно** наличие информации в readme о том, как запускать приложение. Так же необходимо указать версию **node** (узнать можно с помощью команды node -v)

Для выполнения тестового задания Вы можете использовать UI-библиотеку компонентов (MUI, antd и т.д.).

Задание необходимо выполнить на **TypeScript**, без использования **any** и **ts-ignore**.

При выполнении работы обязательно использовать стейт менеджер (redux, mobx)

**Страница входа**

Для реализации авторизации можно использовать запросы с моковыми данными https://github.com/typicode/json-server.

**Страница со списком контактов**

Страница со списком контактов пользователя должна быть **доступна только после авторизации**.
На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.

##

### Для запуска проекта

в окне терминала набрать команды:

```
git clone https://github.com/nskpsv/contacts-app.git
cd contacts-app
npm i
npm run dev
```

**Версия Node: 16.16.0**

### Для авторизации в приложении

```
email: test@mail.ru
password: test
```
