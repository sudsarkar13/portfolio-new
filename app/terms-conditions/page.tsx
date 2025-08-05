"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsConditions: React.FC = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
					className="py-12 xl:py-24">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
						className="max-w-4xl mx-auto">
						<h1 className="text-4xl xl:text-6xl font-bold text-accent mb-8">
							Terms & Conditions
						</h1>

						<div className="text-white/80 space-y-8 text-sm xl:text-base leading-relaxed">
							<p className="text-white/60 mb-12">
								Last updated: {new Date().toLocaleDateString()}
							</p>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									1. Acceptance of Terms
								</h2>
								<p>
									By accessing and using this website (sudeepta-sarkar.com), you
									accept and agree to be bound by the terms and provision of
									this agreement. These Terms & Conditions apply to all
									visitors, users, and others who access or use the service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									2. Description of Service
								</h2>
								<p className="mb-4">
									Our website provides multiple services across different
									sections:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Personal Blog:</strong> Free educational content and
										insights
									</li>
									<li>
										<strong>Community Blog:</strong> Free platform for
										community-contributed content
									</li>
									<li>
										<strong>Developer Tools:</strong> Various tools with
										different pricing models including:
										<ul className="list-disc pl-6 mt-2 space-y-1">
											<li>Free tools with unlimited usage</li>
											<li>Trial-based tools with limited usage periods</li>
											<li>Subscription-based tools with recurring charges</li>
											<li>One-time purchase tools</li>
										</ul>
									</li>
									<li>
										<strong>Portfolio Services:</strong> Professional
										development and consulting services
									</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									3. User Accounts and Registration
								</h2>
								<p className="mb-4">
									Some features of our service may require you to register for
									an account. When you create an account, you must provide
									information that is accurate, complete, and current at all
									times.
								</p>
								<p>
									You are responsible for safeguarding the password and for all
									activities that occur under your account.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									4. Payment Terms
								</h2>
								<p className="mb-4">Payment terms vary by service type:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Free Services:</strong> Personal blog and community
										blog content are provided free of charge
									</li>
									<li>
										<strong>Subscription Services:</strong> Recurring charges
										are billed monthly or annually as specified
									</li>
									<li>
										<strong>Trial Services:</strong> May convert to paid
										subscriptions after trial period ends
									</li>
									<li>
										<strong>One-time Services:</strong> Professional services
										and one-time tool purchases
									</li>
								</ul>
								<p className="mt-4">
									All payments are processed through secure third-party payment
									processors. We do not store your payment information.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									5. Intellectual Property Rights
								</h2>
								<p className="mb-4">
									The service and its original content, features, and
									functionality are and will remain the exclusive property of
									Sudeepta Sarkar and its licensors. The service is protected by
									copyright, trademark, and other laws.
								</p>
								<p>
									Users retain ownership of content they submit to community
									blogs, but grant us a license to use, modify, and display such
									content.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									6. User Content and Conduct
								</h2>
								<p className="mb-4">
									Our service allows you to post, link, store, share and
									otherwise make available certain information, text, graphics,
									or other material. You are responsible for the content you
									post.
								</p>
								<p className="mb-4">You agree not to use the service to:</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										Post content that is illegal, harmful, threatening, abusive,
										or discriminatory
									</li>
									<li>Violate any applicable laws or regulations</li>
									<li>Infringe upon the rights of others</li>
									<li>Distribute spam or unsolicited communications</li>
									<li>Attempt to gain unauthorized access to our systems</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									7. Service Availability
								</h2>
								<p>
									We strive to maintain high availability of our services, but
									we do not guarantee uninterrupted access. We may temporarily
									suspend services for maintenance, updates, or due to
									circumstances beyond our control.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									8. Limitation of Liability
								</h2>
								<p>
									In no event shall Sudeepta Sarkar, nor its directors,
									employees, partners, agents, suppliers, or affiliates, be
									liable for any indirect, incidental, special, consequential,
									or punitive damages, including without limitation, loss of
									profits, data, use, goodwill, or other intangible losses,
									resulting from your use of the service.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									9. Termination
								</h2>
								<p>
									We may terminate or suspend your account and bar access to the
									service immediately, without prior notice or liability, under
									our sole discretion, for any reason whatsoever and without
									limitation, including but not limited to a breach of the
									Terms.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									10. Changes to Terms
								</h2>
								<p>
									We reserve the right, at our sole discretion, to modify or
									replace these Terms at any time. If a revision is material, we
									will provide at least 30 days notice prior to any new terms
									taking effect.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									11. Contact Information
								</h2>
								<p>
									If you have any questions about these Terms & Conditions,
									please contact us through our contact page or email us
									directly.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									12. Governing Law
								</h2>
								<p>
									These Terms shall be interpreted and governed in accordance
									with the laws of India, without regard to its conflict of law
									provisions. Our failure to enforce any right or provision of
									these Terms will not be considered a waiver of those rights.
								</p>
							</section>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default TermsConditions;
