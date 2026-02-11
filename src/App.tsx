import "./App.css";
import { ModalProvider } from "styled-react-modal";
import { AppRoutes } from "./routes/AppRoutes";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <ModalProvider>
      <ScrollToTop />
      <AppRoutes />
    </ModalProvider>
  );
}
