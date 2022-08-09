import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableIncidenceTypes.scss';

export function TableIncidenceTypes(props) {
    const {incidencetypes, updateIncidencety, deleteIncidencety} = props;
  return (
    <Table className='table-incidencety.admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(incidencetypes, (incidencetypes, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {incidencetypes.id}
                    </Table.Cell>
                    <Table.Cell>
                        {incidencetypes.tittle}
                    </Table.Cell>
                    <Actions incidencetypes={incidencetypes} updateIncidencety={updateIncidencety} deleteIncidencety={deleteIncidencety}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {incidencetypes, updateIncidencety, deleteIncidencety} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateIncidencety(incidencetypes)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteIncidencety(incidencetypes)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}