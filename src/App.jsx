import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Scissors, 
  CheckCircle2, 
  Star, 
  HeartHandshake, 
  GraduationCap, 
  ShieldCheck, 
  X, 
  Menu, 
  ChevronRight,
  ArrowRight,
  Sparkle,
  Award
} from 'lucide-react';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SERVICES_DATA = [
  // Viral Combo
  {
    id: 'combo-1999',
    category: 'hair',
    title: '4-in-1 Mega Glow Combo',
    price: '₹1,999',
    originalPrice: '₹4,500',
    description: 'Our most viral Karaikkudi package! Hair Spa + Skin Lightening Facial + Haircut & Blowdry + Threading.',
    tag: 'Viral Offer • 55% Off',
    popular: true
  },
  // Hair
  {
    id: 'hair-botox',
    category: 'hair',
    title: 'Hair Botox Deep Rejuvenation',
    price: 'From ₹2,499',
    description: 'Intense anti-aging moisture infusion that repairs extreme damage, tames frizz, and leaves mirror-like glossy shine.',
    tag: 'Bestseller'
  },
  {
    id: 'keratin-treatment',
    category: 'hair',
    title: 'Keratin Silk Smooth Therapy',
    price: 'From ₹2,999',
    description: 'Semi-permanent protein treatment giving straight, manageable, and frizz-free hair for up to 5 months.',
    tag: 'Client Favorite'
  },
  {
    id: 'hair-spa',
    category: 'hair',
    title: 'Luxury Herbal Hair Spa & Scalp Detox',
    price: 'From ₹799',
    description: 'Deep conditioning scalp massage, steam therapy, and protein serum for stress relief and root nourishment.',
    tag: 'Relaxation'
  },
  {
    id: 'hair-color',
    category: 'hair',
    title: 'Global Color & Balayage Highlights',
    price: 'From ₹1,499',
    description: 'Rich multidimensional shades using premium ammonia-free formulas. Custom caramel, honey, or burgundy tones.',
    tag: 'Styling'
  },
  {
    id: 'layer-haircut',
    category: 'hair',
    title: 'Precision Layer Cut & Signature Blowdry',
    price: '₹450',
    description: 'Bespoke haircut personalized to your face shape, followed by volume bounce blowdry and finishing serum.',
    tag: 'Quick Refresh'
  },

  // Skin & Facials
  {
    id: 'glow-facial',
    category: 'skin',
    title: 'She GLAM Signature Brightening Facial',
    price: '₹1,299',
    description: 'Multi-step skin hydration and glow boost that fades pigmentation, dark spots, and restores instant radiance.',
    tag: 'Top Rated'
  },
  {
    id: 'hydra-facial',
    category: 'skin',
    title: 'Hydra Deep Pore Cleanse & Glow',
    price: '₹1,899',
    description: 'Painless blackhead suction, gentle enzymatic exfoliation, and antioxidant serum infusion for glass skin.',
    tag: 'Advanced'
  },
  {
    id: 'detan-cleanup',
    category: 'skin',
    title: 'Intense De-Tan & Herbal Cleanup',
    price: '₹699',
    description: 'Quick sunburn reversal and pore detoxification for refreshed, even-toned skin.',
    tag: 'Essentials'
  },
  {
    id: 'gold-facial',
    category: 'skin',
    title: 'Luxury 24K Gold Pre-Bridal Facial',
    price: '₹2,199',
    description: 'Pure gold leaves and peptides that promote collagen elasticity and luminous bridal luminescence.',
    tag: 'Luxury'
  },

  // Bridal & Makeover
  {
    id: 'muhurtham-bridal',
    category: 'bridal',
    title: 'Muhurtham Traditional Bridal HD Makeover',
    price: 'Custom Package',
    description: 'Long-lasting, sweat-proof, and tears-proof HD makeup with traditional saree draping and fresh flower setting.',
    tag: 'Signature Bridal'
  },
  {
    id: 'reception-glam',
    category: 'bridal',
    title: 'Reception & Engagement Glam Look',
    price: 'Custom Package',
    description: 'Modern sculpted contouring, statement eyes, glass-skin finish, and contemporary bridal hairstyling.',
    tag: 'Bridal Series'
  },
  {
    id: 'pre-bridal',
    category: 'bridal',
    title: 'Complete 30-Day Pre-Bridal Glow Suite',
    price: 'Consult For Pricing',
    description: 'Full body polishing, gold facials, hair botox, luxury mani-pedi, and bikini waxing leading up to your wedding day.',
    tag: 'All-in-One'
  },
  {
    id: 'saree-draping',
    category: 'bridal',
    title: 'Advanced Saree Draping & Hair Design',
    price: 'From ₹999',
    description: 'Flawless pleating for Kanjeevaram silks, modern lehenga draping, and intricate bridal braid ornamentation.',
    tag: 'Special Occasion'
  },

  // Nails & Spa
  {
    id: 'gel-extensions',
    category: 'nails',
    title: 'Acrylic & Gel Nail Extensions',
    price: 'From ₹1,499',
    description: 'Natural length extension with long-lasting gel polish, ombre shades, and chrome shimmer art.',
    tag: 'Trending'
  },
  {
    id: 'spa-pedicure',
    category: 'nails',
    title: 'Luxury Rose Petal Pedicure & Manicure',
    price: '₹899',
    description: 'Warm floral foot soak, dead skin scrubbing, massage with essential oils, and premium nail shaping.',
    tag: 'Pampering'
  }
];

