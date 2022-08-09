import React, {useState} from 'react';
import {Form, Button, Container, Segment} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useStatus} from '../../../../hooks';
import './AddEditStatusForm.scss';
import {SketchPicker} from 'react-color';
import { set } from 'lodash';

export function AddEditStatusForm(props) {
    const {onClose, onRefetch, status} = props;
    const {addStatuses, updateStatuses} = useStatus();
    const [background, setBackground] = useState('');

    const handleChangeComplete = (color) => {
        
         setBackground(color.hex);
          
    }
   


    const formik = useFormik({
        initialValues: initialValues(status, background),
        validationSchema: Yup.object(status ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(status) await updateStatuses(status.id, formValue);
                else await addStatuses(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
   
  return (
      <Container>
          <Segment>
    <Form className='add-edit-status-form'  onSubmit={formik.handleSubmit}>
   
        <Form.Input type='text'  name='tittle_s' placeholder='Descripción'  value={formik.values.tittle_s} onChange={formik.handleChange} error={formik.errors.tittle_s}/>
        
        <Form.Input type='text' name='color_s' value={background} onChange={formik.handleChange} error={formik.errors.color_s}/> 
       
        <SketchPicker
        color={background}
        onChangeComplete={handleChangeComplete}
 
        />
        <Button type='submit' primary fluid content={status ? 'Actualizar' : 'Crear'} />
    </Form>
    </Segment>
    </Container>
  )
}

function initialValues(data, data2){
    return {
        tittle_s: data?.tittle_s || "",
        color_s: data?.color_s || data2 ,
    };
}

function newSchema() {
    return {
        tittle_s: Yup.string().required(true),
        color_s: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        tittle_s: Yup.string().required(true),
        color_s: Yup.string().required(true),
      
    };
 }