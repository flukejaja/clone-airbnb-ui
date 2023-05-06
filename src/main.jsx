import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  RecoilRoot,
} from 'recoil';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
