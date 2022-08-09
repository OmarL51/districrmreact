import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableIncidences, AddEditIncidenceForm, Search} from '../../components/Admin';
import {useIncidence} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function IncidencesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, incidences, getIncidences, deleteIncidences} = useIncidence();
    
    useEffect(() => getIncidences() , [refetch]);


 
    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addIncidence  = () => {
        setTittleModal('Nueva incidencia');
        setContentModal(<AddEditIncidenceForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateIncidence = (data) => {
        setTittleModal('Actualizar incidencia');
        setContentModal(<AddEditIncidenceForm onClose={openCloseModal} onRefetch={onRefetch} incidence={data}/>);
        openCloseModal();
      }

      const onDeleteIncidence = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el tercero ${data.nombres}?`);
    
        if(result){
          try {
            await deleteIncidences(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
   
       <HeaderPage tittle='Incidencias' btnTittle='Nueva Incidencia' btnClick={addIncidence}/>

       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : 
       
       (
         
           <TableIncidences incidences={incidences} updateIncidence={updateIncidence} deleteIncidence={onDeleteIncidence} />
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}