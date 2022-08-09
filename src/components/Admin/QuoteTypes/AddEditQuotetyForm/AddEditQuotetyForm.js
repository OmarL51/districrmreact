import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useQuotety} from '../../../../hooks';
import './AddEditQuotetyForm.scss';

export function AddEditQuotetyForm(props) {
    const {onClose, onRefetch, quotety} = props;
    const {addQuoteTypes, updateQuoteTypes} = useQuotety();
    const formik =useFormik({
        initialValues: initialValues(quotety),
        validationSchema: Yup.object(quotety ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(quotety) await updateQuoteTypes(quotety.id, formValue);
                else await addQuoteTypes(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-quotety-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='tittle_q' placeholder='Descripción'  value={formik.values.tittle_q} onChange={formik.handleChange} error={formik.errors.tittle_q}/>
        <Button type='submit' primary fluid content={quotety ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data){
    return {
        tittle_q: data?.tittle_q || "",
    };
}

function newSchema() {
    return {
        tittle_q: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        tittle_q: Yup.string().required(true),
      
    };
 }