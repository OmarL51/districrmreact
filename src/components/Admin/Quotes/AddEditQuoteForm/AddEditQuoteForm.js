import React, {useState, useEffect} from 'react';
import {Form, Button, Dropdown, Checkbox, TextArea} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useQuote, useIncidencety, useStatus, useUnexpected, useThird, useAuth, useMean, useZone, useQuotety} from '../../../../hooks';
import './AddEditQuoteForm.scss';
import { map } from 'lodash';
import moment from 'moment';
import { TOKEN } from '../../../../utils/constants';

export function AddEditQuoteForm(props) {
    const {quote, onRefetch, onClose} = props;
    const [incidencesFormat, setIncidencesTypesFormat] = useState();
    const [statusFormat, setStatusesFormat] = useState();
    const [unexpectedFormat, setUnexpectedsFormat] = useState();
    const [thirdFormat, setThirdsFormat] = useState();
    const {addQuotes, updateQuotes} = useQuote();
    const {incidencetypes, getIncidenceTypes} = useIncidencety();
    const {statuses, getStatuses} = useStatus();
    const {unexpecteds, getUnexpecteds} = useUnexpected();
    const {thirds, getThirds} = useThird();
    const [meansFormat, setMeansFormat] = useState();
    const {means, getMeans} = useMean();
    const [zonesFormat, setZonesFormat] = useState();
    const {zones, getZones} = useZone();
    const {quotetypes, getQuoteTypes} = useQuotety();
    const [quotesFormat, setQuotesTypesFormat] = useState();
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
    useEffect(() => getZones(), []);
    useEffect(() => setZonesFormat(formatDropdownData6(zones)), [zones]);
    useEffect(() => getQuoteTypes(), []);
    useEffect(() => setQuotesTypesFormat(formatDropdownData7(quotetypes)), [quotetypes]);
    
  
    const formik = useFormik({
        initialValues: initialValues(quote, auth),
        validationSchema: Yup.object(quote ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
           
              if(quote) await updateQuotes(quote.id, formValue);
              else await addQuotes(formValue);
              onRefetch();
              onClose();
            } catch (error) {
                console.error(error);
                
            }
        }
        
    });

 
  return (
    <Form className='add-edit-quote-form' onSubmit={formik.handleSubmit}>

        <Form.Input className='add-edit-quote-form__date_oc' label='Fecha solicitud' type='datetime-local' name='date_cot' placeholder='Fecha ingreso cot'  value={formik.values.date_cot} onChange={formik.handleChange} error={formik.errors.date_cot}/>
        <strong>Tipo de incidencia</strong>
        <Dropdown className='add-edit-quote-form__incidencety' name='incidencety' placeholder='Tipo de incidencia' fluid selection search options={incidencesFormat} value={formik.values.incidencety}  error={formik.errors.incidencety} onChange={(_, data) => formik.setFieldValue('incidencety', data.value)}/>
        <br/>
        <strong>Tipo de cotización</strong>
        <Dropdown className='add-edit-quote-form__quotety' name='quotety' placeholder='Tipo de cotización' fluid selection search options={quotesFormat} value={formik.values.quotety}  error={formik.errors.quotety} onChange={(_, data) => formik.setFieldValue('quotety', data.value)}/>
        <br/>
        <Form.Input className='add-edit-quote-form__tittle' label='Asunto'name='tittle_cot' placeholder='Asunto' value={formik.values.tittle_cot} onChange={formik.handleChange} error={formik.errors.tittle_cot}/>
        <br/>
        <Form.Input  label='#Cotización' type='number' name='num_cot' placeholder='#Cotización'  value={formik.values.num_cot} onChange={formik.handleChange} error={formik.errors.num_cot}/>
        <Form.Input className='add-edit-quote-form__line' label='Lineas' type='number' name='line' placeholder='Lineas'  value={formik.values.line} onChange={formik.handleChange} error={formik.errors.line}/>
        <Form.Input className='add-edit-quote-form__assign' label='Responsable' name='assign' placeholder='Asignado a'  value={formik.values.assign} onChange={formik.handleChange} error={formik.errors.assign} readOnly/>
        <strong>Medio</strong>
        <Dropdown className='add-edit-quote-form__mean' name='mean' placeholder='Medio' fluid selection search options={meansFormat} value={formik.values.mean}  error={formik.errors.mean} onChange={(_, data) => formik.setFieldValue('mean', data.value)}/>
        <br/>
        <div className='add-edit-quote-form__re'>
        <Checkbox toggle checked={formik.values.recotization} onChange ={(_, data) => {formik.setFieldValue('recotization', data.checked)}}/>Recotización
        </div>
        <strong>Tercero</strong>
        <Dropdown placeholder='Tercero' fluid  selection search options={thirdFormat} value={formik.values.third}  error={formik.errors.third} onChange={(_, data) => formik.setFieldValue('third', data.value)}/>
        <br/>
        <strong>Estado</strong>
        <Dropdown className='add-edit-quote-form__status' placeholder='Estado' fluid selection search options={statusFormat} value={formik.values.status} error={formik.errors.status} onChange={(_, data) => formik.setFieldValue('status', data.value)}/>
        <br/>
        <strong>Zona</strong>
        <Dropdown placeholder='Zona' fluid  selection search options={zonesFormat} value={formik.values.zone}  error={formik.errors.zone} onChange={(_, data) => formik.setFieldValue('zone', data.value)}/>
        <br/>
        <strong>Novedad</strong>
        <Dropdown className='add-edit-quote-form__unexpected' placeholder='Novedad' fluid  selection search options={unexpectedFormat} value={formik.values.unexpected} error={formik.errors.unexpected} onChange={(_, data) => formik.setFieldValue('unexpected', data.value)}/>
        <br/>
        <Form.Input className='add-edit-quote-form__date_ppta' label='Fecha ppta' type='datetime-local' name='date_ppta' placeholder='Fecha ppta' value={formik.values.date_ppta} onChange={formik.handleChange} error={formik.errors.date_ppta}/>
        <Form.Input className='add-edit-quote-form__date' label='Fecha cotización' type='datetime-local' name='date' placeholder='Fecha cotización' value={formik.values.date} onChange={formik.handleChange} error={formik.errors.date}/>
        <TextArea label='Observación' name='observation' placeholder='Observación'  value={formik.values.observation} onChange={formik.handleChange} error={formik.errors.observation}/>

        <Button type='submit' primary fluid content={quote ? 'Actualizar' : 'Crear'} />
    </Form>
 
  )
}

