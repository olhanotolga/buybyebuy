export const signupErrorReducer = (state, action) => {
	switch (action) {
		case 'DISPLAY_MISMATCH':
			return 'Passwords don\'t match. try again.';
		case 'DISPLAY_EMPTY':
			return 'Password is empty!';
		case 'DISPLAY_NULL':
			return null;
		default:
			return ''
	}
}