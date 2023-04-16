import React from "react";

export default function WhoAmI() {
	const birthDate = new Date("2002-11-10");
	const ageInMilliseconds = Date.now() - birthDate.getTime();
	const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

	return (
		<div className="text-white h-full">
			<div className="flex flex-col h-full items-center">
				<header>
					<h1 className="text-2xl font-bold">Who am I?</h1>
				</header>
				<main className="w-full h-full flex lg:flex-row flex-col mb-3">
					<div className="lg:w-1/3 w-full flex items-center justify-center lg:py-0 py-4">
						<img
							src="./imgs/who_am_I_pic.gif"
							loading="lazy"
							alt="Who Am I"
							className="w-56 h-56 object-cover rounded-full"
						/>
					</div>
					<div className="lg:w-2/3 w-full px-3 lg:pt-4">
						<ul className="max-w-md space-y-1.5 text-white list-disc list-inside">
							<li>
								<span className="font-bold">Name:</span> <span className="font-light">Tiago Ribeiro</span>
							</li>
							<li>
								<span className="font-bold">Age:</span> <span className="font-light">{ageInYears}</span>
							</li>
							<li>
								<span className="font-bold">Location:</span> <span className="font-light">Portugal</span>
							</li>
							<li>
								<span className="font-bold">Occupation:</span> <span className="font-light">Student</span>
							</li>
							<li>
								<span className="font-bold">Hobbies:</span>{" "}
								<span className="font-light">Gaming, Programming, Music</span>
							</li>
							<li>
								<span className="font-bold">Languages:</span>{" "}
								<span className="font-light">Portuguese, English</span>
							</li>
							<li>
								<span className="font-bold">Interests:</span>{" "}
								<span className="font-light">Web Development, Mobile Development</span>
							</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
