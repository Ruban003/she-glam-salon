import React, { useState, useEffect, useRef } from 'react';
import logoImg from './assets/logo.png';
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
  Award,
  ThumbsUp
} from 'lucide-react';

const GoogleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
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
    description: 'Our most viral Karaikkudi package: Deep Hair Spa + Skin Lightening Facial + Pro Haircut & Blowdry + Eyebrow Threading.',
    tag: 'Limited Festive Offer',
    popular: true
  },
  // Hair
  {
    id: 'hair-botox',
    category: 'hair',
    title: 'Hair Botox Deep Rejuvenation',
    price: 'From ₹2,499',
    description: 'Intense moisture infusion that repairs extreme chemical & heat damage, eliminates frizz, and imparts mirror-glass shine.',
    tag: 'Signature Hair'
  },
  {
    id: 'keratin-treatment',
    category: 'hair',
    title: 'Keratin Silk Smooth Therapy',
    price: 'From ₹2,999',
    description: 'Semi-permanent protein treatment delivering sleek, straight, manageable hair lasting up to 5 months.',
    tag: 'Client Favorite'
  },
  {
    id: 'hair-spa',
    category: 'hair',
    title: 'Nourishing Herbal Hair Spa',
    price: 'From ₹799',
    description: 'Deep conditioning scalp acupressure massage, herbal steam bath, and intense restorative protein mask.',
    tag: 'Scalp Detox'
  },
  {
    id: 'hair-color',
    category: 'hair',
    title: 'Global Color & Balayage Highlights',
    price: 'From ₹1,499',
    description: 'Ammonia-free multidimensional color artistry. Caramel, chocolate, hazelnut, and bespoke fashion hues.',
    tag: 'Hair Color'
  },
  {
    id: 'layer-haircut',
    category: 'hair',
    title: 'Precision Layer Cut & Signature Blowdry',
    price: '₹450',
    description: 'Face-framing haircut customized to your jawline, finished with high-volume blowout and shine serum.',
    tag: 'Daily Glam'
  },

  // Skin & Facials
  {
    id: 'glow-facial',
    category: 'skin',
    title: 'She GLAM Signature Brightening Facial',
    price: '₹1,299',
    description: 'Gentle exfoliation, vitamin-rich serum massage, and brightening botanical mask that eliminates dullness and tan.',
    tag: 'Glow Therapy'
  },
  {
    id: 'hydra-facial',
    category: 'skin',
    title: 'Hydra Deep Pore Cleanse & Hydration',
    price: '₹1,899',
    description: 'Painless vortex pore extraction, blackhead clearing, and hyaluronic acid infusion for healthy glass skin.',
    tag: 'Deep Cleanse'
  },
  {
    id: 'detan-cleanup',
    category: 'skin',
    title: 'Instant De-Tan & Herbal Cleanup',
    price: '₹699',
    description: 'Targeted sun damage reversal, dead skin removal, and cooling pack for instant freshness and even skin tone.',
    tag: 'Express Care'
  },
  {
    id: 'gold-facial',
    category: 'skin',
    title: '24K Gold Luxury Pre-Bridal Facial',
    price: '₹2,199',
    description: 'Pure gold bio-peptides that stimulate collagen synthesis, fine line softening, and lasting wedding-ready glow.',
    tag: 'Luxury Bridal'
  },

  // Bridal & Makeover
  {
    id: 'muhurtham-bridal',
    category: 'bridal',
    title: 'Traditional Muhurtham Bridal HD Makeover',
    price: 'Custom Package',
    description: 'Waterproof, sweat-resistant HD bridal makeup tailored for weddings. Flawless through long rituals.',
    tag: 'Muhurtham Bridal'
  },
  {
    id: 'reception-glam',
    category: 'bridal',
    title: 'Contemporary Reception & Engagement Glam',
    price: 'Custom Package',
    description: 'Sculpted soft-matte contouring, statement eyes, glass-skin radiant finish, and high-fashion bridal hairdo.',
    tag: 'Evening Reception'
  },
  {
    id: 'saree-draping',
    category: 'bridal',
    title: 'Kanjeevaram Saree Draping & Hair Flowers',
    price: 'From ₹999',
    description: 'Crisp, perfectly pinned pleats for traditional silk sarees, temple jewelry pinning, and fresh jasmine flower art.',
    tag: 'Saree Draping Art'
  },
  {
    id: 'pre-bridal',
    category: 'bridal',
    title: 'Complete 30-Day Pre-Bridal Glow Suite',
    price: 'Consult For Pricing',
    description: 'Holistic bridal preparation: full body polishing, gold facials, hair botox, luxury mani-pedi, and organic waxing.',
    tag: 'All-in-One Bride'
  },

  // Nails & Spa
  {
    id: 'gel-extensions',
    category: 'nails',
    title: 'Acrylic & UV Gel Nail Extensions',
    price: 'From ₹1,499',
    description: 'Flawless nail extensions with long-lasting gel polish, ombre blush tones, chrome sheen, and minimal nail art.',
    tag: 'Trending Nails'
  },
  {
    id: 'spa-pedicure',
    category: 'nails',
    title: 'Rose Petal Spa Pedicure & Manicure',
    price: '₹899',
    description: 'Warm rose petal herbal foot soak, gentle callus buffing, stress-relief essential oil massage, and nail buffing.',
    tag: 'Relaxation'
  }
];

