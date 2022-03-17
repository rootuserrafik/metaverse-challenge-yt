import { useMoralis } from 'react-moralis';
import Image from "next/dist/client/image";
import Avater from '../../components/Avater';
import ChangeUsername from '../../components/ChangeUsername';

function Header() {
  const { user } = useMoralis();
  return (
    <div className='sticky top-0 bg-white border-b-4 p-5 z-50 border-blue-500 shadow-sm'>
      <div className='grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center'>
        <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
          {/* Logo */}
          <Image
            className='rounded-full'
            objectFit='cover'
            layout='fill'
            src="https://cdn.dribbble.com/users/3734064/screenshots/14413405/media/6744f33319119e4db7637ba5b49e5d78.png?compress=1&resize=400x300&vertical=top"
          />
        </div>
        <div className='col-span-4 text-left lg:text-center'>
          <div className='relative h-48 w-48 lg:mx-auto border-blue-800 border-8 rounded-full'>
            {/* Avater */}
            <Avater logOutOnPress />
          </div>
          <div>
            {/* Welcome Message */}
            <h2 className='text-2xl'>Welcome to the yeyo yeyo Fun Chat..!</h2>
            {/* Username  */}
            <h1 className='text-5xl font-bold truncate'>@{user.getUsername()} </h1>
          </div>
        </div>
        <div>
          <ChangeUsername />
          {/* Change Username Component  */}
        </div>
      </div>
    </div>
  )
}

export default Header