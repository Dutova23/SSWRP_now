import Box from '@mui/material/Box'; // Импорт компонента Box из библиотеки Material-UI
import Grid from '@mui/material/Grid'; // Импорт компонента Grid из библиотеки Material-UI


// Компонент "О себе"
const AboutMe = () => {
  return (
    <Box> {/* Контейнер для содержимого */}
      <Grid container spacing={2}> {/* Контейнер сетки */}
        <Grid item md={14} sm={12} container justifyContent="center"> {/* Элемент сетки для изображения */}
          <Box // Контейнер для изображения
            component="img"
            sx={{
              height: 260,
              width: 260,
              display: 'block',
              margin: 'auto'
            }}
            alt="cat" // Альтернативный текст изображения
            src="public/cat.jpg" // Источник изображения
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
