import React, { useState } from 'react'
import useConversation from "../store/useConversation.js"
import toast from "react-hot-toast";

const useSendMessages = () => {
    const[loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation()
    const sendMessage = async (message) => {
        try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setMessages(Array.isArray(data) ? [...messages, ...data] : [...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { sendMessage, loading };
}

export default useSendMessages