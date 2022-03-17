import { useMoralis } from 'react-moralis';
import Image from "next/dist/client/image";

function Avater({username, logOutOnPress}) {
    const {user, logout} = useMoralis();
  return (
    <Image
        className='cursor-pointer rounded-full bg-black hover:opacity-75'
        src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
        layout='fill'
        onClick={() => logOutOnPress && logout()}
    />
  );
}

export default Avater