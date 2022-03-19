const authReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "SIGNUP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
  }
};

export { authReducer };
