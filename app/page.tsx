"use client";

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Menu, X } from "lucide-react"
import Link from "next/link"

export default function DealBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fffef9]">
      <header className="bg-white border-b-2 border-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#" className="text-2xl font-medium text-[#003366]">
              DealBrief
            </Link>
            <Button className="btn-primary">
              Run a Free Threat Snapshot
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-medium text-[#003366] mb-6">
            Know a target's cyber risk in 5 minutes—protect portfolio IRR for years.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Due diligence that prevents cyber surprises from erasing deal value overnight.
          </p>
          <Button className="btn-primary px-8 py-3">
            Run a Free Threat Snapshot
          </Button>
        </div>
      </section>
    </div>
  )
}