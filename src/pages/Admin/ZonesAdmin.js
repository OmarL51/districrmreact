import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableZones, AddEditZoneForm} from '../../components/Admin';
import {useZone} from '../../hooks';
import {ModalBasic} from '../../components/Common';


export function ZonesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, zones, getZones, deleteZones} = useZone();
    
    useEffect(() => getZones() , [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch(prev => !prev);

    const addZone = () => {
        setTittleModal('Nueva zona');
        setContentModal(<AddEditZoneForm  onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();

    }

    const updateZone = (data) => {
        setTittleModal('Actualizar zona');
        setContentModal(<AddEditZoneForm onClose={openCloseModal} onRefetch={onRefetch} zone={data}/>);
        openCloseModal();
      }

      const onDeleteZone = async (data) => {
        const result = window.confirm(`¿Esta seguro de eliminar la zona ${data.zona}?`);
    
        if(result){
          try {
            await deleteZones(data.id);
            onRefetch();
          } catch (error) {
            console.error(error);
            
          }
         
        }
      }

  return (  
   <>
       <HeaderPage tittle='Zonas' btnTittle='Nueva zona' btnClick={addZone}/>
       {loading ? (
           <Loader active inline='centered'>
           Cargando...
           </Loader>
       ) : (
           <TableZones zones={zones} updateZone={updateZone} deleteZone={onDeleteZone}/>
           
       )}

       <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal} />
   </>
  )
}