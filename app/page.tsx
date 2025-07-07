"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertCircle, ShieldOff, Menu, X, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DealBrief() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    domain: "",
  });
  const [formErrors, setFormErrors] = useState({
    domain: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = { domain: "" };
    let isValid = true;

    if (!formData.domain.trim()) {
      errors.domain = "Domain is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors({ ...formErrors, [field]: "" });
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffef9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#" className="text-2xl font-medium text-[#003366]">
              DealBrief
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-[#003366] hover:underline transition-colors"
              >
                Resources
              </button>
              <Button
                onClick={() => scrollToSection("snapshot-form")}
                className="btn-primary"
              >
                Run a Free Threat Snapshot
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-600 hover:text-[#003366] transition-colors"
                >
                  Resources
                </button>
                <Button
                  onClick={() => scrollToSection("snapshot-form")}
                  className="btn-primary w-full"
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
                  Know if your next investment has security problems before they tank your returns.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Smart investors check for security holes before writing checks. Now you can too—in 5 minutes, without hiring consultants.
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
                  <p className="text-gray-600 text-lg">Real security issues in 5 minutes</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-4">
                      <Input
                        placeholder="Enter target company's domain"
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
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">Join 100+ investors who check every deal</p>
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
            <h2 className="text-4xl font-medium text-[#003366] mb-4">You're investing in companies with fixable problems you can't see</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <ShieldOff className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">That promising SaaS company? Their customer data is exposed.</h3>
              <p className="text-gray-600">
                One preventable breach can wipe out years of growth. The fix usually costs less than their monthly AWS bill.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">Security audits are slow and expensive overkill</h3>
              <p className="text-gray-600">
                You don't need a 200-page pentest for a Series A startup. You need to know if they have basic security hygiene.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">
                Your portfolio companies are targets you can't see
              </h3>
              <p className="text-gray-600">
                While you're focused on growth metrics, hackers are finding the same security holes we would. They just get there first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple ways to protect your investments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Scout</h3>
                <p className="text-gray-600">Drop in any website. In 5 minutes, see exposed databases, leaked passwords, and basic security mistakes. Most issues take a developer one day to fix.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Check every deal now. Saved us from two disasters." - Small PE Partner</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Deep Dive</h3>
                <p className="text-gray-600">Found a great company? Get a complete 48-hour audit that shows exactly what needs fixing and how much it costs. Use it in negotiations or help them fix it post-close.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Found $50k of fixes needed. Negotiated $300k off." - Business Broker</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Portfolio Protection</h3>
                <p className="text-gray-600">Monitor all your investments for new security issues. Get alerts before problems become breaches, plus simple quarterly reports that boards actually understand.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Caught exposed API keys. Fixed in an afternoon." - VC Partner</p>
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
                See critical security issues in under 5 minutes
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <Input
                      placeholder="Enter target company's domain"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      required
                      className={`bg-white h-14 text-lg rounded-sm ${formErrors.domain ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {formErrors.domain && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.domain}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="btn-primary px-12 py-4 text-lg w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Run a Free Threat Snapshot
                      <ArrowRight className="ml-2 h-4 w-4" />
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

            <p className="text-[#c8d1dd] text-sm">We've scanned 100+ businesses—zero impact on production.</p>
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
                    <p className="text-gray-600">Daily scans</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Plain-English findings, cost to fix each issue, one-click export</p>
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
                    <p className="text-gray-600">Scans every 4 hours</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Plain-English findings, cost to fix each issue, one-click export</p>
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
                    <p className="text-gray-600">Scans every 30 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Plain-English findings, cost to fix each issue, one-click export</p>
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
                    <p className="text-gray-600">25+ checks, remediation roadmap with costs, negotiation-ready report</p>
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
                    <p className="text-gray-600">24×7 monitoring, instant alerts, quarterly summaries</p>
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
                    <p className="text-gray-600">24×7 monitoring, instant alerts, quarterly summaries</p>
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
                    <p className="text-gray-600">24×7 monitoring, instant alerts, quarterly summaries</p>
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
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Built for dealmakers, not IT departments</h2>
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
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Plain English anyone can understand</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Technical security jargon</td>
                </tr>
                <tr className="bg-[#fafafa]">
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Dollar amounts for each fix</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Abstract risk scores only</td>
                </tr>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Sign up in 60 seconds online</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Enterprise sales process</td>
                </tr>
                <tr className="bg-[#fafafa]">
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Reports built for negotiations</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Compliance-focused output</td>
                </tr>
                <tr>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Transparent per-company pricing</td>
                  <td className="border border-[#d4d4d4] px-6 py-4 text-gray-600">Call-for-quote pricing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#d4d4d4] p-8 rounded-none">
            <blockquote className="text-lg text-gray-600 italic mb-4">
              "UpGuard wanted $20k/year minimum and spoke only in acronyms. DealBrief costs less and actually helps us make decisions."
            </blockquote>
            <cite className="text-sm text-gray-500">Real customer feedback</cite>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Real results from real investors</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Run Scout on every new deal. Takes 5 minutes. Found exposed customer data twice this month—both companies fixed it immediately."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">Managing Partner</p>
                  <p className="text-sm text-gray-600">Small Growth Fund</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:mt-8">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Deep Dive found passwords for sale on the dark web. Saved our client from buying a ticking time bomb."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">VP Corporate Development</p>
                  <p className="text-sm text-gray-600">Lower Middle Market PE</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:-mt-4">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Portfolio Protection caught an open database before hackers did. That alert saved a $10M investment."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">CISO</p>
                  <p className="text-sm text-gray-600">Micro-VC Fund</p>
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
                One business and all their domains. If they own multiple separate companies, those count individually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Is any agent or credential required?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No. Everything runs externally—just like hackers scan. Zero impact on their systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Can I upgrade tiers mid-cycle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes. Upgrade anytime and we'll prorate it instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                What's the SLA for critical alerts?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Email alerts in under 15 minutes for critical issues. Support responds within 2 hours during business hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Is this legal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes. Our service performs external, non-intrusive scanning, similar to how search engines index websites or how security researchers (and hackers) find vulnerabilities. We do not access any private systems or require credentials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                How is this different from a full penetration test (pentest)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Our 'Scout' and 'Portfolio Protection' services are designed for speed and identifying the 'low-hanging fruit'—common, high-risk issues that don't require deep manual testing. Our 'Deep Dive' is a more comprehensive audit, but still faster and more focused on business risk than a traditional, months-long pentest. We help you decide if you even need a full pentest.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#c8d1dd]">© 2025 DealBrief Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}