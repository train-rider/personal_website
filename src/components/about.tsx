import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site.ts"
import { buttonVariants } from "@/components/ui/button.tsx"
import { Icons } from "@/components/icons.tsx"

export function About() {
	return (
		<div className="flex max-w-[980px]  items-start gap-2" id={"about"}>
			<div>
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					Hi, I&apos;m Christopher
				</h1>
				<p className="text-lg text-muted-foreground">
					I am a data driven connector. I work for SBB as data analyst intern,
					worked at Novartis in their Digital Finance as and compeleted my CS
					bachelor at UZH.{" "}
				</p>

				<div className="flex flex-1 items-center space-x-4">
					<nav className="flex items-center space-x-1">
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
					</nav>
				</div>
			</div>
			<img
				src={"src/assets/about/linkendinpic.jpg"}
				className="max-h-[300px] max-w-[300px] rounded-lg"
			/>
		</div>
	)
}
