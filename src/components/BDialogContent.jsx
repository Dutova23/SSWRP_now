import DialogContent from '@mui/material/DialogContent'
import PropTypes from 'prop-types'

// Компонент для содержимого диалогового окна
const BDialogContent = ({ children }) => {
  return (
    <DialogContent>
      {/* Дочерние элементы компонента */}
      {children}
    </DialogContent>
  )
}

// Определение propTypes для BDialogContent
BDialogContent.propTypes = {
  children: PropTypes.node // Дочерние элементы компонента
}

export default BDialogContent
