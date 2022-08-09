import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableMeans, AddEditMeanForm} from '../../components/Admin';
import {useMean} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function MeansAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, means, getMeans, deleteMeans} = useMean();
    
    useEffect(() => getMeans() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addMean  = () => {
        setTittleModal('Nuevo medio');
        setContentModal(<AddEditMeanForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateMean = (data) => {
        setTittleModal('Actualizar medio');
        setContentModal(<AddEditMeanForm onClose={openCloseModal} onRefetch={onRefetch} mean={data}/>);
        openCloseModal();
      }

      const onDeleteMean = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el medio ${data.tittle_m}?`);
    
        if(result){
          try {
            await deleteMeans(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Medio' btnTittle='Nuevo medio' btnClick={addMean}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableMeans means={means} updateMean={updateMean} deleteMean={onDeleteMean}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}