"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Services",
		path: "/services",
	},
	{
		name: "Resume",
		path: "/resume",
	},
	{
		name: "Work",
		path: "/work",
	},
	{
		name: "Certificates",
		path: "/certificates",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

const Nav: React.FC = () => {
	const pathname = usePathname();
	return (
		<main>
			<div>
				<nav className={`flex gap-8`}>
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								href={link.path}
								className={`${
									link.path === pathname &&
									"text-accent border-b-2 border-accent"
								} font-medium hover:text-accent transition-all`}>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</div>
		</main>
	);
};

export default Nav;
