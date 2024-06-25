import CartBody from './components/CartBody';
import Footer from '../../components/Footer/Footer';
import { User } from '../../models/user'
import Nav from '../../components/Nav/Nav';

interface Props {
    user: User;
}

const CartPage = ({ user }:Props) => {
    return (
        <>
        <Nav/>
        <div className='flex flex-col min-h-screen '>
        <CartBody user={user}/>
        </div>
        <Footer/>
        </>
    );
}

export default CartPage;
