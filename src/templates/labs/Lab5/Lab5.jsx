import { Formik, Field, Form, } from "formik"; // Импорт компонентов Formik для управления формой
import { useCallback } from 'react'; // Импорт хука useCallback из библиотеки React

// Компонент Lab5
const Lab5 = () => {
  // Функция обработки отправки формы
  const handleSubmit = useCallback((values, { setSubmitting }) => {
    if (values.login === "admin" && values.password === "admin") { // Проверка логина и пароля
      alert("Успешно"); // Вывод сообщения об успешной авторизации
    } else {
      alert("Ошибка"); // Вывод сообщения об ошибке авторизации
    }

    if (values.isRememberMe) { // Проверка флага "Запомнить меня"
      localStorage.setItem("login", values.login); // Сохранение логина в localStorage
      localStorage.setItem("password", values.password); // Сохранение пароля в localStorage
    }
    setSubmitting(false); // Установка флага отправки формы в false
  }, []);

  // Функция обработки сброса формы
  const handleReset = useCallback((values) => {
    values.login = ""; // Сброс логина
    values.password = ""; // Сброс пароля
    values.isRememberMe = false; // Сброс флага "Запомнить меня"
  }, []);

  return (
    <Formik
      initialValues={{ // Инициализация начальных значений формы
        login: localStorage.getItem("login") ? localStorage.getItem("login") : '', // Логин пользователя
        password: localStorage.getItem("password") ? localStorage.getItem("password") : '', // Пароль пользователя
        isRememberMe: false // Флаг "Запомнить меня"
      }}
      onSubmit={handleSubmit} // Обработчик отправки формы
      onReset={handleReset} // Обработчик сброса формы
    >
      {
        (
          {
            resetForm // Функция сброса формы из Formik
          }
        ) => (
          <Form className="lab5-form"> {/* Форма */}
            <div className="form-group"> {/* Группа полей формы */}
              <Field
                type="text" // Тип поля ввода (логин)
                name="login" // Имя поля ввода (логин)
                className="form-control" // Класс поля ввода
                placeholder="login" // Плейсхолдер поля ввода
              />
            </div>
            <div className="form-group"> {/* Группа полей формы */}
              <Field
                type="password" // Тип поля ввода (пароль)
                name="password" // Имя поля ввода (пароль)
                className="form-control" // Класс поля ввода
                placeholder="password" // Плейсхолдер поля ввода
              />
            </div>
            <div className="form-group"> {/* Группа полей формы */}
              <Field
                className="form-control" // Класс поля ввода
                type="checkbox" // Тип поля ввода (чекбокс)
                name="isRememberMe" // Имя поля ввода (флаг "Запомнить меня")
                id="rememberMe2" // ID поля ввода (флаг "Запомнить меня")
              />
              <label htmlFor="rememberMe2">Запомнить</label> {/* Метка для чекбокса "Запомнить меня" */}
            </div>
            <div className="form-group buttons"> {/* Группа кнопок формы */}
              <button type="button" onClick={resetForm}>Очистить</button> {/* Кнопка очистки формы */}
              <button type="reset">Очистить2</button> {/* Кнопка сброса формы */}
              <button type="submit">Отправить</button> {/* Кнопка отправки формы */}
            </div>
          </Form>
        )
      }
    </Formik>
  );
}

export default Lab5; 
