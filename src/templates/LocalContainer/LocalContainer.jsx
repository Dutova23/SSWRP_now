import { Box, Container } from '@mui/system'; // Импорт компонентов Box и Container из библиотеки Material-UI
import { useContext } from "react"; // Импорт хука useContext из React
import ThemeContext from '../../contexts/ThemeContext'; // Импорт контекста темы
import PropTypes from 'prop-types'; // Импорт PropTypes для проверки типов пропсов

// Компонент LocalContainer
const LocalContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext); // Получение значения темы из контекста

  return (
    <Box 
      width={"100%"} 
      height={"100%"}
      className={`local-container-theme-${theme}`} // Применение класса в зависимости от выбранной темы
    >
      <Container 
        maxWidth="lg" // Максимальная ширина контейнера
        disableGutters // Отключение отступов контейнера
        sx={{height: "100%", display: "flex", flexDirection: "column"}} // Стили для контейнера
      >
        {children} {/* Вывод дочерних компонентов */}
      </Container>
    </Box>
  );
}

LocalContainer.propTypes = {
  children: PropTypes.node // Проверка типа children на Node
}

export default LocalContainer; 