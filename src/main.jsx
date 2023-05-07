import React from 'react'
import ReactDOM from 'react-dom/client'
import Approute from './router';
import './index.css'
import {
  RecoilRoot,
} from 'recoil';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Approute/>
    </RecoilRoot>
  </React.StrictMode>,
)
