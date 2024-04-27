import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css' // Импорт шрифта Roboto с весом 300
import '@fontsource/roboto/400.css' // Импорт шрифта Roboto с весом 400
import '@fontsource/roboto/500.css' // Импорт шрифта Roboto с весом 500
import '@fontsource/roboto/700.css' // Импорт шрифта Roboto с весом 700
import App from './App.jsx' // Импорт компонента приложения
import ErrorPage from './templates/ErrorPage.jsx' // Импорт компонента страницы ошибки
import Lab1 from './templates/labs/Lab1' // Импорт компонента лабораторной работы №1
import Lab2 from './templates/labs/Lab2' // Импорт компонента лабораторной работы №2
import Lab4 from './templates/labs/Lab4' // Импорт компонента лабораторной работы №4
import Lab5 from './templates/labs/Lab5' // Импорт компонента лабораторной работы №5
import Lab6 from './templates/labs/Lab6' // Импорт компонента лабораторной работы №6
import Lab8 from './templates/labs/Lab8' // Импорт компонента лабораторной работы №8
import Main from './templates/pages/MainPage.jsx' // Импорт компонента главной страницы
import AboutMe from './templates/pages/AboutMe.jsx' // Импорт компонента страницы "Обо мне"
import store from './store.js' // Импорт хранилища Redux
import { Provider } from 'react-redux' // Импорт компонента Provider для Redux
import { createBrowserRouter, RouterProvider } from "react-router-dom" // Импорт функций для маршрутизации из React Router
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // Импорт компонентов для работы с запросами из библиотеки React Query

import './index.css' // Импорт файла стилей для индексной страницы

// Создание экземпляра маршрутизатора
const router = createBrowserRouter([
  {
    path: "/", // Корневой путь
    element: <App />, // Корневой элемент - компонент App
    errorElement: <ErrorPage />, // Элемент для отображения ошибок
    children: [ // Дочерние маршруты
      {
        path: "", // Пустой путь (для главной страницы)
        element: <Main />, // Компонент для главной страницы
      },
      {
        path: "about-me", // Путь к странице "Обо мне"
        element: <AboutMe /> // Компонент страницы "Обо мне"
      },
      {
        path: "lab/1", // Путь к первой лабораторной работе
        element: <Lab1 />, // Компонент первой лабораторной работы
      },
      {
        path: "lab/2", 
        element: <Lab2 />, 
      },
      {
        path: "lab/4", 
        element: <Lab4 />, 
      },
      {
        path: "lab/5", 
        element: <Lab5 />, 
      },
      {
        path: "lab/6", 
        element: <Lab6 />, 
      },
      {
        path: "lab/8", 
        element: <Lab8 />, 
      },
    ],
  },
]);

// Создание экземпляра клиента запросов
const queryClient = new QueryClient()

// Рендеринг приложения
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Обертка для Redux */}
    <Provider store={store}>
      {/* Обертка для React Query */}
      <QueryClientProvider client={queryClient}>
        {/* Обертка для маршрутизации */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
