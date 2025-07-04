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
import { certificates } from "@/data/certificates";

function CertificatesPage() {
	const [certificate, setCertificate] = useState(certificates[0]);

	const handleSlideChange = (swiper: any) => {
		const currentIndex = swiper.activeIndex;
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
									{certificate.issuedBy}
								</h3>
							</div>
							{/* certificate description */}
							<p className={`text-white/60`}>{certificate.description}</p>
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
													priority={true}
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
}

export default CertificatesPage;
