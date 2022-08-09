import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useMean} from '../../../../hooks';
import './AddEditMeanForm.scss';

export function AddEditMeanForm(props) {
    const {onClose, onRefetch, mean} = props;
    const {addMeans, updateMeans} = useMean();
    const formik =useFormik({
        initialValues: initialValues(mean),
        validationSchema: Yup.object(mean ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(mean) await updateMeans(mean.id, formValue);
                else await addMeans(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-third-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='tittle_m' placeholder='Descripción'  value={formik.values.tittle_m} onChange={formik.handleChange} error={formik.errors.tittle_m}/>
        <Button type='submit' primary fluid content={mean ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data){
    return {
        tittle_m: data?.tittle_m || "",
    };
}

function newSchema() {
    return {
        tittle_m: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        tittle_m: Yup.string().required(true),
    };
 }