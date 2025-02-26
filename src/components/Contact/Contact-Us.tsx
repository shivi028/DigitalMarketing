"use client"

import { useState, useEffect } from "react"
import ContactForm from "./contact-form"
import ContactInfo from "./contact-info"

const dynamicWords = ["Strategy", "Business", "Clients", "Growth", "Success"]

export default function ContactPage() {
  const [currentWord, setCurrentWord] = useState(dynamicWords[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = dynamicWords.indexOf(prevWord)
        return dynamicWords[(currentIndex + 1) % dynamicWords.length]
      })
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5cdf9] to-[#F6F6F7]  flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <ContactInfo currentWord={currentWord} />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

