"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Code2, GraduationCap, User } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Experience {
	value: number;
	unit: "Years" | "Months";
}

const calculateExperience = (): Experience => {
	const startDate = new Date(2024, 3); // April 2024 (month is 0-based)
	const currentDate = new Date();

	const diffInMonths =
		(currentDate.getFullYear() - startDate.getFullYear()) * 12 +
		(currentDate.getMonth() - startDate.getMonth()) +
		(currentDate.getDate() - startDate.getDate()) / 30;

	if (diffInMonths < 0) return { value: 0, unit: "Months" };

	// Convert to years with 1 decimal place
	const years = +(diffInMonths / 12).toFixed(1);

	if (years < 1) {
		return {
			value: Math.max(0, Math.round(diffInMonths)),
			unit: "Months",
		};
	}

	return {
		value: years,
		unit: "Years",
	};
};

// Calculates years and months of experience
// Returns formatted string like "2+ Years 3 Months" or "5 Months"
const calculateLexProtectorExperience = () => {
	// Automate Experience Year/Month Increment function.
	const startDate = new Date(2025, 6, 1); // June 2, 2025 (month is 0-based)
	const currentDate = new Date();

	// Calculate difference in milliseconds
	const diffTime = currentDate.getTime() - startDate.getTime();

	// If start date is in the future
	if (diffTime < 0) {
		return "0 Days";
	}

	// Calculate total months more accurately
	let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
	totalMonths += currentDate.getMonth() - startDate.getMonth();

	// Calculate days
	let days = currentDate.getDate() - startDate.getDate();

	// Adjust for day differences
	if (days < 0) {
		totalMonths--;
		// Get days in previous month
		const prevMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			0
		);
		days += prevMonth.getDate();
	}

	// Ensure we don't have negative months
	totalMonths = Math.max(0, totalMonths);

	// Format the result
	let result = "";

	// Add years if any
	if (totalMonths >= 12) {
		const experienceYears = Math.floor(totalMonths / 12);
		result += `${experienceYears}+ Year${experienceYears !== 1 ? "s" : ""}`;
	}

	// Add months if any
	const experienceMonths = totalMonths % 12;
	if (experienceMonths > 0) {
		if (result) result += " ";
		result += `${experienceMonths} Month${experienceMonths !== 1 ? "s" : ""}`;
	}

	// Add days if any
	if (days > 0) {
		if (result) result += " ";
		result += `${days} Day${days !== 1 ? "s" : ""}`;
	}

	// If no time has passed, show 0 days
	if (!result) {
		result = "0 Days";
	}

	return result;
};

// About data
const about = {
	icon: <User className={`w-10 h-10`} />,
	title: "About Me",
	description:
		"Frontend developer with an eye for detail and a passion for creating beautiful, intuitive user interfaces. Committed to crafting pixel-perfect experiences while staying current with emerging frontend trends and best practices.",
	info: [
		{
			fieldName: "Name:",
			fieldValue: "Sudeepta Sarkar",
		},
		{
			fieldName: "Email:",
			fieldValue: "sudsarkar13@gmail.com",
		},
		{
			fieldName: "Phone:",
			fieldValue: "+91 7504614781",
		},
		{
			fieldName: "Professional Experience:",
			fieldValue: calculateExperience(),
		},
		{
			fieldName: "Company:",
			fieldValue: "Lex Protector LLP",
		},
		{
			fieldName: "Designation:",
			fieldValue: "Tech Specialist Intern",
		},
		{
			fieldName: "Nationality:",
			fieldValue: "Indian",
		},
		{
			fieldName: "Freelance:",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages:",
			fieldValue: "Bengali, English, Hindi, Odia",
		},
	],
};

