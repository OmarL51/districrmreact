import React from 'react';
import {Table, Button, Icon, Pagination} from 'semantic-ui-react';
import {TableWithBrowserPagination} from 'react-rainbow-components';
import {map} from 'lodash';
import './TableStatuses.scss';

export function TableStatuses(props) {
    const {statuses, updateStatus, deleteStatus} = props;
    

  return (
    <Table className='table-incidencety-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell>Color</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body className='table-incidencety-admin__body'>
            {map(statuses, (statuses, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {statuses.id}
                    </Table.Cell>
                    <Table.Cell>
                        {statuses.tittle_s}
                    </Table.Cell>
                    <Table.Cell>
                        {statuses.color_s}
                    </Table.Cell>
                    <Actions statuses={statuses} updateStatus={updateStatus} deleteStatus={deleteStatus}/>
                </Table.Row>
            ))}
     
            
        </Table.Body>

    </Table>
     
  );
}


function Actions(props) {
    const {statuses, updateStatus, deleteStatus} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateStatus(statuses)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteStatus(statuses)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}