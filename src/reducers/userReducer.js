import { initialUserState } from '../data/userState';

export const ACTION_TYPES = {
  LOGGED_IN: 'logged-in',
  SIGNED_UP: 'signed-up',
  LOGGED_OUT: 'logged-out',
};

export function userReducer(state, action) {
  const { type, payload } = action;
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
