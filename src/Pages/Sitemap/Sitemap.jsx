import React, { useState } from 'react'
import axios from "axios";
import XMLData from '../../sitemap.xml';
const Sitemap = () => {
    const [res,setRes]=useState('');
    axios.get(XMLData, {
        "Content-Type": "application/xml; charset=utf-8"
     })
     .then((response) => {
        setRes(response.data);
        console.log('Your xml file as string', response.data);
     });
  return (
    <div className='home-container-2'>
      {res}
    </div>
  )
}

export default Sitemap
