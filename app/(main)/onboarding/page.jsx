import { industries } from '@/data/industries'
import React from 'react'

const OnboardingPage = () => {
  //check if user is alreaaday onboarded
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage