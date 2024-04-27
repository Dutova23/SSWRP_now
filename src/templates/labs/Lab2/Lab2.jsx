import Button from "../../../components/Button"
import { Box } from "@mui/material"
import { BUTTON_COLOR_ORANGE, BUTTON_COLOR_GREEN } from "../../../components/Button/config"

const Lab2 = () => {
    return (
            <div class="lab2-template">
                <Button style={{color: 'white'}} onClick={() => alert('Button 1 clicked')}>Button 1</Button>
                <Button style={{color: 'white'}} onClick={() => alert('Button 2 clicked')}>Button 2</Button>
                <Button style={{color: 'white'}} onClick={() => alert('Button 3 clicked')}>Button 3</Button>
  
            </div>
        )
}

export default Lab2