'use client'
import { Phone, Mail, Clock } from "lucide-react"
import { motion } from 'framer-motion';

interface ContactInfoProps {
  currentWord: string
}

export default function ContactInfo({ currentWord }: ContactInfoProps) {
  return (
    <div className="md:w-1/2 bg-[#b59dda] p-8 md:p-12">
     <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Talk {' '}
          <span className="relative inline-block mt-3 text-3xl">
            <motion.span
              key={currentWord}
              className="text-[#544172] text-3xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentWord}
              <span className="absolute left-0 w-full h-2 bottom-[-8px]">
                <svg
                  className="w-full h-full"
                  role="presentation"
                  viewBox="-320 -70.8161 640.4 59.82"
                  preserveAspectRatio="none"
                >
                  <path
                    style={{ animationDuration: "0.2s" }}
                    d="M-300,-56 C-50,-72 298,-65 300,-59 C332,-53 -239,-36 -255,-27 C-271,-18 -88,-24 91,-20"
                    stroke="#6f15bb"
                    strokeWidth="7.777"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.span>
          </span>
        </motion.h1>
      </div>
      <p className="text-lg mb-8">
        We're here to help and answer any question you might have. We look forward to hearing from you!
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-6 h-6 mr-4 text-[#9747FF]" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-4 text-[#9747FF]" />
          <span>contact@digitalagency.com</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-6 h-6 mr-4 text-[#9747FF]" />
          <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  )
}

