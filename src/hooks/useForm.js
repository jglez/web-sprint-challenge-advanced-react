import { useState } from 'react'
// write your custom hook here to control your checkout form

const useForm = initialValue => {
  const [formValues, setFormValues] = useState(initialValue)

  const handleChanges = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    });
  };

  return [formValues, handleChanges]
}

export default useForm