// Experience Data
const experience = {
	icon: <Briefcase className={`w-10 h-10`} />,
	title: "My Experience",
	description:
		"My professional journey spans diverse roles in software development, from hands-on system engineering to technical leadership. I bring a blend of technical expertise and strategic thinking to deliver innovative solutions that drive business growth.",
	items: [
		{
			company: "Lex Protector LLP",
			position: "Tech Specialist",
			jobType: "Trainee",
			duration: "Jul 2025 - Present",
			experience: `01/07/2025 - ${calculateLexProtectorExperience()}`,
		},
		{
			company: "Lex Protector LLP",
			position: "Tech Specialist",
			jobType: "Internship",
			duration: "Jun 2025 - Jul 2025",
			experience: `Joined 02/06/2025 - 30/06/2025`,
		},
		{
			company: "Healthunity Solutions Pvt Ltd",
			position: "Chief Technology Officer",
			jobType: "Full-time",
			duration: "Oct 2024 - May 2025",
			experience: "Contd. 01/10/2024 - 29/05/2025",
		},
		{
			company: "Healthunity Solutions Pvt Ltd",
			position: "Frontend Developer & UI/UX Lead",
			jobType: "Trainee",
			duration: "Jun 2024 - Sept 2024",
			experience: "Contd. 01/06/2024 - 30/09/2024",
		},
		{
			company: "Healthunity Solutions Pvt Ltd",
			position: "Frontend Web Developer",
			jobType: "Internship",
			duration: "Mar 2024 - May 2024",
			experience: "Joined 01/03/2024 - 31/05/2024",
		},
		{
			company: "ProU Education",
			position: "Campus Ambassador, KIIT University",
			jobType: "Internship",
			duration: "Apr 2023 - Nov 2023",
			experience: "N/A",
		},
		{
			company: "Individual",
			position: "System Engineer",
			jobType: "Freelance",
			duration: "May 2018 - Apr 2023",
			experience: "01/05/2018 - 31/04/2023",
		},
	],
};

// Education Data
const education = {
	icon: <GraduationCap className={`w-10 h-10`} />,
	title: "My Education",
	description:
		"My educational journey has been a journey of self-discovery and growth, and I am grateful for every opportunity I have had to learn and grow.",
	items: [
		{
			institution: "KIIT University, Bhubaneswar, Odisha",
			degree: "B.Tech in CSE",
			duration: "2021 - 2024",
		},
		{
			institution: "KIIT Polytechnic, Bhubaneswar, Odisha",
			degree: "Diploma in CSE",
			duration: "2018 - 2021",
		},
		{
			institution: "D.A.V. Public School, CDA, Bidanasi, Cuttack, Odisha",
			degree: "9th & Matriculation",
			duration: "2014 - 2016",
		},
		{
			institution: "D.A.V. Public School, Rajabagicha, Cuttack, Odisha",
			degree: "Nursery - 8th",
			duration: "2004 - 2014",
		},
	],
};

// Skills Data
const skills = {
	icon: <Code2 className={`w-10 h-10`} />,
	title: "My Skills",
	description:
		"Mastering the art of coding with a diverse tech stack - where creativity meets functionality. Each skill represents a tool in my arsenal for crafting exceptional digital experiences.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "HTML",
		},
		{
			icon: <FaCss3 />,
			name: "CSS",
		},
		{
			icon: <FaJs />,
			name: "JavaScript",
		},
		{
			icon: <FaReact />,
			name: "React Js",
		},
		{
			icon: <FaNodeJs />,
			name: "Node Js",
		},
		{
			icon: <SiMongodb />,
			name: "MongoDB",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind CSS",
		},
		{
			icon: <SiNextdotjs />,
			name: "Next Js",
		},
	],
};

