import axios from "axios";
import { SendEmailProps } from "../types/interfaces";

function validateEmail(email: string) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validateMessage(message: string) {
	const re = /[a-zA-Z]/;
	return re.test(message);
}

export const sendEmail = async (props: SendEmailProps) => {
	if (!validateEmail(props.email)) {
		return { message: "Please enter a valid email", status: 400 };
	}

	if (!validateMessage(props.message)) {
		return { message: "Please enter a valid message", status: 400 };
	}

	const uri = "https://send-email-api.cyclic.app/api/v2/send";
	const headers = { "Content-Type": "application/json", authorization: import.meta.env.VITE_SEND_EMAIL_AUTH_KEY };
	const data = {
		From: props.email,
		To: [
			{
				Name: import.meta.env.VITE_SEND_EMAIL_SOURCE_NAME,
				Email: import.meta.env.VITE_SEND_EMAIL_SOURCE_EMAIL,
			},
		],
		Subject: "Portfolio Contact Form",
		Text: props.message,
	};

	try {
		await axios.post(uri, data, { headers: headers });
		return { message: "Email sent successfully", status: 200 };
	} catch (error) {
		console.log(error);
		return { message: "Something went wrong :(", status: 500 };
	}
};
