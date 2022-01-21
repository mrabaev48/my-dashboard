import {FC, useState} from "react";
import {Box, Button, Radio, Tab, Tabs, TextField} from "@mui/material";

export const Deposits: FC = (props) => {

    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const [radio, setRadio] = useState(false);

    return (
        <div style={{
            display: "flex",
            width: '100%',
            flexDirection: 'column'
        }}>
            <div style={{display: 'flex'}}>
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
                    color={"error"}
                    helperText={'some message'}
                    label={'Label'} placeholder={'PLACEHOLDER'} value={'Qwerty'}/>
            </div>
            <div style={{
                width: '150px'
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation={"vertical"}
                >
                    <Tab label={'active'} />
                    <Tab label={'hover'}/>
                    <Tab label={'inactive'} disabled={true}/>
                </Tabs>
            </div>
            <div>
                <Radio value={radio} disabled={true} onChange={() => setRadio(!radio)}/>
            </div>
        </div>
    )
}