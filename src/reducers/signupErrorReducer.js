export const signupErrorReducer = (state, action) => {
	switch (action) {
		case 'DISPLAY_MISMATCH':
			return 'Passwords don\'t match. try again.';
		case 'DISPLAY_EMPTY_PW':
			return 'Password is empty!';
		case 'DISPLAY_EMPTY_UN':
			return 'Username is empty!';
		case 'DISPLAY_NULL':
			return null;
		default:
			return ''
	}
}