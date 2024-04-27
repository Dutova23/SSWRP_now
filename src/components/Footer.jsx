import BottomNavigation from '@mui/material/BottomNavigation'; // Импорт компонента BottomNavigation из библиотеки Material-UI для создания нижней навигации
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; // Импорт компонента BottomNavigationAction из библиотеки Material-UI для создания элемента нижней навигации
import ModeCommentIcon from '@mui/icons-material/ModeComment'; // Импорт иконки ModeCommentIcon из библиотеки Material-UI
import MapIcon from '@mui/icons-material/Map'; // Импорт иконки MapIcon из библиотеки Material-UI

// Компонент Footer для нижней навигации
const Footer = () => {
  return (
    <BottomNavigation showLabels sx={{ backgroundColor: 'green', color: 'white' }}> {/* Нижняя навигация */}
      {/* Элемент нижней навигации "Обратная связь" */}
      <BottomNavigationAction label="Обратная связь" icon={<ModeCommentIcon sx={{ color: 'white' }} />} sx={{ color: 'white' }} />
      {/* Элемент нижней навигации "Карта" */}
      <BottomNavigationAction label="Карта" icon={<MapIcon sx={{ color: 'white' }} />} sx={{ color: 'white' }} />
    </BottomNavigation>
  );
}

export default Footer; 
