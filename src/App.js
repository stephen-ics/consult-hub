import { ChakraProvider  } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <ChakraProvider>
      <HelmetProvider>
        <div className=''>
          <Helmet>
            <title>Api-development Frontend</title>
            <meta name="description" content="Hello! I'm Stephen! I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer."></meta>
          </Helmet>
          <BrowserRouter>
            <Navbar />
            <AnimatePresence 
            wait
            >
              <Routes>
                  <Route path='/' exact element={<Home />}></Route>
                  <Route path='/page1' exact element={<Page1 />}></Route>
                  <Route path='/page2' exact element={<Page2 />}></Route>
              </Routes>
        </AnimatePresence>
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default App;