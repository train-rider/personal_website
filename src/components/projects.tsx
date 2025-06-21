import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"

export function Projects() {
	return (
		<div className ="gap-2 md:grid md:grid-cols-2 lg:grid-cols-2" id={"projects"}>
				<Card className="shadow
				">
					<CardHeader>
						<CardTitle>
							<a href="https://doi.org/10.2312/eurova.20251101">
							LLM Validation VA Design Space
							</a>

						</CardTitle>
					</CardHeader>


					<CardContent>
						<img src={"src/assets/projects/eurova25.png"}/>
						<Badge className="bg-amber-400" variant="secondary"> Best Paper Award </Badge>
						<Badge className="bg-blue-400" variant="secondary"> Paper </Badge>

						<CardDescription>
							<p> LLMs are awesome</p>
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Badge className="bg-amber-400" variant="secondary"> Best Paper Award </Badge>
						<Badge className="bg-blue-400" variant="secondary"> Paper </Badge>
					</CardFooter>

				</Card>
			<Card className="shadow
				">
				<CardHeader>
					<CardTitle>
						LLM Validation VA Design Space
					</CardTitle>
					<p> Paper</p>
				</CardHeader>


				<CardContent>
					<img src={"src/assets/projects/eurova25.png"}/>
					<Badge className="bg-amber-400" variant="secondary"> Best Paper Award </Badge>
					<Badge className="bg-blue-400" variant="secondary"> Paper </Badge>

					<CardDescription>
						<p> LLMs are awesome</p>
					</CardDescription>
				</CardContent>
				<CardFooter>
					<Badge className="bg-amber-400" variant="secondary"> Best Paper Award </Badge>
					<Badge className="bg-blue-400" variant="secondary"> Paper </Badge>
				</CardFooter>

			</Card>





				<Card>
					<CardHeader>
						<CardTitle>
							FinValidate
						</CardTitle>

					</CardHeader>
					<CardContent>
						<img src={"src/assets/projects/ba_thesis_overview.png"}/>
					</CardContent>
				</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						Stadt Land +
					</CardTitle>
				</CardHeader>
				<CardContent>
					<img src={"src/assets/projects/SopRA dashboard.png"}/>
				</CardContent>
				<CardDescription>
					Developed a real-time multiplayer game using React, Node.js, and Socket.io, allowing players to compete in a fast-paced trivia game.
				</CardDescription>
			</Card>
		</div>
	)
}
