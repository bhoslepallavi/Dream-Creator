import React from 'react';
import Home from './Pages/Layouts/Home/Home';
import Aboutus from './Pages/Layouts/Aboutus/Aboutus';
import Services from './Pages/Layouts/Services/Services';
import Testimonials from './Pages/Layouts/Testimonials/Testimonials';
import Contact from './Pages/Layouts/Contact/Contact';
import Event from './Pages/Layouts/Event/Event';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Globalstyle } from './Assets/Styles/Globalstyle';
import { ThemeProvider } from 'styled-components';




const App = () => {
  const theme = {
    
  }

  return (
    <ThemeProvider theme={ theme }> 
    <Globalstyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/service' element={<Services />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/event' element={<Event/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App