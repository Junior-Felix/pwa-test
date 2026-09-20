export function isStandalone(): boolean {
	if (typeof window === 'undefined') {
		return false;
	}

	return (
		window.matchMedia('(display-mode: standalone)').matches ||
		('navigator' in window &&
			'standalone' in navigator &&
			//@ts-expect-error - iOS Safari-specific property
			navigator.standalone === true)
	);
}
