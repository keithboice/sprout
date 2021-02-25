/**
 *
 * @param state
 * @returns {string}
 */
export function currentBreakPoint(state) {
	const { windowWidth } = state
	if (windowWidth >= state.breakpoints.xl) {
		return "xl"
	}
	if (windowWidth >= state.breakpoints.lg) {
		return "lg"
	}
	if (windowWidth >= state.breakpoints.md) {
		return "md"
	}
	if (windowWidth >= state.breakpoints.sm) {
		return "sm"
	}
	return "xs"
}
