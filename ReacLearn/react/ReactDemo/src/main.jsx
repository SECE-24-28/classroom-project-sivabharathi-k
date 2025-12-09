import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Sample from './sample'
import UseRefEg from './UseRefEg'
import UseEffectEg from './UseEffectEg'
import UseStateEg from './UseStateEg'
import ExampleTables from './ExampleTables'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  {/*<App/>*/} 
  {/* <Sample/>*/}

  {/*<UseRefEg/>*/}

  {/* <UseStateEg/>*/}
   
   <ExampleTables/>


  </StrictMode>,
)

