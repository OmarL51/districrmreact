import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';
import {map} from 'lodash';
import './TableQuotes.scss';

export function TableQuotes(props) {
    const {quotes, updateQuote, deleteQuote} = props;
  return (
    <Table className='table-quote-admin'>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Fecha ingreso cot</Table.HeaderCell>
                <Table.HeaderCell>Tipo de incidencia</Table.HeaderCell>
                <Table.HeaderCell>Tipo de cotización</Table.HeaderCell>
                <Table.HeaderCell>Asunto</Table.HeaderCell>
                <Table.HeaderCell>#Cotización</Table.HeaderCell>
                <Table.HeaderCell>#Lineas</Table.HeaderCell>
                <Table.HeaderCell>Responsable</Table.HeaderCell>
                <Table.HeaderCell>Medio</Table.HeaderCell>
                <Table.HeaderCell>Recotización</Table.HeaderCell>
                <Table.HeaderCell>Tercero</Table.HeaderCell>
                <Table.HeaderCell>Estado</Table.HeaderCell>
                <Table.HeaderCell>Zona</Table.HeaderCell>
                <Table.HeaderCell>Novedad</Table.HeaderCell>
                <Table.HeaderCell>Fecha ppta</Table.HeaderCell>
                <Table.HeaderCell>Fecha cotización</Table.HeaderCell>
                <Table.HeaderCell>Observación</Table.HeaderCell>
            
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(quotes, (quote, index) => (
                <Table.Row key={index} >
                     <Table.Cell>
                        {quote.date_cot}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.incidencety_data.tittle}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.quotety_data.tittle_q}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.tittle_cot}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.num_cot}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.line}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.assign}
                    </Table.Cell>
                    <Table.Cell>
                    {quote.mean_data.tittle_m}
                    </Table.Cell>
                    <Table.Cell className='status'>
                    {quote.recotization ? <Icon name='check'/> : <Icon name='close'/>}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.third_data.nombres}
                    </Table.Cell>
                    <Table.Cell className='table-quote-admin__cell' style={{color:quote.status_data.color_s}}>
                        {quote.status_data.tittle_s}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.zone_data.zona + " " + quote.zone_data.asesor}
                    </Table.Cell>
                    <Table.Cell className='table-quote-admin__cell2' style={{color:quote.unexpected_data.color_u}}>
                        {quote.unexpected_data.tittle_u}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.date_ppta}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.date}
                    </Table.Cell>
                    <Table.Cell>
                        {quote.observation}
                    </Table.Cell>
                    <Actions quote={quote} updateQuote={updateQuote} deleteQuote={deleteQuote} />
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  );
}


function Actions(props) {
    const {quote, updateQuote, deleteQuote} = props;

    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateQuote(quote)}>
                <Icon name='pencil alternate' />
            </Button>
            <Button icon negative onClick={() =>  deleteQuote(quote)}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
       
    );
}