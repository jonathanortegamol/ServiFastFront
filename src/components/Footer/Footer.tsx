import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <footer className='bg-secondary-700 flex flex-col justify-around items-center md:flex-row border-t-2 border-primary-800'> 
            <div className='w-1/3 flex md:flex-row p-2 justify-center items-center'>
                <i className="text-white hover:text-secondary-50 text-3xl font-bold font-logo cursor-pointer">ServiFast</i>
            </div>
            <div className='w-1/3 md:flex flex-row justify-center items-center p-2 gap-8 text-center'>
                <h4 className='text-zinc-400 hover:text-secondary-50 cursor-pointer text-md'>Contáctanos</h4>
                <h4 className='text-zinc-400 hover:text-secondary-50 cursor-pointer text-md'>Categorías</h4>
                <h4 className='text-zinc-400 hover:text-secondary-50 cursor-pointer text-md'>Términos y Condiciones</h4>
            </div>
            <div className='w-1/3 flex md:flex-row gap-10 justify-center items-center p-2'>
                <div className='p-1 rounded-full hover:bg-secondary-50 hover:bg-opacity-40 cursor-pointer'>
                    <FacebookIcon className='text-white'/>
                </div>
                <div className='p-1 rounded-full hover:bg-secondary-50 hover:bg-opacity-40 cursor-pointer'>
                    <InstagramIcon className='text-white'/>
                </div>
                <div className='p-1 rounded-full hover:bg-secondary-50 hover:bg-opacity-40 cursor-pointer'>
                    <XIcon className='text-white'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
