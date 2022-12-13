import { RoutesMain as Routes } from "./routes";

import { GlobalStyle } from "./styles/global";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
