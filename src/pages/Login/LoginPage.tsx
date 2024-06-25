import LoginHeader from './components/LoginHeader';
import LoginCard from './components/LoginCard';

const LoginPage = () => {
    return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-50 to-slate-300">
        <LoginHeader />
        <div className="md:flex-grow flex items-center justify-center mt-10">
            <LoginCard />
        </div>
    </div>
    );
}

export default LoginPage;
