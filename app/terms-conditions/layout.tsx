import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions | Sudeepta Sarkar",
	description:
		"Terms and conditions for using Sudeepta Sarkar's portfolio website, including policies for blog content, developer tools, and professional services.",
	robots: "index, follow",
	openGraph: {
		title: "Terms & Conditions | Sudeepta Sarkar",
		description:
			"Terms and conditions for using Sudeepta Sarkar's portfolio website, including policies for blog content, developer tools, and professional services.",
		type: "website",
	},
};

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<main>
			<div>{children}</div>
		</main>
	);
};

export default layout;
