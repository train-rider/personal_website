import { Card, CardTitle } from "@/components/ui/card.tsx"

interface PositionProps {
	logoSrc: string
	logoAlt: string
	companyName: string
	positionTitle: string
	startDate: string
	endDate: string
	responsibilities: string[]
}

export function Position({
	logoSrc,
	logoAlt,
	companyName,
	positionTitle,
	startDate,
	endDate,
	responsibilities,
}: PositionProps) {
	return (
		<Card className="mb-6 flex flex-col items-start space-x-4  p-4 sm:flex-row sm:items-center lg:w-4/5">
			<div className="flex size-16 flex-col items-center justify-center  rounded-md text-sm md:text-base">
				<img
					src={logoSrc}
					alt={logoAlt}
					className=" max-h-14   max-w-14 object-contain"
				/>
			</div>
			<div className="flex w-full flex-col md:flex-row md:justify-between">
				<div className="mb-4 sm:mb-0 sm:w-3/4">
					<CardTitle className="text-lg">
						{companyName} - {positionTitle}
					</CardTitle>
					<ul className="mt-2 list-disc pl-7  text-gray-700 dark:text-gray-300">
						{responsibilities.map((responsibility, index) => (
							<li key={index}>{responsibility}</li>
						))}
					</ul>
				</div>
				<p className=" text-muted-foreground sm:w-1/4 sm:text-right">
					{startDate} - {endDate}
				</p>
			</div>
		</Card>
	)
}

export function Experience() {
	return (
		<>
			<Position
				logoSrc="src/assets/experience/sbb_logo_3.png" // Make sure you have an SBB logo
				logoAlt="SBB Logo"
				companyName="SBB (Swiss Federal Railways)"
				positionTitle="Data Analyst Intern"
				startDate="May 2025"
				endDate="Today"
				responsibilities={[
					"Led a PoC forecasting model for CHF 200M of internal demand, achieving an accuracy error of 15% where no historical baseline existed.",
					"Identified potential to reduce working capital by up to 10% (20M), minimize stockouts, and leverage accurate forecasts to negotiate better procurement prices.",
					"Created a recycling analytics dashboard to solve project visibility issues, identifying 20 strategic leads.",
					"Defined KPIs to track and optimize the cost benefits of internal vs. external recycling, supporting management in securing funding for the internal team.",
				]}
			/>
			<Position
				logoSrc="src/assets/experience/novartis_logo.png"
				logoAlt="Novartis Logo"
				companyName="Novartis"
				positionTitle="Data Scientist Intern"
				startDate="Jan 2023"
				endDate="Dec 2024"
				responsibilities={[
					"Led two comparative performance analyses for financial KPIs used by senior management and a project exploring zero-shot learning solutions (genAI) use cases for time-series forecasting.",
					"Identified AI models that are more accurate by 10% and stabler by 30% than the current models being used, discovered weaknesses in these models, and proposed solutions to these issues.",
					"Utilized Python, particularly Pandas and Plotly, for data manipulation and visualization.",
				]}
			/>
			<Position
				logoSrc={"src/assets/experience/uzh-logo.png"}
				logoAlt={"Deperatment of Finance - UZH"}
				companyName={"Department of Finance UZH"}
				positionTitle={"Junior Software Developer"}
				startDate={"Feb 2022"}
				endDate={"Jan 2025"}
				responsibilities={[
					"Designed a proof of concept for fraud detection of digital exams with over 500+ students using Python.",
					"Managed the technical process of creating and correcting Excel exams for over 1000 students.",
					"Enabled the usage of custom elements for the homepage by developing webcomponents (React + Tailwind).",
				]}
			/>

		</>
	)
}
