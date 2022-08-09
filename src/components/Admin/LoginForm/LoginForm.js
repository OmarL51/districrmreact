import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
// Importamos la función loginApi
import {loginApi} from '../../../api/user';
import {useAuth} from '../../../hooks';
import './LoginForm.scss';

// useFormik Para obtener los valores iniciales de los input 
export function LoginForm() {
  const {login} = useAuth();
  
  const formik = useFormik ({
      initialValues: initialValues(),
      // validationSchema para validar el esquema de nuestro formulario, si se envia un correo y contraseña en formato correcto
      validationSchema: Yup.object(validationSchema()),
      // onSubmit vendria siendo el evento click, que recibe el formValue(en este caso el email y el password) como parametro
      onSubmit: async (formValue) => {
        try {
          // Lo datos que nos devuelve elobjeto 
          const response = await loginApi(formValue);
          // Accedemos al access Token
          const {access} = response;
          console.log(access);
          console.log(response);
          login(access)
         
        } catch (error) {
          toast.error(error.message)
          
        }

      },
  });
  return (
    // Formik para tomar el valor de los Input. 
    // onChange para cambiar el valor de los Input.
  <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <Form.Input name='email' placeholder='Correo electronico' value={formik.values.email}
      onChange={formik.handleChange} error={formik.errors.email}/>
      <Form.Input name='password' type='password' placeholder='Contraseña' value={formik.values.password} 
      onChange={formik.handleChange} error={formik.errors.password}/>
      <Button name='email' type='submit' content='Iniciar sesión' primary fluid/>
  </Form>
  );
}

// Función que retorna los valores iniciales del formulario 
function initialValues(){
  return {
    email: "",
    password: "",
  };
}

// Funcion que valida el formato del correo y la contraseña
function validationSchema(){
  return{
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  };

}