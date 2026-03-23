export default function WrappedBackgroundDesign() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Solid background - no gradients */}
			<div className="bg-background absolute inset-0" />
		</div>
	);
}
