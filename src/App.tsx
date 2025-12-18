import { SiteHeader } from "@/components/site-header"
import { useRoutes,  } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import { Experience } from "@/components/pages/experience.tsx"
import { Education } from "@/components/pages/education.tsx"
import { About } from "@/components/pages/about.tsx"
import { Research } from "@/components/pages/research.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { Projects } from "@/components/pages/projects.tsx"
import { Skills } from "@/components/pages/skills.tsx"

const routes = [{ path: "/", element: <Home /> }, {path: "/cv", element: <CV />}]

function CV() {
	return (
		<section className="container py-10">
			<iframe
				src="src/assets/CV_Christopher_Narayanan.pdf"
				title="Christopher Narayanan CV"
				className="h-[90vh] w-full"
			/>
		</section>
	)
}

function Home() {
	return (
		<section className="container grid items-center gap-4 pb-8 pt-6 md:py-10">
			<div >
			{About()}
			</div>
			<Separator/>
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" id="experience">
				Experience
			</h1>
				{Experience()}

			<Separator/>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" id="education">
				Education
			</h1>
			{Education()}

			<Separator/>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" id={"research"}>
				Publications & Research
			</h1>
			{Research()}
			<Separator/>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" id={"projects"}>
				Projects
			</h1>
			{Projects()}
			<Separator/>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" id={"skills"}>
				Skills & Languages
			</h1>
			{Skills()}
		</section>
	)
}

function App() {
	const children = useRoutes(routes)

	return (
		<>
			<div className="relative flex min-h-screen flex-col">
				<div className="sticky top-0 z-50">
					<SiteHeader />
				</div>
				<div className="flex-1 pt-2">{children}</div>
			</div>
			<TailwindIndicator />
		</>
	)
}

export default App