import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"

export function Projects() {
	return (
		<div className ="gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>
							Framework Validation LLM-Generated  Data
						</CardTitle>
					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/eurova25.png"}/>
					</CardContent>
				</Card>





				<Card>
					<CardHeader>
						<CardTitle>
							FinValidate -  LLM Data Validation Tool
						</CardTitle>

					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/ba_thesis_overview.png"}/>
					</CardContent>
				</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						Stadt Land + -  Real-Time Multiplayer Game
					</CardTitle>
				</CardHeader>
				<CardContent>
					<img src={"src/assets/projects/SopRA dashboard.png"}/>
				</CardContent>
			</Card>
		</div>
	)
}
