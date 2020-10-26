import React from 'react'
import { Form , FormField , TextInput , Box , Button } from 'grommet'

const Formulaire = () => {

    const [value, setValue] = React.useState({});

    return(
        <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
    >

        <Box align='center'>
            <h2>Formulaire de contact</h2>
            <h4>Pour me contacter veuillez remplir ce formulaire.</h4>
        </Box>
    

      <FormField name="Nom" htmlfor="text-input-id" label="Nom">
        <TextInput id="text-input-id" name="Nom" />
      </FormField>

      <FormField name="Prénom" htmlfor="text-input-id" label="Prénom">
        <TextInput id="text-input-id" name="Prénom" />
      </FormField>

      <FormField name="Email" htmlfor="text-input-id" label="Email">
        <TextInput id="text-input-id" name="Email" />
      </FormField>

      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" color="neutral-3"/>
        <Button type="reset" label="Reset" color="neutral-3"/>
      </Box>
    </Form>
    )
}

export default Formulaire;