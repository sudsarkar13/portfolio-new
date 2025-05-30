"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowUpRight } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/buttons/WorkSliderBtns";

const certificates = [
	{
		num: "01",
		category: "Information Technology",
		title: "Odisha State - Certificate in Information Technology",
		presentedBy: "Odisha Knowledge Corporation Limited (OKCL)",
		description:
			"Issued Jul 2016 Credential ID 263260011 /1652093016041512 /April 2016 /A000044498",
		skill: [{ name: "Microsoft Office" }],
		image: "/assets/certificates/c1.png",
		link: "https://www.linkedin.com/posts/sudeepta-sarkar_odisha-state-certificate-in-information-activity-6930911752566030336-e72p?utm_source=share&utm_medium=member_desktop&rcm=ACoAACiEAZEBsOzP23uruqBQwU-kd9eguT3QS2c",
	},
	{
		num: "02",
		category: "Information Technology",
		title: "CLP - Advanced Programming in C",
		presentedBy: "Cisco Networking Academy",
		description: "Issued Jan 2020",
		skill: [{ name: "C" }, { name: "C#" }, { name: "C++" }],
		image: "/assets/certificates/c2.png",
		link: "https://www.dropbox.com/s/majeqs2ga9mxapl/SUDEEPTASARKAR-KIIT%20Polytechnic-certificate.pdf?dl=0",
	},
	{
		num: "03",
		category: "Information Technology",
		title: "PCAP - Programming Essentials in Python",
		presentedBy: "Cisco Networking Academy",
		description: "Issued Jul 2021",
		skill: [{ name: "Python" }],
		image: "/assets/certificates/c3.png",
		link: "https://www.dropbox.com/s/k3lpzetnpojpcpa/SUDEEPTASARKAR-CODE_RIDERS_KIIT-certificate.pdf?dl=0",
	},
	{
		num: "04",
		category: "MUN",
		title:
			"Certificate of Participation KIIT International e-Model United Nations",
		presentedBy: "KIIT International MUN",
		description: "Issued Jan 2022",
		skill: [{ name: "Delegate" }, { name: "Management Committee" }],
		image: "/assets/certificates/c4.png",
		link: "https://www.dropbox.com/s/rw35l5ctr030xgm/KIIT%20International%20e-Model%20United%20Nations%20Certificate-Sudeepta%20Sarkar.pdf?dl=0",
	},
	{
		num: "05",
		category: "Information Technology",
		title: "Problem Solving (Intermediate) Certificate",
		presentedBy: "HackerRank",
		description: "Issued on Sep 2022 Credential ID FB127A8DA211",
		skill: [
			{ name: "Programming Languages" },
			{ name: "Aptitude" },
			{ name: "Problem Solving" },
		],
		image: "/assets/certificates/c5.png",
		link: "https://www.hackerrank.com/certificates/fb127a8da211",
	},
	{
		num: "06",
		category: "Information Technology",
		title: "Problem Solving (Basic) Certificate",
		presentedBy: "HackerRank",
		description: "Issued on Sep 2022 Credential ID 17A6C542FAC1",
		skill: [
			{ name: "Programming Languages" },
			{ name: "Aptitude" },
			{ name: "Problem Solving" },
		],
		image: "/assets/certificates/c6.png",
		link: "https://www.hackerrank.com/certificates/17a6c542fac1",
	},
	{
		num: "07",
		category: "Information Technology",
		title: "Front-End Web Development using JavaScript and React.js Bootcamp",
		presentedBy: "Microsoft Learn Student Ambassadors, KIIT Chapter",
		description: "Issued on Feb 2023 Credential ID 1S9vTM",
		skill: [
			{ name: "React.js" },
			{ name: "Next.js" },
			{ name: "Tailwind CSS" },
		],
		image: "/assets/certificates/c7.png",
		link: "https://cert.devtown.in/verify/1S9vTM",
	},
	{
		num: "08",
		category: "Information Technology",
		title: "Front-End Web Development using JavaScript and React.js Bootcamp",
		presentedBy: "Microsoft Learn Student Ambassadors, KIIT Chapter",
		description: "Issued on Feb 2023 Credential ID 1S9vTM",
		skill: [
			{ name: "React.js" },
			{ name: "Next.js" },
			{ name: "Tailwind CSS" },
		],
		image: "/assets/certificates/c7.png",
		link: "https://cert.devtown.in/verify/1S9vTM",
	},
];

const CertificatesPage: React.FC = () => {
	const [certificate, setCertificate] = useState(certificates[0]);
	const handleSlideChange = (swiper: any) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update project state based on current slide index
		setCertificate(certificates[currentIndex]);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className={`min-h-[80vh] flex flex-col justify-center py-12 xl:px-0`}>
			<div className={`container mx-auto`}>
				<div className={`flex flex-col xl:flex-row gap-4 xl:gap-[30px]`}>
					<div
						className={`w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none`}>
						<div className={`flex flex-col gap-[30px] h-[50%]`}>
							{/* outline num */}
							<div
								className={`text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline`}>
								{certificate.num}
							</div>
							{/* certificate category */}
							<div className={`flex flex-col gap-2`}>
								<h1
									className={`order-2 text-[30px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500`}>
									{certificate.title}
								</h1>
								<h2
									className={`order-1 text-[16px] xl:text-[18px] font-bold leading-none text-white/60 group-hover:text-accent transition-all duration-500`}>
									{certificate.category}
								</h2>
								<h3
									className={`order-3 text-[15px] xl:text-[17px] font-bold leading-none text-white/60 group-hover:text-accent transition-all duration-500`}>
									{certificate.presentedBy}
								</h3>
							</div>
							{/* certificate description */}
							<p className={`text-white/60 `}>{certificate.description}</p>
							{/* skill */}
							<ul className={`flex flex-wrap gap-4`}>
								{certificate.skill.map((item, index) => {
									return (
										<li
											key={index}
											className={`text-md md:text-xl text-accent`}>
											{item.name}
											{index !== certificate.skill.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/* border */}
							<div className={`border border-white/20`}></div>
							{/* buttons */}
							<div className={`flex items-center gap-4`}>
								{/* link certificate button */}
								<Link href={certificate.link}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger
												className={`w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group`}>
												<ArrowUpRight
													className={`text-white text-3xl group-hover:text-accent`}
												/>
											</TooltipTrigger>
											<TooltipContent>
												<p>certificate link</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* Any other buttons you wish to add */}
							</div>
						</div>
					</div>
					<div className={`w-full xl:w-[50%]`}>
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className={`xl:h-[520px] mb-12`}
							onSlideChange={handleSlideChange}>
							{certificates.map((certificate, index) => {
								return (
									<SwiperSlide key={index} className={`w-full`}>
										<div
											className={`h-[320px] md:h-[460px] relative group flex justify-center items-center bg-pink-50/5`}>
											{/* overlay */}
											<div
												className={`absolute top-0 bottom-0 w-full h-full bg-black/10 z-10`}></div>
											{/* image */}
											<div className={`relative w-full h-full`}>
												<Image
													src={certificate.image}
													alt={certificate.title}
													fill
													className={`object-contain`}
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/* Slider Buttons */}
							<WorkSliderBtns
								containerStyles={`flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none`}
								btnStyles={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[35px] h-[35px] flex justify-center items-center rounded-full shadow-lg transition-all duration-500`}
								iconStyles={`text-3xl`}
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default CertificatesPage;
