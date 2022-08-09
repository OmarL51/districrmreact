import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useIncidencety} from '../../../../hooks';
import './AddEditIncidencetyForm.scss';

export function AddEditIncidencetyForm(props) {
    const {onClose, onRefetch, incidencety} = props;
    const {addIncidenceTypes, updateIndicenceTypes} = useIncidencety();
    const formik =useFormik({
        initialValues: initialValues(incidencety),
        validationSchema: Yup.object(incidencety ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(incidencety) await updateIndicenceTypes(incidencety.id, formValue);
                else await addIncidenceTypes(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-incidencety-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='tittle' placeholder='Descripción'  value={formik.values.tittle} onChange={formik.handleChange} error={formik.errors.tittle}/>
        <Button type='submit' primary fluid content={incidencety ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data){
    return {
        tittle: data?.tittle || "",
    };
}

function newSchema() {
    return {
        tittle: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        tittle: Yup.string().required(true),
      
    };
 }