import { useState } from "react";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { playMainButtonClickSound } from "../../utils/playSound";
import { sendEmail } from "../../utils/sendEmail";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sending, setSending] = useState(false);
	const [response, setResponse] = useState("");

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (sending) return;
		playMainButtonClickSound();
		setSending(true);
		const result = await sendEmail({ email, message });
		setSending(false);
		setResponse(result.message);
	};

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Contact" />
			<main className="flex items-center justify-center flex-1">
				<div className="container flex flex-row max-w-3xl p-1 mx-2 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 background-animate">
					<div className="w-full h-full p-3 bg-gray-800 rounded-xl">
						<h2 className="text-2xl font-bold text-center text-white">
							Let&rsquo;s work together
							<span className="text-3xl font-bold text-center text-white animate-blink">...</span>
						</h2>

						<form className="mt-6" onSubmit={handleFormSubmit}>
							<div className="w-full">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											className="w-5 h-5 text-gray-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
										</svg>
									</div>
									<input
										className="text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
										placeholder="Your Email Address"
										type="email"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full mt-4">
								<textarea
									className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none max-h-60"
									id="message"
									maxLength={500}
									placeholder="Your Message"
									rows={4}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							<div className="flex items-center justify-center w-full mt-6">
								{sending ? <LoadingIcon /> : <p className="text-sm font-bold text-white">{response}</p>}
							</div>
							<div className="flex items-center justify-center w-full mt-6">
								<button
									className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white"
									disabled={sending}
									type="submit"
								>
									<span className="relative text-lg px-16 py-1.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0">
										{sending ? "Sending..." : "Send"}
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}