const ResumePage: React.FC = () => {
	return (
		<main>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
				}}
				className={`min-h-[80vh] flex items-center justify-center py-12 xl:py-0`}>
				<div className={`container mx-auto`}>
					<Tabs
						defaultValue="about"
						className={`flex flex-col lg:flex-row gap-[60px]`}>
						<TabsList
							className={`flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6`}>
							<TabsTrigger value="about">About Me</TabsTrigger>
							<TabsTrigger value="education">Education</TabsTrigger>
							<TabsTrigger value="experience">Experience</TabsTrigger>
							<TabsTrigger value="skills">Skills</TabsTrigger>
						</TabsList>

						{/* content */}
						<div className={`min-h-[70vh] w-full`}>
							{/* About */}
							<TabsContent
								value="about"
								className={`w-full text-center xl:text-left`}>
								<div className={`flex flex-col gap-[30px] `}>
									<div
										className={`flex flex-col lg:flex-row items-center gap-8 text-4xl`}>
										<span className={`text-accent`}>{about.icon}</span>
										<h3 className={`font-bold`}>{about.title}</h3>
									</div>
									<p className={`max-w-[600px] text-white/60 mx-auto xl:mx-0`}>
										{about.description}
									</p>
									<ul
										className={`grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0`}>
										{about.info.map((item, index) => {
											return (
												<li
													key={index}
													className={`flex items-center justify-center xl:justify-start gap-4`}>
													<span className={`text-white/60`}>
														{item.fieldName}
													</span>
													<span className={`text-md leading-snug`}>
														{typeof item.fieldValue === "object" &&
														"value" in item.fieldValue
															? `${item.fieldValue.value}+ ${item.fieldValue.unit}`
															: item.fieldValue}
													</span>
												</li>
											);
										})}
									</ul>
								</div>
							</TabsContent>
							{/* Education */}
							<TabsContent value="education" className={`w-full`}>
								<div
									className={`flex flex-col gap-[30px] text-center xl:text-left`}>
									<div
										className={`flex flex-col lg:flex-row items-center gap-8 text-4xl`}>
										<span className={`text-accent`}>{education.icon}</span>
										<h3 className={`font-bold`}>{education.title}</h3>
									</div>
									<p className={`max-w-[650px] text-white/60 mx-auto xl:mx-0 `}>
										{education.description}
									</p>
									<ScrollArea className={`h-[400px]`}>
										<ul
											className={`grid grid-cols-1 lg:grid-cols-2 gap-[30px]`}>
											{education.items.map((item, index) => {
												return (
													<li
														key={index}
														className={`bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
														<span className={`text-accent`}>
															{item.duration}
														</span>
														<h3
															className={`text-xl max-w-[260px] min-h-[60px] text-center lg:text-left`}>
															{item.degree}
														</h3>
														<div className={`flex items-center gap-3`}>
															{/* dot */}
															<span
																className={`w-[6px] h-[6px] bg-accent rounded-full animate-pulse`}></span>
															<p className={`text-white/60`}>
																{item.institution}
															</p>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							{/* Experience */}
							<TabsContent value="experience" className={`w-full`}>
								<div
									className={`flex flex-col gap-[30px] text-center xl:text-left`}>
									<div
										className={`flex flex-col lg:flex-row items-center gap-8 text-4xl`}>
										<span className={`text-accent`}>{experience.icon}</span>
										<h3 className={`font-bold`}>{experience.title}</h3>
									</div>
									<p className={`max-w-[650px] text-white/60 mx-auto xl:mx-0 `}>
										{experience.description}
									</p>
									<ScrollArea className={`h-[400px]`}>
										<ul
											className={`grid grid-cols-1 lg:grid-cols-2 gap-[30px]`}>
											{experience.items.map((item, index) => {
												return (
													<li
														key={index}
														className={`bg-[#232329] h-[220px] py-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}>
														<span className={`text-accent`}>
															{item.duration}
														</span>
														<h3
															className={`text-xl max-w-[260px] min-h-[60px] text-center lg:text-left`}>
															{item.position}
														</h3>
														<p className={`font-bold`}>
															Job Type: <span>{item.jobType}</span>
														</p>
														<p>{item.experience}</p>
														<div className={`flex items-center gap-3`}>
															{/* dot */}
															<span
																className={`w-[6px] h-[6px] bg-accent rounded-full animate-pulse`}></span>
															<p className={`text-white/60`}>{item.company}</p>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							{/* Skills */}
							<TabsContent value="skills" className={`w-full h-full`}>
								<div className={`flex flex-col gap-[30px]`}>
									<div
										className={`flex flex-col gap-[30px] text-center xl:text-left`}>
										<div
											className={`flex flex-col lg:flex-row items-center gap-8 text-4xl`}>
											<span className={`text-accent`}>{skills.icon}</span>
											<h3 className={`font-bold`}>{skills.title}</h3>
										</div>
										<p
											className={`max-w-[600px] text-white/60 mx-auto xl:mx-0`}>
											{skills.description}
										</p>
									</div>
									<ul
										className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]`}>
										{skills.skillList.map((skill, index) => {
											return (
												<li key={index}>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger
																className={`w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group`}>
																<div
																	className={`text-6xl group-hover:text-accent transition-all duration-300`}>
																	{skill.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className={``}>{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											);
										})}
									</ul>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</motion.div>
		</main>
	);
};

export default ResumePage;
