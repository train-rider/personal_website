import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site.ts"
import { buttonVariants } from "@/components/ui/button.tsx"
import { Icons } from "@/components/icons.tsx"

export function About() {
	const Medialinks = (
		<div className="flex flex-1 items-center space-x-4 lg:space-x-7">
			<div className="flex items-center space-x-8 xl:space-x-12">
				<Link to={siteConfig.links.cv} target="_blank" rel="noreferrer">
					<div
						className={buttonVariants({
							size: "icon",
							variant: "ghost",
						})}
					>
						<Icons.cv className="size-12" />
						<span className="sr-only">CV</span>
					</div>
				</Link>
				<Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
					<div
						className={buttonVariants({
							size: "icon",
							variant: "ghost",
						})}
					>
						<Icons.gitHub className="size-12" />
						<span className="sr-only">GitHub</span>
					</div>
				</Link>
				<Link to={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
					<div
						className={buttonVariants({
							size: "icon",
							variant: "ghost",
						})}
					>
						<Icons.linkedin className="size-12" />
						<span className="sr-only">GitHub</span>
					</div>
				</Link>
			</div>
		</div>
	)
	return (
		<div
			className="flex items-start   space-x-4 xl:w-4/5 xl:space-x-6"
			id={"about"}
		>
			<div className="space-y-8">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					Hi, I&apos;m Christopher
				</h1>
				<p className="text-lg text-muted-foreground">
					I enable data-driven decision-making at SBB and previously at
					Novartis. My expertise lies in developing solutions for data analysis
					workflows, carefully balancing algorithmic automation with human
					knowledge to ensure high-quality analytical outcomes. I studied
					Computer Science at the University of Zurich, where I focused on
					Business Informatics and Banking & Finance.
				</p>

				{Medialinks}
			</div>
			<img
				src={"src/assets/about/linkendinpic.jpg"}
				className="max-h-[300px] max-w-[300px] rounded-lg shadow-2xl"
			/>
		</div>
	)
}
