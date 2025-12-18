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
		<Card className="mb-6 flex flex-col items-start space-x-4 p-4 sm:flex-row sm:items-center lg:w-4/5">
			<div className="flex size-16 flex-col items-center justify-center rounded-md text-sm md:text-base">
				<img
					src={logoSrc}
					alt={logoAlt}
					className="max-h-14 max-w-14 object-contain"
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
				logoSrc="src/assets/experience/uzh-logo.png"
				logoAlt="University of Zurich Logo"
				institution="University of Zurich"
				degree="MSc in Informatics"
				startDate="Sep 2023"
				endDate="Today"
				details={[
					"Specialization in Information Systems.",
					"Relevant coursework: Machine Learning, Data Visualization, Advanced Software Engineering.",
				]}
			/>
			<EducationItem
				logoSrc="src/assets/experience/uzh-logo.png"
				logoAlt="University of Zurich Logo"
				institution="University of Zurich"
				degree="BSc in Informatics"
				startDate="Sep 2020"
				endDate="Aug 2023"
				details={[
					"Graduated with honors.",
					"Bachelor Thesis: FinValidate - A project for financial data validation.",
				]}
			/>
		</>
	)
}
