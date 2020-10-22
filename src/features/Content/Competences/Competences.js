import React from "react"
import {Text,Main,Box,Avatar,Meter} from "grommet"
import android_logo from "./android.png"

const Competences = () => {
    return(
        <Main gap="large" background="light-6" margin="medium">

            <Box direction="row" justify="center" align="center" gap="large">
                <Avatar src={android_logo} />
            </Box>

            <Box align="center" gap="small" fill>

                <Text>Android</Text>
                <Meter
                round="true"
                thickness="small"
                values={[{
                    value: 80,
                    color:'status-ok',
                }]}
                />

            <Text>Swift</Text>
            <Meter
                thickness="small"
                round="true"
                values={[{
                    value: 45,
                    color:'status-ok',
                }]}
            />

            <Text>React</Text>
            <Meter
                round="true"
                thickness="small"
                values={[{
                    value: 20,
                    color:'status-ok',
                }]}
            />

            <Text>RPA</Text>
            <Meter
                round="true"
                thickness="small"
                values={[{
                    value: 70,
                    color:'status-ok',
                }]}
            />

            <Text>Java</Text>
            <Meter
                round="true"
                thickness="small"
                values={[{
                    value: 60,
                    color:'status-ok',
                }]}
            />

            <Text>C++</Text>
            <Meter
                round="true"
                thickness="small"
                values={[{
                    value: 50,
                    color:'status-ok',
                }]}
            />
            </Box>

        <Box align="center" gap="small">
            <Meter
                values={[{
                    value: 80,
                    color:'status-ok',
                }]}
                thickness="small"
                type="circle"
                size="small"
            />
            <Text>Mobile</Text>

            
            <Meter
                values={[{
                    value: 30,
                    color:'status-ok',
                }]}
                thickness="small"
                type="circle"
                size="small"
            />
            <Text>Web</Text>
            </Box>

        </Main>
    )
}

export default Competences;