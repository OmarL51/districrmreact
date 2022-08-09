import React, {useState, useEffect} from 'react'
import {Button, Icon, Input} from 'semantic-ui-react';
import './HeaderPage.scss';
import {useIncidence, useAuth} from '../../../hooks';

export function HeaderPage(props) {
    const {tittle, btnTittle, btnClick} = props;


    

  
  return (
    <div className='header-page-admin'>
      <h2>{tittle}</h2>
    
      <div>
          {btnTittle && (
              <button className='header-page-admin__b'  onClick={btnClick}>
                  {btnTittle}
              </button>

          )}
      </div>
    
    </div>
  )
}
