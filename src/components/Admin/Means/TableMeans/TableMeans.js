import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableMeans.scss';

export function TableMeans(props) {
    const {means, updateMean, deleteMean} = props;
  return (
    <Table className='table-mean-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Descripción</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(means, (mean, index) => (
                <Table.Row key={index}>
                     <Table.Cell>
                        {mean.id}
                    </Table.Cell>
                    <Table.Cell>
                        {mean.tittle_m}
                    </Table.Cell>
                    <Actions mean={mean} updateMean={updateMean} deleteMean={deleteMean}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {mean, updateMean, deleteMean} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateMean(mean)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() => deleteMean(mean)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    );
}