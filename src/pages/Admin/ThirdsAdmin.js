import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableThirds, AddEditThirdForm} from '../../components/Admin';
import {useThird} from '../../hooks';
import {ModalBasic} from '../../components/Common';

export function ThirdsAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, thirds, getThirds, deleteThirds} = useThird();
    
    useEffect(() => getThirds() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addThird  = () => {
        setTittleModal('Nuevo tercero');
        setContentModal(<AddEditThirdForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateThird = (data) => {
        setTittleModal('Actualizar tercero');
        setContentModal(<AddEditThirdForm onClose={openCloseModal} onRefetch={onRefetch} third={data}/>);
        openCloseModal();
      }

      const onDeleteThird = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar el tercero ${data.nombres}?`);
    
        if(result){
          try {
            await deleteThirds(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Tipos de estado' btnTittle='Nuevo tercero' btnClick={addThird}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableThirds thirds={thirds} updateThird={updateThird} deleteThird={onDeleteThird}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}