import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

function netCard(val) {
  return (
<Card
      imgsrc={val.imgsrc} 
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  )
}

ReactDOM.render(
  <>
    
    <h1 className='heading_style' >My Favourite 6 Netflix Series in 2022</h1>

    
    {Sdata.map(netCard)}

    
    </>
    ,
  document.getElementById('root')
)



                