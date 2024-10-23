"use client"
import {
	faMugHot,
	faPalette,
	faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typewriter from "typewriter-effect"

export default function AboutMe() {
	return (
		<section id="about" className="py-20">
			<div className="section-content">
				<div className="mb-12">
					<h2 className="flex flex-wrap font-bold mb-6 text-3xl sm:text-5xl">
						Hello! I'm Sourav,&nbsp;
						<Typewriter
							options={{
								strings: ["a Software Engineer ", "an FullStack developer",],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<p className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
					An enthusiastic web developer with a passion for technology and a growing expertise 
					in backend and frontend development. Proficient in Python, HTML, CSS, JavaScript, and 
					Django, I’ve sharpened my skills through practical projects, creating seamless and 
					efficient solutions. With a strong curiosity and the ability to quickly adapt to new
					technologies, I am always eager to take on new challenges and deliver impactful results.
					</p>
				</div>
				{/* </div> */}
				<div className="grid xl:grid-cols-3 gap-6">
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
							<FontAwesomeIcon
								icon={faPuzzlePiece}
								className="text-4xl lg:text-5xl"
							/>
						</div>
						<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Adaptive</h2>
						<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
							I am be able to adapt to the new environment and to learn new
							things quickly.
						</p>
					</div>
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
							<FontAwesomeIcon
								icon={faMugHot}
								className="text-4xl lg:text-5xl"
							/>
						</div>
						<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Simple</h2>
						<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
							I like simplicity in life and do things in the simplest way so
							that I can do it with faster way but still with a great results.
						</p>
					</div>
					<div className="rounded-xl border-2 p-6 pt-14 mt-16 lg:mt-12">
						<div className="absolute p-4 border-2 rounded-xl -mt-24 mx-auto bg-white-primary dark:bg-black-bg">
							<FontAwesomeIcon
								icon={faPalette}
								className="text-4xl lg:text-5xl"
							/>
						</div>
						<h2 className="font-bold mb-2 text-2xl sm:text-4xl">Curious</h2>
						<p className="text-black-secondary dark:text-white-secondary text-sm lg:text-lg">
							I am a curios person who loves to learn and to explore some- thing
							new as well to look for a solution to any problem.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
