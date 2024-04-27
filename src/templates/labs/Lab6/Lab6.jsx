import { useState, useEffect, useCallback } from 'react' // Импорт useState, useEffect, useCallback из библиотеки React
import exemplar from '../../../api/api' // Импорт экземпляра API из файла api.js
import BTable from '../../../components/BTable' // Импорт компонента BTable из файла BTable.jsx
import BTableRow from '../../../components/BTableRow' // Импорт компонента BTableRow из файла BTableRow.jsx
import BTableCell from '../../../components/BTableCell' // Импорт компонента BTableCell из файла BTableCell.jsx
import Button from '../../../components/Button/Button' // Импорт компонента Button из файла Button.jsx
import BIconButton from '../../../components/BIconButton' // Импорт компонента BIconButton из файла BIconButton.jsx
import DeleteIcon from '@mui/icons-material/Delete' // Импорт иконки Delete из библиотеки Material-UI
import EditIcon from '@mui/icons-material/Edit' // Импорт иконки Edit из библиотеки Material-UI
import CreateNewUserDialog from './CreateNewUserDialog' // Импорт компонента CreateNewUserDialog из файла CreateNewUserDialog.jsx
import UpdateUserDialog from './UpdateUserDialog' // Импорт компонента UpdateUserDialog из файла UpdateUserDialog.jsx
import useVisibility from '../../../hooks/useVisibility' // Импорт пользовательского хука useVisibility из файла useVisibility.js
import { useGetUsersQuery, useDeleteUserMutation } from '../../../api/users' // Импорт пользовательских хуков и мутации из файла users.js
import CircularProgress from '@mui/material/CircularProgress' // Импорт компонента CircularProgress из библиотеки Material-UI

// Компонент для лабораторной работы №6
const Lab6 = () => {
  // Состояния для управления видимостью диалоговых окон
  const [isVisibleCreateUserDialog, { show: createUserDialogOpen, hide: createUserDialogHide }] = useVisibility()
  const [isVisibleUpdateUserDialog, { show: updateUserDialogOpen, hide: updateUserDialogHide }] = useVisibility()
  const [updatableUser, setUpdatableUser] = useState({}) // Состояние для управления данными обновляемого пользователя

  // Заголовки таблицы
  const headers = [
    { "title": "Name", "key": "name" },
    { "title": "Username", "key": "username" },
    { "title": "Email", "key": "email" },
    { "title": "", "key": "actions" }
  ]

  // Получение списка пользователей и статусов загрузки с помощью пользовательского хука useGetUsersQuery
  const {
    isLoadingGetting,
    isFetching,
    isErrorGetting,
    isSuccessGetting,
    data: users,
  } = useGetUsersQuery(
    { refetchOnFocus: true, refetchOnReconnect: true }
  )

  // для удаления пользователя
  const [deleteUser, { isLoadingDeleting, isErrorDeleting, isSuccessDeleting }] = useDeleteUserMutation();

  // Определение статуса загрузки
  const loading = isLoadingGetting || isFetching

  // Обработчик успешного удаления пользователя
  useEffect(() => {
    if (isSuccessDeleting) {
      console.log("успешно удален юзер")
    }

    if (isErrorDeleting) {
      console.error(err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDeleting])

  // Обработчик успешного создания пользователя
  const onCreatedSuccessfully = useCallback((id, user) => {
    createUserDialogHide()
  })

  // Обработчик успешного обновления пользователя
  const onUpdatedSuccessfully = useCallback((id, user) => {
    updateUserDialogHide()
  })

  return (
    <div className="lab6-template">
      {/* Кнопка для открытия диалогового окна создания пользователя */}
      <Button
        style={{ marginBottom: "10px" }}
        onClick={() => createUserDialogOpen()}
        label="Create user"
      ></Button>

      {/* Диалоговое окно создания нового пользователя */}
      <CreateNewUserDialog
        open={isVisibleCreateUserDialog}
        onClose={() => createUserDialogHide()}
        onCreatedSuccessfully={onCreatedSuccessfully}
      ></CreateNewUserDialog>

      {/* Диалоговое окно обновления пользователя */}
      {isVisibleUpdateUserDialog &&
        <UpdateUserDialog
          user={updatableUser}
          open={isVisibleUpdateUserDialog}
          onClose={() => updateUserDialogHide()}
          onUpdatedSuccessfully={onUpdatedSuccessfully}
        ></UpdateUserDialog>
      }

      {/* Отображение индикатора загрузки или таблицы пользователей */}
      {loading ? (
        <CircularProgress style={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%, -50%)"}} />
      ) : users ? (
        <BTable
          headers={headers}
        >
          {
            users.map((item) => {
              return (
                <BTableRow key={item.id}>
                  <BTableCell>{item.name}</BTableCell>
                  <BTableCell>{item.username}</BTableCell>
                  <BTableCell>{item.email}</BTableCell>
                  <BTableCell>
                    {/* Кнопка для удаления пользователя */}
                    <BIconButton
                      onClick={() => deleteUser(item.id)}
                      color="primary"
                      size="small"
                      ariaLabel="delete"
                    >
                      <DeleteIcon></DeleteIcon>
                    </BIconButton>

                    {/* Кнопка для редактирования пользователя */}
                    <BIconButton
                      onClick={() => { setUpdatableUser(item); updateUserDialogOpen() }}
                      color="edit"
                      size="small"
                      ariaLabel="delete"
                    >
                      <EditIcon></EditIcon>
                    </BIconButton>
                  </BTableCell>
                </BTableRow>
              )
            })
          }
        </BTable>
      ) : null}
    </div>
  )
}

export default Lab6
