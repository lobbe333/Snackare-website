import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SpeakerProfile from './components/SpeakerProfile';
import Home from './components/Home'
import Speakers from './components/Speakers'
import About from './components/About'
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, ScrollRestoration } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [speakers, setSpeakers] = useState([])

  const speakersCollectionRef = collection(db, "speakers")

  useEffect(() => {
    const getSpeakers = async () => {

      try {
        const data = await getDocs(speakersCollectionRef)
        const filteredData = data.docs.map(doc => (
          {
            ...doc.data(),
            id: doc.id
          }
        ))
        console.log(filteredData)
        setSpeakers(filteredData)
      } catch (err) {
        console.error(err)
      }
    }
    getSpeakers()
  }, [])

  return (
    <Router>
      <div>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Home/>
          } />
          <Route path='/speakers' element={
            <SpeakersWrapper
              speakers={speakers}
            />
          } />
          <Route path='/speaker/:id' element={
            <SpeakerProfile speakers={speakers} />
          }
          />
          <Route path='about' element={
            <About />
          }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function SpeakersWrapper({ speakers }) {
  const location = useLocation();
  const category = location.state?.category;
  let speakersHeader = category

  if(speakersHeader === "moderator"){
    speakersHeader = "Våra moderatorer"
  } else if (speakersHeader === "entertainer"){
    speakersHeader = "Våra underhållare"
  } else if (speakersHeader === "lecturer") {
    speakersHeader = "Våra föreläsare"
  }
  console.log("SpeakersWrapper: " + category)
  return <Speakers speakers={speakers} category={category} speakersHeader={speakersHeader}/>;
}

export default App;
