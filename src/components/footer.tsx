import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
	return (
		<footer
			className="mx-auto px-6 py-24 border-t-2 border-black-bg bg-black-primary text-white-primary
					sm:px-12
					lg:px-48">
			<div className="flex justify-start gap-4 mb-6">
				<a
					href="https://www.linkedin.com/in/souravbudke/"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					LinkedIn
				</a>
				<a
					href="https://github.com/souravbudke"
					className="font-bold hover:text-blue-primary
                      text-sm
											md:text-md
											lg:text-lg">
					GitHub
				</a>
				{/* <a
					href="https://t.me/afrizalyogi"
					className="font-bold hover:text-blue-primary
					  text-sm
											md:text-md
											lg:text-lg">
					Telegram
				</a> */}
			</div>
		
			<div className="flex flex-col gap-4 mb-10">
                    <h1
                        className="text-lg text-white-primary font-bold
                            sm:text-2xl
                            lg:text-4xl">
                        Let's collaborate! Just reach out to me at -{" "}
                        <a href="mailto:souravrbudke@gmail.com" target="_blank" rel="noopener noreferrer">
                            souravrbudke@gmail.com
                        </a>
                    </h1>
                    <div className="flex gap-4">
                        {/* Additional content can go here */}
                    </div>
                </div>
			<div
				className="text-sm
						sm:text-md">
				<FontAwesomeIcon icon={faCode} className="mx-2" />
				with
				<FontAwesomeIcon icon={faHeart} className="mx-2" />
				by{" "}
				<a
					
					target="_blank"
					rel="noopener noreferrer">
					<b>SouravBudke</b>
				</a>
			</div>
		</footer>
	)
}
