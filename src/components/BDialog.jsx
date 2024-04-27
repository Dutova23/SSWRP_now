import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

// Компонент диалогового окна
const BDialog = ({ title = "Dialog title", handleClose = () => {}, open = false, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      {/* Заголовок диалогового окна */}
      <DialogTitle>{title}</DialogTitle>

      {/* Дочерние элементы диалогового окна */}
      {children}
    </Dialog>
  )
}

// Определение propTypes для BDialog
BDialog.propTypes = {
  title: PropTypes.string, // Заголовок диалогового окна
  open: PropTypes.bool, // Флаг открытия/закрытия диалогового окна
  handleClose: PropTypes.func, // Обработчик закрытия диалогового окна
  children: PropTypes.node // Дочерние элементы диалогового окна
}

export default BDialog
