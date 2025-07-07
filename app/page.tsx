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
                  Spot security landmines before they blow up your returns
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Scan any company in <strong>five minutes</strong>; get a 48-hour audit when deeper diligence matters
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
                  <p className="text-gray-600 text-lg">Real issues in 5 min</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-4">
                      <Input
                        placeholder="Domain"
                        className="bg-gray-50 border-gray-400 h-12 text-base focus:border-[#003366] focus:ring-[#003366] rounded-sm"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => scrollToSection("snapshot-form")}
                      className="btn-primary w-full h-12 text-base"
                    >
                      Run Snapshot
                    </Button>
                  </form>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">Trusted by 100+ investors</p>
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
            <h2 className="text-4xl font-medium text-[#003366] mb-4">You're flying blind on security risk</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <ShieldOff className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">Hidden breach = lost EBITDA.</h3>
              <p className="text-gray-600">
                One avoidable leak can gut valuation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">Traditional audits crawl.</h3>
              <p className="text-gray-600">
                Weeks to deliver, five-figure bills.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#e8cfcf] rounded-none flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#8b0000]" />
              </div>
              <h3 className="text-xl font-medium text-[#003366]">
                Hackers move faster than your portfolio.
              </h3>
              <p className="text-gray-600">
                They find gaps first—unless you check now.
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
            <p className="text-xl text-gray-600">3-step protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Scout (5 min)</h3>
                <p className="text-gray-600">Paste a domain and see risk scores, severity levels, and security categories to gauge overall risk.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Saved us from two disasters." - Small PE Partner</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Deep Dive (48 h)</h3>
                <p className="text-gray-600">Full 25-point audit with detailed remediation plan and fix costs—ready for negotiations.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Found $50k fixes, negotiated $300k off." - Business Broker</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-[#003366] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#003366] mb-2">Portfolio Protection</h3>
                <p className="text-gray-600">Regular portfolio scans with quarterly risk reports.</p>
                <p className="text-sm text-[#2c5530] font-semibold mt-4">"Caught exposed API keys in an afternoon." - VC Partner</p>
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
                      placeholder="Domain"
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
                      Run Snapshot
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
            <p className="text-xl text-gray-600">Start free. Pay only when you need more.</p>
          </div>

          {/* Free Security Check */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Free Security Check</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Free Check</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$0</div>
                  <p className="text-sm text-gray-500 mt-1">Perfect for testing us out</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 security check, 1 domain</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Risk report with severity levels, estimated loss calculation</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Free Check</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scout Tiers */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Deal Screening</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Scout 10</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$199<span className="text-lg font-medium">/month</span></div>
                  <p className="text-sm text-gray-500 mt-1">Light prospecting</p>
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
                    <p className="text-gray-600">Risk scores, severity levels, security categories, one-click export</p>
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
                  <p className="text-sm text-gray-500 mt-1">Steady deal flow</p>
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
                    <p className="text-gray-600">Risk scores, severity levels, security categories, one-click export</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Scout 50</Button>
                </CardContent>
              </Card>

              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Scout 150</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$1,499<span className="text-lg font-medium">/month</span></div>
                  <p className="text-sm text-gray-500 mt-1">High-volume sourcing</p>
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
                    <p className="text-gray-600">Risk scores, severity levels, security categories, one-click export</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Scout 150</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Deep Security Assessment */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Due Diligence Deep Dive</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Deep Security Assessment</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$999<span className="text-lg font-medium"> one-time</span></div>
                  <p className="text-sm text-gray-500 mt-1">Serious security review for diligence</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 domain (additional domains +$499 each)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Turnaround</h4>
                    <p className="text-gray-600">Comprehensive 48-hour review</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">25+ security vectors, executive summary, detailed remediation plan, post-fix re-scan included</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Optional Add-on</h4>
                    <p className="text-gray-600">1-hour consulting call +$499</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Deep Assessment</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Portfolio Monitoring */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-[#003366] mb-8 text-center">Portfolio Monitoring</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Monthly Protection</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$349<span className="text-lg font-medium">/month</span></div>
                  <p className="text-sm text-gray-500 mt-1">Stable portfolio companies</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 domain (+$99/month each additional)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Monthly scans (12/year)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Monthly reports, email alerts, dashboard access</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Monthly</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E3B341] rounded-lg overflow-hidden relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#E3B341] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <CardHeader className="bg-[#fafafa] pb-4 pt-6">
                  <CardTitle className="text-xl font-medium text-[#003366]">Weekly Protection</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$749<span className="text-lg font-medium">/month</span></div>
                  <p className="text-sm text-gray-500 mt-1">Active development teams</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 domain (+$199/month each additional)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Weekly scans (52/year)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Weekly reports + monthly summary, Email + Slack alerts, priority support</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Weekly</Button>
                </CardContent>
              </Card>

              <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
                <CardHeader className="bg-[#fafafa] pb-4">
                  <CardTitle className="text-xl font-medium text-[#003366]">Daily Protection</CardTitle>
                  <div className="text-3xl font-bold text-[#003366] mt-2">$1,499<span className="text-lg font-medium">/month</span></div>
                  <p className="text-sm text-gray-500 mt-1">High-growth or compliance-heavy</p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Coverage</h4>
                    <p className="text-gray-600">1 domain (+$399/month each additional)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Cadence</h4>
                    <p className="text-gray-600">Daily scans (365/year)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003366] mb-1">Deliverables</h4>
                    <p className="text-gray-600">Real-time issue detection, daily change tracking, dedicated success manager</p>
                  </div>
                  <Button className="btn-primary w-full mt-4">Get Daily</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Trust Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Trusted Results</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Scout caught exposed customer data twice this month—both fixed same day."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">Small PE Partner</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:mt-8">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Deep Dive found dark-web passwords; we walked from a ticking bomb."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">Corp Dev VP</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E3B341] p-8 rounded-none shadow-sm md:-mt-4">
              <blockquote className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Portfolio alert saved a $10M position by flagging an open DB."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-none mr-4"></div>
                <div>
                  <p className="font-medium text-[#003366]">Micro-VC CISO</p>
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
            <h2 className="text-4xl font-medium text-[#003366] mb-4">FAQ</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                What counts as a company?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                One business, all its domains.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Do you need access?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                No credentials, zero system impact—just like attackers. Critical alerts under 15 minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Can I upgrade anytime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes—prorated immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Is this legal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes. External scanning only—similar to how search engines or security researchers find vulnerabilities.
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