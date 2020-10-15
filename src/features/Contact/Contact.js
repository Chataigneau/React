import React from "react"
import {Footer,Anchor, Text,Clock} from "grommet"

const Contact = () => {
    return(
        <Footer background="neutral-3" pad="medium">
            <Clock type="digital" />
            <Text>Linkedin : <Anchor label="Nicolas Chataigneau" href="https://www.linkedin.com/in/nicolas-chataigneau-838a981a6/"/></Text>
            <Text>Email : nicolas.chataigneau@ynov.com</Text>
            <Text>Téléphone : 0645612258</Text>
        </Footer>
    )
}

export default Contact;
