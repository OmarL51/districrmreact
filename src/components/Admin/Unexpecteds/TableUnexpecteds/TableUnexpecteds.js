import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableUnexpecteds.scss';

export function TableUnexpecteds(props) {
    const {unexpecteds, updateUnexpected, deleteUnexpected} = props;
  return (
    <Table className='table-unexpected-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell>Color</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(unexpecteds, (unexpected, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {unexpected.id}
                    </Table.Cell>
                    <Table.Cell>
                        {unexpected.tittle_u}
                    </Table.Cell>
                    <Table.Cell>
                        {unexpected.color_u}
                    </Table.Cell>
                    <Actions unexpected={unexpected} updateUnexpected={updateUnexpected} deleteUnexpected={deleteUnexpected}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {unexpected, updateUnexpected, deleteUnexpected} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateUnexpected(unexpected)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteUnexpected(unexpected)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}