import { useMoralis } from "react-moralis";
import Image from "next/dist/client/image";

function Login() {
    const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
        <h1>You Need to login..</h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full space-y-4 items-center justify-center">
            {/* Home Logo */}
            <Image
                className="object-cover rounded-full"
                src="https://i.pinimg.com/originals/8f/0f/1a/8f0f1a58f61495c4d27bec21c31d7a28.gif"
                width={400}
                height={400}
            />
            {/* Login Button */}
            <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the MATAVERSE</button>
        </div>
        <div className="w-full h-screen">
            <Image 
                src="https://www.clovda.com/wp-content/uploads/2019/04/Fotolia_91117554_Subscription_Monthly_XXL.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>
  )
}

export default Login