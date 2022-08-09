import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useThird} from '../../../../hooks';
import './AddEditThirdForm.scss';

export function AddEditThirdForm(props) {
    const {onClose, onRefetch, third} = props;
    const {addThirds, updateThirds} = useThird();
    const formik =useFormik({
        initialValues: initialValues(third),
        validationSchema: Yup.object(third ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(third) await updateThirds(third.id, formValue);
                else await addThirds(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-third-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='nit' placeholder='Nit'  value={formik.values.nit} onChange={formik.handleChange} error={formik.errors.nit}/>
        <Form.Input name='nombres' placeholder='Nombre del tercero'  value={formik.values.nombres} onChange={formik.handleChange} error={formik.errors.nombres}/>
        <Form.Input name='correo' type='email' placeholder='Correo'  value={formik.values.correo} onChange={formik.handleChange} error={formik.errors.correo}/>
        <Form.Input name='contacto' placeholder='Contacto de compras'  value={formik.values.contacto} onChange={formik.handleChange} error={formik.errors.contacto}/>
        <Form.Input name='telefono' placeholder='Telefono'  value={formik.values.telefono} onChange={formik.handleChange} error={formik.errors.telefono}/>
        <Form.Input name='direccion' placeholder='Dirección'  value={formik.values.direccion} onChange={formik.handleChange} error={formik.errors.direccion}/>
        <Form.Input name='horario' placeholder='Horarios de atención'  value={formik.values.horario} onChange={formik.handleChange} error={formik.errors.horario}/>
        <Button type='submit' primary fluid content={third ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data){
    return {
        nit: data?.nit || 0,
        nombres: data?.nombres || "",
        correo: data?.contacto || "",
        contacto: data?.correo || "",
        telefono: data?.telefono || "",
        direccion: data?.direccion || "",
        horario: data?.horario || "",
    };
}

function newSchema() {
    return {
        nit: Yup.number().required(true),
        nombres: Yup.string().required(true),
        contacto: Yup.string().required(true),
        correo: Yup.string().email(true).required(true),
        telefono: Yup.string().required(true),
        direccion: Yup.string().required(true),
        horario: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        nit: Yup.number().required(true),
        nombres: Yup.string().required(true),
        contacto: Yup.string().required(true),
        correo: Yup.string().email(true).required(true),
        telefono: Yup.string().required(true),
        direccion: Yup.string().required(true),
        horario: Yup.string().required(true),
    };
 }