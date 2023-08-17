import React from 'react';
import { useNavigate } from 'react-router-dom';

const CatsCard = ({name,image,id}) => {
    const navigate = useNavigate("")
  return (
    <div className='text-center font-bold text-lg rounded-md overflow-hidden' 
    onClick={
        (e)=>{
            navigate('/cat')
        }
    }>
      <img src={image} alt="" srcset="" className=' h-[294px] bg-[#000062]'/>
      <div className='text-[#000062] bottom-0'>{name}</div>
    </div>
  );
}

export default CatsCard;
