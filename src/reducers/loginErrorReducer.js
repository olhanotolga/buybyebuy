export const loginErrorReducer = (state, action) => {
	switch (action) {
		case 'DISPLAY_MISMATCH':
			return 'User not found. try again.';
		case 'DISPLAY_EMPTY':
			return 'No info — no signing in!';
		case 'DISPLAY_NULL':
			return null;
		default:
			return ''
	}
}