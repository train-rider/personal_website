import { Card, CardTitle } from "@/components/ui/card.tsx"

interface PositionProps {
	logoSrc: string
	logoAlt: string
	companyName: string
	positionTitle: string
	startDate: string
	endDate: string
	responsibilities: (string | JSX.Element)[]
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
						{companyName} - {positionTitle}
					</CardTitle>
					<ul className="mt-2 list-disc pl-7 text-gray-700 dark:text-gray-300">
						{responsibilities.map((responsibility, index) => (
							<li key={index} className="mb-1">
								{responsibility}
							</li>
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

export function Experience() {
	return (
		<>
			<Position
				logoSrc="src/assets/experience/sbb_logo_3.png"
				logoAlt="SBB Logo"
				companyName="SBB (Swiss Federal Railways)"
				positionTitle="Data Analyst Intern"
				startDate="May 2025"
				endDate="Today"
				responsibilities={[
					<>
						Led a PoC forecasting model for <strong>CHF 200M</strong> of
						internal demand, achieving an accuracy error of <strong>15%</strong>{" "}
						where no historical baseline existed.
					</>,
					<>
						Identified annual saving potential of <strong>CHF 20M</strong> (
						<strong>10% reduction</strong> in working capital) through optimized
						procurement and minimized stockouts.
					</>,
					<>
						Engineered a <strong>recycling analytics dashboard</strong> that
						automated manual workflows for a <strong>20-person team</strong>,
						generating <strong>20 strategic leads</strong> immediately upon
						launch.
					</>,
					<>
						Defined <strong>KPIs</strong> to optimize cost benefits of internal
						vs. external recycling, securing <strong>management funding</strong>
						.
					</>,
				]}
			/>
			<Position
				logoSrc="src/assets/experience/novartis_logo.png"
				logoAlt="Novartis Logo"
				companyName="Novartis"
				positionTitle="Data Scientist Intern"
				startDate="Jul - Sep"
				endDate="2023 & 2024"
				responsibilities={[
					<>
						Conducted comparative analyses for <strong>financial KPIs</strong>{" "}
						and explored <strong>Zero-Shot Learning (genAI)</strong> use cases
						for time-series forecasting.
					</>,
					<>
						Identified AI models <strong>10% more accurate</strong> and{" "}
						<strong>30% more stable</strong> than current benchmarks.
					</>,
					<>
						Utilized <strong>Python (Pandas, Plotly)</strong> for advanced data
						manipulation and financial visualization.
					</>,
				]}
			/>
			<Position
				logoSrc={"src/assets/experience/uzh-logo.png"}
				logoAlt={"Department of Finance - UZH"}
				companyName={"Department of Finance UZH"}
				positionTitle={"Junior Software Developer"}
				startDate={"Feb 2022"}
				endDate={"Jan 2025"}
				responsibilities={[
					<>
						Designed a proof of concept for <strong>fraud detection</strong> in
						digital exams for <strong>500+ students</strong> using Python.
					</>,
					<>
						Managed technical creation/correction of{" "}
						<strong>Excel-based exams</strong> for over{" "}
						<strong>1,000 students</strong>.
					</>,
					<>
						Developed custom <strong>webcomponents</strong> using{" "}
						<strong>React and Tailwind CSS</strong>.
					</>,
				]}
			/>

		</>
	)
}
