import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from 'framer-motion'

import Landing from './pages/Landing';
import Consultants from './pages/Consultants';
import ConsultantDetail from './pages/ConsultantDetail';
import Checkout from './pages/Checkout'
import OrderSucess from './pages/OrderSucess'
import OrderCancelled from './pages/OrderCancelled'

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
                <Route path='/' element={<Landing />} />
                <Route path='/consultants' element={<Consultants />} />
                <Route path='/consultants/:id' element={<ConsultantDetail />} />
                <Route path='/checkout/:id' element={<Checkout />} />
                <Route path='/order-cancelled/:id' element={<OrderSucess />} />
                <Route path='/order-success/:id' element={<OrderCancelled />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default App;
