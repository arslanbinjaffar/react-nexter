import React from 'react'
import Story from './components/story/Story'
import Header from './components/header/Header';
import Realtors from './components/realtors/Realtors';
import Features from './components/features/Features';
import Homes from './components/homes/Homes';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <Header/>
      <Realtors/>
      <Features/>
      <Story/>
      <Homes/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App