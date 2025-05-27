import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const { firstName, lastName, email, phone, service, message } =
			await req.json();

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
			html: `
        <!DOCTYPE html>
<html>
	<head>
		<style>
			body {
				font-family: Arial, sans-serif;
				line-height: 1.6;
				color: #333;
			}
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
			}
			.header {
				background-color: #0e52e6;
				padding: 20px;
				border-radius: 5px;
			}
			.content {
				margin-top: 20px;
			}
			.field {
				margin-bottom: 15px;
			}
			.label {
				font-weight: bold;
				color: #555;
			}
			.message-box {
				background-color: #c5c5c5;
				padding: 15px;
				border-radius: 5px;
				margin-top: 10px;
        color: #fff;
			}
        .message-text {
        background-color: #f1f1f1;
        padding: 10px;
        border-radius: 10px;
        color: #333;
      }
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h2 style="margin: 0; color: #fff">New Contact Form Submission</h2>
			</div>
			<div class="content">
				<div class="field">
					<span class="label">Full Name:</span> ${firstName} ${lastName}
				</div>
				<div class="field"><span class="label">Email:</span> ${email}</div>
				<div class="field"><span class="label">Phone:</span> ${phone}</div>
				<div class="field"><span class="label">Service:</span> ${service}</div>
				<div class="field">
					<div class="message-box">
          <p class="message-text"><span class="label">Message:</span> ${message}</p>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
    `,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
