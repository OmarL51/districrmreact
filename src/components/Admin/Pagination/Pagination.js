import { parseInt } from 'lodash';
import React, {useState} from 'react'
import {Button, Input} from 'semantic-ui-react';
import './Pagination.scss'

export  function Pagination({page, setPage, max}) {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input + 1))
        setPage(parseInt(page + 1))
    }

    const previousPage = () => {
        setInput(parseInt(input - 1))
        setPage(parseInt(page - 1))
    }

    const onKeyDown = (e) => {
        if(e.keyCode ===13){
            setPage(parseInt(e.target.value))
            if(parseInt(e.target.value < 1) || parseInt(e.target.value > Math.ceil(max)) || isNaN(parseInt(e.target.value))){
                
                setPage(1)
                setInput(1)

            }else {
                setPage(parseInt(e.target.value));
            }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }
  return (
    <div className='container'>

    <button className='container_b' disabled={page === 1 || page < 1} color ='#254478' onClick={previousPage}>Anterior</button>
     <input className='container_i' style={{color : '#A4BE49'}} onChange={e => onChange(e)}  onKeyDown={ e => onKeyDown(e)} name='page' autoComplete='off' value={input}/>
      <h4 className='container__p'><strong style={{color : '#A4BE49'}}> de {Math.ceil(max)}</strong></h4>
      <button className='container_b2' disabled={page === Math.ceil(max) || page > Math.ceil(max)}  onClick={nextPage}>Siguiente</button>
    </div>
  )
}
