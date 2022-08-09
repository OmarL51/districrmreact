import React from 'react';
import {Modal} from 'semantic-ui-react';
import './ModalBasic.scss';

export function ModalBasic(props) {
    const {show, size, tittle, children, onClose} = props;
  return (
   <Modal className='modal-basic' open={show} onClose={onClose} size={size}>
       {tittle &&<Modal.Header>{tittle}</Modal.Header>}
       <Modal.Content className='modal-basic__content'>{children}</Modal.Content>
   </Modal>
  )
}

ModalBasic.defaulProps = {
    size: 'large'
}
