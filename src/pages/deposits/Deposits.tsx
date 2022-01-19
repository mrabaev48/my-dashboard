import {FC} from "react";
import {Box, Button, TextField} from "@mui/material";

export const Deposits: FC = (props) => {

    return (
        <div style={{
            display: "flex",
            width: '100%'
        }}>
            <Button variant={"outlined"}>
                hello
            </Button>
            <Box sx={{mx: 1}}> </Box>
            <Button variant={"outlined"}>
                darkness
            </Button>
            <Box sx={{mx: 1}}> </Box>
            <TextField
                variant={"outlined"}
                disabled
                helperText={'some message'}
                 label={'Label'} placeholder={'PLACEHOLDER'} value={'Qwerty'}/>
        </div>
    )
}