const ACADEMY_COURSES = [
  {
    title: 'Professional Beautician Diploma',
    duration: '3 Months Comprehensive',
    desc: 'Master skin anatomy, facial therapies, waxing, threading, advanced hair treatments (botox/keratin), and salon client management.',
    perks: ['Govt Aligned Syllabus', '100% Hands-on Practicals', 'Live Model Demos', 'Job & Salon Placement Help']
  },
  {
    title: 'Masterclass in Bridal HD Makeup',
    duration: '1 Month Intensive',
    desc: 'Specialized bridal techniques: color correction, HD contouring, eye cut-crease, Kanjeevaram saree draping, and muhurtham styling.',
    perks: ['Portfolio Shoot Session', 'Vanity Kit Guidance', 'Bridal Consultation Coaching', 'Certificate of Excellence']
  },
  {
    title: 'Nail Art & Gel Extensions Specialist',
    duration: '15 Days Certification',
    desc: 'Acrylics, UV gel curing, nail tip extensions, 3D floral art, chrome glazing, French tips, and safe removal techniques.',
    perks: ['Complete Practice Kit', 'Salon-Ready Skills', 'One-on-One Mentorship', 'Authorized Certificate']
  }
];

const REVIEWS_DATA = [
  {
    name: 'Priyanka M.',
    location: 'Karaikkudi',
    rating: 5,
    comment: 'Booked their ₹1999 4-in-1 combo last week and it was beyond expectations! The hair spa was so relaxing and my skin was glowing immediately. Very clean and hygienic salon.'
  },
  {
    name: 'Sangeetha R.',
    location: 'Kottaiyur',
    rating: 5,
    comment: 'She GLAM did my engagement makeover and everybody praised my look! The makeup was so natural and lasted for more than 10 hours without any patchiness. Highly recommended!'
  },
  {
    name: 'Kavitha Devi',
    location: 'Devakottai / Karaikkudi',
    rating: 5,
    comment: 'Best hair botox treatment in Karaikkudi. My frizzy curly hair is now super smooth and shiny. The staff is so gentle and polite. Definitely my regular salon now!'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: '4-in-1 Mega Glow Combo (₹1999)',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    notes: ''
  });

  const phoneNumber = '+91 63813 74330';
  const cleanPhone = '916381374330';
  const locationAddress = 'No: 84/1, Water Tank, Kottaiyur Main Road, Burma Colony, Karaikkudi, Tamil Nadu - 630002';
  const mapsLink = 'https://maps.app.goo.gl/TJxEHyxhzO81DfRb2';
  const instagramLink = 'https://www.instagram.com/__she_glam__/';

  const openBookingWithService = (serviceName) => {
    setBookingData((prev) => ({ ...prev, service: serviceName }));
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const text = `✨ *Appointment Booking Request - She GLAM Salon & Academy* ✨\n\n` +
      `👤 *Name:* ${bookingData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${bookingData.phone || 'Not provided'}\n` +
      `💅 *Service:* ${bookingData.service}\n` +
      `📅 *Date:* ${bookingData.date || 'Earliest available'}\n` +
      `⏰ *Time Slot:* ${bookingData.timeSlot}\n` +
      (bookingData.notes ? `📝 *Notes/Requirements:* ${bookingData.notes}\n` : '') +
      `\n_Sent via She GLAM official website_`;

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <div className="she-glam-app">
      {/* 1. Announcement Bar */}
      <div className="announcement-bar">
        <span>✨ <strong>Grand Offer in Karaikkudi:</strong> 4-in-1 Mega Glow Combo at just <strong>₹1,999/-</strong> (Hair Spa + Facial + Haircut + Threading)</span>
        <a href="#combo-offer" onClick={() => openBookingWithService('4-in-1 Mega Glow Combo (₹1999)')}>Book Now &rarr;</a>
      </div>

      {/* 2. Header & Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo-wrapper">
            <div className="logo-icon">
              <Sparkles size={22} />
            </div>
            <div className="logo-text">
              <h1 className="font-serif">She GLAM</h1>
              <p>Salon & Academy • Karaikkudi</p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#offers">Special Offers</a>
            <a href="#services">Services</a>
            <a href="#bridal">Bridal Lounge</a>
            <a href="#academy">Academy Courses</a>
            <a href="#why-us">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Find Us</a>
          </nav>

          <div className="nav-actions">
            <a 
              href={`tel:${cleanPhone}`} 
              className="btn btn-outline" 
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <Phone size={15} />
              <span className="hide-sm">Call Now</span>
            </a>
            <button 
              className="btn btn-primary" 
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
              onClick={() => setIsModalOpen(true)}
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
            <button 
              className="mobile-menu-btn" 
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Special ₹1,999 Offer</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services Menu</a>
            <a href="#bridal" onClick={() => setMobileMenuOpen(false)}>Bridal & Muhurtham</a>
            <a href="#academy" onClick={() => setMobileMenuOpen(false)}>Academy Courses</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why She GLAM</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Client Reviews</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location & Timings</a>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <a 
                href={`tel:${cleanPhone}`} 
                className="btn btn-outline" 
                style={{ flex: 1, textAlign: 'center' }}
              >
                <Phone size={16} /> Call
              </a>
              <button 
                className="btn btn-primary" 
                style={{ flex: 1 }}
                onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              >
                Book
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge badge-gold">
                <Sparkle size={14} /> Karaikkudi's Premier Luxury Salon & Academy
              </div>
              <h2 className="font-serif">
                Beauty That <span className="text-gold-gradient">Shines</span>,<br />
                Confidence That <span className="text-rose-gradient">Stays</span>.
              </h2>
              <p className="subtitle">
                Welcome to She GLAM in Burma Colony, Karaikkudi. Experience rejuvenating hair botox, luxury skin lightening facials, picture-perfect bridal makeovers, and certified beautician masterclasses in an intimate, hygienic sanctuary.
              </p>

              <div className="hero-cta-group">
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
                <a 
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I want to inquire about appointments and pricing.')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <Sparkles size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="#offers" className="btn btn-outline">
                  <span>View ₹1,999 Offer</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <h4 className="font-serif">4.9 ★</h4>
                  <p>Google Verified Rating</p>
                </div>
                <div className="stat-item">
                  <h4 className="font-serif">100%</h4>
                  <p>Certified Stylists & Hygienic</p>
                </div>
                <div className="stat-item">
                  <h4 className="font-serif">1,200+</h4>
                  <p>Happy Makeovers Delivered</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card / Spotlight */}
            <div className="hero-card" id="offers">
              <div className="hero-card-glow"></div>
              <span className="hero-offer-tag">🔥 MOST VIRAL COMBO IN KARAIKKUDI</span>
              <h3 className="font-serif" style={{ fontSize: '1.7rem', marginTop: '6px' }}>4-in-1 Mega Glow Combo</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                Complete head-to-toe pampering package crafted for immediate radiance and hair nourishment.
              </p>

              <div className="hero-price-box">
                <span className="price-main">₹1,999</span>
                <span className="price-sub">₹4,500</span>
                <span style={{ fontSize: '0.85rem', color: '#25D366', fontWeight: 700, marginLeft: '8px' }}>
                  (Save 55%)
                </span>
              </div>

              <ul className="hero-offer-list">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span><strong>Relaxing Hair Spa</strong> (Deep conditioning & scalp massage)</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span><strong>Skin Lightening Facial</strong> (De-tan & luminous glow)</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span><strong>Pro Haircut & Blowdry</strong> (Styling tailored to you)</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span><strong>Eyebrow Threading & Shaping</strong> (Clean defined arches)</span>
                </li>
              </ul>

              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => openBookingWithService('4-in-1 Mega Glow Combo (₹1999)')}
              >
                <span>Claim This ₹1,999 Offer</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Viral Combo Banner */}
      <section className="section combo-section" id="combo-offer">
        <div className="container">
          <div className="combo-container">
            <div>
              <div className="badge badge-rose" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} /> Limited Period Festive Offer
              </div>
              <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                Everything You Need For An <span className="text-gold-gradient">Effortless Glow</span>.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Tired of dry hair and sun-tanned skin? Our signature 4-in-1 Mega Combo at She GLAM is Karaikkudi's favorite salon service. Book on WhatsApp to reserve your slot before weekend spots fill up.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => openBookingWithService('4-in-1 Mega Glow Combo (₹1999)')}
                >
                  Book Combo for ₹1,999
                </button>
                <a 
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I want to book the ₹1999 4-in-1 combo. What slots are open?')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  Reserve on WhatsApp
                </a>
              </div>
            </div>

            <div className="combo-grid-items">
              <div className="combo-item-box">
                <div className="combo-icon-circle">
                  <Scissors size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>1. Deep Hair Spa</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Restores dehydrated hair fibers, controls split ends, and leaves soft touchable bounce.
                </p>
              </div>

              <div className="combo-item-box">
                <div className="combo-icon-circle">
                  <Sparkles size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>2. Lightening Facial</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Deep cleansing with botanical extracts to remove tan and revive dull skin.
                </p>
              </div>

              <div className="combo-item-box">
                <div className="combo-icon-circle">
                  <Sparkle size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>3. Haircut & Style</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Expert cut with texturizing and professional blowdry finish.
                </p>
              </div>

              <div className="combo-item-box">
                <div className="combo-icon-circle">
                  <HeartHandshake size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>4. Eyebrow Threading</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Gentle precision hair removal for sculpted, well-defined brows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Menu & Catalog */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <Scissors size={14} /> Full Treatment Menu
            </div>
            <h2 className="font-serif">Curated Salon <span className="text-gold-gradient">Experiences</span></h2>
            <p>
              From science-backed hair rejuvenation to bridal glam and nail couture, discover our full suite of personalized services in Karaikkudi.
            </p>
          </div>

          {/* Tabs */}
          <div className="services-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'hair' ? 'active' : ''}`}
              onClick={() => setActiveTab('hair')}
            >
              Hair & Botox
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skin' ? 'active' : ''}`}
              onClick={() => setActiveTab('skin')}
            >
              Skin & Facials
            </button>
            <button 
              className={`tab-btn ${activeTab === 'bridal' ? 'active' : ''}`}
              onClick={() => setActiveTab('bridal')}
            >
              Bridal & Muhurtham
            </button>
            <button 
              className={`tab-btn ${activeTab === 'nails' ? 'active' : ''}`}
              onClick={() => setActiveTab('nails')}
            >
              Nails & Spa
            </button>
          </div>

          {/* Grid */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div>
                  <div className="service-card-tag">{service.tag}</div>
                  <h3 className="font-serif">{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-meta">
                  <div>
                    <span className="service-price">{service.price}</span>
                    {service.originalPrice && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '6px' }}>
                        {service.originalPrice}
                      </span>
                    )}
                  </div>
                  <button 
                    className="btn btn-outline"
                    style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                    onClick={() => openBookingWithService(`${service.title} (${service.price})`)}
                  >
                    <span>Book Service</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bridal Lounge Spotlight */}
      <section className="section" id="bridal" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="bridal-banner">
            <div>
              <div className="badge badge-rose" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} /> She GLAM Bridal Lounge
              </div>
              <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                Every Bride Deserves Her <span className="text-rose-gradient">Fairytale Moment</span>.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                We understand that your wedding day in Karaikkudi or Chettinad is once in a lifetime. Our certified bridal specialists craft customized HD waterproof makeup that stays fresh under bright lights, smiles, and celebrations.
              </p>

              <div className="bridal-features" style={{ marginBottom: '28px' }}>
                <div className="bridal-feature-row">
                  <CheckCircle2 size={18} color="#d4af37" />
                  <span>Traditional Muhurtham Makeup with authentic Kanjeevaram draping</span>
                </div>
                <div className="bridal-feature-row">
                  <CheckCircle2 size={18} color="#d4af37" />
                  <span>Modern Reception Glam, Sculpted Contouring & Glass Skin finish</span>
                </div>
                <div className="bridal-feature-row">
                  <CheckCircle2 size={18} color="#d4af37" />
                  <span>Custom Pre-Bridal skincare roadmap 30 to 60 days before the wedding</span>
                </div>
                <div className="bridal-feature-row">
                  <CheckCircle2 size={18} color="#d4af37" />
                  <span>On-location bridal party makeovers across Karaikkudi & surrounding districts</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => openBookingWithService('Bridal Consultation & Package')}
                >
                  Book Bridal Consultation
                </button>
                <a 
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I would like to enquire about your Bridal Makeover packages and dates.')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  Enquire Bridal Dates
                </a>
              </div>
            </div>

            <div style={{ background: 'rgba(23, 18, 22, 0.9)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '30px' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--primary-light)' }}>
                Bridal Package Highlights
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <li style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                  <strong style={{ color: '#fff' }}>Trial & Skin Analysis:</strong> Matching skin tone with premium HD formulations for 0% oxidation.
                </li>
                <li style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                  <strong style={{ color: '#fff' }}>Hairstyling Artistry:</strong> Intricate jasmine flower setting, contemporary messy buns, or royal waves.
                </li>
                <li style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                  <strong style={{ color: '#fff' }}>Attire Perfection:</strong> Iron-pressed pleats and saree draping that stays locked throughout rituals.
                </li>
                <li>
                  <strong style={{ color: '#fff' }}>Family & Bridesmaids:</strong> Special group makeover packages for mother, sisters, and friends.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. She GLAM Academy */}
      <section className="section academy-section" id="academy">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <GraduationCap size={14} /> Professional Training
            </div>
            <h2 className="font-serif">She GLAM <span className="text-gold-gradient">Beauty Academy</span></h2>
            <p>
              Launch your successful career as a certified beautician or bridal makeup artist. Learn hands-on practical skills from seasoned professionals right here in Karaikkudi.
            </p>
          </div>

          <div className="academy-grid">
            {ACADEMY_COURSES.map((course, idx) => (
              <div key={idx} className="course-card">
                <span className="course-duration">{course.duration}</span>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '12px' }}>{course.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
                  {course.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {course.perks.map((perk, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                      <CheckCircle2 size={15} color="#d4af37" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%', fontSize: '0.85rem' }}
                  onClick={() => openBookingWithService(`Academy Enquiry: ${course.title}`)}
                >
                  Enquire Syllabus & Fees
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '28px', maxWidth: '800px', margin: '0 auto' }}>
            <Award size={36} color="#d4af37" style={{ marginBottom: '10px' }} />
            <h3 className="font-serif" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
              Why Enroll At She GLAM Academy?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px' }}>
              We believe in 90% practical hands-on training on real live clients rather than only theory. Our graduates gain immediate confidence to start their own salon or freelance bridal career.
            </p>
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I am interested in joining your Academy courses. Please share admission details and fee structure.')}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Get Course Brochure on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 8. Why Choose She GLAM */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <ShieldCheck size={14} /> The She GLAM Difference
            </div>
            <h2 className="font-serif">Why Karaikkudi <span className="text-gold-gradient">Trusts Us</span></h2>
            <p>
              We bring metropolitan salon standards, international beauty products, and unmatched hygiene to Burma Colony, Karaikkudi.
            </p>
          </div>

          <div className="usps-grid">
            <div className="usp-box">
              <div className="usp-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>100% Sanitized & Hygienic</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                UV-sterilized tools, disposable towels, and sanitized stations between every client for your peace of mind.
              </p>
            </div>

            <div className="usp-box">
              <div className="usp-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Branded Products Only</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                We exclusively use authentic salon grade brands including L'Oréal, Matrix, Lotus Professional, and O3+.
              </p>
            </div>

            <div className="usp-box">
              <div className="usp-icon">
                <Award size={28} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Certified Master Stylists</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Experienced beauticians trained in modern hair science, gentle skincare, and precise bridal contouring.
              </p>
            </div>

            <div className="usp-box">
              <div className="usp-icon">
                <HeartHandshake size={28} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Transparent & Affordable</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                No surprise pricing or pushy sales. Clear package pricing with genuine value for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews & Testimonials */}
      <section className="section" id="reviews" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <Star size={14} /> Client Stories
            </div>
            <h2 className="font-serif">Loved By Karaikkudi <span className="text-gold-gradient">Clients</span></h2>
            <p>
              Read genuine experiences from our valued customers who visit us for their regular pampering and milestones.
            </p>
          </div>

          <div className="testimonials-grid">
            {REVIEWS_DATA.map((rev, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffb703" color="#ffb703" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{rev.comment}"
                </p>
                <div className="testimonial-author">
                  <div className="avatar-circle">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#fff' }}>{rev.name}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Location, Hours & Direct Map */}
      <section className="section" id="location">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <MapPin size={14} /> Visit She GLAM
            </div>
            <h2 className="font-serif">Find Us In <span className="text-gold-gradient">Karaikkudi</span></h2>
            <p>
              Conveniently located at Burma Colony near the Water Tank on Kottaiyur Main Road.
            </p>
          </div>

          <div className="location-grid">
            {/* Address & Timings Card */}
            <div className="info-card">
              <div>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '24px', color: 'var(--primary-light)' }}>
                  Salon & Academy Details
                </h3>

                <div className="info-row">
                  <MapPin className="info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', marginBottom: '4px' }}>Address</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      {locationAddress}
                    </p>
                    <span style={{ fontSize: '0.82rem', color: 'var(--rose-light)' }}>Landmark: Near Water Tank, Burma Colony</span>
                  </div>
                </div>

                <div className="info-row">
                  <Phone className="info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', marginBottom: '4px' }}>Phone / WhatsApp</strong>
                    <a href={`tel:${cleanPhone}`} style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '1.05rem', display: 'block' }}>
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="info-row">
                  <Clock className="info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', marginBottom: '4px' }}>Business Hours</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      Monday – Sunday: <strong>9:30 AM – 8:30 PM</strong>
                    </p>
                    <span style={{ fontSize: '0.82rem', color: '#25D366' }}>Open 7 Days a Week</span>
                  </div>
                </div>

                <div className="info-row">
                  <InstagramIcon className="info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', marginBottom: '4px' }}>Instagram Official</strong>
                    <a 
                      href={instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--rose-light)', textDecoration: 'underline', fontSize: '0.95rem' }}
                    >
                      @__she_glam__
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '24px', flexWrap: 'wrap' }}>
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <MapPin size={16} /> Open in Google Maps
                </a>
                <a 
                  href={`https://wa.me/${cleanPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  <Sparkles size={16} /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Google Maps Visual Box */}
            <div className="map-wrapper">
              <iframe 
                title="She GLAM Salon Location"
                className="map-iframe"
                src="https://maps.google.com/maps?q=Burma%20Colony,%20Kottaiyur%20Main%20Road,%20Karaikkudi,%20Tamil%20Nadu%20630002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo-wrapper" style={{ marginBottom: '14px' }}>
                <div className="logo-icon">
                  <Sparkles size={20} />
                </div>
                <div className="logo-text">
                  <h3 className="font-serif" style={{ fontSize: '1.4rem' }}>She GLAM</h3>
                  <p>Salon & Academy • Karaikkudi</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Karaikkudi's trusted destination for luxury hair botox, skin brightening facials, picture-perfect bridal makeovers, and certified beautician masterclasses.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                  aria-label="She GLAM Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a 
                  href={`https://wa.me/${cleanPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}
                  aria-label="She GLAM WhatsApp"
                >
                  <Sparkles size={18} />
                </a>
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37' }}
                  aria-label="Google Maps"
                >
                  <MapPin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#offers">₹1,999 Combo Offer</a></li>
                <li><a href="#services">Hair & Botox</a></li>
                <li><a href="#services">Facials & Skincare</a></li>
                <li><a href="#bridal">Bridal Packages</a></li>
                <li><a href="#academy">Academy Courses</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Academy</h4>
              <ul className="footer-links">
                <li><a href="#academy">Diploma in Cosmetology</a></li>
                <li><a href="#academy">Bridal HD Makeup Course</a></li>
                <li><a href="#academy">Nail Extension Art</a></li>
                <li><a href="#academy">Self-Grooming Masterclass</a></li>
                <li><a href="#academy">Certification & Syllabus</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact Karaikkudi</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                No: 84/1, Water Tank, Kottaiyur Main Road, Burma Colony, Karaikkudi - 630002
              </p>
              <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>
                📞 {phoneNumber}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                Daily: 9:30 AM – 8:30 PM
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} She GLAM Salon & Academy. All Rights Reserved.
            </div>
            <div>
              <span>Karaikkudi, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. Floating Quick Contact Widgets */}
      <div className="floating-actions">
        <a 
          href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I would like to book an appointment.')}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab-whatsapp"
          title="Chat on WhatsApp"
        >
          <div className="fab-ping"></div>
          <Sparkles size={28} />
        </a>
      </div>

      {/* 13. Interactive Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div className="logo-icon" style={{ margin: '0 auto 12px' }}>
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem' }}>Book Your Appointment</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                She GLAM Salon & Academy • Burma Colony, Karaikkudi
              </p>
            </div>

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label">Selected Service / Offer *</label>
                <select 
                  className="form-select"
                  value={bookingData.service}
                  onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                  required
                >
                  <option value="4-in-1 Mega Glow Combo (₹1999)">4-in-1 Mega Glow Combo (₹1,999 Special)</option>
                  <option value="Hair Botox Deep Rejuvenation">Hair Botox Deep Rejuvenation</option>
                  <option value="Keratin Silk Smooth Therapy">Keratin Silk Smooth Therapy</option>
                  <option value="Luxury Herbal Hair Spa">Luxury Herbal Hair Spa</option>
                  <option value="Precision Layer Cut & Blowdry">Precision Layer Cut & Blowdry</option>
                  <option value="She GLAM Signature Brightening Facial">She GLAM Signature Brightening Facial</option>
                  <option value="Hydra Deep Pore Cleanse & Glow">Hydra Deep Pore Cleanse & Glow</option>
                  <option value="Luxury 24K Gold Facial">Luxury 24K Gold Facial</option>
                  <option value="Muhurtham Traditional Bridal HD Makeover">Muhurtham Traditional Bridal HD Makeover</option>
                  <option value="Reception & Engagement Glam Look">Reception & Engagement Glam Look</option>
                  <option value="Complete 30-Day Pre-Bridal Suite">Complete 30-Day Pre-Bridal Suite</option>
                  <option value="Acrylic & Gel Nail Extensions">Acrylic & Gel Nail Extensions</option>
                  <option value="Rose Petal Pedicure & Manicure">Rose Petal Pedicure & Manicure</option>
                  <option value="Academy Enquiry: Beautician Diploma">Academy Enquiry: Beautician Diploma</option>
                  <option value="Academy Enquiry: Bridal Makeup Course">Academy Enquiry: Bridal Makeup Course</option>
                  <option value="Academy Enquiry: Nail Art Specialist">Academy Enquiry: Nail Art Specialist</option>
                  <option value="Other Custom Service">Other Custom Service</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Priya Sundaram"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number *</label>
                <input 
                  type="tel" 
                  className="form-input"
                  placeholder="e.g. 9876543210"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-input"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Time Slot</label>
                  <select 
                    className="form-select"
                    value={bookingData.timeSlot}
                    onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (04:00 PM - 08:30 PM)">Evening (4 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Notes / Queries (Optional)</label>
                <textarea 
                  className="form-textarea"
                  rows={2}
                  placeholder="Any hair/skin condition or questions..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-whatsapp" 
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
              >
                <Sparkles size={18} />
                <span>Confirm & Send on WhatsApp</span>
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                Directly sends details to She GLAM WhatsApp (+91 63813 74330). Instant confirmation!
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
