import React, {useState, useEffect} from 'react';
import {Loader} from 'semantic-ui-react';
import {HeaderPage, TableUsers, AddEditUserForm} from '../../components/Admin';
import {ModalBasic} from '../../components/Common';
import {useUser} from '../../hooks';


export function UsersAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [tittleModal, setTittleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, users, getUsers, deleteUser} = useUser();

  useEffect(() => getUsers(), [refetch]);
  
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  
  const addUser = () => {
    setTittleModal('Nuevo usuario');
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch}/>);
    openCloseModal();
  }

  const updateUser = (data) => {
    setTittleModal('Actualizar usuario');
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data}/>);
    openCloseModal();
  }
  const onDeleteUser = async (data) => {
    const result = window.confirm(`¿Esta seguro de eliminar el usuario ${data.email}?`);

    if(result){
      try {
        await deleteUser(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
        
      }
     
    }
  }
  return (
   <>
      <HeaderPage tittle='Usuarios' btnTittle='Nuevo usuario' btnClick={addUser}/>
      {loading ? (
        <Loader active inline='centered'>
          Cargando...
        </Loader>
      ) : (
           <TableUsers users={users} updateUser={updateUser} onDeleteUser={onDeleteUser}/>
      )}

      <ModalBasic show={showModal} onClose={openCloseModal} tittle={tittleModal} children={contentModal}/> 
    </>
  );
}
