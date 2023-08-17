import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../Api/Api';
import CatsCard from '../components/CatsCard/CatsCard';

const Home = () => {
    const [cats,setCats] =useState([])
    useEffect(()=>{
        axios.get(`${baseUrl}/categories`).then(response =>{
            setCats(response.data.cats)
        })
    },[])
  return (
    <div>
        <div className='m-auto max-w-[1280px]'>
            <header className='w-full bg-black rounded-lg my-16 h-[380px]'>
            </header>
            <div className='grid grid-cols-4 gap-2'>
                {
                    cats.map(cat =>(
                        <CatsCard id={cat.id} name={cat.name} image ={cat.image}/>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default Home;
