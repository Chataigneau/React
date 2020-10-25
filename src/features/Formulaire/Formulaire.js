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
      <FormField name="name" htmlfor="text-input-id" label="Name">
        <TextInput id="text-input-id" name="name" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" color="neutral-3"/>
        <Button type="reset" label="Reset" color="neutral-3"/>
      </Box>
    </Form>
    )
}

export default Formulaire;