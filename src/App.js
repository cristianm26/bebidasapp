import React from 'react'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListaRecetas from './Components/ListaRecetas'
import CategoriasProvider from './context/CategoriasContext'
import ModalProvider from './context/ModalContext'
import RecetasProvider from './context/RecetasContext'

const App = () => {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5" >
            <div className="row" >
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App

