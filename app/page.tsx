"use client"

import React, { useState } from "react"
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
      {/* Compliance Bar */}
      <div className="h-3 bg-[#E3B341] flex items-center justify-center">
        <div className="flex items-center space-x-6 text-xs text-[#1a1a1a] font-medium">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <div className="w-px h-2 bg-[#1a1a1a] opacity-30"></div>
          <Link href="#" className="hover:underline">Terms</Link>
          <div className="w-px h-2 bg-[#1a1a1a] opacity-30"></div>
          <Link href="#" className="hover:underline">Security</Link>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#003366]" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="#" className="text-2xl font-medium text-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] rounded">
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
                className="btn-primary focus:ring-2 focus:ring-[#E3B341] focus:ring-offset-2"
                aria-label="Run a free threat snapshot"
              >
                Run a Free Threat Snapshot
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
                  className="btn-primary w-full focus:ring-2 focus:ring-[#E3B341] focus:ring-offset-2"
                  aria-label="Run a free threat snapshot"
                >
                  Run a Free Threat Snapshot
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
                <h1 className="text-5xl lg:text-6xl font-medium text-[#003366] leading-tight">
                  Know a target's cyber risk in 5 minutes—protect portfolio IRR for years.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Due diligence that prevents cyber surprises from erasing deal value overnight.
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
                  <CardTitle className="text-2xl font-medium text-[#003366] mb-2">Free Threat Snapshot</CardTitle>
                  <p className="text-gray-600 text-lg">30-second sample report</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-4">
                      <label htmlFor="hero-domain" className="sr-only">Company domain</label>
                      <Input
                        id="hero-domain"
                        placeholder="Enter a domain"
                        className="bg-gray-50 border-gray-400 h-12 text-base focus:border-[#003366] focus:ring-[#003366] rounded-sm"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => scrollToSection("snapshot-form")}
                      className="btn-primary w-full h-12 text-base"
                    >
                      Run a Free Threat Snapshot
                    </Button>
                  </form>
                  {/* Stats removed - placeholder for real data */}
                  {/* <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center text-gray-500">
                      <div>
                        <div className="font-semibold text-[#003366]">120+</div>
                        <div>companies scanned</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#003366]">&lt; 5 min</div>
                        <div>first findings</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#003366]">48 h</div>
                        <div>full audit SLA</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#003366]">Zero</div>
                        <div>production impact</div>
                      </div>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip - COMMENTED OUT: Contains made-up client names */}
      {/* <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 mb-3">
              <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">BACKED BY XYZ VENTURES</div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">USED BY ABC CAPITAL</div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">TRUSTED BY DEF PARTNERS</div>
            </div>
            <p className="text-sm text-gray-500">Used by investors and operators across tech, healthcare and manufacturing.</p>
          </div>
        </div>
      </section> */

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">You're Evaluating Companies Blind</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <ShieldOff className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">Cyber breaches erase deal value overnight</h3>
              <p className="text-gray-600">
                A single breach can destroy months of due diligence work and deal momentum.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">Traditional diligence surfaces issues weeks too late</h3>
              <p className="text-gray-600">
                Often after term sheets are signed, when it's too costly to walk away.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">
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
            <h2 className="text-4xl font-medium text-[#003366] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three-step narrative</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Scout</h3>
                <p className="text-gray-600">Automated reconnaissance surfaces misconfigurations, leaked secrets and vulnerable sub-domains in under five minutes.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Know in five." Drop high-risk targets before the partner meeting.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Deep Dive</h3>
                <p className="text-gray-600">48-hour confirmatory audit covering 25+ vectors, financial impact modelling and remediation roadmap.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"No surprises at close." Full diligence mapped to EBITDA impact, delivered in 2 days.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Portfolio Protection</h3>
                <p className="text-gray-600">Continuous monitoring of every portco with alerting, dashboards and quarterly board packs.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Guard IRR long term." Continuous detection plus board-ready reporting.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="btn-primary px-8 py-3 text-sm focus:ring-2 focus:ring-[#E3B341] focus:ring-offset-2"
              aria-label="View our pricing options"
            >
              View Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free Rapid Risk Snapshot Form */}
      <section id="snapshot-form" className="py-20 bg-[#003366]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-medium text-white mb-4">
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
                  className="btn-primary px-12 py-4 text-lg w-full md:w-auto focus:ring-2 focus:ring-[#E3B341] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isSubmitting ? 'Generating your snapshot, please wait' : 'Generate your free threat snapshot'}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Run a Free Threat Snapshot
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-[#d3e1d4] border border-[#2c5530] rounded-none p-8 max-w-2xl mx-auto">
                <CheckCircle className="h-12 w-12 text-[#2c5530] mx-auto mb-4" />
                <h3 className="text-2xl font-medium text-[#2c5530] mb-2">Snapshot Requested!</h3>
                <p className="text-[#2c5530]">Report will arrive by email in ~5 min.</p>
              </div>
            )}

            {/* <p className="text-[#c8d1dd] text-sm">We've scanned 100+ businesses—zero impact on production.</p> */}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">Per-company, self-serve</p>
          </div>

          {/* Scout Tiers */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Scout Tiers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Scout 10</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$199<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 10 companies/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Daily diff</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">15-factor red-flag matrix, cost exposure per issue</p>
                    <p className="text-sm text-gray-500 italic">All include plain-English fixes & Jira export</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Scout 10</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E3B341] rounded-lg overflow-hidden relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#E3B341] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <CardHeader className="bg-[#fafafa] pb-4 pt-6">
                  <CardTitle className="text-xl font-medium text-[#003366]">Scout 50</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$749<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 50 companies/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">4-hour diff</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">15-factor red-flag matrix, cost exposure per issue</p>
                    <p className="text-sm text-gray-500 italic">All include plain-English fixes & Jira export</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Scout 50</Button>
                </CardContent>
              </Card>

              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Scout 150</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$1,499<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 150 companies/month</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">30-min diff</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">15-factor red-flag matrix, cost exposure per issue</p>
                    <p className="text-sm text-gray-500 italic">All include plain-English fixes & Jira export</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Scout 150</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Deep Dive */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Deep Dive</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Deep Dive</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$3,997<span className="text-lg font-medium"> one-time</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 company</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Turnaround</h4>
                    <p className="text-gray-600">48-hour delivery</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">25+-vector audit, remediation roadmap, XLS/PDF board pack</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Deep Dive</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Portfolio Protection */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Portfolio Protection</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Portfolio 10</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$2,000<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 10 portcos</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Continuous + Q-brief</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">24×7 scans, alerting, quarterly board deck</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Portfolio 10</Button>
                </CardContent>
              </Card>

              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Portfolio 50</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$5,000<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 50 portcos</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Continuous + Q-brief</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">24×7 scans, alerting, quarterly board deck</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Portfolio 50</Button>
                </CardContent>
              </Card>

              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Portfolio 150</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$10,000<span className="text-lg font-medium">/month</span></div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">Up to 150 portcos</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Continuous + Q-brief</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">24×7 scans, alerting, quarterly board deck</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Portfolio 150</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Competitive Advantage</h2>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-[#d4d4d4]">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-medium">DealBrief</th>
                  <th className="border border-[#d4d4d4] px-6 py-4 text-left text-[#003366] font-medium">UpGuard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Step-by-step, plain-English fixes for non-security teams</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Security-pro jargon</td>
                </tr>
                <tr className="bg-[#fafafa]">
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Financial impact model per finding</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Score-only ratings</td>
                </tr>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Self-serve checkout—no demo required</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">"Book a demo" gate</td>
                </tr>
                <tr className="bg-[#fafafa]">
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">48 h diligence audit</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">No equivalent offering</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#d4d4d4] p-8 rounded-none">
            <blockquote className="text-lg text-gray-600 italic mb-4">
              "UpGuard Starter (50 vendors) lists at $1,599 / mo and Professional (150 vendors) at $3,333 / mo—but only delivers rating-level findings. DealBrief under-cuts per-company cost while providing deeper, step-by-step remediation."
            </blockquote>
            <cite className="text-sm text-gray-500">Competitive analysis from industry pricing research</cite>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Trust Signals</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "We scanned fifty seed-stage pitches with Scout, surfaced three sleepers, and dropped five high-risk deals before partner meeting."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">Managing Partner</p>
                  <p className="text-sm text-gray-600">Early-Stage VC</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:mt-8">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "DealBrief's Deep Dive cut our acquisition price by $2M after exposing credentials for sale on the dark web."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">VP Corporate Development</p>
                  <p className="text-sm text-gray-600">Private Equity</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:-mt-4">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Quarterly Portfolio Protection caught an exposed S3 bucket and prevented a $4.88M breach."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">CISO</p>
                  <p className="text-sm text-gray-600">Growth-Equity Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                How does Scout count a "company"?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                One root domain or CIDR block with associated sub-domains.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Is any agent or credential required?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No—scanning is 100% external.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Can I upgrade tiers mid-cycle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes; billing is prorated instantly in-app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                What's the SLA for critical alerts?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Email push under 15 minutes, 8 × 5 support under 2 hours.
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
              <h3 className="text-lg font-medium mb-4">Product</h3>
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
              <h3 className="text-lg font-medium mb-4">Use Cases</h3>
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
              <h3 className="text-lg font-medium mb-4">Legal</h3>
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
              <h3 className="text-lg font-medium mb-4">Contact</h3>
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