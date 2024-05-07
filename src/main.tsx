import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'
import { FilterableTable } from './learning-tutorial/Filterable-table.tsx'
import {PRODUCTS} from './learning-tutorial/products'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterableTable products={PRODUCTS}/>
  </React.StrictMode>,
)
