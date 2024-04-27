import { useEffect } from 'react'; // Импорт хука useEffect из библиотеки React
import { useFormik } from "formik"; // Импорт хука useFormik из библиотеки Formik
import TextField from '@mui/material/TextField'; // Импорт компонента TextField из библиотеки Material-UI
import BDialog from '../../../../components/BDialog'; // Импорт компонента BDialog из папки components/BDialog
import BDialogContent from '../../../../components/BDialogContent'; // Импорт компонента BDialogContent из папки components/BDialogContent
import BDialogActions from '../../../../components/BDialogActions'; // Импорт компонента BDialogActions из папки components/BDialogActions
import Button from '../../../../components/Button/Button'; // Импорт компонента Button из папки components/Button/Button
import { BUTTON_COLOR_GREEN, BUTTON_COLOR_GREY } from '../../../../components/Button/config'; // Импорт констант цветов кнопки из конфигурации кнопки
import PropTypes from 'prop-types'; // Импорт модуля PropTypes для проверки типов пропсов
import { useCreateUserMutation } from "../../../../api/users"; // Импорт хука useCreateUserMutation для создания пользователя из API

// Компонент CreateNewUserDialog
const CreateNewUserDialog = ({ open = false, onClose = () => { }, onCreatedSuccessfully = () => { } }) => {
  const [createUser, { isLoading, isError, error, isSuccess, data: createdUser }] = useCreateUserMutation(); // Деструктуризация переменных из хука useCreateUserMutation

  // Инициализация формы с помощью useFormik
  const formik = useFormik({
    initialValues: {
      name: '', // Имя пользователя
      username: '', // Логин пользователя
      email: '' // Email пользователя
    },
    onSubmit: (user, { setSubmitting }) => {
      createUser(user); // Вызов функции создания пользователя с данными формы
      setSubmitting(false); // Установка флага отправки формы в false
    },
  });

  // Эффект для обработки успешного или неудачного создания пользователя
  useEffect(() => {
    if (isSuccess) {
      console.log("Пользователь успешно создан", createdUser); // Вывод сообщения об успешном создании пользователя в консоль
      onCreatedSuccessfully(createdUser.id, createdUser); // Вызов функции успешного создания пользователя
    }

    if (isError) {
      console.error(err); // Вывод ошибки в консоль
    }
  }, [isLoading]); // Зависимости: isLoading

  return (
    <BDialog
      title="Create new user" // Заголовок диалогового окна
      open={open} // Состояние открытости диалогового окна
      handleClose={onClose} // Обработчик закрытия диалогового окна
    >
      <form onSubmit={formik.handleSubmit}> {/* Форма для создания нового пользователя */}
        <BDialogContent> {/* Контент диалогового окна */}
          <TextField
            label="Name" // Метка поля ввода
            name="name" // Имя поля ввода
            variant="outlined" // Вариант поля ввода
            margin="dense" // Расстояние между полями ввода
            fullWidth // Ширина поля ввода на всю ширину контейнера
            value={formik.values.name} // Значение поля ввода
            onChange={formik.handleChange} // Обработчик изменения значения поля ввода
            onBlur={formik.handleBlur} // Обработчик потери фокуса поля ввода
          />

          <TextField
            label="Username" // Метка поля ввода
            name="username" // Имя поля ввода
            variant="outlined" // Вариант поля ввода
            margin="dense" // Расстояние между полями ввода
            fullWidth // Ширина поля ввода на всю ширину контейнера
            value={formik.values.username} // Значение поля ввода
            onChange={formik.handleChange} // Обработчик изменения значения поля ввода
            onBlur={formik.handleBlur} // Обработчик потери фокуса поля ввода
          />

          <TextField
            label="Email" // Метка поля ввода
            name="email" // Имя поля ввода
            variant="outlined" // Вариант поля ввода
            margin="dense" // Расстояние между полями ввода
            fullWidth // Ширина поля ввода на всю ширину контейнера
            value={formik.values.email} // Значение поля ввода
            onChange={formik.handleChange} // Обработчик изменения значения поля ввода
            onBlur={formik.handleBlur} // Обработчик потери фокуса поля ввода
          />
        </BDialogContent>

        <BDialogActions> {/* Элементы действий диалогового окна */}
          <Button
            type="button" // Тип кнопки
            onClick={onClose} // Обработчик клика для закрытия диалогового окна
            label="Close" // Текст на кнопке
            color={BUTTON_COLOR_GREY} // Цвет кнопки
          ></Button>

          <Button
            type="submit" // Тип кнопки
            label="Create" // Текст на кнопке
            color={BUTTON_COLOR_GREEN} // Цвет кнопки
            style={{ marginLeft: "15px" }} // Стили для кнопки
          ></Button>
        </BDialogActions>
      </form>
    </BDialog>
  );
};

// Проверка типов пропсов
CreateNewUserDialog.propTypes = {
  open: PropTypes.bool, // Флаг открытости диалогового окна
  onClose: PropTypes.func, // Функция закрытия диалогового окна
  onCreatedSuccessfully: PropTypes.func // Функция успешного создания пользователя
};

export default CreateNewUserDialog;
