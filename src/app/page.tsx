'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  ChevronDown,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Mail,
  MapPin,
  Menu,
  X,
  Code,
  Layout,
  Smartphone,
  Settings,
  Database,
  Cloud,
  Monitor,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function BuildDemandPage() {
  const [emailInput, setEmailInput] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmitDemo = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Build Demand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#problem" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Solution
            </a>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10" asChild>
              <a href="#demo">Log In</a>
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg shadow-emerald-500/30" asChild>
              <a href="#demo">Start Free Demo</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-900/95 backdrop-blur-xl border-white/10">
              <div className="flex flex-col gap-6 mt-8">
                <a href="#problem" className="text-lg font-medium text-slate-300 hover:text-white">Problem</a>
                <a href="#solution" className="text-lg font-medium text-slate-300 hover:text-white">Solution</a>
                <a href="#features" className="text-lg font-medium text-slate-300 hover:text-white">Services</a>
                <a href="#pricing" className="text-lg font-medium text-slate-300 hover:text-white">Pricing</a>
                <a href="#faq" className="text-lg font-medium text-slate-300 hover:text-white">FAQ</a>
                <Separator className="bg-white/10" />
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="#demo">Log In</a>
                </Button>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0" asChild>
                  <a href="#demo">Start Free Demo</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        <div className="container relative px-4 py-20 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-white/10 backdrop-blur-xl border border-white/20 text-emerald-300 hover:bg-white/20">
                <Zap className="mr-1 h-3 w-3" />
                Trusted by 200+ South African Businesses
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-white">
                Beautiful Websites &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Intelligent Automation
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-slate-300">
                We build stunning, conversion-focused websites and power them with AI automation
                that captures leads, answers enquiries, and books appointments 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-xl shadow-emerald-500/30"
                  asChild
                >
                  <a href="#demo">
                    Start Free 48-Hour Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                  asChild
                >
                  <a href="#how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    See How It Works
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Setup in 10 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Risk-free trial</span>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 grid grid-cols-3 gap-8 md:gap-12"
            >
              {[
                { value: '200+', label: 'Businesses Automated' },
                { value: '24/7', label: 'Lead Response Time' },
                { value: '45%', label: 'Increase in Bookings' },
              ].map((stat, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-red-500/10 backdrop-blur-xl border border-red-500/30 text-red-300">
                The Problem
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                The Cost of Digital Missed Opportunities
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every missed call, unanswered WhatsApp, and outdated website is money left on the table.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: 'Outdated Websites',
                  description: 'Old, slow, or non-existent websites drive customers away before they even contact you.',
                  stat: '88%',
                  statLabel: 'of users don\'t return after a bad experience',
                  gradient: 'from-orange-500/10 to-red-500/10',
                  border: 'border-orange-500/20',
                  iconBg: 'bg-orange-500/20',
                  iconColor: 'text-orange-400',
                },
                {
                  icon: Phone,
                  title: 'Missed Phone Calls',
                  description: 'Customers call after hours or when your team is busy. They move on to competitors who answer.',
                  stat: '67%',
                  statLabel: 'of callers hang up without leaving a voicemail',
                  gradient: 'from-red-500/10 to-pink-500/10',
                  border: 'border-red-500/20',
                  iconBg: 'bg-red-500/20',
                  iconColor: 'text-red-400',
                },
                {
                  icon: MessageCircle,
                  title: 'Slow WhatsApp Responses',
                  description: 'WhatsApp enquiries pile up during busy periods. By the time you respond, the lead is cold.',
                  stat: '78%',
                  statLabel: 'of customers expect a response within 10 minutes',
                  gradient: 'from-pink-500/10 to-rose-500/10',
                  border: 'border-pink-500/20',
                  iconBg: 'bg-pink-500/20',
                  iconColor: 'text-pink-400',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full relative overflow-hidden bg-gradient-to-br ${item.gradient} backdrop-blur-xl border ${item.border} hover:${item.border.replace('/20', '/40')} transition-all duration-300`}>
                    <div className="absolute inset-0 bg-slate-900/50" />
                    <div className="relative p-6">
                      <div className={`h-12 w-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-400 mb-4">{item.description}</p>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                        <div className="text-sm text-slate-400">{item.statLabel}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative py-20 md:py-28">
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 text-emerald-300">
                The Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Websites That Convert & AI That Never Sleeps
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We build stunning, high-performance websites and power them with intelligent automation
                that handles every enquiry instantly, professionally, and 24/7.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  {[
                    {
                      icon: Layout,
                      title: 'Beautiful, Modern Websites',
                      description: 'Custom-designed websites with Apple-level aesthetics, lightning-fast performance, and seamless mobile experience.',
                    },
                    {
                      icon: Clock,
                      title: 'Instant Response, Every Time',
                      description: 'Our AI responds to enquiries within seconds—no waiting, no lost leads, no frustrated customers.',
                    },
                    {
                      icon: Shield,
                      title: 'Risk-Free Implementation',
                      description: 'Test everything with a free 48-hour demo. See results before you commit to anything.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-500/30 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-500/30 mb-6">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Real Results</h3>
                      <p className="text-slate-400">Proven outcomes from our clients</p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: 'Lead Response Time', value: 'Under 10 seconds' },
                        { label: 'Booking Increase', value: '+45%' },
                        { label: 'Customer Satisfaction', value: '98%' },
                        { label: 'Time Saved per Week', value: '15+ hours' },
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/10">
                          <span className="text-slate-300">{stat.label}</span>
                          <span className="font-bold text-white">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 text-blue-300">
                Services
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Complete Digital Solutions
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                From stunning websites to intelligent automation—we handle it all.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Custom Web Development',
                  description: 'Bespoke websites built with modern technologies, optimized for performance, SEO, and conversions.',
                  features: ['Modern tech stack', 'SEO optimized', 'Mobile-first design'],
                  gradient: 'from-blue-500/10 to-cyan-500/10',
                  border: 'border-blue-500/20',
                  iconBg: 'bg-blue-500/20',
                  iconColor: 'text-blue-400',
                },
                {
                  icon: Layout,
                  title: 'UI/UX Design',
                  description: 'Apple-quality designs that are beautiful, intuitive, and built to convert visitors into customers.',
                  features: ['User-centered', 'Conversion focused', 'Brand aligned'],
                  gradient: 'from-purple-500/10 to-pink-500/10',
                  border: 'border-purple-500/20',
                  iconBg: 'bg-purple-500/20',
                  iconColor: 'text-purple-400',
                },
                {
                  icon: Smartphone,
                  title: 'Mobile Optimization',
                  description: 'Flawless mobile experiences that work perfectly on any device, anywhere.',
                  features: ['Responsive design', 'Touch optimized', 'Fast loading'],
                  gradient: 'from-cyan-500/10 to-teal-500/10',
                  border: 'border-cyan-500/20',
                  iconBg: 'bg-cyan-500/20',
                  iconColor: 'text-cyan-400',
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp Automation',
                  description: 'Instant responses to WhatsApp enquiries with natural conversation flow and direct booking.',
                  features: ['24/7 availability', 'Natural conversation AI', 'Direct booking links'],
                  gradient: 'from-emerald-500/10 to-green-500/10',
                  border: 'border-emerald-500/20',
                  iconBg: 'bg-emerald-500/20',
                  iconColor: 'text-emerald-400',
                },
                {
                  icon: Phone,
                  title: 'Call Handling AI',
                  description: 'AI answers calls, qualifies leads, and schedules appointments without human intervention.',
                  features: ['Smart routing', 'Lead qualification', 'Appointment scheduling'],
                  gradient: 'from-green-500/10 to-teal-500/10',
                  border: 'border-green-500/20',
                  iconBg: 'bg-green-500/20',
                  iconColor: 'text-green-400',
                },
                {
                  icon: Calendar,
                  title: 'Smart Booking System',
                  description: 'Intelligent calendar management that syncs with your existing systems and prevents conflicts.',
                  features: ['Calendar sync', 'Conflict detection', 'Automated reminders'],
                  gradient: 'from-teal-500/10 to-cyan-500/10',
                  border: 'border-teal-500/20',
                  iconBg: 'bg-teal-500/20',
                  iconColor: 'text-teal-400',
                },
                {
                  icon: Globe,
                  title: 'Web Chat Integration',
                  description: 'Embed our AI chatbot on your website to capture visitors and convert them into appointments.',
                  features: ['Custom branding', 'Lead capture forms', 'Seamless integration'],
                  gradient: 'from-indigo-500/10 to-violet-500/10',
                  border: 'border-indigo-500/20',
                  iconBg: 'bg-indigo-500/20',
                  iconColor: 'text-indigo-400',
                },
                {
                  icon: BarChart3,
                  title: 'Analytics Dashboard',
                  description: 'Track performance metrics, response times, and conversion rates in real-time.',
                  features: ['Real-time metrics', 'Lead tracking', 'Performance reports'],
                  gradient: 'from-violet-500/10 to-purple-500/10',
                  border: 'border-violet-500/20',
                  iconBg: 'bg-violet-500/20',
                  iconColor: 'text-violet-400',
                },
                {
                  icon: Users,
                  title: 'CRM Integration',
                  description: 'Seamlessly connect with your existing CRM to keep all customer data in one place.',
                  features: ['Two-way sync', 'Custom fields', 'Automated updates'],
                  gradient: 'from-rose-500/10 to-pink-500/10',
                  border: 'border-rose-500/20',
                  iconBg: 'bg-rose-500/20',
                  iconColor: 'text-rose-400',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className={`h-full relative overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border ${feature.border} hover:${feature.border.replace('/20', '/40')} transition-all duration-300`}>
                    <div className="absolute inset-0 bg-slate-900/50" />
                    <div className="relative p-6">
                      <div className={`h-12 w-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                        <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-400 mb-4 text-sm">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                            <span className="text-slate-400">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 md:py-28">
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-amber-500/10 backdrop-blur-xl border border-amber-500/30 text-amber-300">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Trusted by South African Businesses
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  name: 'Sarah M.',
                  business: 'Medical Practice, Johannesburg',
                  rating: 5,
                  text: "Build Demand redesigned our entire website and implemented AI automation. We were missing 30+ calls a week. Now every enquiry gets answered and booked. Patient bookings increased by 60% in the first month.",
                },
                {
                  name: 'James K.',
                  business: 'Auto Services, Cape Town',
                  rating: 5,
                  text: "The new website looks incredible and converts way better. The WhatsApp automation alone has been a game-changer. Customers love the instant responses, and our team saves hours every day.",
                },
                {
                  name: 'Priya N.',
                  business: 'Real Estate Agency, Durban',
                  rating: 5,
                  text: "From a stunning new website to AI that handles all our property enquiries—Build Demand transformed our business. Our agents now focus on qualified leads instead of answering repetitive questions.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6">{testimonial.text}</p>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.business}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Logos */}
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-8">Trusted by businesses across South Africa</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                {['Medical Practices', 'Auto Services', 'Real Estate', 'Legal Services', 'Home Services', 'Consulting'].map((industry, i) => (
                  <div key={i} className="text-lg font-semibold text-slate-300">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-500/10 backdrop-blur-xl border border-purple-500/30 text-purple-300">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Get Started in 3 Simple Steps
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Start Your Free Demo',
                  description: 'Sign up for a 48-hour free trial. No credit card required. We\'ll set up your account instantly.',
                },
                {
                  step: '02',
                  title: 'Customize Your Solution',
                  description: 'We design and build your website while configuring AI automation to match your business perfectly.',
                },
                {
                  step: '03',
                  title: 'Go Live & Grow',
                  description: 'Launch your new website and start capturing leads 24/7. Watch your bookings increase and opportunities multiply.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-emerald-500/30 z-10">
                    {step.step}
                  </div>
                  <Card className="pt-12 pb-6 px-6 text-center h-full relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-28">
        <div className="container relative px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 text-blue-300">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Choose the plan that fits your business. All plans include a 48-hour free trial.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: 'R2,999',
                  period: '/month',
                  description: 'Perfect for small businesses getting started with web and automation.',
                  features: [
                    'Professional website',
                    'WhatsApp automation',
                    'Up to 500 conversations/month',
                    'Basic booking integration',
                    'Email support',
                    'Analytics dashboard',
                  ],
                  cta: 'Start Free Trial',
                  popular: false,
                },
                {
                  name: 'Professional',
                  price: 'R5,999',
                  period: '/month',
                  description: 'Ideal for growing businesses with higher enquiry volumes.',
                  features: [
                    'Everything in Starter',
                    'Advanced website features',
                    'Call handling AI',
                    'Up to 2,000 conversations/month',
                    'CRM integration',
                    'Priority support',
                    'Custom AI training',
                  ],
                  cta: 'Start Free Trial',
                  popular: true,
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'For large businesses with complex needs and multiple locations.',
                  features: [
                    'Everything in Professional',
                    'Custom enterprise website',
                    'Unlimited conversations',
                    'Multi-location support',
                    'Dedicated account manager',
                    'Custom integrations',
                    'SLA guarantee',
                  ],
                  cta: 'Contact Sales',
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full relative overflow-hidden ${
                    plan.popular
                      ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/20'
                      : 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <div className="relative p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-slate-400">{plan.period}</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0'
                            : 'bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <a href="#demo">{plan.cta}</a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="container relative px-4">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-white/5 backdrop-blur-xl border border-white/10 text-slate-300">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'How quickly can I get started?',
                  answer: 'You can start your free 48-hour demo immediately after signing up. Our team will configure your account and begin website development within 24 hours, and you\'ll be ready to capture leads around the clock.',
                },
                {
                  question: 'Do I need technical skills to use Build Demand?',
                  answer: 'Not at all. We handle everything—website design, development, and technical setup. Our AI is designed to be intuitive, and we provide full support to ensure you get the most out of the platform.',
                },
                {
                  question: 'What kind of websites do you build?',
                  answer: 'We build custom, modern websites using cutting-edge technology. From simple landing pages to complex web applications, we create beautiful, high-performance sites that are optimized for conversions and SEO.',
                },
                {
                  question: 'What happens after the 48-hour demo?',
                  answer: 'After your free trial, you can choose a pricing plan that fits your needs. If you decide not to continue, there\'s no obligation and no charges. Your satisfaction is our priority.',
                },
                {
                  question: 'Can the AI handle complex enquiries?',
                  answer: 'Yes. Our AI is trained to understand context, qualify leads, and handle complex conversations. For edge cases, it can seamlessly transfer to a human agent when needed.',
                },
                {
                  question: 'Is my customer data secure?',
                  answer: 'Absolutely. We use enterprise-grade security and comply with South African data protection regulations. Your data is encrypted and never shared with third parties.',
                },
                {
                  question: 'Can I cancel anytime?',
                  answer: 'Yes. There are no long-term contracts. You can cancel your subscription at any time with no penalties. We believe in earning your business every month.',
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-6 text-white hover:bg-white/5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 px-6 text-slate-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="demo" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container relative px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Transform Your Digital Presence Today
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Join 200+ South African businesses with stunning websites and AI that never sleeps.
                Sign up for your free 48-hour demo—no credit card required.
              </p>

              <form onSubmit={handleSubmitDemo} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 h-12 bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-500/50"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-xl shadow-emerald-500/30 font-semibold"
                  >
                    {isSubmitted ? 'Demo Requested!' : 'Start Free Demo'}
                  </Button>
                </div>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-4 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-xl"
                >
                  <p className="font-semibold text-white">🎉 Excellent choice!</p>
                  <p className="text-slate-300 text-sm mt-1">
                    We'll be in touch within 24 hours to set up your free demo.
                  </p>
                </motion.div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>48-hour free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Setup in 10 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/10 text-white py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Build Demand</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Building stunning websites and AI automation for South African businesses.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>South Africa</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Free Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:khensani@builddemandmarketing.com" className="hover:text-white transition-colors">
                    khensani@builddemandmarketing.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href="#" className="hover:text-white transition-colors">
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© 2025 Build Demand. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
