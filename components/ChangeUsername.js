import { useMoralis } from 'react-moralis';

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();
    const setUserName = () => {
        const username = prompt(
            `Enter your new Username (Current: ${user.getUsername()})`
        );
        if(!username) return;
        setUserData({
            username,
        });
    }
  return (
    <div className="text-sm absolute top-5 right-10 font-bold">
        <button 
            disabled={isUserUpdating}
            onClick={setUserName}
            className="transition hover:text-pink-700"
        >Change Username</button>
    </div>
  )
}

export default ChangeUsername