import Image from "next/image"
import { getData, type Post } from "@/../sanity/lib/query"
import MainWrapper from "@/components/main-wrapper"
import Contact from "@/components/contact"
import Link from "next/link"
import formatDate from "@/components/date-format"

export default async function Blog() {
	const data = (await getData()) as Post[]
	return (
		<MainWrapper>
			<section id="blog" className="py-20">
				<div className="section-title mb-12 lg:mb-16">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Blog</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Blog
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
						{data.map((item) => (
							<Link href={`/blog/${item.slug.current}`}>
								<div
									key={item._id}
									className="grid lg:grid-cols-4 justify-center items-center gap-2 lg:gap-6 rounded-xl border-2 p-6">
									<div>
										<p className="font-bold text-sm lg:text-lg text-black-secondary dark:text-white-secondary">
											{formatDate(item.date)}
										</p>
									</div>
									<div className="col-span-3">
										<h2
											className="font-bold text-md mb-2
										sm:text-2xl">
											{item.title}
										</h2>
										<p className="mb-4 line-clamp-2 text-sm lg:text-lg">
											{item.overview}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
			<Contact></Contact>
		</MainWrapper>
	)
}
