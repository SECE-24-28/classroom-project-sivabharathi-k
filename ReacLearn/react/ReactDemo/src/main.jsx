import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import UseRefEg from './UseRefEg'
import UseEffectEg from './UseEffectEg'
import UseStateEg from './UseStateEg'
import ExampleTables from './ExampleTables'
import StudentForm from './StudentForm'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  {/*<App/>*/} 
  {/* <Sample/>*/}

  {/*<UseRefEg/>*/}

  {/* <UseStateEg/>*/}
   
   {/*<UseStateEg/>*/}

   <StudentForm/>


  </StrictMode>,
)

