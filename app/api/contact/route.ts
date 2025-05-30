import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { join } from "path";

export async function POST(req: Request) {
	try {
		const { firstName, lastName, email, phone, service, message } =
			await req.json();

		// Read the email template
		const templatePath = join(
			process.cwd(),
			"app/api/contact/email-template.html"
		);
		let emailTemplate = readFileSync(templatePath, "utf8");

		// Replace template variables
		emailTemplate = emailTemplate
			.replace("{{name}}", `${firstName} ${lastName}`)
			.replace("{{email}}", email)
			.replace("{{phone}}", phone)
			.replace("{{service}}", service)
			.replace("{{message}}", message)
			.replace("{{year}}", new Date().getFullYear().toString());

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: "admin@sudeeptasarkar.in",
			to: process.env.EMAIL_USER,
			subject: `New Contact Form Submission from ${firstName} ${lastName}`,
			html: emailTemplate,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
