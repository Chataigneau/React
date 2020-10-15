import React from "react"
import {Text,Main,Box,Avatar,Meter} from "grommet"
import android_logo from "./android.png"

const Competences = () => {
    return(
        <Main gap="medium">
            <Box direction="row"  gap="large" justify="center" align="center">
                <Avatar src={android_logo} />  
            </Box>
            <Text>Android</Text>
            <Meter
                values={[{
                    value: 80,
                    label: 'sixty',
                    onClick: () => {}
                }]}
                aria-label="meter"
            />

            <Text>React</Text>
            <Meter
                values={[{
                    value: 20,
                    label: 'sixty',
                    onClick: () => {}
                }]}
                aria-label="meter"
            />

            <Text>RPA</Text>
            <Meter
                values={[{
                    value: 70,
                    label: 'sixty',
                    onClick: () => {}
                }]}
                aria-label="meter"
            />

            <Text>Java</Text>
            <Meter
                values={[{
                    value: 60,
                    label: 'sixty',
                    onClick: () => {}
                }]}
                aria-label="meter"
            />

            <Text>C++</Text>
            <Meter
                values={[{
                    value: 50,
                    label: 'sixty',
                    onClick: () => {}
                }]}
                aria-label="meter"
            />

        </Main>
    )
}

export default Competences;