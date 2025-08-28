//TO DO:  Add Hero img here

import React, { useState } from 'react'
import HERO_IMG from "../assets/hero-img.jpg"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {

  };

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage