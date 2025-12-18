import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"

export function Skills() {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<Card className="shadow-sm transition-all hover:shadow-md">
				<CardHeader>
					<CardTitle className="text-xl">Technical Stack</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div>
						<h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
							Data Science
						</h4>
						<div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
							<span>Python (Pandas, Plotly)</span>
							<span>•</span>
							<span>SQL</span>
							<span>•</span>
							<span>Tableau</span>
							<span>•</span>
							<span>Excel</span>
						</div>
					</div>
					<div>
						<h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
							Engineering
						</h4>
						<div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
							<span>Java</span>
							<span>•</span>
							<span>React</span>
							<span>•</span>
							<span>Tailwind CSS</span>
							<span>•</span>
							<span>C</span>
							<span>•</span>
							<span>Webcomponents</span>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="shadow-sm transition-all hover:shadow-md">
				<CardHeader>
					<CardTitle className="text-xl">Languages</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="font-semibold text-zinc-900 dark:text-zinc-100">German</span>
						<span className="text-sm text-muted-foreground">Native</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold text-zinc-900 dark:text-zinc-100">English</span>
						<span className="text-sm text-muted-foreground">Fluent</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold text-zinc-900 dark:text-zinc-100">French</span>
						<span className="text-sm text-muted-foreground">Limited Working Proficiency</span>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
