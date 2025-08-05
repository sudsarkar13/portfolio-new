"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
			className="bg-primary border-t border-accent/20 mt-12">
			<div className="container mx-auto py-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="col-span-1 md:col-span-3 xl:col-span-1">
						<h3 className="text-2xl font-bold text-white mb-4">
							Sudeepta<span className={`text-accent`}>.</span>
						</h3>
						<p className="text-white/60 text-sm leading-relaxed">
							Full-stack developer passionate about creating innovative
							solutions and sharing knowledge through blogs and tools.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/work"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Work
								</Link>
							</li>
							<li>
								<Link
									href="/certificates"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Certificates
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Content & Tools */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">
							Content & Tools
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/resume"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Resume
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Personal Blog
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Community Blog
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Developer Tools
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/privacy-policy"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms-conditions"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/cancellations"
									className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
									Cancellations
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-accent/20 mt-8 pt-6">
					<div className="flex flex-col xl:flex-row justify-between items-center space-y-4 xl:space-y-0">
						<p className="text-white/60 text-sm">
							© {currentYear} Sudeepta Sarkar. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
