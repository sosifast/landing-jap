"use client";

import React, { useState, useEffect } from 'react';
import {
  Rocket,
  UserPlus,
  Layers,
  Link as LinkIcon,
  CheckCircle,
  Send,
  Zap,
  ShieldCheck,
  Headphones,
  LayoutDashboard,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="rounded-lg overflow-hidden">
              <img src="/logo.webp" alt="JustAnotherPanel Logo" className="w-24 h-24 object-contain" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">How it Works</a>
            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="https://www.apkey.net/auth/register" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Sign Up
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4">
            <a href="#services" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#how-it-works" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>How it Works</a>
            <a href="#features" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
            <a href="https://www.apkey.net/auth/register" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold w-full text-center">Sign Up Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="text-white w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
      {number}
    </div>
    <h4 className="text-lg font-bold text-slate-900 mt-2 mb-2">{title}</h4>
    <p className="text-sm text-slate-600">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
              #1 SMM PANEL IN THE WORLD
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
              Revolutionize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Social Growth</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              With JustAnotherPanel, you'll revolutionize your social media growth – together; we lead, they follow!
              Get the best and most affordable SMM panel services tailored for industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.apkey.net/auth/login" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
                Get Started Now <ArrowRight size={20} />
              </a>
              <a href="https://www.apkey.net/services" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                View Services
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders on all platforms</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <Instagram size={32} />
            <Facebook size={32} />
            <Twitter size={32} />
            <div className="font-bold text-2xl">TikTok</div>
            <div className="font-bold text-2xl">YouTube</div>
            <div className="font-bold text-2xl">Twitch</div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">The Power of Choice for Industry Leaders</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The online world is run by industry leaders who know exactly what their customers want. We provide the best and most affordable SMM panel services to those leaders just like you.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We assure you that you’ll be the one who generates the most website traffic to your business online or your social media accounts after you use the best SMM panel.
              </p>
              <ul className="space-y-4">
                {['Monthly packages', 'Flexible speed options', 'No-drop guarantee', 'Targeted demographics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                    <CheckCircle className="text-indigo-600" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <h3 className="font-bold text-lg">Services Insight</h3>
                  <span className="text-indigo-600 text-sm font-bold">Updated Live</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Layers size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Custom Engagement</p>
                      <p className="text-sm text-slate-600">Choose target audiences, NFT accounts, or specific gender niches.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Zap size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Per Minute Growth</p>
                      <p className="text-sm text-slate-600">Get the desired package substance per minute to ensure natural growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">How JustAnotherPanel Works?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Get your campaign running in minutes with our simple 6-step process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StepCard number="1" title="Quick Sign Up" description="Register with just a few clicks. All services will be waiting for you." />
            <StepCard number="2" title="Pick Services" description="Take time to pick what you require from our massive catalog." />
            <StepCard number="3" title="Paste URL" description="Provide the link of the account or post you'd like to boost." />
            <StepCard number="4" title="Check Details" description="Review all the provided details about your selected order." />
            <StepCard number="5" title="Submit Order" description="If everything looks perfect, submit it with a single click." />
            <StepCard number="6" title="Instant Results" description="We'll get to work immediately to deliver your results." />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Everything You Need To Scale</h2>
            <p className="text-xl text-slate-600">Engineered for speed, affordability, and reliability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Zap}
              color="bg-amber-500"
              title="Unbelievable Prices"
              description="Unbelievable prices, lowest in the market. We guarantee the most competitive rates available."
            />
            <FeatureCard
              icon={LayoutDashboard}
              color="bg-indigo-600"
              title="Friendly Dashboard"
              description="Engineered to accommodate fast and simple use of the panel, best in the market for users."
            />
            <FeatureCard
              icon={Send}
              color="bg-blue-500"
              title="Delivered in Minutes"
              description="Super fast delivery, fastest in the market. Your orders start processing the moment you click submit."
            />
            <FeatureCard
              icon={Headphones}
              color="bg-rose-500"
              title="Support 24/7"
              description="Support available around the clock. Our team is always here to help you solve any issues."
            />
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-indigo-50">
                  <ShieldCheck size={64} className="text-indigo-600" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <p className="mt-4 font-bold text-slate-900">JAP Expert Team</p>
              <p className="text-sm text-slate-500 underline">Verified Experts</p>
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">JAP Social Media Marketing Backs You Up!</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team of professionals understands the nuances and complexities of different platforms. They ensure that your posts are targeted at the right audience, receive maximum engagement, and drive conversions.
              </p>
              <p className="text-slate-600 font-medium italic">
                "Go ahead with confidence, knowing that your SMM Panel services will be taken care of, and you’re a world-famous business & influencer already!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[3rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8">Ready to dominate the social landscape?</h2>
            <p className="text-indigo-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of influencers and businesses who have scaled their presence with JustAnotherPanel.
            </p>
            <a href="https://www.apkey.net/auth/register" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto">
              Create Free Account <UserPlus size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                <div className="rounded-lg overflow-hidden">
                  <img src="/logo.webp" alt="JustAnotherPanel Logo" className="w-20 h-20 object-contain" />
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                JustAnotherPanel has the Cheapest SMM Panel and 100% High Quality for all social networks. Get the best Instagram panel today!
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/justanotherpanelplus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/justanotherpanel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Login / Sign Up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Our Features</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram Panel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok Reseller Panel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitch Live Viewers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook Reseller</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact & Help</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Support 24/7</li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 text-center">
            <p className="text-xs text-slate-600 mb-6 uppercase tracking-[0.2em]">
              SMM Panel • SMM Reseller Panel • SMM Provider Panel • Reseller Panel • Instagram Panel • TikTok Panel • Twitch Live Panel
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} JustAnotherPanel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;