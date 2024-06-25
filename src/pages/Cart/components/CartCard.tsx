// import React from 'react';
// import { Link } from 'react-router-dom';
import { Service, User } from '../../../models';

type DeleteServiceCallback = (serviceId: string) => void;

interface Props {
    user: User;
    service: Service;
    deleteFavoriteService: DeleteServiceCallback;
}

const CartCard= ({ user, service, deleteFavoriteService }:Props) => {
    return (
    <div className='flex flex-col xl:flex-row justify-between rounded p-4 border-b-2 border-secondary-700'>
      <div className='flex md:ml-10 flex-col xl:flex-row'>
        <div className='border rounded-sm flex justify-center items-center'>
          <img className="max-w-sm " src={ service.imgUrl } alt={ service.title }></img>
        </div>
        <div className='p-2'>
          <h3 className='text-xl font-bold p-2' >{ service.title }</h3>
          <p className='p-2 text'>{ service.description }</p>
          <p className='p-2 text'> Propietario: { user.name } </p>
          <button type="button" className=" text-white bg-secondary-700 hover:bg-secondary-400 font-medium rounded text-sm px-5 py-2.5 text-center m-2">Contactar</button>
          <button type="button" onClick={() => deleteFavoriteService(service.id)} className=" text-white bg-secondary-700 hover:bg-secondary-400 font-medium rounded text-sm px-5 py-2.5 text-center m-2">Eliminar</button>
        </div>
      </div>  
      <div className='flex justify-end items-center'>
        <p className='md:px-10 text'> USD${ service.price }</p>
      </div>
    </div>
    );
};

export default CartCard;
