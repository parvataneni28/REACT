import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import Hello from './components/footer'
import ThankYou from './components/header'
import LanguageSelector from './components/languageselector'

const App = () => {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
        </Suspense>
      </div>
    )
}

export default App