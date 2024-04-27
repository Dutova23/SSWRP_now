import { useRouteError } from "react-router-dom"; // Импорт хука useRouteError из библиотеки react-router-dom

export default function ErrorPage() { // Экспорт компонента ErrorPage
  const error = useRouteError(); // Получение информации об ошибке с помощью хука useRouteError
  console.error(error); // Вывод ошибки в консоль

  return ( // Возвращаемая разметка компонента ErrorPage
    <div id="error-page"> {/* Блок страницы ошибки */}
      <h1>Oops!</h1> {/* Заголовок ошибки */}
      <p>Sorry, an unexpected error has occurred.</p> {/* Сообщение о неожиданной ошибке */}
      <p> {/* Абзац */}
        <i>{error.statusText || error.message}</i> {/* Информация об ошибке */}
      </p>
    </div>
  );
}
