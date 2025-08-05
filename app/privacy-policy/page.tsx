"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
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
							Privacy Policy
						</h1>

						<div className="text-white/80 space-y-8 text-sm xl:text-base leading-relaxed">
							<p className="text-white/60 mb-12">
								Last updated: {new Date().toLocaleDateString()}
							</p>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									1. Introduction
								</h2>
								<p>
									Sudeepta Sarkar ("we," "our," or "us") operates the website
									sudeeptasarkar.in (the "Service"). This page informs you of
									our policies regarding the collection, use, and disclosure of
									personal data when you use our Service and the choices you
									have associated with that data.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									2. Information We Collect
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											2.1 Personal Information
										</h3>
										<p className="mb-2">
											We may collect the following types of personal
											information:
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>
												Name and contact information (email address, phone
												number)
											</li>
											<li>Account credentials (username, password)</li>
											<li>
												Payment information (processed by third-party payment
												processors)
											</li>
											<li>
												Professional information (company, job title, project
												requirements)
											</li>
											<li>
												Communication data (messages, feedback, support
												requests)
											</li>
										</ul>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											2.2 Usage Data
										</h3>
										<p className="mb-2">
											We automatically collect certain information when you
											visit our Service:
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>IP address and device information</li>
											<li>Browser type and version</li>
											<li>Pages visited and time spent on pages</li>
											<li>Referring website information</li>
											<li>Operating system and device identifiers</li>
										</ul>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											2.3 Cookies and Tracking Technologies
										</h3>
										<p>
											We use cookies and similar tracking technologies to track
											activity on our Service and hold certain information. You
											can instruct your browser to refuse all cookies or to
											indicate when a cookie is being sent.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									3. How We Use Your Information
								</h2>

								<p className="mb-4">
									We use the collected data for various purposes:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>To provide and maintain our Service</li>
									<li>To process transactions and manage subscriptions</li>
									<li>
										To send you technical notices, updates, security alerts, and
										support messages
									</li>
									<li>
										To respond to your comments, questions, and customer service
										requests
									</li>
									<li>
										To communicate with you about products, services, offers,
										and events
									</li>
									<li>
										To monitor and analyze trends, usage, and activities in
										connection with our Service
									</li>
									<li>
										To detect, investigate, and prevent fraudulent transactions
										and other illegal activities
									</li>
									<li>To personalize and improve the Service</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									4. Information Sharing and Disclosure
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											4.1 Service Providers
										</h3>
										<p>
											We may employ third-party companies and individuals to
											facilitate our Service, provide the Service on our behalf,
											perform Service-related services, or assist us in
											analyzing how our Service is used.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											4.2 Payment Processors
										</h3>
										<p>
											Payment information is processed by secure third-party
											payment processors. We do not store or have access to your
											complete payment card information.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											4.3 Legal Requirements
										</h3>
										<p className="mb-2">
											We may disclose your personal information if required by
											law or in response to:
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>A subpoena or court order</li>
											<li>
												A request from law enforcement or government agency
											</li>
											<li>To protect our rights, property, or safety</li>
											<li>
												To investigate potential violations of our terms of
												service
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									5. Data Retention
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											5.1 Account Data
										</h3>
										<p>
											We retain your personal information for as long as your
											account is active or as needed to provide you services. We
											will retain and use your information as necessary to
											comply with our legal obligations, resolve disputes, and
											enforce our agreements.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											5.2 Service-Specific Retention
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li>
												<strong>Personal Blog:</strong> No personal data stored
											</li>
											<li>
												<strong>Community Blog:</strong> User content may be
												retained even after account deletion unless specifically
												requested for removal
											</li>
											<li>
												<strong>Developer Tools:</strong> Usage data retained
												for service improvement and billing purposes
											</li>
											<li>
												<strong>Professional Services:</strong> Project-related
												communications retained for legal and business purposes
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									6. Data Security
								</h2>
								<p className="mb-4">
									The security of your data is important to us. We implement
									appropriate technical and organizational measures to protect
									your personal information against unauthorized access,
									alteration, disclosure, or destruction.
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Encryption of data in transit and at rest</li>
									<li>Regular security assessments and updates</li>
									<li>Access controls and authentication measures</li>
									<li>Secure hosting infrastructure</li>
									<li>Regular backups and disaster recovery procedures</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									7. Your Data Protection Rights
								</h2>

								<p className="mb-4">
									Depending on your location, you may have the following rights
									regarding your personal information:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Access:</strong> Request copies of your personal
										data
									</li>
									<li>
										<strong>Rectification:</strong> Request correction of
										inaccurate or incomplete data
									</li>
									<li>
										<strong>Erasure:</strong> Request deletion of your personal
										data under certain conditions
									</li>
									<li>
										<strong>Restrict Processing:</strong> Request limitation of
										how we process your data
									</li>
									<li>
										<strong>Data Portability:</strong> Request transfer of your
										data to another organization
									</li>
									<li>
										<strong>Object:</strong> Object to our processing of your
										personal data under certain conditions
									</li>
								</ul>

								<p className="mt-4">
									To exercise these rights, please contact us through our
									contact form. We will respond to your request within 30 days.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									8. Third-Party Services
								</h2>

								<div className="space-y-4">
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											8.1 Analytics Services
										</h3>
										<p>
											We use analytics services (such as Google Analytics) to
											help understand how our Service is used. These services
											may collect information about your use of our Service and
											other websites.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											8.2 Social Media Integration
										</h3>
										<p>
											Our Service may include social media features. These
											features may collect your IP address, the page you are
											visiting on our site, and may set a cookie to enable the
											feature to function properly.
										</p>
									</div>

									<div>
										<h3 className="text-lg font-semibold text-white mb-2">
											8.3 External Links
										</h3>
										<p>
											Our Service may contain links to other sites that are not
											operated by us. We strongly advise you to review the
											Privacy Policy of every site you visit.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									9. Children's Privacy
								</h2>
								<p>
									Our Service does not address anyone under the age of 13. We do
									not knowingly collect personally identifiable information from
									children under 13. If you are a parent or guardian and you are
									aware that your child has provided us with personal data,
									please contact us.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									10. International Data Transfers
								</h2>
								<p>
									Your information may be transferred to and maintained on
									computers located outside of your state, province, country, or
									other governmental jurisdiction where the data protection laws
									may differ from those of your jurisdiction. We will take all
									steps reasonably necessary to ensure that your data is treated
									securely and in accordance with this Privacy Policy.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									11. Changes to This Privacy Policy
								</h2>
								<p>
									We may update our Privacy Policy from time to time. We will
									notify you of any changes by posting the new Privacy Policy on
									this page and updating the "Last updated" date. For material
									changes, we may also send you an email notification.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-accent mb-4">
									12. Contact Us
								</h2>
								<p className="mb-4">
									If you have any questions about this Privacy Policy, please
									contact us:
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>Through our contact form on the website</li>
									<li>By email (available through our contact page)</li>
									<li>
										Through our support system for account-related privacy
										questions
									</li>
								</ul>

								<p className="mt-4 text-white/60">
									We are committed to resolving any privacy concerns you may
									have and will respond to your inquiries within a reasonable
									timeframe.
								</p>
							</section>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
