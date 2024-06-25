import  Logo from '../../../assets/servifast.svg'
const LoginHeader = () => {
    return (
        // <header className="bg-secondary-50 p-2 relative border-b-2 border-primary-800">
        //     <div className="flex mr-4 ml-4 flex-row justify-between">
        //         {/* Logo */}
        //         <i className="text-secondary-800 text-4xl font-bold font-logo cursor-pointer">ServiFast</i>
        //         <ul className="flex flex-row items-center gap-7 mr-5">
        //             <li className="py-2"><a className="text-secondary-800 hover:text-terceary cursor-pointer text-bold ">Iniciar Sesión</a></li>
        //             <li className="py-2"><a className="text-secondary-800 hover:text-terceary cursor-pointer text-bold ">Regístrate</a></li>
        //         </ul>
        //     </div>
        // </header>
        <header className="flex items-center mt-10 justify-center justify-items-center">
            {/* Logo */}
            <div className="mr-2">
                <i className="text-secondary-800 text-4xl font-bold font-logo cursor-pointer">ServiFast</i>
            </div>
            <div className='relative'>
                <img className="h-5 w-auto relative inset-y-0.5" src={Logo} alt="servifast" />
            </div>
        </header>
    
    );
}

export default LoginHeader;
