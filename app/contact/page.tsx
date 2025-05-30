"use client";

import React, { useState } from "react";
import { Button, Input, Textarea } from "@/components/ui";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "+91 7504614781, +91 7809518625",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "admin@sudeeptasarkar.in, sudsarkar13@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description:
			"Plot No.178, DDN - 061, P.C. Sarkar Lane, Arunodaya Nagar, Cuttack, Odisha, Pincode - 753012",
	},
];

const ContactPage: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
		"idle"
	);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Failed to send message");

			setFormStatus("success");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				service: "",
				message: "",
			});
			toast.success("Message sent successfully!");
			// Reload the page after showing the success toast
			setTimeout(() => {
				window.location.reload();
			}, 1500); // Wait for 1.5 seconds so the user can see the success message
		} catch (error) {
			setFormStatus("error");
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className={`py-6`}>
			<Toaster position="bottom-right" />
			<div className={`container mx-auto`}>
				<div className={`flex flex-col xl:flex-row gap-[30px]`}>
					{/* form */}
					<div className={`xl:w-[54%] order-2 xl:order-none`}>
						<form
							onSubmit={handleSubmit}
							className={`flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl`}>
							<h3 className={`text-4xl text-accent`}>Let's Talk</h3>
							<p className={`text-white/60`}>
								Great things are never done by one person. They're done by a
								team of people working together. Let's collaborate and bring
								your vision to life. Whether you have a specific project in mind
								or just want to explore possibilities, I'm here to help turn
								your ideas into reality. Together, we can create something
								extraordinary.
							</p>
							{/* input */}
							<div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
								<Input
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									type="text"
									placeholder="First Name"
								/>
								<Input
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									type="text"
									placeholder="Last Name"
								/>
								<Input
									name="email"
									value={formData.email}
									onChange={handleChange}
									type="email"
									placeholder="Email Address"
								/>
								<Input
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									type="phone"
									placeholder="Phone Number"
								/>
							</div>
							{/* select option*/}
							<Select
								onValueChange={(value) =>
									setFormData((prev) => ({ ...prev, service: value }))
								}>
								<SelectTrigger className={`w-full `}>
									<SelectValue placeholder={`Select a service`} />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="Web Development">
											Web Development
										</SelectItem>
										<SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
										<SelectItem value="Android App Development">
											Android App Development
										</SelectItem>
										<SelectItem value="SEO">SEO</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* textarea */}
							<Textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Type your message here."
								className={`h-[200px]`}
							/>
							{/* button */}
							<div className={`flex justify-center`}>
								<Button
									size={`md`}
									type="submit"
									className={`max-w-40`}
									disabled={isSubmitting}>
									{isSubmitting ? "Sending..." : "Send message"}
								</Button>
							</div>
						</form>
					</div>
					{/* info */}
					<div
						className={`flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0`}>
						<ul className={`flex flex-col gap-10`}>
							{info.map((item, index) => {
								return (
									<li key={index} className={`flex items-center gap-6`}>
										<div
											className={`w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center`}>
											<div className={`text-[28px]`}>{item.icon}</div>
										</div>
										<div className={`flex-1`}>
											<p className={`text-white/60`}>{item.title}</p>
											<h3 className={`text-lg xl:text-xl flex flex-wrap`}>
												{item.description}
											</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default ContactPage;
