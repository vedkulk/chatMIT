import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
	return (
		<div className='md:min-w-[600px] sm:min-w-[300px] flex flex-col bg-white'>
			<>
				{/* Header */}
				<div className='bg-white-500 border-t border-b  px-4 py-4 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>

				<Messages />
				<MessageInput />
			</>
		</div>
	);
};
export default MessageContainer;