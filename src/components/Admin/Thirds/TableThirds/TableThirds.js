import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableThirds.scss';

export function TableThirds(props) {
    const {thirds, updateThird, deleteThird} = props;
  return (
    <Table className='table-third.admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Nit</Table.HeaderCell>
                <Table.HeaderCell>Nombres</Table.HeaderCell>
                <Table.HeaderCell>Contacto</Table.HeaderCell>
                <Table.HeaderCell>Correo</Table.HeaderCell>
                <Table.HeaderCell>Telefono</Table.HeaderCell>
                <Table.HeaderCell>Dirección</Table.HeaderCell>
                <Table.HeaderCell>Horarios</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(thirds, (third, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {third.id}
                    </Table.Cell>
                    <Table.Cell>
                        {third.nit}
                    </Table.Cell>
                    <Table.Cell>
                        {third.nombres}
                    </Table.Cell>
                    <Table.Cell>
                        {third.contacto}
                    </Table.Cell>
                    <Table.Cell>
                        {third.correo}
                    </Table.Cell>
                    <Table.Cell>
                        {third.telefono}
                    </Table.Cell>
                    <Table.Cell>
                        {third.direccion}
                    </Table.Cell>
                    <Table.Cell>
                        {third.horario}
                    </Table.Cell>
                    <Actions third={third} updateThird={updateThird} deleteThird={deleteThird}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {third, updateThird, deleteThird} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateThird(third)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteThird(third)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}