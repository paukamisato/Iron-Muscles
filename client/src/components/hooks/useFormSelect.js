import { useState } from 'react'

export const useFormSelect = ( initialState = undefined ) => {

    const [values, setValues] = useState(initialState);

    const handleSelectInput = (e)=> {

      setValues(e.target.value)
    }
  

    return [values, handleSelectInput];
}
