import MenuItem from '@mui/material/MenuItem'; // Импорт компонента MenuItem из библиотеки Material-UI
import MenuList from '@mui/material/MenuList'; // Импорт компонента MenuList из библиотеки Material-UI
import { useNavigate } from "react-router-dom"; // Импорт хука useNavigate из библиотеки react-router-dom
import PropTypes from 'prop-types'; // Импорт библиотеки PropTypes для проверки типов пропсов
import Drawer from '@mui/material/Drawer'; // Импорт компонента Drawer из библиотеки Material-UI
import Box from '@mui/material/Box'; // Импорт компонента Box из библиотеки Material-UI

// Компонент Menu
const Menu = ({ items, onClose, open = false }) => {
  const navigate = useNavigate(); // Получение функции навигации из хука useNavigate

  return (
    <Drawer open={open} onClose={onClose}> {/* Компонент Drawer для бокового меню */}
      <Box sx={{ width: 250 }} role="presentation"> {/* Компонент Box для контейнера бокового меню */}
        <MenuList> {/* Компонент MenuList для списка элементов меню */}
          {
            items.map((item) => { // Итерация по массиву элементов меню
              return (
                <MenuItem key={item.id} onClick={() => { onClose(); navigate(item.path) }}> {/* Элемент меню */}
                  {item.text} {/* Текст элемента меню */}
                </MenuItem>
              )
            })
          }
        </MenuList>
      </Box>
    </Drawer >
  );
}

Menu.propTypes = { // Проверка типов пропсов компонента Menu
  items: PropTypes.array, // Массив элементов меню
  onClose: PropTypes.func, // Функция закрытия меню
  open: PropTypes.bool // Флаг открытого состояния меню
}

export default Menu; 