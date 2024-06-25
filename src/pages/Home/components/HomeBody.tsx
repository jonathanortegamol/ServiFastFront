import React from 'react';
import HomeImage from '../../../assets/servicio-al-cliente.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const HomeBody = () => {
    return (
        <>
            <section className=''>
                <div className='md:min-h-svh bg-secondary-50 min-h-96 flex flex-row justify-center items-center p-10 md:p-20 lg:gap-32'>
                    <h2 className='md:text-4xl text-3xl md:p-8 p-4 lg:m-20'>Encuentra tu <i className='font-sans font-bold'>servicio</i> adecuado de inmediato.</h2>
                    <img className='w-40 h-full md:w-80 lg:m-20' src={HomeImage} alt="Home" />
                </div>
            </section>
            <section className='bg-secondary-600 p-16 md:min-h-svh md:flex md:flex-col md:justify-center items-center md:p-28'>
                <h2 className='text-zinc-200 text-3xl flex p-2 mb-3 font-bold font-sans lg:text-4xl'>¿La mejor parte? Todo.</h2>
                <ul className='flex flex-col'>
                    <li className='p-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineIcon />
                            <h3 className='text-zinc-200 text-xl font-bold lg:text-2xl'>Personaliza tu servicio</h3>
                        </div>
                        <p className='text-zinc-300 lg:text-xl'>Para ServiFast, tus necesidades son importantes. Puedes seleccionar un servicio existente o personalizarlo y cotizarlo con el vendedor.</p>
                    </li>
                    <li className='p-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineIcon />
                            <h3 className='text-zinc-200 text-xl font-bold lg:text-2xl'>Más cerca de ti</h3>
                        </div>
                        <p className='text-zinc-300 lg:text-xl'>Localiza los vendedores que se encuentren en tu sector. Ahorra tiempo de viaje. Personas que ofrecen lo que necesitas están más cerca de lo que imaginabas.</p>
                    </li>
                    <li className='p-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineIcon />
                            <h3 className='text-zinc-200 text-xl font-bold lg:text-2xl'>Publica tu necesidad</h3>
                        </div>
                        <p className='text-zinc-300 lg:text-xl'>¿Nadie ha ofrecido aún lo que necesitas? Publica y detalla el servicio que requieres. Los vendedores estarán gustosos de ofrecerte su habilidad.</p>
                    </li>
                    <li className='p-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineIcon />
                            <h3 className='text-zinc-200 text-xl font-bold lg:text-2xl'>Promociona tu negocio</h3>
                        </div>
                        <p className='text-zinc-300 lg:text-xl'>¿No sabes cómo dar a conocer tus servicios? Usa ServiFast para promocionar tu negocio. Nos interesa dar tu habilidad a conocer.</p>
                    </li>
                </ul>
            </section>
            <section className='md:min-h-svh bg-secondary-50 p-4 flex flex-col justify-center items-center md:p-20'>
                <h2 className='md:text-5xl text-4xl'>Planes de <i className='font-sans font-bold'>ServiFast</i></h2>      
                <div className='grid grid-cols-1 md:grid-cols-8 gap-10 p-8 md:p-20 '>
                    <div className='text-zinc-300 md:col-span-4 flex flex-col items-center bg-secondary-600 p-4 rounded shadow border-2 border-secondary-900'>
                        <h3 className='text-zinc-200 text-3xl flex p-2 mb-3 font-bold font-sans lg:text-4xl'>Plan Básico</h3>
                        <ul className='flex flex-col'>
                            <li className='p-3'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <CheckCircleOutlineIcon className='text-black' />
                                    <p className='lg:text-xl'>Publica hasta tres servicios diferentes.</p>
                                </div>
                            </li>
                            <li className='p-3'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <CheckCircleOutlineIcon className='text-black'/>
                                    <p className='lg:text-xl'>Ve en el mapa quienes están cerca de ti.</p>
                                </div>
                            </li>
                            <li className='p-3'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <CheckCircleOutlineIcon className='text-black'/>
                                    <p className='lg:text-xl'>Revisa las reseñas y comenta cómo ha sido el servicio ofertado.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='text-zinc-300 md:col-span-4 flex flex-col items-center bg-secondary-600 p-4 rounded shadow border-2 border-secondary-900'>
                        <h3 className='text-zinc-200 text-3xl flex p-2 mb-3 font-bold font-sans lg:text-4xl'>Plan Pro</h3>
                        <ul className='flex flex-col'>    
                            <li className='p-3'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <CheckCircleOutlineIcon className='text-black'/>
                                    <p className='lg:text-xl'>Publica servicios de forma ilimitada.</p>
                                </div>
                            </li>
                            <li className='p-3'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <CheckCircleOutlineIcon className='text-black' />
                                    <p className='lg:text-xl'>¿No existe el servicio que necesitas? Publica solicitudes de servicios de forma ilimitada.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBody;
