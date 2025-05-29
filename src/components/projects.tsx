import { Card, CardContent, CardDescription,CardHeader, CardTitle } from "@/components/ui/card.tsx"

export function Projects() {
	return (
		<div className = "sm:grid sm:grid-cols-3 space-x-2">
				<Card>
					<CardHeader>
						<CardTitle>
							A Design Space for the Validation of LLM-Generated Tabular Data
						</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/eurova25.png"}/>
					</CardContent>
				</Card>



				<Card>
					<CardHeader>
						<CardTitle>
							A Design Space for the Validation of LLM-Generated Tabular Data
						</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/eurova25.png"}/>
					</CardContent>
				</Card>



				<Card>
					<CardHeader>
						<CardTitle>
							A Design Space for the Validation of LLM-Generated Tabular Data
						</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/ba_thesis_overview.png"}/>
					</CardContent>
				</Card>
		</div>
	)
}
