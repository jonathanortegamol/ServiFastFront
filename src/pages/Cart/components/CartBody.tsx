import { useState } from 'react';
import { User, Service } from '../../../models';
import CartCard from './CartCard';

interface Props {
    user: User;
}

const CartBody = ({ user }: Props) => {
    const [favServices, setFavServices] = useState<Service[]>(user.favoriteServices || []);

    const deleteFavoriteService = (serviceId: string) => {
        const updatedServices = favServices.filter(service => service.id !== serviceId);
        setFavServices(updatedServices);
    };

    return (
        <div className='xl:mx-36'>
            <div className='flex flex-row justify-between border-b-2 border-secondary-700'>
                <div className='col-9 '>
                    <h2 className='text-3xl font-bold font-sans m-3 mx-12'>Mis Favoritos</h2>
                </div>
                <div className='col-2 align-self-end d-flex justify-content-end'>
                    <p className='text-xl m-3 xl:mx-28'>Precio</p>
                </div>
            </div>
            <div className='p-5 mx-16'>
                {favServices.length > 0 ? (
                    favServices.map((service) => (
                        <CartCard key={service.id} user={user} service={service} deleteFavoriteService={deleteFavoriteService} />
                    ))
                ) : (
                    <div className='flex flex-col justify-center items-center min-h-screen xl:min-h-0 xl:h-screen'>
                        <p className='text-3xl font-semibold mb-2'>¡Aún no has agregado ningún favorito!</p>
                        <p className='text-xl'>Descubre y añade servicios que te interesen.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartBody;
