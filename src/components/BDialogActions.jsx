import DialogActions from '@mui/material/DialogActions'
import PropTypes from 'prop-types'

// Компонент для действий в диалоговом окне
const BDialogActions = ({ children }) => {
  return (
    <DialogActions style={{ justifyContent: "flex-end" }}>
      {/* Дочерние элементы компонента */}
      {children}
    </DialogActions>
  )
}

// Определение propTypes для BDialogActions
BDialogActions.propTypes = {
  children: PropTypes.node // Дочерние элементы компонента
}

export default BDialogActions
