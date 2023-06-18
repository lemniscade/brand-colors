import React from 'react'
import Search from './Search'
import { useState } from 'react'
import BrandsData from '../brands.json'
import Brand from './Brand'


function Content() {
    const brandsArray=[]
    Object.keys(BrandsData).map(key=>{
        brandsArray.push(BrandsData[key])
    })
    const [brands,setBrands]=useState(brandsArray)
    const [selectedBrands,setSelectedBrands]=useState([])
  return (
    <div className="content">
        <header className='header'>
            <Search/>
        </header>
        <section className="brands">
            {brands.map(brand=>(
                <Brand brand={brand}/>
            ))}
        </section>
    </div>
  )
}

export default Content