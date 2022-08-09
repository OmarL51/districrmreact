import React, {useState, useEffect} from 'react';
import {Loader, Pagination} from 'semantic-ui-react';
import {HeaderPage, TableStatuses, AddEditStatusForm} from '../../components/Admin';
import {useStatus} from '../../hooks';
import {ModalBasic} from '../../components/Common';


export function StatusesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, statuses, getStatuses, deleteStatuses} = useStatus();
    
    useEffect(() => getStatuses() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addStatus = () => {
        setTittleModal('Nuevo estado');
        setContentModal(<AddEditStatusForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateStatus = (data) => {
        setTittleModal('Actualizar estado');
        setContentModal(<AddEditStatusForm onClose={openCloseModal} onRefetch={onRefetch} status={data}/>);
        openCloseModal();
      }

      const onDeleteStatus = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el estado ${data.tittle}?`);
    
        if(result){
          try {
            await deleteStatuses(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Tipos de estado' btnTittle='Nuevo estado' btnClick={addStatus}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableStatuses statuses={statuses} updateStatus={updateStatus} deleteStatus={onDeleteStatus}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />

      {/* <Pagination defaultActivePage={5} totalPages={10}/> */}
   </>
  )
}