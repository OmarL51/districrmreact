import React, {useState, useEffect} from 'react';
import {Form, Button, Dropdown, TextArea} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useIncidence, useIncidencety, useStatus, useUnexpected, useThird, useAuth, useMean} from '../../../../hooks';
import './AddEditIncidenceForm.scss';
import { map } from 'lodash';
import moment from 'moment';
import { TOKEN } from '../../../../utils/constants';

export function AddEditIncidenceForm(props) {
    const {incidence, onRefetch, onClose} = props;
    const [incidencesFormat, setIncidencesTypesFormat] = useState();
    const [statusFormat, setStatusesFormat] = useState();
    const [unexpectedFormat, setUnexpectedsFormat] = useState();
    const [thirdFormat, setThirdsFormat] = useState();
    const {addIncidences, updateIncidences} = useIncidence();
    const {incidencetypes, getIncidenceTypes} = useIncidencety();
    const {statuses, getStatuses} = useStatus();
    const {unexpecteds, getUnexpecteds} = useUnexpected();
    const {thirds, getThirds} = useThird();
    const [meansFormat, setMeansFormat] = useState();
    const {means, getMeans} = useMean();
    const {auth} = useAuth();

   

    useEffect(() => getIncidenceTypes(), []);
    useEffect(() => setIncidencesTypesFormat(formatDropdownData(incidencetypes)), [incidencetypes]);
    useEffect(() => getStatuses(), []);
    useEffect(() => setStatusesFormat(formatDropdownData3(statuses)), [statuses]);
    useEffect(() => getUnexpecteds(), []);
    useEffect(() => setUnexpectedsFormat(formatDropdownData4(unexpecteds)), [unexpecteds]);
    useEffect(() => getThirds(), []);
    useEffect(() => setThirdsFormat(formatDropdownData2(thirds)), [thirds]);
    useEffect(() => getMeans(), []);
    useEffect(() => setMeansFormat(formatDropdownData5(means)), [means]);
    
  
    const formik = useFormik({
        initialValues: initialValues(incidence, auth),
        validationSchema: Yup.object(incidence ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
           
              if(incidence) await updateIncidences(incidence.id, formValue);
              else await addIncidences(formValue);
              onRefetch();
              onClose();
            } catch (error) {
                console.error(error);
                
            }
        }
        
    });

 
  return (
    <Form className='add-edit-incidence-form' onSubmit={formik.handleSubmit}>
     <div className='add-edit-incidence-form__all'>
        <Form.Input className='add-edit-incidence-form__date_oc' label='Fecha OC' type='datetime-local' name='date_oc' placeholder='Fecha OC'  value={formik.values.date_oc} onChange={formik.handleChange} error={formik.errors.date_oc}/>
        <strong>Tipo de incidencia</strong>
        <Dropdown className='add-edit-incidence-form__incidencety' name='incidencety' placeholder='Tipo de incidencia' fluid selection search options={incidencesFormat} value={formik.values.incidencety}  error={formik.errors.incidencety} onChange={(_, data) => formik.setFieldValue('incidencety', data.value)}/>
        <br/>
        <Form.Input className='add-edit-incidence-form__tittle' label='Asunto'name='tittle' placeholder='Asunto' value={formik.values.tittle} onChange={formik.handleChange} error={formik.errors.tittle}/>
        <br/>
        <Form.Input className='add-edit-incidence-form__oc_client' label='Orden cliente' name='oc_client' placeholder='Orden cliente'  value={formik.values.oc_client} onChange={formik.handleChange} error={formik.errors.oc_client}/>
        <strong>Medio</strong>
        <Dropdown className='add-edit-incidence-form__mean' name='mean' placeholder='Medio' fluid selection search options={meansFormat} value={formik.values.mean}  error={formik.errors.mean} onChange={(_, data) => formik.setFieldValue('mean', data.value)}/>
        <br/>
        <strong>Estado</strong>
        <Dropdown className='add-edit-incidence-form__status' placeholder='Estado' fluid selection search options={statusFormat} value={formik.values.status} error={formik.errors.status} onChange={(_, data) => formik.setFieldValue('status', data.value)}/>
        <br/>
        <Form.Input className='add-edit-incidence-form__date' label='Fecha' type='datetime-local' name='date' placeholder='Fecha'  value={formik.values.date} onChange={formik.handleChange} error={formik.errors.date}/>
        <Form.Input className='add-edit-incidence-form__assign' label='Asignado a' name='assign' placeholder='Asignado a'  value={formik.values.assign} onChange={formik.handleChange} error={formik.errors.assign} />
        <Form.Input className='add-edit-incidence-form__order' label='Pedido' type='number' name='order' placeholder='Pedido'  value={formik.values.order} onChange={formik.handleChange} error={formik.errors.order}/>
        <Form.Input className='add-edit-incidence-form__line' label='Lineas' type='number' name='line' placeholder='Lineas'  value={formik.values.line} onChange={formik.handleChange} error={formik.errors.line}/>
        <Form.Input className='add-edit-incidence-form__line' label='Lineas remisión' type='number' name='line_r' placeholder='Lineas remisión'  value={formik.values.line_r} onChange={formik.handleChange} error={formik.errors.line_r}/>
        <Form.Input className='add-edit-incidence-form__rmv' label='Remisión' type='number' name='rmv' placeholder='Remisión'  value={formik.values.rmv} onChange={formik.handleChange} error={formik.errors.rmv}/>
        <strong>Novedad</strong>
        <Dropdown className='add-edit-incidence-form__unexpected' placeholder='Novedad' fluid  selection search options={unexpectedFormat} value={formik.values.unexpected} error={formik.errors.unexpected} onChange={(_, data) => formik.setFieldValue('unexpected', data.value)}/>
        <br/>
        <Form.Input className='add-edit-incidence-form__date_rmv' label='Fecha remisión' type='datetime-local' name='date_rmv' placeholder='Fecha remisión' value={formik.values.date_rmv} onChange={formik.handleChange} error={formik.errors.date_rmv}/>
        <strong>Tercero</strong>
        <Dropdown placeholder='Tercero' fluid  selection search options={thirdFormat} value={formik.values.third}  error={formik.errors.third} onChange={(_, data) => formik.setFieldValue('third', data.value)}/>
        <br/>
        <TextArea label='Observación' name='observation' placeholder='Observación'  value={formik.values.observation} onChange={formik.handleChange} error={formik.errors.observation}/>
        </div>
        <Button type='submit' primary fluid content={incidence ? 'Actualizar' : 'Crear'} />
    </Form>
 
  )
}

