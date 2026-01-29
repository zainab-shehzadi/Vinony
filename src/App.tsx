import "./App.css";
import { ModalProvider } from "styled-react-modal";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <ModalProvider>
      <AppRoutes />
    </ModalProvider>
  );
}
