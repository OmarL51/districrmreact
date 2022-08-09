import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableZones.scss';

export function TableZones(props) {
    const {zones, updateZone, deleteZone} = props;
  return (
    <Table className='table-zone-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Zona</Table.HeaderCell>
                <Table.HeaderCell>Asesor</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body className='table-zone-admin__body'>
            {map(zones, (zones, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {zones.id}
                    </Table.Cell>
                    <Table.Cell>
                        {zones.zona}
                    </Table.Cell>
                    <Table.Cell>
                        {zones.asesor}
                    </Table.Cell>
                    <Actions zones={zones} updateZone={updateZone} deleteZone={deleteZone}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {zones, updateZone, deleteZone} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateZone(zones)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteZone(zones)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}