
import React from 'react'
import ContactPage from "@/components/contact/"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function page() {
  return (
    <div>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  )
}