function initialValues(data, data2){
 
  return {
      date_oc: data?.date || moment().format("YYYY-MM-DD HH:mm:ss"),
      incidencety: data?.incidencety || 2,
      tittle: data?.tittle || "",
      oc_client: data?.oc_client || "",
      mean: data?.mean || "",
      status: data?.status || 1,
      date: data?.date || moment().format("YYYY-MM-DD HH:mm:ss"),
      assign: data?.assign || data2.me.username,
      order: data?.order || 0,
      line: data?.line || 0,
      line_r: data?.line_r || 0,
      rmv: data?.rmv || 0,
      unexpected: data?.unexpected || 7,
      date_rmv: data?.date_rmv || moment().format("YYYY-MM-DD HH:mm:ss"),
      third: data?.third || "",
      observation: data?.observation || "Sin observación",
  };
}

function newSchema() {
  return {
    date_oc: Yup.date().default(function(){
      return new Date();
    }),
    incidencety: Yup.number().required(true),
    tittle: Yup.string().required(true),
    oc_client: Yup.string().required(true),
    mean: Yup.number().required(true),
    status: Yup.number().required(true),
    date: Yup.date().default(function(){
      return new Date();
    }),
    assign: Yup.string().required(true),
    order: Yup.number(),
    line: Yup.number(),
    line_r: Yup.number(),
    rmv: Yup.number(),
    unexpected: Yup.number(),
    date_rmv: Yup.date().default(function(){
      return new Date();
    }),
    third: Yup.number().required(true),
    observation: Yup.string(),
  };
}

function updateSchema(){
  return{
    date_oc: Yup.date().default(function(){
      return new Date();
    }),
    incidencety: Yup.number().required(true),
    tittle: Yup.string().required(true),
    oc_client: Yup.string().required(true),
    mean: Yup.number().required(true),
    status: Yup.number().required(true),
    date: Yup.date().default(function(){
      return new Date();
    }),
    assign: Yup.string().required(true),
    order: Yup.number(),
    line: Yup.number(),
    line_r: Yup.number(),
    rmv: Yup.number(),
    unexpected: Yup.number(),
    date_rmv: Yup.date().default(function(){
      return new Date();
    }),
    third: Yup.number().required(true),
    observation: Yup.string(),
  };
}

function formatDropdownData(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.tittle,
        value: item.id,
       
  }));
}



function formatDropdownData2(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.nombres,
        value: item.id,
  }));
}

function formatDropdownData3(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.tittle_s,
        value: item.id,
        style: {color:item.color_s},
  }));
}

function formatDropdownData4(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.tittle_u,
        value: item.id,
        style: {color:item.color_u},
  }));
}

function formatDropdownData5(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.tittle_m,
        value: item.id,
        style: {color:item.color_u},
  }));
}