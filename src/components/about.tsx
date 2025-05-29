export function About() {
	return (
		<div className="flex max-w-[980px]  items-start gap-2">
			<div>
			<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
				About
			</h1>
			<p className="text-lg text-muted-foreground">
				Hi, I&apos;m <span className="font-bold"> Christopher Narayanan </span>, a software
				engineer with a passion for building innovative solutions. I love
				exploring new technologies and creating impactful applications. </p>

			</div>
			<img
				src={"src/assets/about/linkendinpic.jpg"}
				className="max-h-[300px] max-w-[300px] rounded-lg"
			/>
		</div>
	)
}
