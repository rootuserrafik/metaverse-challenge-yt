import Header from  './header/Header';
import Footer from  './footer/Footer';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';


function index() {
  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />;


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />

      <main>
        <button onClick={logout} className="bg-yellow-500 rounded-lg p-5 font-bold">Logout</button>
        <h1>Welcome to our website...</h1>
      </main>

      <Footer />
    </div>
  )
}

export default index