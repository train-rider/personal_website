import { Card, CardTitle } from "@/components/ui/card.tsx"

interface EducationItemProps {
	logoSrc: string
	logoAlt: string
	institution: string
	degree: string
	startDate: string
	endDate: string
	details: string[]
}

export function EducationItem({
	logoSrc,
	logoAlt,
	institution,
	degree,
	startDate,
	endDate,
	details,
}: EducationItemProps) {
	return (
		<Card className="mb-6 flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center lg:w-4/5">
			<div className="flex aspect-square size-16 transform items-center justify-center rounded-md bg-white p-2 transition-transform hover:scale-105 dark:bg-zinc-900">
				<img
					src={logoSrc}
					alt={logoAlt}
					className="h-full w-full object-contain"
				/>
			</div>
			<div className="flex w-full flex-col md:flex-row md:justify-between">
				<div className="mb-4 sm:mb-0 sm:w-3/4">
					<CardTitle className="text-lg">
						{institution} - {degree}
					</CardTitle>
					<ul className="mt-2 list-disc pl-7 text-gray-700 dark:text-gray-300">
						{details.map((detail, index) => (
							<li key={index}>{detail}</li>
						))}
					</ul>
				</div>
				<p className="text-muted-foreground sm:w-1/4 sm:text-right">
					{startDate} - {endDate}
				</p>
			</div>
		</Card>
	)
}

export function Education() {
	return (
		<>
			<EducationItem
				logoSrc="src/assets/experience/eth_logo.png"
				logoAlt="ETH Zürich Logo"
				institution="ETH Zürich"
				degree="MSc in Management, Technology, and Economics"
				startDate="2025"
				endDate="2028"
				details={[
					"Focusing on the intersection of technology and business strategy.",
					"Developing advanced skills in management and economic decision-making.",
				]}
			/>
			<EducationItem
				logoSrc="src/assets/experience/uzh-logo.png"
				logoAlt="University of Zurich Logo"
				institution="University of Zurich"
				degree="BSc in Computer Science"
				startDate="2021"
				endDate="2025"
				details={[
					"Major: Information Systems; Minor: Banking & Finance.",
					"Thesis: Visual Validation and Analysis of LLM-Generated Features for Stock Data.",
				]}
			/>
		</>
	)
}