function initialValues(data, data2){
 
  return {
    date_cot: data?.date_cot || moment().format("YYYY-MM-DDThh:mm:ss"),
    incidencety: data?.incidencety || "",
    quotety: data?.quotety || "",
    tittle_cot: data?.tittle_cot || "",
    num_cot: data?.num_cot || "",
    line: data?.line || "",
    assign: data?.assign || data2.me.username,
    mean: data?.mean || "",
    recotization: data?.recotization ? true : false,
    third: data?.third || "",
    status: data?.status || "",
    zone: data?.zone || "",
    unexpected: data?.unexpected || "",
    date_ppta: data?.date_ppta || moment().endOf('week').format("YYYY-MM-DDThh:mm:ss"),
    date: data?.date || moment().format("YYYY-MM-DDThh:mm:ss"),
    observation: data?.observation || "",
  };
}

function newSchema() {
  return {
    date_cot: Yup.date().default(function(){
        return new Date();
      }),
    incidencety: Yup.number().required(true),
    quotety: Yup.number().required(true),
    tittle_cot: Yup.string().required(true),
    num_cot: Yup.number().required(true),
    line: Yup.number().required(true),
    assign: Yup.string().required(true),
    mean: Yup.number().required(true),
    recotization: Yup.bool().required(true),
    third: Yup.number().required(true),
    status: Yup.number().required(true),
    zone: Yup.number().required(true),
    unexpected: Yup.number().required(true),
    date_ppta: Yup.date().default(function(){
        return new Date();
      }),
    date: Yup.date().default(function(){
        return new Date();
      }),
    observation: Yup.string().required(true),
    

  };
}

function updateSchema(){
  return{
    date_cot: Yup.date().default(function(){
        return new Date();
      }),
    incidencety: Yup.number().required(true),
    quotety: Yup.number().required(true),
    tittle_cot: Yup.string().required(true),
    num_cot: Yup.number().required(true),
    line: Yup.number().required(true),
    assign: Yup.string().required(true),
    mean: Yup.number().required(true),
    recotization: Yup.bool().required(true),
    third: Yup.number().required(true),
    status: Yup.number().required(true),
    zone: Yup.number().required(true),
    unexpected: Yup.number().required(true),
    date_ppta: Yup.date().default(function(){
        return new Date();
      }),
    date: Yup.date().default(function(){
        return new Date();
      }),
    observation: Yup.string().required(true),
    
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

function formatDropdownData6(data){
    return map(data, (item) => ({
          key : item.id,
          text: item.zona + " " + item.asesor,
          value: item.id,
    }));

}

function formatDropdownData7(data){
  return map(data, (item) => ({
        key : item.id,
        text: item.tittle_q,
        value: item.id,
  }));

}