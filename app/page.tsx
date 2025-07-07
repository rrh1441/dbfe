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
                Get Free Snapshot
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
                  Get Free Snapshot
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
                      Get Free Snapshot
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
                      Get Free Snapshot
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
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#003366] mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">Clear upgrade path: start free → add Scout runs → upgrade to Deep Dive → lock in Protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
              <CardHeader className="bg-[#fafafa] pb-4">
                <CardTitle className="text-xl font-medium text-[#003366]">Scout</CardTitle>
                <p className="text-gray-600 mt-2">Screen 100s of opportunities fast</p>
                <div className="text-2xl font-bold text-[#003366] mt-4">$99/month</div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 10 companies/month</li>
                  <li>• Daily scans & updates</li>
                  <li>• 15 critical risk factors</li>
                  <li>• Results in minutes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#E3B341] rounded-lg overflow-hidden relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#E3B341] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader className="bg-[#fafafa] pb-4 pt-6">
                <CardTitle className="text-xl font-medium text-[#003366]">Deep Dive</CardTitle>
                <p className="text-gray-600 mt-2">Due-diligence depth that closes deals</p>
                <div className="text-2xl font-bold text-[#003366] mt-4">$3,000 one-time</div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 25+ attack vectors</li>
                  <li>• Financial impact modeling</li>
                  <li>• 48-hour delivery</li>
                  <li>• Board-ready PDF & XLS</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-[#d4d4d4] rounded-lg overflow-hidden">
              <CardHeader className="bg-[#fafafa] pb-4">
                <CardTitle className="text-xl font-medium text-[#003366]">Portfolio Protection</CardTitle>
                <p className="text-gray-600 mt-2">Ongoing visibility that guards enterprise value</p>
                <div className="text-2xl font-bold text-[#003366] mt-4">$999+/month</div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Continuous monitoring</li>
                  <li>• Quarterly board reporting</li>
                  <li>• Early-warning alerts</li>
                  <li>• Trend analysis across portfolio</li>
                </ul>
              </CardContent>
            </Card>
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
                How long is a Scout scan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Less than 10 minutes per domain.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                What data sources does Scout use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                External attack-surface signals only; no intrusive testing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#d4d4d4] rounded-none px-6">
              <AccordionTrigger className="text-left text-lg font-medium text-[#003366]">
                Is this legal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Yes. Our service performs external, non-intrusive scanning, similar to how search engines index websites or how security researchers (and hackers) find vulnerabilities. We do not access any private systems or require credentials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#d4d4d4] rounded-none px-6">
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