import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx"

export function Projects() {
	return (
		<div className="gap-2 md:grid md:grid-cols-2 lg:grid-cols-2">
			{StadtLandPlus}
		</div>
	)
}

const StadtLandPlus = (
	<Card>
		<CardHeader>
			<CardTitle>Stadt Land +</CardTitle>
		</CardHeader>
		<CardContent>
			<img src={"src/assets/projects/SopRA dashboard.png"} />
		</CardContent>
		<CardDescription>
			Developed a real-time multiplayer game using React, Node.js, and
			Socket.io, allowing players to compete in a fast-paced trivia game.
		</CardDescription>
	</Card>
)