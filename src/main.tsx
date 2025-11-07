import React from 'react'
import ReactDOM from 'react-dom/client'
import ZhowitApp from './ZhowitApp'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'bootstrap';
import './Sass/Styles.scss'
import "./Sass/components/datePikerStyles.scss";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ZhowitApp />
    </Provider>

  </React.StrictMode>,
)
