import "./App.css";
import AppRouter from "./AppRouter";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setAuthentication(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthentication }}>
      <div className="App">
        <div className="main-container">
          <h1 className="logo">LOGO</h1>
          <AppRouter></AppRouter>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
