// import Footer from "./components/Footer/Footer";
// import Nav from "./components/Nav/Nav";
import { users } from "./models/data/users";
import CartPage from "./pages/Cart/CartPage";
// import CartBody from "./pages/Cart/components/CartBody";
// import HomePage from "./pages/Home/HomePage";
// import LoginPage from "./pages/Login/LoginPage";
// import LoginCard from "./pages/Login/components/LoginCard";

export default function App() {

  const user = users[2];
  console.log(user);
  return (
    // <>
    
    // <LoginPage/>
    // </>

    // <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-200 to-slate-400">
    //   <Nav />
    //   <div className="flex-grow flex items-center justify-center">
    //     {/* <HomePage/> */}
        
    //   </div>
    //   <Footer />
    // </div>

    <CartPage user={user}/>
    
    // <>
    //   <HomePage/>
    // </>
  );
}
