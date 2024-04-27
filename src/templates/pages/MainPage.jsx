import Box from '@mui/material/Box'; // Импорт компонента Box из библиотеки Material-UI
import Typography from '@mui/material/Typography'; // Импорт компонента Typography из библиотеки Material-UI
import Grid from '@mui/material/Grid'; // Импорт компонента Grid из библиотеки Material-UI
import Stack from '@mui/material/Stack'; // Импорт компонента Stack из библиотеки Material-UI
import Divider from '@mui/material/Divider'; // Импорт компонента Divider из библиотеки Material-UI
import { Fragment } from 'react'; // Импорт компонента Fragment из React

// Массив объектов
const cats = [
  {
    id: 1,
    img_src: "public/witcher/6.jpg",
    text: "Поздравляю! Вы попали на лучший сайт терапии. Ниже будут правила для хорошей жизни"
  },
  {
    id: 2,
    img_src: "public/witcher/5.jpg",
    text: "1. Правило Договоренность о Вечном Смехе: Если вы не смеялись хотя бы 10 минут в день, запаситесь шутками и пригласите друзей на смешной марафон. Помните, смех продлевает жизнь!"
  },
  {
    id: 3,
    img_src: "public/witcher/3.jpg",
    text: "2. Правило Каждый день - день котика: Обязательно потратьте хотя бы пять минут в день на просмотр видео с котиками. Исследования показывают, что это повышает уровень счастья в сто раз!"
  },
  {
    id: 4,
    img_src: "public/witcher/2.jpg",
    text: "3. Правило Пирожки вместо Проблем: Если жизнь подкинула вам лимон, сделайте из него пирожок! Или, по крайней мере, пригласите друзей на пирожки и обсудите, как вы собираетесь с этим лимоном справиться."
  },
  {
    id: 5,
    img_src: "public/witcher/1.jpg",
    text: "4. Правило Пятничный Фламинго: Каждую пятницу наденьте розовые очки и поведите себя так, словно вы фламинго на празднике - грациозно и с изыском."
  },
];

// Компонент главной страницы
const MainPage = () => {
  return (
    <Box> {/* Контейнер для содержимого */}
      <Typography variant="h3" align="center" gutterBottom sx={{ color: 'orange' }}> {/* Заголовок "Добро пожаловать на сайт" */}
        Добро пожаловать на сайт
      </Typography>
      <Stack spacing={2}> {/* Контейнер для карточек */}
        {
          cats.map((hero) => { // Маппинг карточек с котиками и правилами
            return (
              <Fragment key={hero.id}> {/* Фрагмент для обертки элементов */}
                <Grid container spacing={2}> {/* Контейнер сетки */}
                  <Grid item xs={12}> {/* Элемент сетки для заголовка */}
                    <Typography variant="h5" gutterBottom>{hero.title}</Typography> {/* Заголовок карточки */}
                  </Grid>

                  <Grid item md={4} sm={12}> {/* Элемент сетки для изображения */}
                    <Box // Контейнер для изображения
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%"
                      }}
                      alt={hero.img_alt}
                      src={hero.img_src}
                    />
                  </Grid>
                  <Grid item md={8} sm={12}> {/* Элемент сетки для текста */}
                    <Typography variant="h5" sx={{ color: 'orange' }}>{hero.text}</Typography> {/* Текст карточки */}
                  </Grid>
                </Grid>

                <Divider variant="middle"/> {/* Разделитель между карточками */}
              </Fragment>
            );
          })
        }
      </Stack>
    </Box>
  );
};

export default MainPage; 
