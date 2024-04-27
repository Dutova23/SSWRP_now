import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // Импорт функций createApi и fetchBaseQuery из Redux Toolkit

// Создание API для работы с пользователями
export const userApi = createApi({
  reducerPath: 'userApi', // Путь к редьюсеру API
  keepUnusedDataFor: 30, // Время хранения неиспользуемых данных (в секундах)
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users/' }), // Базовый запрос для выполнения HTTP-запросов к API
  endpoints: (builder) => ({ // Конфигурация конечных точек API
    getUsers: builder.query({ // Запрос для получения списка пользователей
      query: () => "/", // Путь к конечной точке
      providesTags: ['User'], // Метка, используемая для инвалидации кэша при изменении данных
    }),
    createUser: builder.mutation({ // Мутация для создания нового пользователя
      query(user) {
        return { // Определение параметров запроса
          url: "/", // Путь к конечной точке
          method: "POST", // Метод запроса
          body: user, // Тело запроса (данные пользователя)
        };
      },
    }),
    updateUser: builder.mutation({ // Мутация для обновления данных пользователя
      query({id, user}) {
        return { // Определение параметров запроса
          url: `/${id}`, // Путь к конечной точке с идентификатором пользователя
          method: "PUT", // Метод запроса
          body: user, // Тело запроса (обновленные данные пользователя)
        };
      }
    }),
    deleteUser: builder.mutation({ // Мутация для удаления пользователя
      query(id) {
        return { // Определение параметров запроса
          url: `/${id}`, // Путь к конечной точке с идентификатором пользователя
          method: "DELETE", // Метод запроса
          credentials: "include", // Включение передачи учетных данных
        };
      },
    }),
  })
});

// Экспорт хуков для использования мутаций и запросов в компонентах React
export const {
  useCreateUserMutation, // Хук для создания пользователя
  useDeleteUserMutation, // Хук для удаления пользователя
  useUpdateUserMutation, // Хук для обновления данных пользователя
  useGetUsersQuery, // Хук для получения списка пользователей
} = userApi;
