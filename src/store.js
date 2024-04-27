import { configureStore } from '@reduxjs/toolkit'; // Импорт функции configureStore из библиотеки Redux Toolkit
import { setupListeners } from '@reduxjs/toolkit/query'; // Импорт функции setupListeners для Redux Toolkit Query
import counterReducer from './features/counter/counterSlice'; // Импорт редюсера для счетчика
import { userApi } from './api/users'; // Импорт API запросов для пользователей

// Конфигурация хранилища Redux
const store = configureStore({
  reducer: {
    counter: counterReducer, // Добавление редюсера счетчика
    [userApi.reducerPath]: userApi.reducer, // Добавление редюсера для API пользователей
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Добавление middleware для обработки запросов API
});

setupListeners(store.dispatch); // Настройка слушателей для обработки запросов

export default store;
