import { Box } from '@mui/system'; // Импорт компонента Box из библиотеки '@mui/system'
import PropTypes from 'prop-types'; // Импорт модуля PropTypes из библиотеки 'prop-types'

const LocalContainer = ({ children }) => { // Объявление компонента LocalContainer, принимающего children в качестве свойства
  return ( // Возвращаемая разметка компонента LocalContainer
    <Box> {/* Обертка для дочерних элементов */}
      {children} {/* Дочерние элементы */}
    </Box>
  );
};

LocalContainer.propTypes = { // Проверка типов принимаемых свойств
  children: PropTypes.node // Свойство children должно быть узлом React
};

export default LocalContainer; 
