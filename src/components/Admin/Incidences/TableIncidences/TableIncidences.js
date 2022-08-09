import React, { useState, useEffect } from 'react';
import {Table, Button, Icon, Input} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableIncidences.scss';
import {useIncidence, useAuth} from '../../../../hooks';
import { Pagination } from '../../Pagination';
import busqueda from '../../../../assets/bx_search-alt.png';

export function TableIncidences(props) {
 
    const {incidences, updateIncidence, deleteIncidence} = props;
    const [search, setSearch] = useState("");
    const { getIncidences } = useIncidence();
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(20);


   const max = incidences && incidences.length / currentPage;
  



    const searcher = (e) => {
        setSearch(e.target.value)
    }

 
 
    let r = []
   
    r = incidences
    
    if(!search){
        r = incidences

    }{
 
        r = incidences && incidences.filter((i) => 
        i.tittle.toLowerCase().includes(search.toLocaleLowerCase()) || i.assign.toLowerCase().includes(search.toLocaleLowerCase()) || i.third_data.nombres.toLowerCase().includes(search.toLocaleLowerCase()) || i.status_data.tittle_s.toLowerCase().includes(search.toLocaleLowerCase()) || i.unexpected_data.tittle_u.toLowerCase().includes(search.toLocaleLowerCase())
        )

    }
  
    useEffect(() => getIncidences() , []);
   

   
  return (
  <div>
  
    <h5>Filtros</h5>
    {/* <Input  fluid action={{ icon: 'search', color:'##A4BE49', value:{search} }} placeholder='Search...' onChange={searcher}/> */}
    <div className='contai'>
        
    <label className='contai_l'>Desde
     <input className='contai_l_i' disabled='true'>
        </input>
        </label>
    <label className='contai_l2'>Hasta <input className='contai_l2_i2' disabled='true'>
        </input>
        </label>
    <br/>
    <input className='contai__i' placeholder='Buscar...' value={search} onChange={searcher}/> <img className='contai_im' src={busqueda}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Table inverted  className='table-incidence-admin'>
       
        <Table.Header   className='table-incidence-admin__h'>
            <Table.Row >
           
            <Table.HeaderCell>Fecha ingreso OC</Table.HeaderCell>
                <Table.HeaderCell>Tipo</Table.HeaderCell>
                <Table.HeaderCell>Asunto</Table.HeaderCell>
                <Table.HeaderCell>OC_cliente</Table.HeaderCell>
                <Table.HeaderCell>Medio de ingreso</Table.HeaderCell>
                <Table.HeaderCell>Estado</Table.HeaderCell>
                <Table.HeaderCell>Fecha ticket</Table.HeaderCell>
                <Table.HeaderCell>Asignado a</Table.HeaderCell>
                <Table.HeaderCell>#Pedido</Table.HeaderCell>
                <Table.HeaderCell>#Lineas</Table.HeaderCell>
                <Table.HeaderCell>#Remisión</Table.HeaderCell>
                <Table.HeaderCell>#Lineas remisión</Table.HeaderCell>
                <Table.HeaderCell>Novedad</Table.HeaderCell>
                <Table.HeaderCell>Fecha remisión</Table.HeaderCell>
                <Table.HeaderCell>Tercero</Table.HeaderCell>
                <Table.HeaderCell>Observación</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body   className='table-incidence-admin__b'  >
            {r && r.slice((page - 1) * currentPage, (page - 1) * currentPage + currentPage).map( (incidence, index) => (
                <Table.Row key={index}  style={{color: "#000000"}} >
                     <Table.Cell>
                        {incidence.date_oc}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.incidencety_data.tittle}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.tittle}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.oc_client}
                    </Table.Cell>
                    <Table.Cell>
                    {incidence.mean_data.tittle_m}
                    </Table.Cell>
                    <Table.Cell className='table-incidence-admin__cell' style={{color:incidence.status_data.color_s}}>
                        {incidence.status_data.tittle_s}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.date}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.assign}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.order}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.line}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.rmv}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.line_r}
                    </Table.Cell>
                    <Table.Cell className='table-incidence-admin__cell2' style={{color:incidence.unexpected_data.color_u}}>
                        {incidence.unexpected_data.tittle_u}
                    </Table.Cell>
                 
                    <Table.Cell>
                        {incidence.date_rmv}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.third_data.nombres}
                    </Table.Cell>
                    <Table.Cell>
                        {incidence.observation}
                    </Table.Cell>
                    
                    <Actions incidence={incidence} updateIncidence={updateIncidence} deleteIncidence={deleteIncidence} />
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
 
   <Pagination page={page} setPage={setPage} max={max}/>
    </div>
  );
}


function Actions(props) {
    const {incidence, updateIncidence, deleteIncidence} = props;
    const {auth} = useAuth();


    return(
        <Table.Cell textAlign="right">
            <Button  icon onClick={() => updateIncidence(incidence)}>
                <Icon name='pencil alternate' />
            </Button>
       
            <Button disabled={auth.me.is_staff ? false : true} icon negative onClick={() =>  deleteIncidence(incidence)}>
                <Icon name='close' />
            </Button>

        </Table.Cell>
       
    );
}