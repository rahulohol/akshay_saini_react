import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'                                 
// import WebLogo from './Components/WebLogo'
import Header from './Components/Header'
import RestaurantList from './Components/RestaurantList'
import Footer from './Components/Footer'

// Header
// - Logo(Title)
// - Nav Items(Right Side)
// - Cart
// Body 
// - Search bar
// - RestrauntList
//   - RestaurantCard (many cards)
//       - Image
//       - Name
//       - Rating
//       - Cusines
// Footer
// - links
// - Copyright

function App() {

  return (
    <div className="App">
  <div>
    <Header />
    <RestaurantList />
    <Footer />
  </div>
    </div>
  )
}

export default App
