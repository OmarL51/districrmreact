import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useZone} from '../../../../hooks';
import './AddEditZoneForm.scss';


export function AddEditZoneForm(props) {
    const {onClose, onRefetch, zone} = props;
    const {addZones, updateZones} = useZone();


   


    const formik =useFormik({
        initialValues: initialValues(zone),
        validationSchema: Yup.object(zone ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(zone) await updateZones(zone.id, formValue);
                else await addZones(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-zone-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='zona' placeholder='Zona'  value={formik.values.zona} onChange={formik.handleChange} error={formik.errors.zona}/>

        <Form.Input type='text' name='asesor' value={formik.values.asesor} onChange={formik.handleChange} error={formik.errors.asesor}/> 
       
        <Button type='submit' primary fluid content={zone ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data){
    return {
        zona: data?.zona || "",
        asesor: data?.asesor || "",
    };
}

function newSchema() {
    return {
        zona: Yup.string().required(true),
        asesor: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        zona: Yup.string().required(true),
        asesor: Yup.string().required(true),
    };
 }