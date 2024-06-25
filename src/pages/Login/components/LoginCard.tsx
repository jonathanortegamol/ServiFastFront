
const LoginCard = () => {
    return (
        <div className="md:w-full max-w-3xl shadow shadow-gray-500 border md:border-secondary-50 rounded md:p-0 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:p-8 p-4 flex-col justify-center border-r-2 border-secondary-800 md:block hidden bg-secondary-700">
                <h2 className="text-2xl font-bold mb-4 mt-24 text-zinc-200">El éxito comienza aquí</h2>
                <p className="text-zinc-200">
                    Bienvenido a ServiFast. Aquí puedes publicar todos tus servicios y necesidades de manera rápida y eficiente. 
                </p>
            </div>
            <form className="md:w-1/2 space-y-6 p-8 bg-white md:p-8">
                <h5 className="text-xl text-secondary-800 text-center font-bold">Inicia sesión en tu cuenta</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-secondary-800">Tu correo</label>
                    <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-secondary-50 block w-full p-2.5 " placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 font-medium text-secondary-800">Tu contraseña</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-sm rounded block w-full p-2.5 " required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-black accent-secondary-400" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-secondary-800">Recuerda me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm text-blue-900 hover:underline">Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" className="w-full text-white bg-secondary-700 hover:bg-secondary-400 font-medium rounded text-sm px-5 py-2.5 text-center">Login to your account</button>
                <div className="text-sm font-medium text-secondary-800">
                    No tienes una cuenta? <a href="#" className=" hover:underline text-blue-900 ms-auto">Únete</a>
                </div>
            </form>
        </div>
    );
}

export default LoginCard;
