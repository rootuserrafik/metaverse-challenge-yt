import Avater from './Avater';
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';


function Message({message}) {
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
        className={`flex items-end space-x-2 relative ${
            isUserMessage && "justify-end"
        }`}
    >
        <div
            className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}
        >
            {/* https://youtu.be/oE8FxN49Wo8?t=5688 */}
            <Avater username={message.get('username')} />
        </div>
        <div
            className={`flex space-x-4 p-3 rounded-lg ${
                isUserMessage
                ? "rounded-br-none bg-gray-300" 
                : "rounded-bl-none bg-blue-400"
            }`}
        >

            <p>{message.get("message")}</p>
        </div>

        {/* Timeago stamp */}
        <TimeAgo
            className={`text-[10px] text-gray-400 italic ${
                isUserMessage && 'order-first'
            }`}
            datetime={message.createdAt} />
        <p className={`absolute -bottom-5 text-xs ${
            isUserMessage ? 'text-blue-300' : 'text-pink-400'
        }`}>{message.get("username")}</p>
    </div>
  )
}

export default Message