import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CalendarContainer from "./Components/CalendarContainer";
import PageFormulaires from "./Pages/PageFormulaires";
import DetailsCard from "./Components/DetailsCard";
import NewAccount from './NewAccount/NewAccount.js';
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CalendarContainer />} />
          <Route path="/formulaire" element={<PageFormulaires />} />
          <Route path="/details" element={<DetailsCard />} />
          <Route path="/register" element={<NewAccount />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
