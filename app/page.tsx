"use client";

import Badge from "@/components/badge";
import { useEffect, useState } from "react";

export default function Home() {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 1000);
		}
	}, [copied]);

	const currentYear = new Date().getFullYear();

	return (
		<main className={`grid grid-cols-12 min-h-screen`}>
			<div className={`col-span-12 lg:col-span-6`}>
				<div className={`flex justify-center bg-[#222] pt-10 lg:pt-0 h-full`}>
					<img
						src="/heather-alt.JPG"
						className={`h-125 lg:h-auto lg:object-cover`}
						alt="a portrait of Heather Park"
					/>
				</div>
			</div>

			<div
				className={`col-span-12 lg:col-span-6 bg-[#222] text-neutral-200 text-lg p-10 lg:p-16`}
			>
				<div className={`font-medium`}>
					<h1
						className={`text-[#d4f0e7] font-montserrat font-bold text-4xl mb-8`}
					>
						Hello! I'm Heather Park.
					</h1>
					<p className={`font-lora mb-5 leading-loose`}>
						I am a Korean-English Bilingual Speech Language Pathologist,
						licensed in New York since 2019. I'm currently working at the DoE to
						provide bilingual speech-language services. I also consult as a
						Product Advisor for{" "}
						<a
							className={`underline`}
							href="https://plosive.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Plosive
						</a>
						, an online productivity platform for SLPs.
					</p>
					<p className={`font-lora mb-5 leading-loose`}>
						Previously, I’ve worked at public charter schools in Harlem,
						adapting quickly to manage caseloads of upwards to 65+ students and
						strategically leveraging available resources. I’ve also worked with
						patients at various skilled nursing facilities, who presented with
						dysphagia, dysarthria, aphasia, dysphonia, dementia, etc.
					</p>
					<p className={`bold font-bold text-lg mb-8 font-lora`}>
						I am not taking private clients at this time.
					</p>
					{/* <p className={`font-lora mb-5 leading-loose`}>
						If you&apos;re looking to connect with a bilingual Korean-English
						SLP, please post an inquiry on{" "}
						<a
							href="https://www.facebook.com/groups/koreanslps"
							target="_blank"
							rel="noopener noreferrer"
							className={``}
						>
							the Korean Speech-Language Pathologists Facebook page
						</a>
						. For other career-related or personal inquiries, please feel free
						to contact me via email.
					</p> */}
					<div className={`grid gap-5 grid-cols-2 mt-5`}>
						<div className={`col-span-2 lg:col-span-1`}>
							<p
								className={`font-bold font-montserrat text-neutral-500 text-base tracking-tight mb-2`}
							>
								Contact
							</p>
							<ul>
								{/* <li>Blog</li> */}
								<li style={{ position: "relative" }}>
									<button
										className={`text-base font-lora`}
										type="button"
										onKeyUp={() => {
											navigator.clipboard.writeText(
												"heatherpark.slp@gmail.com",
											);
										}}
										onClick={() => {
											navigator.clipboard.writeText(
												"heatherpark.slp@gmail.com",
											);
											setCopied(true);
										}}
										style={{ cursor: "pointer" }}
									>
										heatherpark.slp@gmail.com
									</button>

									{copied && (
										<span className={`animate__animated animate__fadeOut`}>
											Copied!
										</span>
									)}
								</li>
							</ul>
						</div>
						<div className={`col-span-2 lg:col-span-1`}>
							<p
								className={`font-bold font-montserrat text-neutral-500 text-base tracking-tight mb-2`}
							>
								Socials
							</p>
							<ul className={`font-lora text-base space-y-1`}>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.youtube.com/channel/UCGPR3_7W3ZEtf2SB_dZjRRg"
									>
										YouTube
									</a>
								</li>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.facebook.com/groups/koreanslps"
									>
										Korean SLPs @ Facebook
									</a>
								</li>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.instagram.com/thekoreanslp/"
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.linkedin.com/in/heather-park-0696ab136/"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
						<div className={`col-span-2 lg:col-span-1`}>
							<p
								className={`font-bold font-montserrat text-neutral-500 text-sm mb-2`}
							>
								Resources
							</p>
							<ul className={`font-lora text-base space-y-2`}>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.teacherspayteachers.com/Product/Tips-For-Tots-Encouraging-Your-Children-to-Talk-6526232"
									>
										<Badge />
										Tips For Tots: Encouraging Your Children To Talk
									</a>
								</li>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://www.teacherspayteachers.com/Product/FREEBIE-National-Literacy-Month-Calendar-2020-6133556"
									>
										<Badge />
										National Literacy Month - November Activities Calendar 2020
									</a>
								</li>
								<li>
									<a
										rel="noopener noreferrer"
										target="_blank"
										href="https://plosive.app"
									>
										<Badge paid />
										Plosive - A Modern, AI-Assisted Productivity Platform for
										School-Based SLPs
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div style={{ marginBottom: "30px" }} />
					{/* <blockquote>
              Making effective communication, a human right, accessible and
              achievable for all.
              <span>- ASHA</span>
            </blockquote> */}
					<small
						className={`text-base uppercase text-neutral-500 tracking-wide`}
					>
						© {currentYear} Heather Park
					</small>
				</div>
			</div>
		</main>
	);
}
