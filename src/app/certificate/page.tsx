import MainWrapper from "@/components/main-wrapper"
import Image from "next/image"

export default function Certificate() {
	return (
		<MainWrapper>
			<section id="certificate" className="py-20">
				<div className="section-title mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Certificate</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Certificate
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid grid-cols-1 xl:grid-cols-3 justify-center gap-6">
						<div className="flex flex-col gap-6">
							
							<Image
								src="/assets/certificates/Coursera  Front-End Development.jpg"
								alt="Coursera  Front-End Development"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Coursera Programming with JavaScript.jpg"
								alt="Coursera Programming with JavaScript"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/sourav sih phase 1 certificate.jpg"
								alt="sourav sih phase 1 certificate"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/CertificateOfCompletion_Introduction to Artificial Intelligence .jpg"
								alt="CertificateOfCompletion_Introduction to Artificial Intelligence"
								width={640}
								height={640}
							/>
						
						</div>

						<div className="flex flex-col gap-6">
						    <Image
								src="/assets/certificates/Coursera Back-End Development.jpg"
								alt="Coursera Back-End Development"
								width={640}
								height={640}
							/>
							
							<Image
								src="/assets/certificates/fundamentals of computer Programing with c language.jpg"
								alt="fundamentals of computer Programing with c language"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/sourav sih phase 2 certificate.jpg"
								alt="sourav sih phase 2 certificate"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/CertificateOfCompletion_What Is Generative AI.jpg"
								alt="CertificateOfCompletion_What Is Generative AI"
								width={640}
								height={640}
							/>
						</div>

						<div className="flex flex-col gap-6">
						<Image
								src="/assets/certificates/Coursera version control.jpg"
								alt="Coursera version control"
								width={640}
								height={640}
							/>
							
							<Image
								src="/assets/certificates/sourav_ intership_certificate.jpg"
								alt="sourav_ intership_certificate"
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/CertificateOfCompletion_Ethics in the Age of Generative AI .jpg"
								alt="CertificateOfCompletion_Ethics in the Age of Generative AI"
								width={640}
								height={640}
							/>
							
							
						</div>
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
