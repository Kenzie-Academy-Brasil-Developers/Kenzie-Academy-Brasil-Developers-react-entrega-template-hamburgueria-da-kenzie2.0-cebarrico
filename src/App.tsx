import { RoutesMain as Routes } from "./routes";

import { GlobalStyle } from "./styles/global";

import { AuthProvider } from "./contexts/AuthContext";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{ backgroundColor: "var(--color-grey-2)" }}
      />
    </>
  );
}

export default App;
