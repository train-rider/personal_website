import { SiteHeader } from "@/components/site-header"
import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import { Experience } from "@/components/experience.tsx"
import { About } from "@/components/about.tsx"
import { Projects } from "@/components/projects.tsx"

const routes = [{ path: "/", element: <Home /> }]

function Home() {
	return (
		<section className="container grid items-center gap-4 pb-8 pt-6 md:py-10">
			{About()}
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
				Experience
			</h1>
			{Experience()}
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
				<SiteHeader />
				<div className="flex-1">{children}</div>
			</div>
			<TailwindIndicator />
		</>
	)
}

export default App
