import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
	faLinkedin,
	faGithub,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import {
	ProfileTriangle,
	ProfileBase,
	ProfileCircle,
} from "@/components/profile-img"
import MainWrapper from "@/components/main-wrapper"
import Showcase from "@/components/showcase"
import Services from "@/components/service"
import Testimonial from "@/components/testimonial"
import Talent from "@/components/talent"

export default function Home() {
	return (
		<MainWrapper>
			<section
				id="hero"
				className="flex flex-wrap-reverse justify-center items-center py-16
				xl:flex-nowrap xl:justify-between">
				<div id="hero-text">
					<h1
						className="
          text-4xl text-center font-bold leading-tight max-w-3xl pb-6 drop-shadow-xl
          sm:text-5xl
					md:text-6xl
					lg:pb-16
					xl:text-left
					2xl:text-8xl 2xl:max-w-5xl
          ">
						I <b className="hover:bg-blue-primary duration-300">Design</b>,{" "}
						<b className="hover:bg-blue-primary duration-300">Develop</b>, and
						always <b className="hover:bg-blue-primary duration-300">Learn</b>.
					</h1>
					
						
						<div
							className="flex w-full justify-center
							lg:w-auto">
							<div className="mr-12">
								<Link href={"https://www.linkedin.com/in/souravbudke/"}>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="text-3xl 2xl:text-4xl"
									/>
								</Link>
							</div>
							<div className="mr-12">
								<Link href={"https://github.com/souravbudke"}>
									<FontAwesomeIcon
										icon={faGithub}
										className="text-3xl 2xl:text-4xl"
									/>
								</Link>
							</div>
							
						</div>
					</div>
				
				{/*<div id="hero-img">
					<ProfileCircle></ProfileCircle>
					<ProfileBase></ProfileBase>
					<ProfileTriangle></ProfileTriangle>
				</div>*/}
			</section>
			<Services></Services>
			<Showcase></Showcase>
			{/* <Testimonial></Testimonial> */}
			<Talent></Talent>
		</MainWrapper>
	)
}
