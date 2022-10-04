import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // TODO : 렌더링이 2번되어 개발할때 보기편하게 주석처리 함.
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
