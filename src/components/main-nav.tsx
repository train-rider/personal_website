import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"
import { Link } from "react-router-dom"

interface MainNavProps {
	items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link to="/" className="flex items-center space-x-2">
				<span className="inline-block font-bold">{siteConfig.name}</span>
			</Link>
			{items?.length ? (
				<nav className="flex gap-6">
					{items?.map(
						(item, index) =>
							item.href && (
								item.href.startsWith("#") ? (
									<a
										key={index}
										href={item.href}
										className={cn(
											"flex items-center text-sm font-medium text-muted-foreground",
											item.disabled && "cursor-not-allowed opacity-80",
										)}
										onClick={e => {
											e.preventDefault();
											const el = document.getElementById(item.href.slice(1));
											if (el) {
												el.scrollIntoView({ behavior: "smooth" });
											}
										}}
									>
										{item.title}
									</a>
								) : (
									<a
										key={index}
										href={item.href}
										className={cn(
											"flex items-center text-sm font-medium text-muted-foreground",
											item.disabled && "cursor-not-allowed opacity-80",
										)}
									>
										{item.title}
									</a>
								)
							),
					)}
				</nav>
			) : null}
		</div>
	)
}