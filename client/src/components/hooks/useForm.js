import { useState } from "react";

export const useForm = (initialState = undefined) => {
  
   const [values, setValues] = useState(initialState);

  const handleChange = (e) => {

      const { value, name } = e.target;
      setValues ({
          ...values,
          [name]: value
      });
      
  }
  return [values, handleChange];
};
