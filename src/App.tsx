import { SiteHeader } from "@/components/site-header"
import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import { Experience } from "@/components/experience.tsx"
import { About } from "@/components/about.tsx"
import { Projects } from "@/components/projects.tsx"
import { Separator } from "@/components/ui/separator.tsx"

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
			{About()}
			<Separator/>
			<div id="experience"><h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
				Experience
			</h1>
				{Experience()}</div>
			<Separator/>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
				Projects
			</h1>
			{Projects()}
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