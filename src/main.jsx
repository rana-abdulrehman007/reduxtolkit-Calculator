import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'


import { Provider } from 'react-redux'      // Provider yahan se aata hai
import store from './reduxtolkit/Store.jsx'       // apna store (default export ho to)
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Provider store={store}>
       <App />

    </Provider>
   */}


    <BrowserRouter>
          <App /> 

    </BrowserRouter>
   
      {/* <App />  */}

      
     
  </StrictMode>
)
