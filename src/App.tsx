/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Leaf,
  Sprout,
  Trees,
  Shovel,
  Mail,
  Instagram,
  Facebook,
  Search,
  Zap,
  ShieldCheck,
  Award,
  Calendar,
  MessageSquare,
  Navigation,
  Bookmark,
  Locate,
  Smartphone,
  Share2,
  ExternalLink,
  MoreHorizontal
} from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LOGO_URL = "https://us1-photo.nextdoor.com/post_photos/fc/bb/fcbb2d3a5d1d991bed08d5df83d64c87.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=7&resize_type=resize";

const DecorativeBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Leaves */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[10%] left-[5%] text-primary/10"
      >
        <Leaf size={120} />
      </motion.div>
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute top-[40%] right-[2%] text-accent/10"
      >
        <Sprout size={160} />
      </motion.div>
      <motion.div 
        style={{ y: y1, rotate: rotate }}
        className="absolute bottom-[20%] left-[8%] text-primary/5"
      >
        <Trees size={200} />
      </motion.div>
      
      {/* Subtle Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const aboutImg1Y = useTransform(aboutScroll, [0, 1], [-50, 50]);
  const aboutImg2Y = useTransform(aboutScroll, [0, 1], [50, -50]);

  const services = [
    {
      title: "Lawn Maintenance",
      description: "Professional mowing, edging, and blowing to keep your lawn pristine year-round.",
      icon: <Leaf className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1558905619-17153c2462b7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Landscape Design",
      description: "Custom garden beds, plant selection, and aesthetic planning for your outdoor space.",
      icon: <Sprout className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hardscaping",
      description: "Expert installation of patios, walkways, and retaining walls that last.",
      icon: <Shovel className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Tree & Shrub Care",
      description: "Pruning, trimming, and health management for your property's greenery.",
      icon: <Trees className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      text: "Bundrick's transformed our backyard into an oasis. Their attention to detail is unmatched!",
      rating: 5
    },
    {
      name: "Michael Thompson",
      text: "Reliable, professional, and always on time. Best landscaping crew in Silverstreet.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 relative">
      <DecorativeBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Bundrick's Landscaping Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-display font-bold text-foreground hidden sm:block">
                Bundrick's <span className="text-primary">Landscaping</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <Button className="rounded-full px-6">Get a Quote</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-b border-border p-4 space-y-4"
          >
            <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#reviews" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="w-full rounded-full">Get a Quote</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-primary/5 pointer-events-none">
          <Leaf size={600} className="rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ opacity: heroOpacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-primary font-semibold">
                Trusted in Silverstreet, SC
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Elevate Your <span className="text-primary italic relative inline-block group/text cursor-default">
                  Outdoor
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover/text:w-full" />
                </span> Living Space
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Professional landscaping and lawn maintenance tailored to your home. We bring precision, passion, and green thumbs to every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 text-lg h-14">
                  Request Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14">
                  View Our Work
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm font-medium">5.0 Rating from Local Clients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1558905619-17153c2462b7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Beautifully landscaped lawn" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <motion.div 
                style={{ y: useTransform(heroScroll, [0, 1], [0, -100]) }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" 
              />
              <motion.div 
                style={{ y: useTransform(heroScroll, [0, 1], [0, 150]) }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" 
              />
              
              <Card className="absolute -bottom-6 -right-6 lg:right-10 bg-background/90 backdrop-blur shadow-xl border-primary/20 p-6 rounded-2xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Completed Projects</p>
                    <p className="text-2xl font-bold">250+</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Info Bar */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Phone className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-sm opacity-70 uppercase tracking-wider font-semibold">Call Us Today</p>
                <p className="text-xl font-bold">(803) 979-6042</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <MapPin className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-sm opacity-70 uppercase tracking-wider font-semibold">Our Location</p>
                <p className="text-xl font-bold">Silverstreet, SC 29145</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Clock className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-sm opacity-70 uppercase tracking-wider font-semibold">Business Hours</p>
                <p className="text-xl font-bold">Open until 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-organic-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 border-primary text-primary">Our Expertise</Badge>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">Professional Care for Your <span className="text-primary italic">Landscape</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg lg:text-right">
              From routine maintenance to complete landscape overhauls, we provide expert care for every inch of your property.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Business Profile Card - Large Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <Card className="h-full border-none shadow-2xl bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                <div className="relative h-64">
                  <img 
                    src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwer2SVmwX5v347XKSbTWFbRuqwmQEaG1m1V9QIdBPRw4PeqMpMdgswZy2FjjhG7tq7alwKoEhkIuDmFxgi7b9iWZzt7XwidD33YjXAPJqF3owKNed5Uv82SiLwjJTFP2MLmXb3EKdc3w5JP5=w408-h612-k-no" 
                    alt="Bundrick's Landscaping" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 backdrop-blur text-foreground border-none px-3 py-1">
                      <Star className="w-3 h-3 fill-primary text-primary mr-1 inline" /> 5.0 (2)
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-display font-bold mb-1">Bundrick's Landscaping</h3>
                      <p className="text-primary font-medium">Professional Landscaper</p>
                    </div>
                    <img 
                      src={LOGO_URL} 
                      alt="Logo" 
                      className="w-12 h-12 rounded-full border border-primary/20"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-8">
                    {[
                      { icon: <Navigation className="w-5 h-5" />, label: "Directions" },
                      { icon: <Bookmark className="w-5 h-5" />, label: "Save" },
                      { icon: <Locate className="w-5 h-5" />, label: "Nearby" },
                      { icon: <Share2 className="w-5 h-5" />, label: "Share" }
                    ].map((action, i) => (
                      <button key={i} className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {action.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{action.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4 text-sm border-t border-border pt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0" />
                      <span>1195 Main St #1, Silverstreet, SC 29145</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-bold text-green-600">Open · Closes 6 PM</span>
                        <span className="text-muted-foreground text-xs">See more hours</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold">(803) 979-6042</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex gap-3">
                    <Button className="flex-1 rounded-xl h-12">Book Now</Button>
                    <Button variant="outline" className="flex-1 rounded-xl h-12">Message</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Grid - Right Side Bento Items */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-none bg-background group overflow-hidden rounded-[2rem]">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <Button variant="secondary" size="sm" className="rounded-full w-full">Learn More</Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* Extra Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:col-span-2"
              >
                <Card className="bg-primary text-primary-foreground p-8 rounded-[2rem] border-none flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                    <p className="opacity-80 max-w-md">
                      We handle everything from large commercial estates to small residential gardens. Let's talk about your vision.
                    </p>
                  </div>
                  <Button variant="secondary" size="lg" className="rounded-full px-8 relative z-10 h-14 font-bold">
                    Schedule Consultation
                  </Button>
                  <Trees className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-primary text-primary-foreground p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <Badge variant="outline" className="mb-6 border-primary-foreground/30 text-primary-foreground">Why Bundrick's</Badge>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 max-w-md">The Gold Standard in South Carolina Landscaping</h2>
                <p className="text-primary-foreground/80 text-lg max-w-sm mb-8">
                  We don't just cut grass; we curate outdoor experiences that increase your property value and quality of life.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">15+</p>
                    <p className="text-sm opacity-70 uppercase tracking-widest font-semibold">Years Experience</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">100%</p>
                    <p className="text-sm opacity-70 uppercase tracking-widest font-semibold">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              <Trees className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-accent/10 p-12 rounded-[2.5rem] flex flex-col justify-center border border-accent/20">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Award-Winning Quality</h3>
              <p className="text-muted-foreground mb-6">
                Recognized locally for our commitment to environmental sustainability and aesthetic excellence.
              </p>
              <Separator className="mb-6 bg-accent/20" />
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold">Fully Licensed & Insured</span>
              </div>
            </div>

            <div className="bg-secondary p-12 rounded-[2.5rem] flex flex-col justify-center">
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Fast & Reliable</h3>
              <p className="text-muted-foreground mb-6">
                Our crews are trained for efficiency without sacrificing the meticulous detail we're known for.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary font-bold group">
                See our process <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="lg:col-span-2 bg-muted p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 border border-border/50">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Eco-Friendly Practices</h3>
                <p className="text-muted-foreground text-lg">
                  We use organic fertilizers and water-efficient irrigation systems to ensure your lawn stays green while protecting the local ecosystem.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <div className="aspect-square bg-background rounded-2xl flex items-center justify-center shadow-sm">
                  <Leaf className="w-10 h-10 text-primary" />
                </div>
                <div className="aspect-square bg-background rounded-2xl flex items-center justify-center shadow-sm">
                  <Sprout className="w-10 h-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-primary text-primary">The Journey</Badge>
            <h2 className="text-4xl lg:text-6xl font-display font-bold">Our 4-Step <span className="text-primary italic">Transformation</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-background/10 -z-10" />
            
            {[
              { step: "01", title: "Consultation", desc: "We visit your property to understand your vision and assess the terrain.", icon: <MessageSquare /> },
              { step: "02", title: "Design", desc: "Our experts create a custom plan including plant selection and layout.", icon: <Search /> },
              { step: "03", title: "Execution", desc: "Our professional crew brings the design to life with precision and care.", icon: <Shovel /> },
              { step: "04", title: "Maintenance", desc: "We provide ongoing care to ensure your landscape thrives for years.", icon: <Calendar /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background/5 border border-background/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative">
                  <div className="text-primary group-hover:text-background transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-background text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-background/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-organic-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Recent <span className="text-primary italic">Masterpieces</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our gallery of transformed outdoor spaces across South Carolina.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-background rounded-full p-1 border border-border">
                <TabsTrigger value="all" className="rounded-full px-8">All Projects</TabsTrigger>
                <TabsTrigger value="residential" className="rounded-full px-8">Residential</TabsTrigger>
                <TabsTrigger value="commercial" className="rounded-full px-8">Commercial</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "The Lakeside Retreat", type: "Residential", img: "https://images.unsplash.com/photo-1558905619-17153c2462b7?auto=format&fit=crop&q=80&w=800" },
                  { title: "Corporate Green Plaza", type: "Commercial", img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800" },
                  { title: "Modern Zen Garden", type: "Residential", img: "https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&q=80&w=800" },
                  { title: "Estate Lawn Care", type: "Residential", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
                  { title: "Downtown Parklet", type: "Commercial", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800" },
                  { title: "Suburban Oasis", type: "Residential", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" }
                ].map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <Badge className="w-fit mb-3 bg-primary text-primary-foreground border-none">{project.type}</Badge>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Filtered content would go here */}
                <p className="text-center col-span-full py-20 text-muted-foreground">Displaying residential projects...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-primary/5 -rotate-12 pointer-events-none">
          <Leaf size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our services.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "What areas do you serve?", a: "We primarily serve Silverstreet, Newberry, and the surrounding areas in South Carolina." },
              { q: "How do I get an estimate?", a: "You can fill out our online form or call us directly at (803) 979-6042. We typically provide estimates within 24-48 hours." },
              { q: "Do you offer seasonal contracts?", a: "Yes, we offer monthly and seasonal maintenance contracts tailored to your property's specific needs." },
              { q: "Are you insured?", a: "Absolutely. We are fully licensed and carry comprehensive liability insurance for your peace of mind." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 text-accent/5 rotate-45 pointer-events-none">
          <Sprout size={500} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.img 
                  style={{ y: aboutImg1Y }}
                  src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Landscaping work" 
                  className="rounded-2xl shadow-lg mt-12"
                  referrerPolicy="no-referrer"
                />
                <motion.img 
                  style={{ y: aboutImg2Y }}
                  src="https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&q=80&w=600" 
                  alt="Hardscaping work" 
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Local Experts You Can <span className="text-primary">Trust</span></h2>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Silverstreet, South Carolina, Bundrick's Landscaping is a family-owned business dedicated to beautifying our community one lawn at a time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Fully Licensed & Insured",
                  "Family Owned & Operated",
                  "Attention to Detail",
                  "Reliable Weekly Scheduling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-primary/5 pointer-events-none">
          <Trees size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">Join our community of satisfied homeowners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-none shadow-sm bg-background relative">
                  <div className="absolute top-8 right-8 text-primary/10">
                    <Star className="w-12 h-12 fill-current" />
                  </div>
                  <p className="text-xl italic mb-6 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Client</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-8 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground mb-8">
                Ready for a <span className="italic">Greener</span> Tomorrow?
              </h2>
              <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
                Join hundreds of satisfied homeowners in Silverstreet. Get your free, no-obligation estimate today and let's build something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-bold">
                  Get My Free Estimate
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Call (803) 979-6042
                </Button>
              </div>
            </div>
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-16">
                <h2 className="text-4xl font-display font-bold mb-6">Ready to Start?</h2>
                <p className="text-background/70 text-lg mb-10">
                  Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation estimate.
                </p>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="(803) 000-0000" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input placeholder="john@example.com" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Needed</label>
                    <Input placeholder="e.g. Weekly Mowing, Landscape Design" className="bg-background/10 border-background/20 text-background placeholder:text-background/40 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us about your project..." className="bg-background/10 border-background/20 text-background placeholder:text-background/40 min-h-[120px]" />
                  </div>
                  <Button className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="bg-primary/10 p-8 lg:p-16 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60 uppercase font-bold tracking-widest">Call Us</p>
                      <p className="text-2xl font-bold">(803) 979-6042</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60 uppercase font-bold tracking-widest">Email Us</p>
                      <p className="text-2xl font-bold">info@bundricks.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-background/60 uppercase font-bold tracking-widest">Visit Us</p>
                      <p className="text-2xl font-bold">1195 Main St #1, Silverstreet, SC</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-background/10">
                  <p className="text-sm text-background/60 mb-4 uppercase font-bold tracking-widest">Follow Us</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20 text-background">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20 text-background">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Bundrick's Landscaping Logo" 
                className="h-10 w-10 rounded-full object-cover border border-primary"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-display font-bold">
                Bundrick's <span className="text-primary">Landscaping</span>
              </span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bundrick's Landscaping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
