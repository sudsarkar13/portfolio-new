import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cancellation Policy | Sudeepta Sarkar",
	description:
		"Cancellation and refund policy for Sudeepta Sarkar's services including developer tools, subscriptions, and professional services.",
	robots: "index, follow",
	openGraph: {
		title: "Cancellation Policy | Sudeepta Sarkar",
		description:
			"Cancellation and refund policy for Sudeepta Sarkar's services including developer tools, subscriptions, and professional services.",
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