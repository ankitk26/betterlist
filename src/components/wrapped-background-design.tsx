export default function WrappedBackgroundDesign() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			<div className="absolute top-0 left-0 h-full w-full">
				<svg
					viewBox="0 0 400 600"
					className="h-full w-full"
					aria-labelledby="wrappedBackgroundTitle"
					preserveAspectRatio="xMidYMid slice"
				>
					<title id="wrappedBackgroundTitle">
						Decorative music-themed background with sound waves
					</title>
					<defs>
						{/* Gradients - Dark Mode */}
						<radialGradient
							id="grad1-dark"
							cx="50%"
							cy="50%"
							r="50%"
							fx="50%"
							fy="50%"
						>
							<stop offset="0%" stopColor="#e11d48" stopOpacity="0.6" />
							<stop offset="100%" stopColor="#9f1239" stopOpacity="0.1" />
						</radialGradient>
						<radialGradient
							id="grad2-dark"
							cx="30%"
							cy="70%"
							r="60%"
							fx="30%"
							fy="70%"
						>
							<stop offset="0%" stopColor="#fb7185" stopOpacity="0.4" />
							<stop offset="100%" stopColor="#881337" stopOpacity="0.05" />
						</radialGradient>
						<radialGradient
							id="grad3-dark"
							cx="80%"
							cy="20%"
							r="50%"
							fx="80%"
							fy="20%"
						>
							<stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
							<stop offset="100%" stopColor="#4c0519" stopOpacity="0.05" />
						</radialGradient>
						{/* Gradients - Light Mode */}
						<radialGradient
							id="grad1-light"
							cx="50%"
							cy="50%"
							r="50%"
							fx="50%"
							fy="50%"
						>
							<stop offset="0%" stopColor="#fb7185" stopOpacity="0.85" />
							<stop offset="100%" stopColor="#fecdd3" stopOpacity="0.25" />
						</radialGradient>
						<radialGradient
							id="grad2-light"
							cx="30%"
							cy="70%"
							r="60%"
							fx="30%"
							fy="70%"
						>
							<stop offset="0%" stopColor="#f43f5e" stopOpacity="0.7" />
							<stop offset="100%" stopColor="#fda4af" stopOpacity="0.15" />
						</radialGradient>
						<radialGradient
							id="grad3-light"
							cx="80%"
							cy="20%"
							r="50%"
							fx="80%"
							fy="20%"
						>
							<stop offset="0%" stopColor="#e11d48" stopOpacity="0.65" />
							<stop offset="100%" stopColor="#fecdd3" stopOpacity="0.2" />
						</radialGradient>
						<filter id="glow">
							<feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Base background - switches between light and dark */}
					<rect
						width="100%"
						height="100%"
						className="fill-white dark:fill-[#0a0a0a]"
					/>

					{/* Gradient orbs - Dark mode */}
					<g className="hidden dark:block">
						<circle
							cx="50"
							cy="100"
							r="120"
							fill="url(#grad1-dark)"
							opacity="0.6"
						/>
						<circle
							cx="350"
							cy="200"
							r="100"
							fill="url(#grad2-dark)"
							opacity="0.5"
						/>
						<circle
							cx="200"
							cy="500"
							r="150"
							fill="url(#grad3-dark)"
							opacity="0.4"
						/>
						<circle
							cx="100"
							cy="400"
							r="80"
							fill="url(#grad1-dark)"
							opacity="0.3"
						/>
					</g>

					{/* Gradient orbs - Light mode */}
					<g className="block dark:hidden">
						<circle
							cx="50"
							cy="100"
							r="120"
							fill="url(#grad1-light)"
							opacity="0.9"
						/>
						<circle
							cx="350"
							cy="200"
							r="100"
							fill="url(#grad2-light)"
							opacity="0.8"
						/>
						<circle
							cx="200"
							cy="500"
							r="150"
							fill="url(#grad3-light)"
							opacity="0.75"
						/>
						<circle
							cx="100"
							cy="400"
							r="80"
							fill="url(#grad1-light)"
							opacity="0.7"
						/>
					</g>

					{/* Decorative circles - Dark mode */}
					<g className="hidden dark:block" opacity="0.4">
						<circle cx="30" cy="30" r="3" fill="#fb7185" />
						<circle cx="370" cy="550" r="4" fill="#f43f5e" />
						<circle cx="120" cy="550" r="2" fill="#fda4af" />
						<circle cx="300" cy="40" r="2.5" fill="#e11d48" />
						<circle cx="80" cy="180" r="2" fill="#fb7185" opacity="0.3" />
						<circle cx="320" cy="350" r="3" fill="#fda4af" opacity="0.35" />
					</g>

					{/* Decorative circles - Light mode */}
					<g className="block dark:hidden" opacity="0.6">
						<circle cx="30" cy="30" r="3" fill="#e11d48" />
						<circle cx="370" cy="550" r="4" fill="#be123c" />
						<circle cx="120" cy="550" r="2" fill="#f43f5e" />
						<circle cx="300" cy="40" r="2.5" fill="#be123c" />
						<circle cx="80" cy="180" r="2" fill="#e11d48" opacity="0.5" />
						<circle cx="320" cy="350" r="3" fill="#f43f5e" opacity="0.55" />
					</g>
				</svg>
			</div>
		</div>
	);
}
