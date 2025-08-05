"use client";
import React from "react";
import { motion } from "framer-motion";

const Cancellations: React.FC = () => {
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
							Cancellation Policy
						</h1>

						<div className="text-white/80 space-y-8 text-sm xl:text-base leading-relaxed">
							<p className="text-white/60 mb-12">
								Last updated: {new Date().toLocaleDateString()}
							</p>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Overview
								</h2>
								<p>
									This cancellation policy outlines the terms and conditions for
									cancelling various services offered through our platform.
									Different services have different cancellation policies based
									on their nature and pricing model.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Service Categories
								</h2>

								<div className="space-y-6">
									<div className="bg-white/5 p-6 rounded-lg border border-accent/20">
										<h3 className="text-xl font-semibold text-accent mb-3">
											Personal Blog
										</h3>
										<p className="mb-2">
											<strong>Service Type:</strong> Free Content
										</p>
										<p className="mb-2">
											<strong>Cancellation:</strong> Not applicable
										</p>
										<p>
											Our personal blog content is completely free. There are no
											subscriptions or payments involved, therefore no
											cancellations are necessary. You can stop accessing the
											content at any time.
										</p>
									</div>

									<div className="bg-white/5 p-6 rounded-lg border border-accent/20">
										<h3 className="text-xl font-semibold text-accent mb-3">
											Community Blog
										</h3>
										<p className="mb-2">
											<strong>Service Type:</strong> Free Platform
										</p>
										<p className="mb-2">
											<strong>Cancellation:</strong> Account Deletion Available
										</p>
										<p>
											The community blog platform is completely free to use.
											Users can delete their accounts at any time through their
											profile settings. Content contributions may remain visible
											after account deletion unless specifically requested for
											removal.
										</p>
									</div>

									<div className="bg-white/5 p-6 rounded-lg border border-accent/20">
										<h3 className="text-xl font-semibold text-accent mb-3">
											Developer Tools
										</h3>
										<p className="mb-4">
											Our developer tools have varying pricing models, each with
											specific cancellation terms:
										</p>

										<div className="space-y-4 ml-4">
											<div>
												<h4 className="text-lg font-medium text-white mb-2">
													Free Tools
												</h4>
												<p>
													<strong>Cancellation:</strong> Not applicable -
													Continue using indefinitely
												</p>
											</div>

											<div>
												<h4 className="text-lg font-medium text-white mb-2">
													Trial-Based Tools
												</h4>
												<p className="mb-2">
													<strong>Trial Period:</strong> Varies by tool
													(typically 7-30 days)
												</p>
												<p className="mb-2">
													<strong>Cancellation:</strong> Cancel anytime during
													trial period
												</p>
												<p>
													You can cancel your trial at any time before it
													expires. No charges will be applied if cancelled
													during the trial period.
												</p>
											</div>

											<div>
												<h4 className="text-lg font-medium text-white mb-2">
													Subscription-Based Tools
												</h4>
												<p className="mb-2">
													<strong>Monthly Subscriptions:</strong> Cancel
													anytime, effective at end of current billing cycle
												</p>
												<p className="mb-2">
													<strong>Annual Subscriptions:</strong> Cancel anytime,
													effective at end of current billing year
												</p>
												<p>
													Subscription cancellations take effect at the end of
													the current billing period. You will continue to have
													access until that time.
												</p>
											</div>

											<div>
												<h4 className="text-lg font-medium text-white mb-2">
													One-Time Purchase Tools
												</h4>
												<p className="mb-2">
													<strong>Cancellation:</strong> Not applicable after
													purchase
												</p>
												<p>
													One-time purchases are final. However, you may be
													eligible for a refund under our specific refund
													conditions (see refund policy section below).
												</p>
											</div>
										</div>
									</div>

									<div className="bg-white/5 p-6 rounded-lg border border-accent/20">
										<h3 className="text-xl font-semibold text-accent mb-3">
											Professional Services
										</h3>
										<p className="mb-2">
											<strong>Service Type:</strong> Custom Development &
											Consulting
										</p>
										<p className="mb-2">
											<strong>Cancellation:</strong> Contract-specific terms
											apply
										</p>
										<p>
											Professional services are governed by individual
											contracts. Cancellation terms are specified in each
											service agreement and may vary based on project scope,
											timeline, and completion status.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									How to Cancel
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											Self-Service Cancellation
										</h3>
										<ul className="list-disc pl-6 space-y-1">
											<li>Log into your account dashboard</li>
											<li>
												Navigate to "Subscription Management" or "Billing"
											</li>
											<li>Select the service you wish to cancel</li>
											<li>
												Click "Cancel Subscription" and follow the prompts
											</li>
										</ul>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											Contact Support
										</h3>
										<p className="mb-2">
											If you're unable to cancel through self-service options,
											contact us:
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>Email: Through our contact form</li>
											<li>
												Include your account details and service to be cancelled
											</li>
											<li>
												We'll process your request within 1-2 business days
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Refund Policy
								</h2>

								<div className="space-y-4">
									<div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
										<h3 className="text-lg font-semibold text-red-400 mb-2">
											Important: No Refunds Policy
										</h3>
										<p className="text-red-300">
											<strong>All sales are final.</strong> We do not provide
											refunds for any services, including but not limited to
											developer tools, subscriptions, or professional services.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											Exceptions
										</h3>
										<p className="mb-2">
											Refunds may only be considered in the following
											exceptional circumstances:
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>
												Technical issues preventing service access for more than
												7 consecutive days
											</li>
											<li>Billing errors or duplicate charges</li>
											<li>
												Services not delivered as contractually agreed
												(professional services only)
											</li>
										</ul>
										<p className="mt-2 text-white/60">
											All refund requests must be submitted within 30 days of
											the original transaction and will be reviewed on a
											case-by-case basis.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Data Retention
								</h2>
								<p className="mb-4">Upon cancellation of services:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Account data will be retained for 30 days to allow for
										reactivation
									</li>
									<li>
										After 30 days, personal data will be permanently deleted
									</li>
									<li>
										Public contributions (like community blog posts) may remain
										visible
									</li>
									<li>
										Usage analytics may be retained in anonymized form for
										service improvement
									</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Contact Information
								</h2>
								<p>
									For cancellation requests, billing questions, or any issues
									related to this policy, please contact us through our contact
									form or reach out directly. We aim to respond to all
									cancellation requests within 1-2 business days.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									Policy Updates
								</h2>
								<p>
									This cancellation policy may be updated from time to time. We
									will notify users of any material changes via email or through
									our platform notifications. Continued use of our services
									after policy updates constitutes acceptance of the new terms.
								</p>
							</section>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Cancellations;
