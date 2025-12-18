import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"

export function Research() {
	return (
		<div className="gap-2 md:grid md:grid-cols-2 lg:grid-cols-2">
			{DesignSpace}

			{FinValidate}
		</div>
	)
}

const DesignSpace = (
	<Card
		className="shadow
"
	>
		<CardHeader>
			<CardTitle>
				LLM Validation VA Design Space
				<a
					href="https://doi.org/10.2312/eurova.20251101"
					target="_blank"
					rel="noopener noreferrer"
					className="inline"
					aria-label="Open publication DOI"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-[1em] h-[1em] inline-block ml-1 align-baseline"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13.828 10.172a4 4 0 010 5.656l-3.535 3.535a4 4 0 01-5.657-5.657l1.414-1.414m6.364-6.364a4 4 0 015.657 5.657l-1.414 1.414"
						/>
					</svg>
				</a>
			</CardTitle>
		</CardHeader>

		<CardContent className="space-x-2">
			<img src={"src/assets/projects/eurova25.png"} />
			<Badge className="bg-amber-400" variant="secondary">
				{" "}
				Best Paper Award{" "}
			</Badge>
			<Badge className="bg-blue-400" variant="secondary">
				{" "}
				Paper{" "}
			</Badge>

			<CardDescription>
				<p> LLMs are awesome</p>
			</CardDescription>
		</CardContent>
		<CardFooter>
			<Badge className="bg-amber-400" variant="secondary">
				{" "}
				Best Paper Award{" "}
			</Badge>
			<Badge className="bg-blue-400" variant="secondary">
				{" "}
				Paper{" "}
			</Badge>
		</CardFooter>
	</Card>
)

const FinValidate = (
	<Card>
		<CardHeader>
			<CardTitle>FinValidate</CardTitle>
		</CardHeader>
		<CardContent>
			<img src={"src/assets/projects/ba_thesis_overview.png"} />
		</CardContent>
	</Card>
)
