export default function WrappedBackgroundDesign() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Solid background - no gradients */}
			<div className="absolute inset-0 bg-background" />
		</div>
	);
}
