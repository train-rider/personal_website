import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site.ts"
import { buttonVariants } from "@/components/ui/button.tsx"
import { Icons } from "@/components/icons.tsx"
import { Card } from "@/components/ui/card.tsx"

export function About() {
	const Medialinks = <div className="flex flex-1 items-center space-x-4">
		<Card className="flex items-center space-x-1">
			<Link to={siteConfig.links.cv} target="_blank" rel="noreferrer">
				<div
					className={buttonVariants({
						size: "icon",
						variant: "ghost",
					})}
				>
					<Icons.cv className="size-8" />
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
					<Icons.gitHub className="size-8" />
					<span className="sr-only">GitHub</span>
				</div>
			</Link>
			<Link
				to={siteConfig.links.linkedin}
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={buttonVariants({
						size: "icon",
						variant: "ghost",
					})}
				>
					<Icons.linkedin className="size-8" />
					<span className="sr-only">GitHub</span>
				</div>
			</Link>
		</Card>
	</div>
	return (
		<div className="flex w-4/5    items-start space-x-4 xl:space-x-6" id={"about"}>
			<div>
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					Hi, I&apos;m Christopher
				</h1>
				<p className="text-lg text-muted-foreground">
					Data
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
