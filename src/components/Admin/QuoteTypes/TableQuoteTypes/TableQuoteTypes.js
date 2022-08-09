import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableQuoteTypes.scss';

export function TableQuoteTypes(props) {
    const {quotetypes, updateQuotety, deleteQuotety} = props;
  return (
    <Table className='table-quotety.admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(quotetypes, (quotetypes, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {quotetypes.id}
                    </Table.Cell>
                    <Table.Cell>
                        {quotetypes.tittle_q}
                    </Table.Cell>
                    <Actions quotetypes={quotetypes} updateQuotety={updateQuotety} deleteQuotety={deleteQuotety}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {quotetypes, updateQuotety, deleteQuotety} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateQuotety(quotetypes)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteQuotety(quotetypes)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}