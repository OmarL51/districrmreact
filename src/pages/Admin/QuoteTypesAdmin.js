import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableQuoteTypes, AddEditQuotetyForm} from '../../components/Admin';
import {useQuotety} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function QuoteTypesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, quotetypes, getQuoteTypes, deleteQuoteTypes} = useQuotety();
    
    useEffect(() => getQuoteTypes() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addQuotety = () => {
        setTittleModal('Nuevo tipo de cotización');
        setContentModal(<AddEditQuotetyForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateQuotety = (data) => {
        setTittleModal('Actualizar tipo de cotización');
        setContentModal(<AddEditQuotetyForm onClose={openCloseModal} onRefetch={onRefetch} quotety={data}/>);
        openCloseModal();
      }

      const onDeleteQuotety = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el tipo de cotización ${data.tittle_q}?`);
    
        if(result){
          try {
            await deleteQuoteTypes(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Tipos de cotización' btnTittle='Nuevo tipo de cotización' btnClick={addQuotety}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableQuoteTypes quotetypes={quotetypes} updateQuotety={updateQuotety} deleteQuotety={onDeleteQuotety}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}