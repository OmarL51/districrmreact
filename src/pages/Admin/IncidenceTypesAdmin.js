import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableIncidenceTypes, AddEditIncidencetyForm} from '../../components/Admin';
import {useIncidencety} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function IncidenceTypesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, incidencetypes, getIncidenceTypes, deleteIncidenceTypes} = useIncidencety();
    
    useEffect(() => getIncidenceTypes() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addIncidencety = () => {
        setTittleModal('Nuevo tipo de incidencia');
        setContentModal(<AddEditIncidencetyForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateIncidencety = (data) => {
        setTittleModal('Actualizar tipo de incidencia');
        setContentModal(<AddEditIncidencetyForm onClose={openCloseModal} onRefetch={onRefetch} incidencety={data}/>);
        openCloseModal();
      }

      const onDeleteIncidencety = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el tipo de incidencia ${data.tittle}?`);
    
        if(result){
          try {
            await deleteIncidenceTypes(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Tipos de incidencia' btnTittle='Nuevo tipo de incidencia' btnClick={addIncidencety}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableIncidenceTypes incidencetypes={incidencetypes} updateIncidencety={updateIncidencety} deleteIncidencety={onDeleteIncidencety}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}
