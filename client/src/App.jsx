import "./index.css";
import "./css/custom.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Footer from "./components/Footer";
import About_VanueHub from "./pages/About_VanueHub";
import Contact_Us from "./pages/Contact_Us";
import Privacy_Policy from "./pages/Privacy_Policy";
import Event_Wedding from "./pages/Event_Wedding";
import Corporate_Event from "./pages/Corporate_Event";
import Service_Detail from "./components/Service_Detail";
import Navbar from "./components/Navbar";
import Page404 from "./pages/404page";
import FormOne from "./pages/addVenue";
import CardLayout from "./pages/cardLayout";
// import Alert from "./components/alert";

function App() {
   return (
    <>
    <BrowserRouter>
       <Navbar />
       <Header />
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/about" element={<About_VanueHub/>} />
          <Route path="/contact" element={<Contact_Us/>} /> 
          <Route path="/privacy" element={<Privacy_Policy/>} />  
          <Route path="/event_decor" element={<Event_Wedding/>}/>
          <Route path="/corporate_event" element={<Corporate_Event/>}/>
          <Route path="/service" element={<Service_Detail/>}/>
          <Route path="/card/:city/:plus" element={<CardLayout />} />
          <Route path="/add-venue" element={<FormOne />} />
          {/* <Route path="/alert" element={<Alert />} /> */}
          <Route path="*" element={<Page404/>} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
