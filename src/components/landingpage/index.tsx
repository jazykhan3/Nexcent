import React from 'react'
import Hero from './hero'
import FeaturesSection from './features-section'
import PopularReviews from './popular-reviews'
import EmaiForm from './email-form'
import Faq from './faq'

function LandingPage() {
  return (
    <div><Hero/>
    <FeaturesSection/>
    <EmaiForm />
    <PopularReviews/>
    <Faq/>
    </div>
  )
}

export default LandingPage