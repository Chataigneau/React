import React from "react"
import {Footer,Anchor, Text} from "grommet"

const Contact = () => {
    return(
        <Footer background="white" pad="medium">
            <Text>Copyright</Text>
            <Anchor label="Nicolas Chataigneau" href="https://www.linkedin.com/in/nicolas-chataigneau-838a981a6/"/>
            <Text>nicolas.chataigneau@ynov.com</Text>
            <Text>Téléphone : 0645612258</Text>
        </Footer>
    )
}

export default Contact;
