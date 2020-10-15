import React from "react"
import {Text,Main,Box,Avatar,Meter} from "grommet"
import android_logo from "./android.png"

const Competences = () => {
    return(
        <Main gap="small">
            <Box direction="row"  gap="large" justify="center" align="center">
                <Avatar src={android_logo} />  
            </Box>
            <Text>Android</Text>
            <Meter
                values={[{
                    value: 80,
                }]}
            />

            <Text>Swift</Text>
            <Meter
                values={[{
                    value: 45,
                }]}
            />

            <Text>React</Text>
            <Meter
                values={[{
                    value: 20,
                }]}
            />

            <Text>RPA</Text>
            <Meter
                values={[{
                    value: 70,
                }]}
            />

            <Text>Java</Text>
            <Meter
                values={[{
                    value: 60,
                }]}
            />

            <Text>C++</Text>
            <Meter
                values={[{
                    value: 50,
                }]}
            />

        <Box align="center">
            <Meter
                values={[{
                    value: 80,
                }]}
                type="circle"
                size="small"
            ></Meter>
            <Text>Mobile</Text>

            
            <Meter
                values={[{
                    value: 30,
                }]}
                type="circle"
                size="small"
            />
            <Text>Web</Text>
            </Box>

        </Main>
    )
}

export default Competences;