import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Nuestros components
import ShowProvinces from './components/provinces/ShowProvinces';
import CreateProvince from './components/provinces/CreateProvince';
import EditProvince from './components/provinces/EditProvince';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import ShowDistricts from './components/districts/ShowDistricts';
import CreateDistrict from './components/districts/CreateDistrict';
import EditDistrict from './components/districts/EditDistrict';

import ShowTownships from './components/townships/ShowTownships';
import CreateTownship from './components/townships/CreateTownship';
import EditTownship from './components/townships/EditTownship';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function App() {
  return (
    <div className='mx-auto container text-center'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            
            <Route path='/dashboard' element={<Dashboard/>} />

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            {/* <Route path='/login'>
              {localStorage.getItem('token') ? <Navigate replace to="/dashboard" /> : <Login/>}
            </Route>

            <Route path='/register'>
              {localStorage.getItem('token') ? <Navigate replace to="/dashboard" /> : <Register/>}
            </Route> */}

            <Route path='/provinces' element={<ShowProvinces/>} />
            <Route path='/province/create' element={<CreateProvince/>} />
            <Route path='/province/edit/:id' element={<EditProvince/>}/>

            <Route path='/province/:id/districts' element={<ShowDistricts/>} />
            <Route path='/district/create/:id' element={<CreateDistrict/>} />
            <Route path='/district/edit/:id' element={<EditDistrict/>} />

            <Route path='/district/:id/townships' element={<ShowTownships/>} />
            <Route path='/township/create/:id' element={<CreateTownship/>} />
            <Route path='/township/edit/:id' element={<EditTownship/>} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

//Roles
//Inicio de sesion
//Validaciones
//Dashboard
//Administrar categorización
//A futuro se puede agregar feature para editar la provincia de un distrito, o el distrito de un corregimiento
/*
COlumna de codigo (id) en las entidades (Hasta el momento se maneja como numeros solamente) en caso de un cambio, entonces se puede crear un campo especial para el codigo
y otro para el id*/
