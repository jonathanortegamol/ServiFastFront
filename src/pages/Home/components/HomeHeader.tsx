import React from 'react';

const HomeHeader = () => {
    return (
        <div>
             <header className="bg-secondary-700 p-5 relative border-b-2 border-primary-800">
                <div className="flex md:mr-16 md:ml-16 flex-row justify-between">
                    {/* Logo */}
                    <i className="text-white hover:text-secondary-50 text-4xl font-bold font-logo cursor-pointer">ServiFast</i>
                    <ul className="flex flex-row items-center gap-7 md:mr-5">
                        <li className="py-2"><a className="text-white hover:text-secondary-50 cursor-pointer font-bold text-sm md:text-base">Iniciar Sesión</a></li>
                        <li className="py-2"><a className="text-white hover:text-secondary-50 cursor-pointer font-bold text-sm md:text-base">Regístrate</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default HomeHeader;
