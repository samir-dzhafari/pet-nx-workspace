# PetNxWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45">
</a>

✨ Добро пожаловать в ваш NX Workspace! ✨

Этот проект настроен для работы с приложением `articles-app` и библиотекой `ui`.

---

## Быстрый старт

1. Установите зависимости:

```bash
npm install
```

2. Инициализируйте **Mock Service Worker** для приложения `articles-app`:

```bash
cd apps/articles-app
npx msw init public/ --save
cd ../..
```

3. Соберите библиотеку `ui`:

```bash
nx build ui
```

4. Запустите приложение `articles-app`:

```bash
nx serve articles-app
```

5. Перейдите в браузере по адресу:
   [http://localhost:4200](http://localhost:4200)

---

## Полезные команды Nx

* **Сборка приложения для продакшена:**

```bash
nx build articles-app
```

* **Список всех доступных целей проекта:**

```bash
nx show project articles-app
```

* **Создание нового приложения:**

```bash
npx nx g @nx/react:app my-app
```

* **Создание новой библиотеки:**

```bash
npx nx g @nx/react:lib my-lib
```

* **Граф зависимостей проекта:**

```bash
npx nx graph
```

---

## Дополнительно

* [Документация Nx](https://nx.dev)
* [Nx Console (VSCode/IntelliJ)](https://nx.dev/getting-started/editor-setup) — визуальный интерфейс для генерации кода и запуска задач.

---

Теперь вы готовы разрабатывать и тестировать приложение локально!
