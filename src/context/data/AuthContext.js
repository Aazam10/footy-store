import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../../reducer/authReducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const initialState = {
    user: "",
    token: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    authDispatch({ type: "CHECK_USER", payload: { user, token } });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