const ACADEMY_COURSES = [
  {
    title: 'Professional Beautician Diploma',
    duration: '3 Months Comprehensive',
    desc: 'Complete mastery of skincare science, advanced facial therapies, hair treatments (botox, keratin), and salon business operations.',
    perks: ['Govt-Aligned Syllabus', '100% Practical on Live Models', 'Starter Kit Guidance', 'Salon Placement Assistance']
  },
  {
    title: 'Masterclass in Bridal HD Makeup',
    duration: '1 Month Intensive',
    desc: 'Specialized in South Indian & Chettinad bridal aesthetics: skin prep, non-oxidizing HD makeup, Kanjeevaram saree draping, and hair artistry.',
    perks: ['Vanity Kit Curation', 'Live Muhurtham Demos', 'Portfolio Photo Shoot', 'Recognized Certificate']
  },
  {
    title: 'Nail Art & Gel Extensions Specialist',
    duration: '15 Days Certification',
    desc: 'Hands-on practice in nail tip application, UV gel curing, 3D floral accents, French ombre, chrome glazing, and safe removal.',
    perks: ['Complete Practice Kit', 'Salon-Ready Techniques', 'One-on-One Mentorship', 'Authorized Certificate']
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Priyanka Meenakshi',
    location: 'Karaikkudi',
    service: '4-in-1 Mega Glow Combo (₹1,999)',
    date: '2 weeks ago',
    likes: 18,
    comment: 'Booked their ₹1999 4-in-1 combo offer for a family function. The hair spa was deeply relaxing and my skin felt so fresh and glowing immediately! The salon is very clean, calm, and hygienic. Truly the best salon experience in Karaikkudi!'
  },
  {
    id: 2,
    name: 'Sangeetha Ramanathan',
    location: 'Kottaiyur, Karaikkudi',
    service: 'Traditional Muhurtham Bridal HD Makeover',
    date: '1 month ago',
    likes: 27,
    comment: 'She GLAM did my wedding muhurtham makeover and my Kanjeevaram saree draping. The makeup was so natural, lightweight, and lasted over 10 hours through all rituals without any patchiness or sweat breakdown. Everyone in our family praised my look!'
  },
  {
    id: 3,
    name: 'Kavitha Devi',
    location: 'Devakottai / Karaikkudi',
    service: 'Hair Botox Deep Rejuvenation',
    date: '3 weeks ago',
    likes: 19,
    comment: 'Best hair botox treatment in Karaikkudi! My rough, frizzy curly hair became silky and smooth with mirror shine. Staff is extremely polite, takes good time, and uses only genuine branded products. Highly satisfied!'
  },
  {
    id: 4,
    name: 'Divya Annamalai',
    location: 'Burma Colony, Karaikkudi',
    service: 'Hydra Deep Pore Cleanse & Glow',
    date: '1 month ago',
    likes: 14,
    comment: 'Took their Hydra pore cleanse facial. The blackheads were completely removed painlessly and the serum hydration gave me glass skin. Very affordable pricing compared to big city salons and very polite staff!'
  },
  {
    id: 5,
    name: 'Meena Muthukaruppan',
    location: 'Karaikkudi',
    service: 'Academy: Bridal HD Makeup Masterclass',
    date: '2 months ago',
    likes: 32,
    comment: 'Proud student of She GLAM Academy! The 100% practical training on live models gave me full confidence to start my own freelance bridal makeup career. The trainer explains every step with patience and clear guidance.'
  },
  {
    id: 6,
    name: 'Anitha Selvam',
    location: 'Karaikkudi',
    service: 'Acrylic & UV Gel Nail Extensions',
    date: '3 weeks ago',
    likes: 16,
    comment: 'Got my nail extensions and chrome nail art done here for my engagement. Still looking brand new after 3 weeks! Very precise work, hygienic tools, and neat finishing. Highly recommended for girls in Karaikkudi!'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Close menu when tapping anywhere on the remaining screen
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    // Close if resized to desktop breakpoint
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileMenuOpen(false);
      }
    };

    // Lock body scrolling when drawer is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: '4-in-1 Mega Glow Combo (₹1999)',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    notes: ''
  });

  const [reviewLikes, setReviewLikes] = useState({ 1: 18, 2: 27, 3: 19, 4: 14, 5: 32, 6: 16 });
  const [userLiked, setUserLiked] = useState({});

  const toggleLike = (id) => {
    if (userLiked[id]) {
      setReviewLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setUserLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setReviewLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setUserLiked(prev => ({ ...prev, [id]: true }));
    }
  };

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
    const text = `✨ *She GLAM Salon & Academy - Appointment Booking* ✨\n\n` +
      `👤 *Name:* ${bookingData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${bookingData.phone || 'Not provided'}\n` +
      `💅 *Service:* ${bookingData.service}\n` +
      `📅 *Date:* ${bookingData.date || 'Earliest available'}\n` +
      `⏰ *Time Slot:* ${bookingData.timeSlot}\n` +
      (bookingData.notes ? `📝 *Notes:* ${bookingData.notes}\n` : '') +
      `\n_Sent from sheglam.rvsmps.store (Karaikkudi, Tamil Nadu)_`;

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
      <div className="top-bar">
        <span className="top-bar-text">
          Karaikkudi Special: <strong>₹1,999 Mega Glow Combo</strong> (Hair Spa + Facial + Haircut + Threading)
        </span>
        <strong className="top-bar-cta" onClick={() => openBookingWithService('4-in-1 Mega Glow Combo (₹1999)')}>Book Slot &rarr;</strong>
      </div>

      {/* 2. Header & Nav */}
      <header className="header" ref={headerRef}>
        <div className="nav-container">
          <a href="#" className="brand-logo-link" aria-label="She GLAM Home">
            <img src={logoImg} alt="She GLAM Salon & Academy" className="brand-logo-img" />
          </a>

          <nav className="nav-menu">
            <a href="#offers">Special Offers</a>
            <a href="#services">Services</a>
            <a href="#bridal">Bridal Lounge</a>
            <a href="#academy">Academy</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Find Us</a>
          </nav>

          <div className="nav-actions">
            <a 
              href={`tel:${cleanPhone}`} 
              className="btn btn-outline-burgundy nav-call-btn" 
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <button 
              className="btn btn-burgundy btn-shimmer nav-book-btn" 
              onClick={() => setIsModalOpen(true)}
            >
              <Calendar size={14} />
              <span>Book</span>
            </button>
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="burger-box">
                <span className="burger-line line-1"></span>
                <span className="burger-line line-2"></span>
                <span className="burger-line line-3"></span>
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>
              <span>Special ₹1,999 Offer</span>
              <ChevronRight size={16} />
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              <span>Services Menu</span>
              <ChevronRight size={16} />
            </a>
            <a href="#bridal" onClick={() => setMobileMenuOpen(false)}>
              <span>Bridal & Muhurtham</span>
              <ChevronRight size={16} />
            </a>
            <a href="#academy" onClick={() => setMobileMenuOpen(false)}>
              <span>Beauty Academy Courses</span>
              <ChevronRight size={16} />
            </a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>
              <span>Client Testimonials</span>
              <ChevronRight size={16} />
            </a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)}>
              <span>Location & Timings</span>
              <ChevronRight size={16} />
            </a>
          </div>
        )}
      </header>

      {/* Backdrop overlay to close drawer when clicking or touching the remaining screen */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          onTouchStart={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 3. Hero Section (Editorial Minimalist) */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-editorial-grid">
            <div>
              <div className="hero-location-badge">
                <span className="pill-tag pill-dusty">
                  <MapPin size={12} /> BURMA COLONY, KARAIKKUDI
                </span>
                <span className="pill-tag pill-cream">
                  <Clock size={11} /> DAILY 9:30 AM – 8:30 PM
                </span>
              </div>

              <h1>
                Beauty that <em>shines</em>,<br />
                confidence that <em>stays</em>.
              </h1>

              <p className="lead">
                Karaikkudi’s premier salon & professional academy. Experience bespoke hair botox, rejuvenating skin facials, flawless bridal makeovers, and hands-on certified beautician masterclasses.
              </p>

              <div className="hero-actions">
                <button 
                  className="btn btn-burgundy btn-shimmer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar size={17} />
                  <span>Book Appointment</span>
                </button>
                <a 
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello She GLAM, I would like to inquire about your salon appointments and pricing.')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <Sparkles size={17} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="#offers" className="btn btn-outline-burgundy">
                  <span>View ₹1,999 Offer</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="hero-metrics">
                <div className="metric-item">
                  <h4>4.9 ★</h4>
                  <p>Google Rating</p>
                </div>
                <div className="metric-item">
                  <h4>100%</h4>
                  <p>Hygienic & Certified</p>
                </div>
                <div className="metric-item">
                  <h4>1,200+</h4>
                  <p>Happy Makeovers</p>
                </div>
              </div>
            </div>

            {/* Hero Burgundy Spotlight Card */}
            <div className="burgundy-spotlight-card" id="offers">
              <span className="spotlight-eyebrow">MOST POPULAR IN KARAIKKUDI</span>
              <h3>4-in-1 Mega Glow Combo</h3>
              <span className="spotlight-subtitle">Hair Spa + Facial + Haircut + Threading</span>

              <div className="spotlight-price-box">
                <span className="spotlight-price-now">₹1,999</span>
                <span className="spotlight-price-was">₹4,500</span>
                <span className="spotlight-discount-badge">SAVE 55%</span>
              </div>

              <ul className="spotlight-inclusions">
                <li>
                  <CheckCircle2 className="spotlight-check" />
                  <span><strong>Deep Herbal Hair Spa:</strong> Moisture infusion & scalp massage</span>
                </li>
                <li>
                  <CheckCircle2 className="spotlight-check" />
                  <span><strong>Skin Lightening Facial:</strong> De-tan therapy & radiant glow</span>
                </li>
                <li>
                  <CheckCircle2 className="spotlight-check" />
                  <span><strong>Pro Haircut & Blowdry:</strong> Custom styling suited for your face</span>
                </li>
                <li>
                  <CheckCircle2 className="spotlight-check" />
                  <span><strong>Eyebrow Threading & Shaping:</strong> Clean, defined arch lines</span>
                </li>
              </ul>

              <button 
                className="btn btn-cream btn-shimmer" 
                style={{ width: '100%' }}
                onClick={() => openBookingWithService('4-in-1 Mega Glow Combo (₹1999)')}
              >
                <span>Claim Offer on WhatsApp</span>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimalist Feature Strip */}
      <div className="features-strip">
        <div className="container">
          <div className="features-strip-grid">
            <div className="feature-strip-item">
              <div className="feature-strip-icon">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h5>100% Sanitized Tools</h5>
                <p>UV sterilizers & single-use kits</p>
              </div>
            </div>

            <div className="feature-strip-item">
              <div className="feature-strip-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <h5>Premium Products</h5>
                <p>L'Oréal, Matrix, Lotus & O3+</p>
              </div>
            </div>

            <div className="feature-strip-item">
              <div className="feature-strip-icon">
                <Award size={20} />
              </div>
              <div>
                <h5>Certified Master Artists</h5>
                <p>Skilled in modern hair & HD makeup</p>
              </div>
            </div>

            <div className="feature-strip-item">
              <div className="feature-strip-icon">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h5>Fair & Honest Pricing</h5>
                <p>Zero hidden charges or pushy sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Services Menu & Filtering */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-editorial-header">
            <span className="pill-tag pill-dusty">OUR SERVICES • MENU</span>
            <h2>Curated Salon <em>Experiences</em></h2>
            <p>
              From science-backed hair rejuvenation to bridal couture and nail art, explore personalized care tailored for you in Burma Colony, Karaikkudi.
            </p>
          </div>

          <div className="filter-pills">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`filter-btn ${activeTab === 'hair' ? 'active' : ''}`}
              onClick={() => setActiveTab('hair')}
            >
              Hair & Botox
            </button>
            <button 
              className={`filter-btn ${activeTab === 'skin' ? 'active' : ''}`}
              onClick={() => setActiveTab('skin')}
            >
              Skin & Facials
            </button>
            <button 
              className={`filter-btn ${activeTab === 'bridal' ? 'active' : ''}`}
              onClick={() => setActiveTab('bridal')}
            >
              Bridal & Muhurtham
            </button>
            <button 
              className={`filter-btn ${activeTab === 'nails' ? 'active' : ''}`}
              onClick={() => setActiveTab('nails')}
            >
              Nails & Spa
            </button>
          </div>

          <div className="editorial-services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-box">
                <div>
                  <div className="service-box-tag">{service.tag}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-box-footer">
                  <div>
                    <span className="service-box-price">{service.price}</span>
                    {service.originalPrice && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)', textDecoration: 'line-through', marginLeft: '6px' }}>
                        {service.originalPrice}
                      </span>
                    )}
                  </div>
                  <button 
                    className="btn btn-outline-burgundy" 
                    style={{ padding: '7px 16px', fontSize: '0.82rem' }}
                    onClick={() => openBookingWithService(`${service.title} (${service.price})`)}
                  >
                    <span>Book</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bridal Lounge (Chettinad & Tamil Nadu Heritage) */}
      <section className="section" id="bridal" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="bridal-editorial-box">
            <div>
              <span className="pill-tag pill-burgundy" style={{ marginBottom: '14px' }}>
                BRIDAL LOUNGE • WEDDING SUITE
              </span>
              <h2>Bespoke Bridal <em>Artistry</em></h2>
              <p>
                Honoring the timeless traditions of Karaikkudi and Chettinad weddings. Our certified bridal specialists craft waterproof HD makeovers and authentic Kanjeevaram saree drapery designed to stay radiant through morning muhurthams and evening receptions.
              </p>

              <ul className="bridal-checklist">
                <li>
                  <CheckCircle2 size={18} color="#722F37" />
                  <span><strong>Traditional Muhurtham Makeup:</strong> Sweatproof HD finish that preserves natural beauty without flashback.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#722F37" />
                  <span><strong>Authentic Kanjeevaram Saree Draping:</strong> Crisp, tight pleating and temple jewelry pinning for graceful comfort.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#722F37" />
                  <span><strong>Jasmine Floral Hair Art:</strong> Intricate poola jada, traditional flower weaves, or modern floral bridal buns.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} color="#722F37" />
                  <span><strong>Pre-Bridal Skincare Roadmap:</strong> Tailored treatments 30 to 60 days before your wedding day.</span>
                </li>
              </ul>

              <div className="bridal-actions">
                <button 
                  className="btn btn-burgundy"
                  onClick={() => openBookingWithService('Bridal Consultation & Package')}
                >
                  Book Bridal Consultation
                </button>
                <a 
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello She GLAM, I would like to inquire about your Bridal Makeover packages for my wedding.')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  WhatsApp Bridal Enquiry
                </a>
              </div>
            </div>

            <div className="bridal-highlight-panel">
              <h4>Bridal Highlights</h4>
              <ul className="bridal-spec-list">
                <li>
                  <strong>HD Skin Preparation:</strong>
                  Hydrating prep to ensure flawless camera and stage-light appearance.
                </li>
                <li>
                  <strong>Trial & Tone Matching:</strong>
                  Detailed consultation to match your bridal saree border and jewelry palette.
                </li>
                <li>
                  <strong>Bridesmaids & Family:</strong>
                  Custom packages for mother, sisters, and bridal party.
                </li>
                <li>
                  <strong>Karaikkudi & Surrounding:</strong>
                  On-location artist booking available across Sivaganga & Pudukkottai districts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. She GLAM Academy */}
      <section className="section" id="academy" style={{ background: 'var(--cream-card)' }}>
        <div className="container">
          <div className="section-editorial-header">
            <span className="pill-tag pill-dusty">
              <GraduationCap size={13} /> BEAUTY ACADEMY • CERTIFIED COURSES
            </span>
            <h2>Certified Beauty <em>Academy</em></h2>
            <p>
              Transform your passion into a high-earning profession. Practical, hands-on salon diploma courses certified right in Karaikkudi.
            </p>
          </div>

          <div className="academy-editorial-grid">
            {ACADEMY_COURSES.map((course, idx) => (
              <div key={idx} className="course-box">
                <span className="course-duration-pill">{course.duration}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>

                <ul className="course-perks">
                  {course.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={15} color="#722F37" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="btn btn-outline-burgundy" 
                  style={{ width: '100%', fontSize: '0.84rem' }}
                  onClick={() => openBookingWithService(`Academy Enquiry: ${course.title}`)}
                >
                  Enquire Syllabus & Fees
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', background: 'var(--cream-light)', border: '1.5px solid var(--dusty-pink)', borderRadius: 'var(--radius-md)', padding: '32px 24px', maxWidth: '750px', margin: '0 auto' }}>
            <Award size={34} color="#722F37" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--burgundy-dark)', marginBottom: '8px' }}>
              Why Join She GLAM Academy?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Unlike theory-only centers, our students get 100% hands-on practical experience on live clients. Graduate with confidence, professional portfolio guidance, and real-world salon skills.
            </p>
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi She GLAM, I would like to join your Academy courses. Please send course fee and batch details.')}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-burgundy"
            >
              Get Course Brochure on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 8. Google 5-Star Verified Reviews Showcase */}
      <section className="section" id="reviews">
        <div className="container">
          <div className="section-editorial-header">
            <span className="pill-tag pill-dusty">
              GOOGLE REVIEWS • 5.0 ★ EXCELLENCE
            </span>
            <h2>Loved by Karaikkudi <em>Clients</em></h2>
            <p>
              Real 5-star experiences from our regular clients, brides, and academy students in Burma Colony, Karaikkudi.
            </p>
          </div>

          {/* Google Rating Summary Bar */}
          <div className="google-summary-card">
            <div className="google-summary-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <GoogleIcon size={36} />
                <span className="google-rating-number">5.0</span>
              </div>
              <div>
                <div className="google-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="google-verified-badge">
                    <CheckCircle2 size={13} /> 100% 5-Star Rated
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Google Business Profile • Burma Colony, Karaikkudi
                  </span>
                </div>
              </div>
            </div>

            <a 
              href={mapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-burgundy"
              style={{ fontSize: '0.84rem', padding: '10px 20px' }}
            >
              <GoogleIcon size={16} />
              <span>Write a 5★ Review on Google</span>
            </a>
          </div>

          {/* 5-Star Review Cards Grid */}
          <div className="reviews-grid">
            {REVIEWS_DATA.map((rev) => (
              <div key={rev.id} className="review-card">
                <div>
                  <div className="review-card-top">
                    <div className="review-author-info">
                      <div className="review-avatar">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="review-author-name">{rev.name}</h5>
                        <span className="review-date-badge">
                          <GoogleIcon size={12} /> {rev.location} • {rev.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>

                  <span className="review-service-pill">{rev.service}</span>

                  <p>"{rev.comment}"</p>
                </div>

                <div className="review-footer">
                  <button 
                    className={`like-button ${userLiked[rev.id] ? 'liked' : ''}`}
                    onClick={() => toggleLike(rev.id)}
                    title="Mark review as helpful"
                  >
                    <ThumbsUp size={13} fill={userLiked[rev.id] ? 'currentColor' : 'none'} />
                    <span>Helpful ({reviewLikes[rev.id] || rev.likes})</span>
                  </button>

                  <div className="google-brand-tag">
                    <GoogleIcon size={13} />
                    <span>Verified Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Location & Contact Section */}
      <section className="section" id="location" style={{ background: 'var(--cream-card)' }}>
        <div className="container">
          <div className="section-editorial-header">
            <span className="pill-tag pill-dusty">VISIT US • BURMA COLONY, KARAIKKUDI</span>
            <h2>Find Us in <em>Karaikkudi</em></h2>
            <p>
              Conveniently located at Burma Colony, near the Water Tank on Kottaiyur Main Road.
            </p>
          </div>

          <div className="location-editorial-grid">
            <div className="location-info-card">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--burgundy-dark)', marginBottom: '24px' }}>
                  Salon & Academy Details
                </h3>

                <div className="location-info-item">
                  <MapPin className="location-info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--burgundy-dark)', marginBottom: '4px' }}>Address</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                      {locationAddress}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--burgundy)', fontWeight: 600 }}>Landmark: Near Water Tank, Burma Colony</span>
                  </div>
                </div>

                <div className="location-info-item">
                  <Phone className="location-info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--burgundy-dark)', marginBottom: '4px' }}>Phone / WhatsApp</strong>
                    <a href={`tel:${cleanPhone}`} style={{ color: 'var(--burgundy)', fontWeight: 700, fontSize: '1.05rem', display: 'block' }}>
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="location-info-item">
                  <Clock className="location-info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--burgundy-dark)', marginBottom: '4px' }}>Working Hours</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                      Monday – Sunday: <strong>9:30 AM – 8:30 PM</strong>
                    </p>
                    <span style={{ fontSize: '0.8rem', color: '#25D366', fontWeight: 600 }}>Open All 7 Days a Week</span>
                  </div>
                </div>

                <div className="location-info-item">
                  <InstagramIcon className="location-info-icon" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--burgundy-dark)', marginBottom: '4px' }}>Instagram Official</strong>
                    <a 
                      href={instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--burgundy)', textDecoration: 'underline', fontSize: '0.92rem', fontWeight: 600 }}
                    >
                      @__she_glam__
                    </a>
                  </div>
                </div>
              </div>

              <div className="location-actions">
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-burgundy"
                >
                  <MapPin size={16} /> Open in Google Maps
                </a>
                <a 
                  href={`https://wa.me/${cleanPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <Sparkles size={16} /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="map-editorial-frame">
              <iframe 
                title="She GLAM Salon Karaikkudi Location"
                src="https://maps.google.com/maps?q=Burma%20Colony,%20Kottaiyur%20Main%20Road,%20Karaikkudi,%20Tamil%20Nadu%20630002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Minimalist Editorial Footer */}
      <footer className="footer-editorial">
        <div className="container">
          <div className="footer-editorial-grid">
            <div>
              <a href="#" className="brand-logo-link" style={{ display: 'inline-block', marginBottom: '16px' }}>
                <img src={logoImg} alt="She GLAM Salon" className="brand-logo-img" />
              </a>
              <p style={{ color: 'var(--dusty-pink)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Karaikkudi’s destination for luxury hair botox, skin brightening facials, traditional Tamil Nadu bridal makeovers, and certified beautician masterclasses.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(251, 244, 231, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a 
                  href={`https://wa.me/${cleanPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}
                  aria-label="WhatsApp"
                >
                  <Sparkles size={18} />
                </a>
                <a 
                  href={mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(251, 244, 231, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FBF4E7' }}
                  aria-label="Google Maps"
                >
                  <MapPin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Salon Menu</h4>
              <ul className="footer-nav">
                <li><a href="#offers">₹1,999 Glow Combo</a></li>
                <li><a href="#services">Hair Botox Therapy</a></li>
                <li><a href="#services">Keratin Silk Treatment</a></li>
                <li><a href="#services">Signature Facials</a></li>
                <li><a href="#bridal">Bridal Packages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Academy</h4>
              <ul className="footer-nav">
                <li><a href="#academy">Diploma in Cosmetology</a></li>
                <li><a href="#academy">Bridal HD Makeup Course</a></li>
                <li><a href="#academy">Nail Extensions Art</a></li>
                <li><a href="#academy">Course Brochure</a></li>
                <li><a href="#academy">Placement Help</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact</h4>
              <p style={{ color: 'var(--cream)', fontSize: '0.85rem', marginBottom: '8px' }}>
                No: 84/1, Water Tank, Kottaiyur Main Road, Burma Colony, Karaikkudi - 630002
              </p>
              <p style={{ color: 'var(--dusty-pink)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '12px' }}>
                📞 {phoneNumber}
              </p>
              <p style={{ color: 'var(--dusty-pink)', fontSize: '0.82rem' }}>
                Daily: 9:30 AM – 8:30 PM
              </p>
            </div>
          </div>

          <div className="footer-editorial-bottom">
            <div>
              &copy; {new Date().getFullYear()} She GLAM Salon & Academy. All Rights Reserved.
            </div>
            <div>
              <span>Karaikkudi, Tamil Nadu - 630002</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 11. Sticky Mobile Bottom Action Bar */}
      <div className={`mobile-bottom-bar ${mobileMenuOpen ? 'drawer-is-open' : ''}`}>
        <a 
          href={`tel:${cleanPhone}`} 
          className="bottom-bar-btn btn-call"
          aria-label="Call She GLAM"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello She GLAM, I would like to inquire about your salon services and appointments.')}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="bottom-bar-btn btn-wa"
          aria-label="Chat on WhatsApp"
        >
          <Sparkles size={18} />
          <span>WhatsApp</span>
        </a>
        <button 
          className="bottom-bar-btn btn-booking btn-shimmer"
          onClick={() => setIsModalOpen(true)}
          aria-label="Book Appointment"
        >
          <Calendar size={18} />
          <span>Book Now</span>
        </button>
      </div>

      {/* 12. Floating Quick WhatsApp Button (Desktop) */}
      <a 
        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello She GLAM, I would like to book an appointment.')}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        title="Chat with She GLAM"
      >
        <div className="floating-ping"></div>
        <Sparkles size={28} />
      </a>

      {/* 13. Minimalist Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <img src={logoImg} alt="She GLAM" style={{ height: '42px', margin: '0 auto 10px', mixBlendMode: 'multiply' }} />
              <h3 style={{ fontSize: '1.6rem', color: 'var(--burgundy-dark)' }}>Book Your Appointment</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                Burma Colony, Karaikkudi • Direct WhatsApp Confirmation
              </p>
            </div>

            <form onSubmit={handleBookingSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label className="form-label">Service / Treatment *</label>
                <select 
                  className="form-select"
                  value={bookingData.service}
                  onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                  required
                >
                  <option value="4-in-1 Mega Glow Combo (₹1999)">4-in-1 Mega Glow Combo (₹1,999 Special)</option>
                  <option value="Hair Botox Deep Rejuvenation">Hair Botox Deep Rejuvenation</option>
                  <option value="Keratin Silk Smooth Therapy">Keratin Silk Smooth Therapy</option>
                  <option value="Nourishing Herbal Hair Spa">Nourishing Herbal Hair Spa</option>
                  <option value="Precision Layer Cut & Blowdry">Precision Layer Cut & Blowdry</option>
                  <option value="She GLAM Signature Brightening Facial">She GLAM Signature Brightening Facial</option>
                  <option value="Hydra Deep Pore Cleanse & Hydration">Hydra Deep Pore Cleanse & Hydration</option>
                  <option value="24K Gold Luxury Pre-Bridal Facial">24K Gold Luxury Pre-Bridal Facial</option>
                  <option value="Traditional Muhurtham Bridal HD Makeover">Traditional Muhurtham Bridal HD Makeover</option>
                  <option value="Contemporary Reception & Engagement Glam">Contemporary Reception & Engagement Glam</option>
                  <option value="Kanjeevaram Saree Draping & Hair Flowers">Kanjeevaram Saree Draping & Hair Flowers</option>
                  <option value="Acrylic & UV Gel Nail Extensions">Acrylic & UV Gel Nail Extensions</option>
                  <option value="Rose Petal Spa Pedicure & Manicure">Rose Petal Spa Pedicure & Manicure</option>
                  <option value="Academy Enquiry: Beautician Diploma">Academy Enquiry: Beautician Diploma</option>
                  <option value="Academy Enquiry: Bridal Makeup Course">Academy Enquiry: Bridal Makeup Course</option>
                  <option value="Academy Enquiry: Nail Art Specialist">Academy Enquiry: Nail Art Specialist</option>
                  <option value="Other Custom Service">Other Custom Service</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Priya Sundaram"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
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

              <div className="modal-form-row">
                <div>
                  <label className="form-label">Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-input"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>
                <div>
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

              <div style={{ marginBottom: '20px' }}>
                <label className="form-label">Special Notes (Optional)</label>
                <textarea 
                  className="form-textarea"
                  rows={2}
                  placeholder="Any hair/skin details or questions..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-whatsapp btn-shimmer" 
                style={{ width: '100%', padding: '14px', fontSize: '0.98rem' }}
              >
                <Sparkles size={17} />
                <span>Confirm & Send on WhatsApp</span>
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-sub)', marginTop: '10px' }}>
                Sends details directly to She GLAM WhatsApp (+91 63813 74330). Instant confirmation!
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
