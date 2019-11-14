import React from  'react';

import './App.css';
import ManagePage from './pages/managepage/manage-page'
import PreviewPage from './pages/previewpage/preview-page'
import Navigation from './components/navigation'
import {Route} from 'react-router-dom'
function App() {
  return(
    <div className="app">
     <Navigation/>
    <Route exact path="./manage-page" Component={ManagePage} />
    <Route path="./preview-page" Component={PreviewPage} />
   
    </div>
    
  );
  } 


  export default App;

