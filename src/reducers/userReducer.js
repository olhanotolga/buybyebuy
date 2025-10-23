export const ACTION_TYPES = {
  LOGGED_IN: 'logged-in',
  SIGNED_UP: 'signed-up',
  LOGGED_OUT: 'logged-out',
};

export function userReducer(state, action) {
  const { type, payload } = action;

  // Because reducers are pure functions, I cannot use any external values
  // Should be same as in UserContext
  const initialUserState = {
    users: {
      admin: 'iamtheboss',
      olhanotolga: 'bestpassword',
    },
    userData: {
      username: '',
      password: '',
    },
  };

  // Same here, I should see that this const is same as exported pseudo-enum at the top
  const ACTION_TYPES = {
    LOGGED_IN: 'logged-in',
    SIGNED_UP: 'signed-up',
    LOGGED_OUT: 'logged-out',
  };

  switch (type) {
    case ACTION_TYPES.LOGGED_IN: {
      return {
        users: { ...state.users },
        userData: {
          username: payload.username,
          password: payload.password,
        },
      };
    }
    case ACTION_TYPES.SIGNED_UP: {
      return {
        users: { ...state.users, [payload.username]: payload.password },
        userData: { username: payload.username, password: payload.password },
      };
    }
    case ACTION_TYPES.LOGGED_OUT: {
      return initialUserState;
    }
    default: {
      throw new Error('Unrecognized user action!');
    }
  }
}
