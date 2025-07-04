"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, AlertCircle, ShieldOff, Menu, X, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DealBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    domain: "",
  })
  const [formErrors, setFormErrors] = useState({
    domain: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const errors = { domain: "" }
    let isValid = true

    if (!formData.domain.trim()) {
      errors.domain = "Domain is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    // Clear error when user starts typing
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors({ ...formErrors, [field]: "" })
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#fffef9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#003366]" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="#" className="text-2xl font-normal text-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] rounded" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                DealBrief
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1 text-sm uppercase tracking-wide"
                aria-label="Learn how DealBrief works"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1 text-sm uppercase tracking-wide"
                aria-label="View pricing options"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1 text-sm uppercase tracking-wide"
                aria-label="View resources and FAQ"
              >
                Resources
              </button>
              <Button
                onClick={() => scrollToSection("snapshot-form")}
                className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-3 text-sm uppercase tracking-wide border-0 rounded-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 transition-colors"
                aria-label="Get your free threat snapshot"
              >
                Get Free Threat Snapshot
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1"
                  aria-label="Learn how DealBrief works"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1"
                  aria-label="View pricing options"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] rounded px-2 py-1"
                  aria-label="View resources and FAQ"
                >
                  Resources
                </button>
                <Button
                  onClick={() => scrollToSection("snapshot-form")}
                  className="bg-[#003366] hover:bg-[#002244] text-white w-full px-8 py-3 text-sm uppercase tracking-wide border-0 rounded-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 transition-colors"
                  aria-label="Get your free threat snapshot"
                >
                  Get Free Threat Snapshot
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-[#fffef9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-normal text-[#003366] leading-tight" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                  See the cyber risks hiding in every deal.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
                  From first look to final close to ongoing protection.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="relative bg-white shadow-lg border border-[#d4d4d4] rounded-none overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#003366]"></div>
                <CardHeader className="text-center pb-8 pt-8 px-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#003366] rounded-none flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-normal text-[#003366] mb-2" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Free Threat Snapshot</CardTitle>
                  <p className="text-gray-600 text-lg">Inline summary of critical exposures appears in &lt;15 seconds</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-4">
                      <Input
                        placeholder="Enter a domain"
                        className="bg-gray-50 border-gray-400 h-12 text-base focus:border-[#003366] focus:ring-[#003366] rounded-sm"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => scrollToSection("snapshot-form")}
                      className="bg-[#003366] hover:bg-[#002244] text-white w-full h-12 text-base font-normal rounded-none shadow-sm hover:shadow-md transition-all duration-150 uppercase tracking-wide"
                    >
                      Get Free Threat Snapshot
                    </Button>
                  </form>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-[#2c5530]" />
                      <span>Inline summary appears in &lt;15 seconds</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#003366] mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>You're Evaluating Companies Blind</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <ShieldOff className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Cyber breaches erase deal value overnight</h3>
              <p className="text-gray-600">
                A single breach can destroy months of due diligence work and deal momentum.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Traditional diligence surfaces issues weeks too late</h3>
              <p className="text-gray-600">
                Often after term sheets are signed, when it's too costly to walk away.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                Manual approaches don't scale to hundreds of pitches
              </h3>
              <p className="text-gray-600">
                You need rapid screening for early-stage volume and portfolio assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Lifecycle Solution */}
      <section id="how-it-works" className="py-20 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#003366] mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Our Full-Lifecycle Solution</h2>
            <p className="text-xl text-gray-600">Scout → Deep Dive → Portfolio Protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-normal text-[#003366] mb-2" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Scout</h3>
                <p className="text-gray-600">Rapid screening for early-stage volume</p>
                <p className="text-sm text-gray-500">$497 per target</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-normal text-[#003366] mb-2" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Deep Dive</h3>
                <p className="text-gray-600">Diligence-grade analysis for winners</p>
                <p className="text-sm text-gray-500">$1,497 per target</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-normal text-[#003366] mb-2" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Portfolio Protection</h3>
                <p className="text-gray-600">Continuous monitoring post-close</p>
                <p className="text-sm text-gray-500">$5K–25K / mo</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-3 text-sm uppercase tracking-wide border-0 rounded-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2 transition-colors"
              aria-label="View our pricing options"
            >
              See Pricing Options <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free Rapid Risk Snapshot Form */}
      <section id="snapshot-form" className="py-20 bg-[#003366]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-normal text-white mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                Enter a domain → Get instant Threat Snapshot
              </h2>
              <p className="text-[#c8d1dd] text-lg">
                Inline summary of critical exposures appears in &lt;15 seconds
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto" role="form" aria-label="Complete Snapshot Request Form">
                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="domain-url" className="sr-only">Primary domain/URL</label>
                    <Input
                      id="domain-url"
                      placeholder="Enter your domain"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      required
                      className={`bg-white h-14 text-lg rounded-sm ${formErrors.domain ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      aria-label="Enter your primary domain or website URL"
                      aria-invalid={!!formErrors.domain}
                      aria-describedby={formErrors.domain ? 'domain-error' : undefined}
                    />
                    {formErrors.domain && (
                      <p id="domain-error" className="mt-1 text-sm text-red-600" role="alert">
                        {formErrors.domain}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-[#2c5530] hover:bg-[#2c5530]/90 text-white px-12 py-4 text-lg w-full md:w-auto focus:ring-2 focus:ring-[#2c5530] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-none uppercase tracking-wide"
                  aria-label={isSubmitting ? 'Generating your snapshot, please wait' : 'Generate your free threat snapshot'}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Get Free Threat Snapshot
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-[#d3e1d4] border border-[#2c5530] rounded-none p-8 max-w-2xl mx-auto">
                <CheckCircle className="h-12 w-12 text-[#2c5530] mx-auto mb-4" />
                <h3 className="text-2xl font-normal text-[#2c5530] mb-2" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Snapshot Requested!</h3>
                <p className="text-[#2c5530]">Report will arrive by email in ~5 min.</p>
              </div>
            )}

            <p className="text-[#c8d1dd] text-sm">We've scanned 100+ businesses—zero impact on production.</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#003366] mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Product Showcase</h2>
            <p className="text-xl text-gray-600">Clear upgrade path: start free → add Scout runs → upgrade to Deep Dive → lock in Protection</p>
          </div>

          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse border border-[#d4d4d4]">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Product</th>
                  <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Description</th>
                  <th className="border border-[#d4d4d4] px-6 py-4 text-right text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Scout</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Screen 100s of opportunities fast<br/>15 critical risk factors<br/>Red-flag detector<br/>Results in minutes</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$497 per target</td>
                </tr>
                <tr className="bg-[#fafafa]">
                  <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Deep Dive</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Due-diligence depth that closes deals<br/>25+ attack vectors<br/>Financial impact modeling<br/>Board-ready PDF & XLS</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$1,497 per target</td>
                </tr>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Portfolio Protection</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Ongoing visibility that guards enterprise value<br/>Quarterly board reporting<br/>Early-warning alerts<br/>Trend analysis across portfolio</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$5K–25K / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h3 className="text-2xl font-normal text-[#003366] mb-8 text-center" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Subscription Tiers</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#d4d4d4]">
                <thead>
                  <tr className="bg-[#fafafa]">
                    <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Tier</th>
                    <th className="border border-[#d4d4d4] px-6 py-4 text-center text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Companies / Month</th>
                    <th className="border border-[#d4d4d4] px-6 py-4 text-right text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Monthly Fee</th>
                    <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-normal" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]">Scout 10</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-center">10</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$99</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Light prospecting & quick triage</td>
                  </tr>
                  <tr className="bg-[#fafafa]">
                    <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]">Scout 50</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-center">50</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$299</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Steady deal flow (1-2 screens / day)</td>
                  </tr>
                  <tr>
                    <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]">Scout 150</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-center">150</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$599</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">High-volume sourcing teams</td>
                  </tr>
                  <tr className="bg-[#fafafa]">
                    <td className="border border-[#d4d4d4] px-6 py-4 font-normal text-[#003366]">Deep Dive</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-center">Pay-as-you-go</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-right font-normal text-[#003366]">$3,000</td>
                    <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Final confirmatory diligence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#003366] mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Trust Signals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-[#d4d4d4] rounded-none">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "We scanned fifty seed-stage pitches with Scout, surfaced three sleepers, and dropped five high-risk deals before partner meeting."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                  <div>
                    <p className="font-normal text-[#003366]">Managing Partner</p>
                    <p className="text-sm text-gray-600">Early-Stage VC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#d4d4d4] rounded-none">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "DealBrief's Deep Dive cut our acquisition price by $2M after exposing credentials for sale on the dark web."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                  <div>
                    <p className="font-normal text-[#003366]">VP Corporate Development</p>
                    <p className="text-sm text-gray-600">Private Equity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#d4d4d4] rounded-none">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "Quarterly Portfolio Protection caught an exposed S3 bucket and prevented a $4.88M breach."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                  <div>
                    <p className="font-normal text-[#003366]">CISO</p>
                    <p className="text-sm text-gray-600">Growth-Equity Fund</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#003366] mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                How long is a scan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Less than 10 minutes per domain. Our scans are external-only and designed to have zero impact on your production systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                What data sources do you use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                External attack-surface signals only; no intrusive testing. We use public DNS, certificate transparency logs,
                and other open-source intelligence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                Does Deep Dive include financial impact?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, modeled against industry breach benchmarks. We provide board-ready PDF plus raw XLS findings
                with quantified financial impact estimates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-normal text-[#003366]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
                Can we swap companies in a tier?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, each quarter. Portfolio Protection allows you to swap companies in your tier to match your current portfolio composition.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-normal mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Threat Snapshot
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Scout
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Deep Dive
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Portfolio Protection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Use Cases</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    VC / PE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    M&A Teams
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Advisors & Brokers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:hello@dealbrief.com" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    hello@dealbrief.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#c8d1dd] hover:text-white transition-colors hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#c8d1dd] mt-12 pt-8 text-center">
            <p className="text-[#c8d1dd]">© 2025 DealBrief Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}