import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableQuotes, AddEditQuoteForm} from '../../components/Admin';
import {useQuote} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function QuotesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, quotes, getQuotes, deleteQuotes} = useQuote();
    
    useEffect(() => getQuotes() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addQuote  = () => {
        setTittleModal('Nueva cotización');
        setContentModal(<AddEditQuoteForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateQuote = (data) => {
        setTittleModal('Actualizar cotización');
        setContentModal(<AddEditQuoteForm onClose={openCloseModal} onRefetch={onRefetch} quote={data}/>);
        openCloseModal();
      }

      const onDeleteQuote = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar la cotización ${data.tittle_cot}?`);
    
        if(result){
          try {
            await deleteQuotes(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Cotizaciones' btnTittle='Nueva cotizacion' btnClick={addQuote}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableQuotes quotes={quotes} updateQuote={updateQuote} deleteQuote={onDeleteQuote} />
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}