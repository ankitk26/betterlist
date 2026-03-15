export default function WrappedBackgroundDesign() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Light mode - gradient based like dark mode */}
			<div className="absolute inset-0 block dark:hidden">
				<svg
					viewBox="0 0 400 600"
					className="h-full w-full"
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<linearGradient id="lux-light" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="oklch(0.98 0 0)" />
							<stop offset="50%" stopColor="oklch(0.95 0 0)" />
							<stop offset="100%" stopColor="oklch(0.92 0 0)" />
						</linearGradient>
						<radialGradient id="orb-light-1" cx="25%" cy="25%" r="55%">
							<stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0.8" />
							<stop
								offset="50%"
								stopColor="oklch(0.96 0 0)"
								stopOpacity="0.4"
							/>
							<stop
								offset="100%"
								stopColor="oklch(0.92 0 0)"
								stopOpacity="0.1"
							/>
						</radialGradient>
						<radialGradient id="orb-light-2" cx="75%" cy="75%" r="50%">
							<stop offset="0%" stopColor="oklch(0.97 0 0)" stopOpacity="0.6" />
							<stop
								offset="50%"
								stopColor="oklch(0.94 0 0)"
								stopOpacity="0.3"
							/>
							<stop
								offset="100%"
								stopColor="oklch(0.9 0 0)"
								stopOpacity="0.05"
							/>
						</radialGradient>
					</defs>
					<rect width="100%" height="100%" fill="url(#lux-light)" />
					<circle
						cx="100"
						cy="120"
						r="190"
						fill="url(#orb-light-1)"
						opacity="0.8"
					/>
					<circle
						cx="300"
						cy="500"
						r="170"
						fill="url(#orb-light-2)"
						opacity="0.7"
					/>
				</svg>
			</div>

			{/* Dark mode - gradient based */}
			<div className="absolute inset-0 hidden dark:block">
				<svg
					viewBox="0 0 400 600"
					className="h-full w-full"
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<linearGradient id="lux-dark" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="oklch(0.05 0 0)" />
							<stop offset="50%" stopColor="oklch(0.1 0 0)" />
							<stop offset="100%" stopColor="oklch(0.15 0 0)" />
						</linearGradient>
						<radialGradient id="orb-dark-1" cx="25%" cy="25%" r="55%">
							<stop offset="0%" stopColor="oklch(0.32 0 0)" stopOpacity="0.6" />
							<stop
								offset="50%"
								stopColor="oklch(0.25 0 0)"
								stopOpacity="0.3"
							/>
							<stop
								offset="100%"
								stopColor="oklch(0.1 0 0)"
								stopOpacity="0.1"
							/>
						</radialGradient>
						<radialGradient id="orb-dark-2" cx="75%" cy="75%" r="50%">
							<stop offset="0%" stopColor="oklch(0.28 0 0)" stopOpacity="0.5" />
							<stop
								offset="50%"
								stopColor="oklch(0.22 0 0)"
								stopOpacity="0.25"
							/>
							<stop
								offset="100%"
								stopColor="oklch(0.08 0 0)"
								stopOpacity="0.05"
							/>
						</radialGradient>
						<radialGradient id="corner-dark" cx="50%" cy="50%" r="80%">
							<stop offset="0%" stopColor="oklch(0 0 0)" stopOpacity="0" />
							<stop offset="60%" stopColor="oklch(0 0 0)" stopOpacity="0.2" />
							<stop offset="100%" stopColor="oklch(0 0 0)" stopOpacity="0.45" />
						</radialGradient>
					</defs>
					<rect width="100%" height="100%" fill="url(#lux-dark)" />
					<circle
						cx="100"
						cy="120"
						r="190"
						fill="url(#orb-dark-1)"
						opacity="0.8"
					/>
					<circle
						cx="300"
						cy="500"
						r="170"
						fill="url(#orb-dark-2)"
						opacity="0.7"
					/>
					<rect width="100%" height="100%" fill="url(#corner-dark)" />
				</svg>
			</div>

			{/* Subtle grain texture */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
				}}
			/>
		</div>
	);
}
