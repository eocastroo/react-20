import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';
import SendEmail from '../pages/SendEmail';
import AppContext from '../Context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.scss';




const App = () => {
    const initialState = useInitialState();
    return (
    <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recovery-password" element={<PasswordRecovery />} />
                <Route exact path='/send-email' element={< SendEmail />}/>
                <Route exact path="/Checkout" element={<Checkout />} />
                <Route exact path='/NewPassword' element={< NewPassword/>} />             
                <Route exact path="/CreateAccount" element={<CreateAccount />} />
                <Route exact path="/MyAccount" element={<MyAccount />} />
                <Route exact path="/NewPassword" element={< NewPassword />}/>
                <Route exact path="/Orders"  element ={< Orders />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </AppContext.Provider>  

    );
}

export default App;