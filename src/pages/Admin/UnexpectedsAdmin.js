import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableUnexpecteds, AddEditUnexpectedForm} from '../../components/Admin';
import {useUnexpected} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function UnexpectedsAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, unexpecteds, getUnexpecteds, deleteUnexpecteds} = useUnexpected();
    
    useEffect(() => getUnexpecteds() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addUnexpected  = () => {
        setTittleModal('Nueva novedad');
        setContentModal(<AddEditUnexpectedForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateUnexpected = (data) => {
        setTittleModal('Actualizar novedad');
        setContentModal(<AddEditUnexpectedForm onClose={openCloseModal} onRefetch={onRefetch} unexpected={data}/>);
        openCloseModal();
      }

      const onDeleteUnexpected = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar la novedad ${data.tittle}?`);
    
        if(result){
          try {
            await deleteUnexpecteds(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Tipos de novedad' btnTittle='Nueva novedad' btnClick={addUnexpected}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableUnexpecteds unexpecteds={unexpecteds} updateUnexpected={updateUnexpected} deleteUnexpected={onDeleteUnexpected}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}
