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
		<div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-2">
			{ValLLM}
			{DesignSpace}
		</div>
	)
}

const ValLLM = (
	<Card className="flex flex-col shadow transition-all hover:shadow-lg">
		<CardHeader>
			<div className="mb-2 flex flex-wrap gap-2">
				<Badge className="bg-amber-400 font-semibold" variant="secondary">
					Honorable Mention - VMV 2025
				</Badge>
				<Badge className="bg-blue-400 font-semibold" variant="secondary">
					Paper
				</Badge>
			</div>
			<CardTitle className="text-xl">
				Val-LLM: Visual Validation and Analysis of LLM-Generated Features
			</CardTitle>
		</CardHeader>

		<CardContent className="flex-1 space-y-4">
			<img
				src={"src/assets/projects/ba_thesis_overview.png"}
				alt="Val-LLM Overview"
				className="rounded-md border border-zinc-200 dark:border-zinc-800"
			/>
			<CardDescription className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
				Val-LLM is a novel visual analytics framework designed to systematically
				validate LLM-generated tabular data by addressing critical challenges like
				hallucinations and transparency. It empowers users to contextualize AI
				outputs with model explanations and human expert knowledge, ensuring the
				reliability and utility of synthetic datasets for downstream business
				applications.
			</CardDescription>
		</CardContent>
		<CardFooter>
			<a
				href="https://doi.org/10.2312/vmv.20251235"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
			>
				Read Paper
			</a>
		</CardFooter>
	</Card>
)

const DesignSpace = (
	<Card className="flex flex-col shadow transition-all hover:shadow-lg">
		<CardHeader>
			<div className="mb-2 flex flex-wrap gap-2">
				<Badge className="bg-amber-400 font-semibold" variant="secondary">
					Best Paper Award - EuroVA 2025
				</Badge>
				<Badge className="bg-blue-400 font-semibold" variant="secondary">
					Paper
				</Badge>
			</div>
			<CardTitle className="text-xl">
				Design Space for Critical Validation of LLM-Generated Data
			</CardTitle>
		</CardHeader>

		<CardContent className="flex-1 space-y-4">
			<img
				src={"src/assets/projects/eurova25.png"}
				alt="Design Space Overview"
				className="rounded-md border border-zinc-200 dark:border-zinc-800"
			/>
			<CardDescription className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
				This research establishes a comprehensive design space for validating
				LLM-generated tabular data, organizing the emerging field across
				dimensions of analysis granularity and diverse data sources. By mapping 19
				existing validation techniques, it provides a foundational framework to
				guide developers and researchers toward more robust, scalable, and
				interpretable AI-driven data systems.
			</CardDescription>
		</CardContent>
		<CardFooter>
			<a
				href="https://doi.org/10.2312/eurova.20251101"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
			>
				Read Paper
			</a>
		</CardFooter>
	</Card>
)
