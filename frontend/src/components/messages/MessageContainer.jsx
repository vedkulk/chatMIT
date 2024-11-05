import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup function to reset selected conversation on unmount
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="md:min-w-[600px] flex flex-col bg-white border-b border-t border-r border-slate-200">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="border-b border-slate-200 px-4 py-4 mb-2">
						<span className="label-text">To:</span>{" "}
						<span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext(); // Access authUser using the hook

	return (
		<div className="flex items-center justify-center w-full h-full bg-white">
			<div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
				<p>
					Welcome to chat<span className="text-red-500">MIT</span>, {authUser?.fullName}
				</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl md:text-6xl text-center" />
			</div>
		</div>
	);
};
