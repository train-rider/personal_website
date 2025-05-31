import { Card, CardTitle } from "@/components/ui/card.tsx"

interface PositionProps {
	logoSrc: string;
	logoAlt: string;
	companyName: string;
	positionTitle: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
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
		<Card className="mb-6 flex flex-col items-start space-x-4 p-4 md:flex-row md:items-center">
			<div className="flex size-16 flex-col items-center justify-center  rounded-md">
				<img src={logoSrc} alt={logoAlt} className=" max-h-14 max-w-14" />
			</div>
			<div className="flex w-full flex-col md:flex-row md:justify-between">
				<div className="mb-4 md:mb-0 md:w-3/4">
					<CardTitle className="text-lg">
						{companyName} - {positionTitle}
					</CardTitle>
					<ul className="mt-2 list-disc pl-5  text-gray-700 dark:text-gray-300">
						{responsibilities.map((responsibility, index) => (
							<li key={index}>{responsibility}</li>
						))}
					</ul>
				</div>
				<p className=" text-muted-foreground md:w-1/4 md:text-right">
					{startDate} - {endDate}
				</p>
			</div>
		</Card>
	)
}

export function Experience() {
	return (
		<div>
			<h2 className="text-lg font-medium"> Job Experience </h2>
			<Position
				logoSrc="src/assets/experience/sbb_logo.png" // Make sure you have an SBB logo
				logoAlt="SBB Logo"
				companyName="SBB (Swiss Federal Railways)"
				positionTitle="Data Analyst Intern"
				startDate="May 2025"
				endDate="Today"
				responsibilities={[
					"Analyzed large datasets to identify trends and insights for operational improvements.",
					"Developed automated reports using SQL and Python to streamline data processes.",
					"Collaborated with cross-functional teams to define data requirements and reporting metrics.",
				]}
			/>
			<Position
				logoSrc="src/assets/experience/novartis_logo.png"
				logoAlt="Novartis Logo"
				companyName="Novartis"
				positionTitle="Frontend Developer"
				startDate="Jan 2023"
				endDate="Dec 2024"
				responsibilities={[
					"Developed and maintained user interfaces for internal applications using React and TypeScript.",
					"Implemented responsive designs with Tailwind CSS and integrated Shadcn UI components.",
					"Participated in code reviews and contributed to improving development best practices.",
				]}
			/>

			<h2 className="text-lg font-medium"> Industry Experience </h2>
			<h2 className="text-lg font-medium"> Volunteering </h2>
		</div>
	)
}
