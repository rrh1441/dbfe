"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, AlertCircle, ShieldOff, Menu, X, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SimplCyberLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    domain: "",
  })
  const [formErrors, setFormErrors] = useState({
    businessName: "",
    email: "",
    domain: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const errors = { businessName: "", email: "", domain: "" }
    let isValid = true

    if (!formData.businessName.trim()) {
      errors.businessName = "Business name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.domain.trim()) {
      errors.domain = "Domain/URL is required"
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="#" className="text-2xl font-semibold text-[#1F2D3D] focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded">
                SimplCyber
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                aria-label="Learn how SimplCyber works"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                aria-label="View pricing options"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                aria-label="View resources and FAQ"
              >
                Resources
              </button>
              <Button
                onClick={() => scrollToSection("snapshot-form")}
                className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2"
                aria-label="Get your free cybersecurity snapshot"
              >
                Get Free Snapshot
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2" 
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
                  className="text-left text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                  aria-label="Learn how SimplCyber works"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                  aria-label="View pricing options"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-600 hover:text-[#1F2D3D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3CC4A0] rounded px-2 py-1"
                  aria-label="View resources and FAQ"
                >
                  Resources
                </button>
                <Button
                  onClick={() => scrollToSection("snapshot-form")}
                  className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white w-full focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2"
                  aria-label="Get your free cybersecurity snapshot"
                >
                  Get Free Snapshot
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-semibold text-[#1F2D3D] leading-tight">
                  Simplified cybersecurity for small businesses
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Only platform that converts every risk into concrete costs so you can act in minutes.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3CC4A0]/20 to-[#1F2D3D]/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3CC4A0] to-[#1F2D3D]"></div>
                <CardHeader className="text-center pb-8 pt-8 px-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#3CC4A0] to-[#1F2D3D] rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#1F2D3D] mb-2">Free Risk Snapshot</CardTitle>
                  <p className="text-gray-600 text-lg">See your exact financial risk in 5 minutes</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-4">
                      <Input
                        placeholder="Business name"
                        className="bg-gray-50 border-gray-200 h-12 text-base focus:border-[#3CC4A0] focus:ring-[#3CC4A0]"
                      />
                      <Input
                        type="email"
                        placeholder="Work email"
                        className="bg-gray-50 border-gray-200 h-12 text-base focus:border-[#3CC4A0] focus:ring-[#3CC4A0]"
                      />
                      <Input
                        placeholder="Primary domain/URL"
                        className="bg-gray-50 border-gray-200 h-12 text-base focus:border-[#3CC4A0] focus:ring-[#3CC4A0]"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => scrollToSection("snapshot-form")}
                      className="bg-gradient-to-r from-[#3CC4A0] to-[#1F2D3D] hover:from-[#3CC4A0]/90 hover:to-[#1F2D3D]/90 text-white w-full h-12 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Generate My Snapshot →
                    </Button>
                  </form>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-[#3CC4A0]" />
                      <span>100+ businesses scanned • Zero production impact</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Explainer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">Why small businesses need SimplCyber</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center">
                <ShieldOff className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2D3D]">Attackers look for the easiest target</h3>
              <p className="text-gray-600">
                Small businesses are prime targets because they often lack dedicated security resources.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2D3D]">Most SMBs discover gaps only after a breach</h3>
              <p className="text-gray-600">
                By then, it's too late. Average SMB breach impact: $250 000.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#3CC4A0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2D3D]">
                SimplCyber shows you the gaps, the cost, and the fix—in minutes
              </h3>
              <p className="text-gray-600">
                Get actionable insights without the complexity or cost of traditional security assessments.
              </p>
              <div className="mt-6">
                <Button 
                  onClick={() => scrollToSection("snapshot-form")}
                  className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2"
                  aria-label="Start your free cybersecurity assessment"
                >
                  Start Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SimplCyber Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">How SimplCyber works</h2>
            <p className="text-xl text-gray-600">Three simple steps to understand and reduce your cyber risk</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#3CC4A0] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1F2D3D] mb-2">Scan</h3>
                <p className="text-gray-600">Automated external check of DNS, email, web stack, public cloud.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#3CC4A0] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1F2D3D] mb-2">Quantify</h3>
                <p className="text-gray-600">Calculates Expected Annual Loss so owners grasp impact.</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#3CC4A0] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1F2D3D] mb-2">Remediate</h3>
                <p className="text-gray-600">Step-by-step blueprint or optional hands-on help.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2"
              aria-label="View our pricing options"
            >
              See Pricing Options <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free Rapid Risk Snapshot Form */}
      <section id="snapshot-form" className="py-20 bg-[#1F2D3D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-4">
                Start your free Snapshot—see your exact financial risk in 5 minutes
              </h2>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto" role="form" aria-label="Complete Snapshot Request Form">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="business-name" className="sr-only">Business name</label>
                    <Input
                      id="business-name"
                      placeholder="Business name"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      required
                      className={`bg-white ${formErrors.businessName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      aria-label="Enter your business name"
                      aria-invalid={!!formErrors.businessName}
                      aria-describedby={formErrors.businessName ? 'business-name-error' : undefined}
                    />
                    {formErrors.businessName && (
                      <p id="business-name-error" className="mt-1 text-sm text-red-600" role="alert">
                        {formErrors.businessName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="work-email" className="sr-only">Work email</label>
                    <Input
                      id="work-email"
                      type="email"
                      placeholder="Work email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className={`bg-white ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      aria-label="Enter your work email address"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="domain-url" className="sr-only">Primary domain/URL</label>
                    <Input
                      id="domain-url"
                      placeholder="Primary domain/URL"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      required
                      className={`bg-white ${formErrors.domain ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
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
                  className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white px-12 py-4 text-lg w-full md:w-auto focus:ring-2 focus:ring-[#3CC4A0] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isSubmitting ? 'Generating your snapshot, please wait' : 'Generate your free cybersecurity snapshot'}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate My Snapshot
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Snapshot Requested!</h3>
                <p className="text-green-700">Report will arrive by email in ~5 min.</p>
              </div>
            )}

            <p className="text-gray-300 text-sm">We've scanned 100+ businesses—zero impact on production.</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">Choose your level of protection</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            {/* Snapshot Card */}
            <Card className="border-2 border-gray-200 hover:border-[#3CC4A0] transition-colors relative flex-1 max-w-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">Start Here – Free Scan</span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl text-[#1F2D3D]">Snapshot</CardTitle>
                <div className="text-4xl font-bold text-[#1F2D3D] mt-4">Free</div>
                <p className="text-sm text-gray-600 mt-2">Instant surface scan & dollar-risk estimate.</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white w-full">
                  Run Free Scan
                </Button>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center px-4">
              <div className="text-gray-400 text-3xl font-light">→</div>
            </div>

            {/* Deep-Dive Card */}
            <Card className="border-2 border-[#3CC4A0] relative flex-1 max-w-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#3CC4A0] text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl text-[#1F2D3D]">Deep-Dive</CardTitle>
                <div className="text-4xl font-bold text-[#1F2D3D] mt-4">$1,800</div>
                <p className="text-sm text-gray-600 mt-2">Full audit, prioritized fixes, quantified upside.</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white w-full">
                  Order Deep-Dive
                </Button>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center px-4">
              <div className="text-gray-400 text-3xl font-light">→</div>
            </div>

            {/* Monitoring Card */}
            <Card className="border-2 border-gray-200 hover:border-[#3CC4A0] transition-colors relative flex-1 max-w-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Continuous Protection</span>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl text-[#1F2D3D]">Monitoring</CardTitle>
                <div className="text-4xl font-bold text-[#1F2D3D] mt-4">
                  $279<span className="text-lg font-normal">/mo</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">24 × 7 change detection & alerting.</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-[#3CC4A0] hover:bg-[#3CC4A0]/90 text-white w-full">
                  Start Monitoring
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "SimplCyber found a $45k email risk we closed in a day. The ROI was immediate."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-[#1F2D3D]">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Co-Founder, SaaSCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "Finally, cybersecurity that makes sense for a startup. Clear, actionable, affordable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-[#1F2D3D]">Mike Rodriguez</p>
                    <p className="text-sm text-gray-600">CTO, TechStart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "The Expected Annual Loss calculation helped us prioritize security investments properly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-[#1F2D3D]">Lisa Park</p>
                    <p className="text-sm text-gray-600">CEO, GrowthCorp</p>
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
            <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1F2D3D]">
                Is the Snapshot really free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes, completely free. We provide a basic risk assessment to help you understand your exposure. No credit
                card required, no hidden fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1F2D3D]">
                Will this slow down my site?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No. Our scans are external-only and designed to have zero impact on your production systems. We don't
                install anything or access internal networks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1F2D3D]">
                What assets do you scan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                We scan your public-facing assets including DNS configuration, email security settings, web
                applications, SSL certificates, and publicly accessible cloud resources.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1F2D3D]">
                Can you fix issues for me?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes! Our Deep-Dive Review includes detailed remediation steps you can follow, or we can provide hands-on
                implementation support for an additional fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2D3D] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Risk Snapshot
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Deep-Dive Review
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Continuous Monitoring
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:hello@simplcyber.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@simplcyber.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">© 2025 SimplCyber Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
