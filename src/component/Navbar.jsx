import { Box } from "@chakra-ui/react"
import WithSubnavigation from "./navitem"

function Navbar(){
    return (
        <Box id="nav-menu" >
            <WithSubnavigation/>
        </Box>
    )
}

export default Navbar