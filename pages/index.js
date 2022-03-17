import Header from  './header/Header';
import Footer from  './footer/Footer';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import AppHead from './header/Head';
import Messages from '../components/Messages';


function index() {
  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />;


  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-800 overflow-hidden">
      <AppHead />

      <main>
        <div className='max-w-screen-2xl mx-auto text-blue-800'>
          {/* Header */}
          <Header />
        </div>
        <div>
          {/* Messages */}
          <Messages />
        </div>
          <button onClick={logout} className="bg-yellow-500 rounded-lg p-5 font-bold">Logout</button>
          <h1>Welcome to our website...</h1>
      </main>

      <Footer />
    </div>
  )
}

export default index