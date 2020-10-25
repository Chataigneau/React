import React from "react"
import { Footer,Anchor, Text,Clock } from "grommet"

const Contact = () => {

    let linkedin = "https://www.linkedin.com/in/nicolas-chataigneau-838a981a6/"

    return(
        <Footer background="neutral-3" pad="medium" direction="row-responsive" as="footer">
            <Clock type="digital" />
            <Text>Linkedin : <Anchor label="Nicolas Chataigneau" href={linkedin}/></Text>
            <Text>Email : nicolas.chataigneau@ynov.com</Text>
            <Text>Téléphone : 0645612258</Text>
        </Footer>
    )
}

export default Contact;
