import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { sendEmail } from "../../utils/sendEmail";
import { getSessionStorage } from "../../utils/sessionStorage";
import { playMainButtonClickSound } from "../../utils/playSound";

export default function Contact() {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (getSessionStorage("showBtns") !== true) navigate("/");
	}, []);

	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [sending, setSending] = React.useState(false);
	const [response, setResponse] = React.useState("");

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		playMainButtonClickSound();
		setSending(true);
		const result = await sendEmail({ email, message });
		setSending(false);
		setResponse(result.message);
	};

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Contact" />
			<main className="flex-1 flex justify-center items-center">
				<div className="container max-w-3xl mx-2 flex flex-row rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 p-1 background-animate">
					<div className="h-full w-full bg-gray-800 rounded-xl p-3">
						<h2 className="text-2xl text-white font-bold text-center">
							Let&rsquo;s work together
							<span className="animate-blink text-3xl text-white font-bold text-center">...</span>
						</h2>

						<form onSubmit={handleFormSubmit} className="mt-6">
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
										type="email"
										className=" text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
										placeholder="Your Email Address"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full mt-4">
								<textarea
									id="message"
									rows={4}
									maxLength={500}
									className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none max-h-60"
									placeholder="Your Message"
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							<div className="w-full mt-6 flex justify-center items-center">
								{sending ? <LoadingIcon /> : <p className="text-sm text-white font-bold">{response}</p>}
							</div>
							<div className="w-full mt-6 flex justify-center items-center">
								<button
									className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white"
									type="submit"
								>
									<span className="relative text-lg px-16 py-1.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0">
										Send
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
