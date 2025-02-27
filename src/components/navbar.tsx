"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChangeTheme from "./theme"
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const variants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-50%" },
}

export default function Navbar() {
	const route = usePathname()
	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		setIsShow(false)
	}, [])

	return (
		<nav
			id="top"
			className="block fixed mx-auto px-6 py-6 w-screen z-50 items-center justify-between bg-white-primary dark:bg-black-bg
			sm:px-12
			lg:px-48">
			<div className="flex gap-4 items-center justify-between text-black-secondary dark:text-white-secondary ">
				<Link
					href="/"
					className="text-xl sm:text-2xl font-bold text-black-secondary hover:text-black-primary dark:text-white-secondary dark:hover:text-white-primary">
					SOURAV BUDKE.
				</Link>
				{!isShow ? (
					<div
						id="hamburger"
						className="text-right cursor-pointer scale-75 sm:scale-100"
						onClick={() => setIsShow(true)}>
						<div className="hamburger-1 bg-black-secondary dark:bg-white-secondary"></div>
						<div className="hamburger-2 bg-black-secondary dark:bg-white-secondary"></div>
					</div>
				) : (
					<div
						id="close"
						className="text-right cursor-pointer hover:text-black-primary dark:hover:text-white-primary"
						onClick={() => setIsShow(false)}>
						<FontAwesomeIcon
							icon={faTimes}
							className="
              text-2xl
            xl:text-3xl
            "
						/>
					</div>
				)}
			</div>
			<motion.div variants={variants} animate={isShow ? "open" : "closed"}>
				{isShow && (
					<div className="h-screen">
						<div className="collapsed py-12 lg:py-36">
							<div
								className="flex flex-wrap gap-16 justify-center items-center
            md:flex-nowrap
            2xl:justify-between">
								<div
									className="flex flex-wrap lg:flex-nowrap lg:gap-16 text-center
              		lg:text-left">
									<div className="w-full lg:w-auto">
										<ul
											className="text-black-secondary dark:text-white-secondary 
                    text-3xl
                    md:text-2xl
                    xl:text-3xl 
                    2xl:text-5xl">
											<li className="py-4 lg:py-8">
												<Link
													href="/"
													className={
														route === "/"
															? "font-bold  text-black-primary dark:text-white-primary"
															: ""
													}
													onClick={() => setIsShow(false)}>
													Home
												</Link>
											</li>
											<li className="py-4 lg:py-8">
												<Link
													href="/project"
													className={
														route === "/project"
															? "font-bold  text-black-primary dark:text-white-primary"
															: ""
													}
													onClick={() => setIsShow(false)}>
													Project
												</Link>
											</li>
											<li className="py-4 lg:py-8">
												<Link
													href="/service"
													className={
														route === "/service"
															? "font-bold  text-black-primary dark:text-white-primary"
															: ""
													}
													onClick={() => setIsShow(false)}>
													Service
												</Link>
											</li>
										</ul>
									</div>
									<div className="w-full lg:w-auto">
										<ul
											className="text-black-secondary dark:text-white-secondary
                    text-3xl
                    md:text-2xl
                    xl:text-3xl 
                    2xl:text-5xl">
											<li className="py-4 lg:py-8">
												<Link
													href="/certificate"
													className={
														route === "/certificate"
															? "font-bold  text-black-primary dark:text-white-primary"
															: ""
													}
													onClick={() => setIsShow(false)}>
													Certificate
												</Link>
											</li>
											<li className="py-4 lg:py-8">
												<Link
													href="/about"
													className={
														route === "/about"
															? "font-bold  text-black-primary dark:text-white-primary"
															: ""
													}
													onClick={() => setIsShow(false)}>
													About me
												</Link>
											</li>
										
										</ul>
									</div>
								</div>
								<div className="hidden lg:block">
									<h2
										className="font-bold mb-2
                md:text-xl
                xl:text-3xl  
                2xl:text-5xl">
										Let's work together!
									</h2>
									<p
										className="text-black-secondary dark:text-white-secondary mb-8
                  text-md
                  xl:text-xl
                ">
										I aspire to consistently enhance my knowledge <br />
										and advance my career. I'm open to collaboration.
									</p>
									
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<ChangeTheme></ChangeTheme>
						</div>
					</div>
				)}
			</motion.div>
		</nav>
	)
}
