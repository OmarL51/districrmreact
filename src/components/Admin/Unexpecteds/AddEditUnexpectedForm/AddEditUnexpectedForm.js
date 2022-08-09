import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useUnexpected} from '../../../../hooks';
import './AddEditUnexpectedForm.scss';
import {SketchPicker} from 'react-color';

export function AddEditUnexpectedForm(props) {
    const {onClose, onRefetch, unexpected} = props;
    const {addUnexpecteds, updateUnexpecteds} = useUnexpected();
    const [background, setBackground] = useState('');

    const handleChangeComplete = (color) => {
        
         setBackground(color.hex);
          
    }
   


    const formik =useFormik({
        initialValues: initialValues(unexpected, background),
        validationSchema: Yup.object(unexpected ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if(unexpected) await updateUnexpecteds(unexpected.id, formValue);
                else await addUnexpecteds(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
                
            }
            
        }
    });
  return (
    <Form className='add-edit-unexpected-form' onSubmit={formik.handleSubmit}>
        <Form.Input name='tittle_u' placeholder='Descripción'  value={formik.values.tittle_u} onChange={formik.handleChange} error={formik.errors.tittle_u}/>

        <Form.Input type='text' name='color_u' value={background} onChange={formik.handleChange} error={formik.errors.color_u}/> 
       
       <SketchPicker
       color={background}
       onChangeComplete={handleChangeComplete}

       />
        <Button type='submit' primary fluid content={unexpected ? 'Actualizar' : 'Crear'} />
    </Form>
  )
}

function initialValues(data, data2){
    return {
        tittle_u: data?.tittle_u || "",
        color_u: data?.color_u || data2,
    };
}

function newSchema() {
    return {
        tittle_u: Yup.string().required(true),
        color_u: Yup.string().required(true),
    };
}

function updateSchema(){
    return{
        tittle_u: Yup.string().required(true),
        color_u: Yup.string().required(true),
    };
 }