import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Carburant from './pages/carburant/Carburant';
import Categorie from './pages/categorie/Categorie';
import Climatisation from './pages/climatisation/Climatisation';
import Jante from './pages/jante/Jante';
import Marque from './pages/marque/Marque';
import Moteur from './pages/moteur/Moteur';
import Vitesse from './pages/vitesse/Vitesse';
import Modele from './pages/modele/Modele';
import CarSalesDashboard from './pages/dashboard/CarSalesDashboard';
import Annonce from './pages/annonce/Annonce';

const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/dashboard" element={<CarSalesDashboard/>} />
        <Route path="/" element={<CarSalesDashboard/>} />

        <Route path="/carburant" element={<Carburant/>} />

        <Route path="/categorie" element={<Categorie/>} />

        <Route path="/climatisation" element={<Climatisation/>} />

        <Route path="/jante" element={<Jante/>} />

        <Route path="/marque" element={<Marque/>} />

        <Route path="/moteur" element={<Moteur/>} />

        <Route path="/vitesse" element={<Vitesse />} /> 

        <Route path="/modele" element={<Modele />} />

        <Route path="/annonce" element={<Annonce/>} />
      </Routes>
  );
};

export default App;
