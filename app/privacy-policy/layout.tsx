import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Sudeepta Sarkar",
	description:
		"Privacy policy for Sudeepta Sarkar's portfolio website detailing how personal data is collected, used, and protected across all services.",
	robots: "index, follow",
	openGraph: {
		title: "Privacy Policy | Sudeepta Sarkar",
		description:
			"Privacy policy for Sudeepta Sarkar's portfolio website detailing how personal data is collected, used, and protected across all services.",
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