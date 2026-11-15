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
  ThumbsUp,
  Search,
  BookOpen,
  LayoutGrid,
  List
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
  {
    "id": "combo-1999",
    "category": "hair",
    "section": "Signature Combos",
    "title": "4-in-1 Mega Glow Combo",
    "price": "\u20b91,999",
    "originalPrice": "\u20b94,500",
    "description": "Our signature viral package: L'Or\u00e9al Deep Hair Spa + Skin Brightening Cleanup + Precision Haircut & Styling + Eyebrow Threading.",
    "tag": "Limited Special",
    "popular": true
  },
  {
    "id": "hair-smoothening-med",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Hair Smoothening (Medium Hair)",
    "price": "\u20b93,999",
    "description": "Professional salon hair smoothening delivering sleek, silky, and frizz-free manageable hair.",
    "tag": "Texture Change"
  },
  {
    "id": "hair-smoothening-long",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Hair Smoothening (Long Hair)",
    "price": "\u20b94,999",
    "description": "Deep smoothening treatment for long tresses with high-shine mirror finish.",
    "tag": "Texture Change"
  },
  {
    "id": "hair-rebonding-med",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Permanent Rebonding (Medium Hair)",
    "price": "\u20b94,999",
    "description": "Intense permanent straightening and structure reforming for sleek poker-straight locks.",
    "tag": "Rebonding"
  },
  {
    "id": "hair-rebonding-long",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Permanent Rebonding (Long Hair)",
    "price": "\u20b95,999",
    "description": "Ultra-sleek permanent rebonding treatment formulated for long and dense hair.",
    "tag": "Rebonding"
  },
  {
    "id": "hair-keratin-med",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Keratin Protein Treatment (Medium Hair)",
    "price": "\u20b94,999",
    "description": "Hydrolyzed keratin infusion that seals the cuticle, eliminates 95% frizz and restores vitality.",
    "tag": "Client Favorite",
    "popular": true
  },
  {
    "id": "hair-keratin-long",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Keratin Protein Treatment (Long Hair)",
    "price": "\u20b95,999",
    "description": "Full protein restoration and silk seal for long frizz-prone hair lasting months.",
    "tag": "Signature Care"
  },
  {
    "id": "hair-botox-med",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Deep Hair Botox Rejuvenation (Medium Hair)",
    "price": "\u20b96,999",
    "description": "Deep restorative anti-aging botox therapy restoring elasticity, moisture, and intense gloss.",
    "tag": "Luxury Hair Care",
    "popular": true
  },
  {
    "id": "hair-botox-long",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Deep Hair Botox Rejuvenation (Long Hair)",
    "price": "\u20b96,999",
    "description": "Maximum fiber repair for heat & color treated long hair with premium botox peptides.",
    "tag": "Luxury Hair Care"
  },
  {
    "id": "hair-perming-med",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Hair Perming (Medium Hair)",
    "price": "\u20b95,999",
    "description": "Bespoke curls, spirals, or beach wave texture perming with volume retention.",
    "tag": "Curls & Volume"
  },
  {
    "id": "hair-perming-long",
    "category": "hair",
    "section": "Texture Change & Straightening",
    "title": "Hair Perming (Long Hair)",
    "price": "\u20b96,999",
    "description": "Voluminous cascade curls and long-lasting permanent curl definition for long hair.",
    "tag": "Curls & Volume"
  },
  {
    "id": "hair-cut-one-length",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "One Length Precision Cut (with Blast Dry)",
    "price": "\u20b9299",
    "description": "Clean, crisp baseline trim and split-end clearing finished with blast dry.",
    "tag": "Essential Cut"
  },
  {
    "id": "hair-cut-layer",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Layer Cut (with Blow Dry Styling)",
    "price": "\u20b9599",
    "description": "Dimensional face-framing layer cut with professional salon blow dry and bounce.",
    "tag": "Popular Cut",
    "popular": true
  },
  {
    "id": "hair-cut-feather",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Feather Cut (with Blow Dry Styling)",
    "price": "\u20b9599",
    "description": "Soft winged feather texture providing airy movement and face-contouring elegance.",
    "tag": "Styling Cut"
  },
  {
    "id": "hair-cut-step",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Step Cut (with Blow Dry Styling)",
    "price": "\u20b9599",
    "description": "Defined graduated steps adding instant body, volume, and shape.",
    "tag": "Styling Cut"
  },
  {
    "id": "hair-cut-adv-layer",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Advanced Multi-Tier Layer Cut",
    "price": "\u20b9699",
    "description": "Customized precision haircut blending internal textures with luxury blowout styling.",
    "tag": "Master Stylist"
  },
  {
    "id": "hair-cut-bangs",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Bangs & Fringe Styling",
    "price": "\u20b9149",
    "description": "Curtain bangs, wispy fringe, or blunt brow styling tailored to your face silhouette.",
    "tag": "Front Style"
  },
  {
    "id": "hair-ironing",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Thermal Hair Ironing",
    "price": "\u20b9999",
    "description": "High-gloss thermal ceramic straightening with heat-shield nourishing serum.",
    "tag": "Event Styling"
  },
  {
    "id": "hair-tong-styling",
    "category": "hair",
    "section": "Hair Cuts & Styling",
    "title": "Tong Curls & Hollywood Waves",
    "price": "\u20b91,299",
    "description": "Glamorous red-carpet curls, effortless mermaid waves, or structured barrel rolls.",
    "tag": "Glam Styling"
  },
  {
    "id": "hair-spa-loreal-nourish",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "L'Or\u00e9al Professionnel Nourishing Hair Spa",
    "price": "\u20b91,199",
    "description": "Deep creambath with scalp massage, steam infusion, and essential lipid restoration.",
    "tag": "Hair Spa"
  },
  {
    "id": "hair-spa-loreal-frizz",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "L'Or\u00e9al Professionnel Frizz Control Treatment",
    "price": "\u20b91,299",
    "description": "Pro-Keratin smoothing treatment that eliminates humidity frizz and detangles hair.",
    "tag": "Hair Spa"
  },
  {
    "id": "hair-spa-loreal-repair",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "L'Or\u00e9al Absolut Repair Damage Spa",
    "price": "\u20b91,199",
    "description": "Gold quinoa & protein restructuring therapy for chemically stressed brittle hair.",
    "tag": "Repair Therapy"
  },
  {
    "id": "hair-spa-loreal-color",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "L'Or\u00e9al Colour Sealing Radiance Spa",
    "price": "\u20b91,299",
    "description": "Resveratrol color-locking formula preserving hue vibrancy and mirror-like shine.",
    "tag": "Color Care"
  },
  {
    "id": "hair-spa-moroccan",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "Luxury Moroccan Argan Oil Hair Spa",
    "price": "\u20b91,299",
    "description": "Pure Moroccan argan oil bath restoring deep moisture, softness, and scalp balance.",
    "tag": "Luxury Spa"
  },
  {
    "id": "hair-anti-dandruff",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "Scalp Anti-Dandruff Exfoliation Treatment",
    "price": "\u20b9599",
    "description": "Targeted scalp clearing treatment removing flakes, reducing itchiness, and balancing sebum.",
    "tag": "Scalp Health"
  },
  {
    "id": "hair-massage-aroma",
    "category": "hair",
    "section": "Hair Spas & Head Therapy",
    "title": "Therapeutic Head Massage with Aroma Oil",
    "price": "\u20b9699",
    "description": "Deep acupressure Indian scalp massage with calming essential oils to relieve stress and fatigue.",
    "tag": "Head Therapy"
  },
  {
    "id": "color-root-regular",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Root Touch-Up (Regular)",
    "price": "\u20b9999",
    "description": "100% grey coverage root restoration matching your exact natural shade.",
    "tag": "Root Touch-Up"
  },
  {
    "id": "color-root-ammonia-free",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Root Touch-Up (Ammonia-Free)",
    "price": "\u20b91,199",
    "description": "Scalp-gentle ammonia-free root color infused with nourishing conditioning oils.",
    "tag": "Gentle Color"
  },
  {
    "id": "color-global-base-med",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Global Base Hair Color (Short / Medium)",
    "price": "\u20b92,999",
    "description": "Rich all-over dimensional hair coloring in warm chestnuts, rich chocolates, and natural blacks.",
    "tag": "Global Color"
  },
  {
    "id": "color-global-base-long",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Global Base Hair Color (Long Hair)",
    "price": "\u20b93,999",
    "description": "Full-length luxurious hair color coverage with even tone and radiant reflection.",
    "tag": "Global Color"
  },
  {
    "id": "color-balayage",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Bespoke Balayage & Ombre Artistry",
    "price": "\u20b94,999",
    "description": "Hand-painted seamless sun-kissed gradients, caramel melting, and multidimensional dimension.",
    "tag": "Trending Color",
    "popular": true
  },
  {
    "id": "color-highlights-per-streak",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Foil Highlights / Streaks (Per Streak)",
    "price": "\u20b9299",
    "description": "Custom accent foil highlights in honey, copper, ash blonde, or fashion pigments.",
    "tag": "Color Accent"
  },
  {
    "id": "color-bond-strengthening",
    "category": "hair",
    "section": "Hair Colouring & Highlights",
    "title": "Bond Strengthening Fortifier Treatment",
    "price": "\u20b91,200",
    "description": "Structural bond repair preventing breakage during and after color processing.",
    "tag": "Plex Therapy"
  },
  {
    "id": "skin-threading-brows",
    "category": "skin",
    "section": "Threading & Facial Waxing",
    "title": "Eyebrow Precision Threading",
    "price": "\u20b949",
    "description": "Clean eyebrow shaping, arch definition, and stray hair removal.",
    "tag": "Express Care"
  },
  {
    "id": "skin-threading-fullface",
    "category": "skin",
    "section": "Threading & Facial Waxing",
    "title": "Full Face Threading",
    "price": "\u20b9149",
    "description": "Complete facial hair clearing including eyebrows, forehead, upper lip, chin, and cheeks.",
    "tag": "Complete Facial"
  },
  {
    "id": "skin-wax-cartridge-fullarms",
    "category": "skin",
    "section": "Threading & Facial Waxing",
    "title": "Roll-On Cartridge Waxing (Full Arms)",
    "price": "\u20b9399",
    "description": "Hygienic, mess-free Italian cartridge waxing for silky smooth skin.",
    "tag": "Hygienic Wax"
  },
  {
    "id": "skin-wax-cartridge-fulllegs",
    "category": "skin",
    "section": "Threading & Facial Waxing",
    "title": "Roll-On Cartridge Waxing (Full Legs)",
    "price": "\u20b9599",
    "description": "Fast, gentle cartridge waxing leaving legs thoroughly smooth and hydrated.",
    "tag": "Hygienic Wax"
  },
  {
    "id": "skin-wax-brazilian-underarms",
    "category": "skin",
    "section": "Threading & Facial Waxing",
    "title": "Brazilian Stripless Wax (Underarms)",
    "price": "\u20b9399",
    "description": "Low-temperature stripless wax designed for sensitive zones, minimizing pain.",
    "tag": "Painless Wax"
  },
  {
    "id": "skin-detan-faceneck",
    "category": "skin",
    "section": "De-Tan & Clean-Up",
    "title": "Instant De-Tan Pack (Face & Neck)",
    "price": "\u20b9499",
    "description": "Fruit enzyme formulation removing sun tanning and hyperpigmentation instantly.",
    "tag": "Sun Repair"
  },
  {
    "id": "skin-detan-goldmask",
    "category": "skin",
    "section": "De-Tan & Clean-Up",
    "title": "Luxury Gold Peel-Off De-Tan Mask",
    "price": "\u20b9699",
    "description": "Radiance-infusing gold peel-off mask tightening pores and restoring luminosity.",
    "tag": "Luxe Glow"
  },
  {
    "id": "skin-cleanup-regular",
    "category": "skin",
    "section": "De-Tan & Clean-Up",
    "title": "Deep Pore Essential Clean-Up",
    "price": "\u20b9499",
    "description": "Cleansing, gentle exfoliation, steam, blackhead removal, and pore-tightening pack.",
    "tag": "Daily Freshness"
  },
  {
    "id": "skin-cleanup-detan",
    "category": "skin",
    "section": "De-Tan & Clean-Up",
    "title": "De-Tan Herbal Botanical Clean-Up",
    "price": "\u20b9699",
    "description": "Exfoliating botanical peel combined with deep pore extraction for immediate brightness.",
    "tag": "Glow Clean-Up",
    "popular": true
  },
  {
    "id": "skin-cleanup-whitening",
    "category": "skin",
    "section": "De-Tan & Clean-Up",
    "title": "Insta Whitening & Vitamin C Clean-Up",
    "price": "\u20b9999",
    "description": "High-potency ascorbic acid infusion eliminating dullness for camera-ready clarity.",
    "tag": "Express Bright"
  },
  {
    "id": "facial-fresh-fruit",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Fresh Seasonal Fruit Organic Facial",
    "price": "\u20b9599",
    "description": "All-natural seasonal fruit pulp packed with AHAs and enzymes for gentle, refreshed skin.",
    "tag": "Organic Care"
  },
  {
    "id": "facial-clean-glow",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Clean & Glow Luminous Facial",
    "price": "\u20b9799",
    "description": "Pore purifying massage and botanical pack revealing natural healthy glow.",
    "tag": "Signature Glow"
  },
  {
    "id": "facial-pearl-shine",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Pearl Shine Micro-Crystal Facial",
    "price": "\u20b91,299",
    "description": "Real pearl bhasma peptides for silky smooth complexion and unified tone.",
    "tag": "Radiance Facial"
  },
  {
    "id": "facial-hydra-boost",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Hydra Boost Deep Moisture Facial",
    "price": "\u20b91,499",
    "description": "Multi-molecular hyaluronic acid infusion plumping dehydrated skin with dewy moisture.",
    "tag": "Glass Skin",
    "popular": true
  },
  {
    "id": "facial-acne-clear",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Acne Clear Salicylic Purifying Facial",
    "price": "\u20b91,499",
    "description": "Therapeutic tea tree and salicylic clearing for active blemishes, oil control, and calm skin.",
    "tag": "Blemish Therapy"
  },
  {
    "id": "facial-instant-brightening",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Instant Brightening Cellular Facial",
    "price": "\u20b91,999",
    "description": "Advanced antioxidant treatment fading stubborn tan lines and dark spots.",
    "tag": "Complexion Revive"
  },
  {
    "id": "facial-gold-radiance",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "24K Gold Radiance Luxury Facial",
    "price": "\u20b92,999",
    "description": "Colloidal 24K gold dust that revitalizes skin collagen, imparting timeless bridal glow.",
    "tag": "Luxury Gold",
    "popular": true
  },
  {
    "id": "facial-skin-whitening",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Advanced Skin Whitening & Peptides Facial",
    "price": "\u20b92,999",
    "description": "Medical-grade aesthetic actives targeting deep melanin deposits for a porcelain finish.",
    "tag": "Skin Brightening"
  },
  {
    "id": "facial-oxygen-infusion",
    "category": "skin",
    "section": "Luxury Facials",
    "title": "Hyperbaric Oxygen Infusion Facial",
    "price": "\u20b92,999",
    "description": "Pressurized pure oxygen micro-mist delivering hyaluronic serum deep into dermis.",
    "tag": "Aesthetic Technology"
  },
  {
    "id": "facial-bridal-glow",
    "category": "bridal",
    "section": "Chettinad Bridal Lounge",
    "title": "She GLAM Signature Ultra-Luxe Bridal Facial",
    "price": "\u20b93,999",
    "description": "Our pinnacle multi-step bridal therapy: diamond microdermabrasion, gold mask, and neck-to-d\u00e9collet\u00e9 glow.",
    "tag": "Pinnacle Bridal",
    "popular": true
  },
  {
    "id": "muhurtham-bridal",
    "category": "bridal",
    "section": "Chettinad Bridal Lounge",
    "title": "Traditional Muhurtham HD Bridal Makeover",
    "price": "Custom Package",
    "description": "Long-wearing sweat-proof HD makeup for wedding rituals, customized contouring, and flawless finish.",
    "tag": "Muhurtham Master"
  },
  {
    "id": "reception-glam",
    "category": "bridal",
    "section": "Chettinad Bridal Lounge",
    "title": "Contemporary Reception & Engagement Glam",
    "price": "Custom Package",
    "description": "Sculpted glamour, statement shimmer eyes, dewy glass-skin complexion, and custom hair design.",
    "tag": "Evening Reception"
  },
  {
    "id": "saree-draping",
    "category": "bridal",
    "section": "Chettinad Bridal Lounge",
    "title": "Kanjeevaram Saree Draping & Fresh Flower Art",
    "price": "From \u20b9999",
    "description": "Razor-sharp pleats for heavy pure silk sarees, jewelry pinning, and traditional jasmine styling.",
    "tag": "Saree Draping Art"
  },
  {
    "id": "pre-bridal",
    "category": "bridal",
    "section": "Chettinad Bridal Lounge",
    "title": "Complete 30-Day Pre-Bridal Radiance Suite",
    "price": "Consult For Pricing",
    "description": "Full bride transformation: body polishing, gold facial, hair botox, luxury mani-pedi, and organic waxing.",
    "tag": "Full Bridal Suite"
  },
  {
    "id": "nail-polish-gel",
    "category": "nails",
    "section": "Nail Extensions & Gel Polish",
    "title": "Chip-Free UV Gel Polish",
    "price": "\u20b9499",
    "description": "High-shine UV LED cured gel polish lasting up to 3 weeks without chipping or peeling.",
    "tag": "Trending Nails"
  },
  {
    "id": "nail-ext-softgel",
    "category": "nails",
    "section": "Nail Extensions & Gel Polish",
    "title": "Soft Gel Nail Extensions (with Gel Polish)",
    "price": "\u20b91,499",
    "description": "Lightweight, flexible full-cover soft gel tips finished with premium gel polish.",
    "tag": "Extensions",
    "popular": true
  },
  {
    "id": "nail-ext-acrylic",
    "category": "nails",
    "section": "Nail Extensions & Gel Polish",
    "title": "Sculpted Acrylic Nail Extensions (with Gel Polish)",
    "price": "\u20b92,499",
    "description": "Ultra-durable sculpted acrylic extensions with seamless cuticle blending and gel color.",
    "tag": "Extensions"
  },
  {
    "id": "nail-ext-toenail",
    "category": "nails",
    "section": "Nail Extensions & Gel Polish",
    "title": "Toe Nail Extensions (with Gel Polish)",
    "price": "\u20b9999",
    "description": "Toenail reshaping, extension reconstruction, and long-lasting gel lacquer.",
    "tag": "Pedicure Glam"
  },
  {
    "id": "nail-art-addons",
    "category": "nails",
    "section": "Nail Extensions & Gel Polish",
    "title": "Designer Nail Art (Cat Eye / Chrome / Crystals)",
    "price": "From \u20b920 / nail",
    "description": "Chrome glazing, 3D rhinestones, velvet magnetic cat-eye shimmer, and fine line art.",
    "tag": "Nail Art"
  },
  {
    "id": "mani-pedi-coco",
    "category": "nails",
    "section": "Manicure & Pedicure Spas",
    "title": "Coco Butter Manicure & Pedicure",
    "price": "\u20b9599",
    "description": "Warm organic coconut butter scrub, cuticle restoration, gentle massage, and nail buffing.",
    "tag": "Spa Care"
  },
  {
    "id": "mani-pedi-paraffin",
    "category": "nails",
    "section": "Manicure & Pedicure Spas",
    "title": "Luxury Paraffin Wax Spa Manicure & Pedicure",
    "price": "\u20b9699",
    "description": "Warm therapeutic paraffin wax boots & mittens deeply softening cracked heels and dry hands.",
    "tag": "Intense Softening"
  },
  {
    "id": "mani-pedi-crystal",
    "category": "nails",
    "section": "Manicure & Pedicure Spas",
    "title": "Crystal Spa Relaxation Manicure & Pedicure",
    "price": "\u20b9999",
    "description": "Sensory crystal bead jelly bath, fruit exfoliation, and tension-melting reflexology massage.",
    "tag": "Ultimate Relaxation"
  },
  {
    "id": "mani-pedi-icecream",
    "category": "nails",
    "section": "Manicure & Pedicure Spas",
    "title": "Aromatic Ice Cream Sundae Spa Mani-Pedi",
    "price": "\u20b91,099",
    "description": "Delightful whipped body souffl\u00e9 scrub, aromatic ice cream scoop mask, and luxury gloss buffing.",
    "tag": "Sensory Luxury",
    "popular": true
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
    name: 'Kiruthika G',
    location: 'Google Verified Review',
    service: 'Baby Shower Makeover & Hairdo',
    date: '2 months ago',
    comment: 'Thanks a lot dear. I am really satisfied and happy with the makeover done on my baby shower. U made my day so special. Got a lot of compliments for makeup and hairdo.'
  },
  {
    id: 2,
    name: 'Suga Priya',
    location: 'Google Verified Review',
    service: 'Neo Plastia Hair Treatment',
    date: '7 months ago',
    comment: 'Superb experience, Hair looks very straight and shiny after Neo Plastia. Service and ambience are top-notch. Everyone should try it here 💯'
  },
  {
    id: 3,
    name: 'Anuragini P',
    location: 'Google Verified Review',
    service: 'Hair Wash & Signature Haircut',
    date: '3 months ago',
    comment: 'The hair wash and the haircut was exactly what I asked for! The whole process was relaxing and pampering also this one of my best haircut!!! Highly recommend!!'
  },
  {
    id: 4,
    name: 'Ramya Ram',
    location: 'Google Verified Review',
    service: 'Facial & Eyebrow Styling',
    date: '7 months ago',
    comment: 'I visited this parlour for facial and eyebrows. The service was good, neat and satisfying. Overall a nice experience.'
  },
  {
    id: 5,
    name: 'Aishwarya Vijayakumar',
    location: 'Google Verified Review',
    service: 'Personal Style & Consultation',
    date: '5 months ago',
    comment: 'At She Glam Salon, the recommendations perfectly suit our style, delivering wonderful results. The experience is very personal, and the communication is absolutely seamless.'
  },
  {
    id: 6,
    name: 'Keerthiga B',
    location: 'Google Verified Review',
    service: 'Pedicure & Hair Colouring',
    date: '7 months ago',
    comment: 'I recently visited Sheglam for a pedicure and hair colouring, and I had such a wonderful experience. The staff were very professional, friendly, and made sure I was comfortable throughout the service. The pedicure was very relaxing.'
  },
  {
    id: 7,
    name: 'Thendralpriya (finnovation)',
    location: 'Google Verified Review',
    service: 'She Glam Academy Keratin Treatment',
    date: '6 months ago',
    comment: "Hi this is selvam Thendralpriya visited she Glam academy for keratin treatment. Before treatment my hair was so much frizzy and damaged and after the treatment I can't express the feeling ❤️❤️❤️ try their service once, really worth the money."
  },
  {
    id: 8,
    name: 'Devi Shri',
    location: 'Google Verified Review',
    service: 'Layered Cut & Hair Styling',
    date: '7 months ago',
    comment: "I chose a layered cut nd the service was good and I'm totally satisfied with their work and pricing."
  },
  {
    id: 9,
    name: 'Vino Dhini',
    location: 'Google Verified Review',
    service: 'Salon Care & Customer Handling',
    date: '3 months ago',
    comment: 'Good service and handling customer in good way.'
  },
  {
    id: 10,
    name: 'Veera Lakshmi',
    location: 'Google Verified Review',
    service: 'Beauty & Hair Care',
    date: '9 months ago',
    comment: 'Super experience with She Glam. Worth for the penny spent!'
  },
  {
    id: 11,
    name: 'Priyanka Priyanka',
    location: 'Google Verified Review',
    service: 'Hair & Skin Work',
    date: '9 months ago',
    comment: 'Good service and excellent work.'
  },
  {
    id: 12,
    name: 'Tamil Alagi',
    location: 'Google Verified Review',
    service: 'Precision Haircut',
    date: '7 months ago',
    comment: 'Thanks for the awesome haircut!'
  }
];

function GlitterCursor() {
  const [sparkles, setSparkles] = useState([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    const colors = ['#e6ca65', '#d4af37', '#ffffff', '#fce7b2', '#f3d9b1'];
    const shapes = ['✦', '✧', '★', '•'];

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < 45) return;
      lastSpawnRef.current = now;

      const id = now + Math.random();
      const newSparkle = {
        id,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        size: Math.floor(Math.random() * 8 + 10),
        driftX: (Math.random() - 0.5) * 22,
        driftY: Math.random() * 18 + 8
      };

      setSparkles((prev) => [...prev.slice(-16), newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 750);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="glitter-trail-container" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="glitter-particle"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            color: s.color,
            fontSize: `${s.size}px`,
            '--drift-x': `${s.driftX}px`,
            '--drift-y': `${s.driftY}px`,
          }}
        >
          {s.shape}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' (Editorial Cards) or 'menu' (Menu Sheet)
  const [visibleCount, setVisibleCount] = useState(12); // Show only 10-15 on landing page!
  const [isBookletModalOpen, setIsBookletModalOpen] = useState(false);
  const [bookletPage, setBookletPage] = useState(1);
  const [bookletCategory, setBookletCategory] = useState('all');
  const [bookletSearch, setBookletSearch] = useState('');
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

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const phoneNumber = '+91 63813 74330';
  const cleanPhone = '916381374330';
  const locationAddress = 'Nattar Layout G-Block, TS 505, Trichy Main Road, PL 4, Pichai Servai Colony, Kottaiyur, Karaikudi, Tamil Nadu - 630002';
  const mapsLink = 'https://share.google/87DJwngMRYCrM52nM';
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

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = activeTab === 'all' || s.category === activeTab;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesQuery = s.title.toLowerCase().includes(q) || 
      (s.description && s.description.toLowerCase().includes(q)) ||
      (s.section && s.section.toLowerCase().includes(q)) ||
      (s.tag && s.tag.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  // On landing page, show only 12 services initially, or all if searching, or expand by 20 on "View More"
  const landingDisplayedServices = searchQuery
    ? filteredServices
    : filteredServices.slice(0, visibleCount);

  // Group landing displayed services by section for authentic menu sheet layout
  const groupedSections = landingDisplayedServices.reduce((acc, service) => {
    const sec = service.section || 'General Services';
    if (!acc[sec]) acc[sec] = [];
    acc[sec].push(service);
    return acc;
  }, {});

  const sectionEntries = Object.entries(groupedSections);
  const col1 = [];
  const col2 = [];
  sectionEntries.forEach((item, index) => {
    if (index % 2 === 0) col1.push(item);
    else col2.push(item);
  });

  // Dedicated Full Menu Booklet: paginated 20 by 20
  const BOOKLET_PAGE_SIZE = 20;
  const bookletFilteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = bookletCategory === 'all' || s.category === bookletCategory;
    const q = bookletSearch.toLowerCase().trim();
    if (!q) return matchesCategory;
    return matchesCategory && (
      s.title.toLowerCase().includes(q) ||
      (s.description && s.description.toLowerCase().includes(q)) ||
      (s.section && s.section.toLowerCase().includes(q)) ||
      (s.tag && s.tag.toLowerCase().includes(q))
    );
  });

  const bookletTotalPages = Math.max(1, Math.ceil(bookletFilteredServices.length / BOOKLET_PAGE_SIZE));
  const currentBookletPage = Math.min(bookletPage, bookletTotalPages);
  const bookletPageServices = bookletFilteredServices.slice(
    (currentBookletPage - 1) * BOOKLET_PAGE_SIZE,
    currentBookletPage * BOOKLET_PAGE_SIZE
  );

  return (
    <div className="she-glam-app">
      <GlitterCursor />
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
                  <MapPin size={12} /> KOTTAIYUR, KARAIKKUDI
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
                  <h4>Govt Aligned</h4>
                  <p>Certified Academy</p>
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
          <div className="section-editorial-header text-center">
            <span className="pill-tag pill-dusty">OUR SERVICES • OFFICIAL PRICE MENU</span>
            <h2>Curated Salon <em>Menu</em></h2>
            <p>
              Explore our transparent, net-priced service catalog in Karaikkudi. All prices are final with zero hidden taxes or surprise add-ons.
            </p>
          </div>

          {/* Interactive Search & Control Bar */}
          <div className="services-control-bar">
            <div className="services-search-wrapper">
              <Search size={18} className="services-search-icon" />
              <input 
                type="text"
                className="services-search-input"
                placeholder="Search 95+ salon services (e.g., 'Botox', 'Keratin', 'Facial', 'Waxing', 'Gel Nails')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="services-search-clear" 
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {searchQuery && (
              <span className="search-results-badge">
                Found {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} matching &quot;{searchQuery}&quot;
              </span>
            )}

            <div className="view-controls-wrapper">
              <div className="view-mode-toggle">
                <button 
                  type="button"
                  className={`view-mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                >
                  <LayoutGrid size={15} />
                  <span>Grid Overview</span>
                </button>
                <button 
                  type="button"
                  className={`view-mode-btn ${viewMode === 'menu' ? 'active' : ''}`}
                  onClick={() => setViewMode('menu')}
                >
                  <List size={15} />
                  <span>Menu Sheet</span>
                </button>
              </div>

              <button 
                type="button"
                className="btn-open-booklet"
                onClick={() => setIsBookletModalOpen(true)}
              >
                <BookOpen size={16} />
                <span>Full Menu Booklet (All 95)</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveTab('all'); setVisibleCount(12); }}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'hair' ? 'active' : ''}`}
              onClick={() => { setActiveTab('hair'); setVisibleCount(12); }}
            >
              Hair &amp; Botox ({SERVICES_DATA.filter(s => s.category === 'hair').length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'skin' ? 'active' : ''}`}
              onClick={() => { setActiveTab('skin'); setVisibleCount(12); }}
            >
              Skin &amp; Facials ({SERVICES_DATA.filter(s => s.category === 'skin').length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'bridal' ? 'active' : ''}`}
              onClick={() => { setActiveTab('bridal'); setVisibleCount(12); }}
            >
              Bridal Lounge ({SERVICES_DATA.filter(s => s.category === 'bridal').length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'nails' ? 'active' : ''}`}
              onClick={() => { setActiveTab('nails'); setVisibleCount(12); }}
            >
              Nails &amp; Spa ({SERVICES_DATA.filter(s => s.category === 'nails').length})
            </button>
          </div>

          {/* View 1: Authentic Salon Menu Sheet (Fast, Organized, Compact) */}
          {viewMode === 'menu' && (
            <div className="menu-card-sheet">
              {sectionEntries.length === 0 ? (
                <div style={{ width: '100%', textAlign: 'center', padding: '40px 20px', color: 'var(--text-sub)' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>No services found matching &quot;{searchQuery}&quot;</p>
                  <button className="btn btn-outline-burgundy" onClick={() => { setSearchQuery(''); setActiveTab('all'); }}>
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="menu-sheet-col">
                    {col1.map(([secTitle, items]) => (
                      <div key={secTitle} className="menu-section-block">
                        <div className="menu-section-header">
                          <h3>{secTitle}</h3>
                          <span className="menu-section-count">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                        </div>
                        <div className="menu-section-list">
                          {items.map((service) => (
                            <div key={service.id} className="menu-item-row">
                              <div className="menu-item-info">
                                <span className="menu-item-name">{service.title}</span>
                                {service.description && (
                                  <span className="menu-item-desc">{service.description}</span>
                                )}
                              </div>
                              <div className="menu-item-right">
                                <span className="menu-item-price">{service.price}</span>
                                <button 
                                  type="button"
                                  className="btn-book-quick"
                                  onClick={() => openBookingWithService(`${service.title} (${service.price})`)}
                                >
                                  Book
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="menu-sheet-col">
                    {col2.map(([secTitle, items]) => (
                      <div key={secTitle} className="menu-section-block">
                        <div className="menu-section-header">
                          <h3>{secTitle}</h3>
                          <span className="menu-section-count">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                        </div>
                        <div className="menu-section-list">
                          {items.map((service) => (
                            <div key={service.id} className="menu-item-row">
                              <div className="menu-item-info">
                                <span className="menu-item-name">{service.title}</span>
                                {service.description && (
                                  <span className="menu-item-desc">{service.description}</span>
                                )}
                              </div>
                              <div className="menu-item-right">
                                <span className="menu-item-price">{service.price}</span>
                                <button 
                                  type="button"
                                  className="btn-book-quick"
                                  onClick={() => openBookingWithService(`${service.title} (${service.price})`)}
                                >
                                  Book
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* View 2: Editorial Cards Grid (Visual Highlights) */}
          {viewMode === 'cards' && (
            <div className="editorial-services-grid">
              {landingDisplayedServices.map((service) => (
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
                      type="button"
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
          )}

          {/* Universal View More Services (+20) Button */}
          {!searchQuery && visibleCount < filteredServices.length && (
            <div className="view-more-container" style={{ textAlign: 'center', marginTop: '36px' }}>
              <button 
                type="button" 
                className="btn btn-burgundy btn-shimmer"
                onClick={() => setVisibleCount(prev => prev + 20)}
                style={{ padding: '13px 34px', fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>View More Services (+20)</span>
                <ChevronRight size={16} />
              </button>
              <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-sub)' }}>
                Showing <strong>{Math.min(visibleCount, filteredServices.length)}</strong> of <strong>{filteredServices.length}</strong> services
              </div>
            </div>
          )}
          {!searchQuery && visibleCount >= filteredServices.length && filteredServices.length > 12 && (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button 
                type="button" 
                className="btn btn-outline-burgundy"
                onClick={() => setVisibleCount(12)}
                style={{ padding: '8px 24px', fontSize: '0.85rem' }}
              >
                Show Less (Top 12)
              </button>
            </div>
          )}
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
              Real 5.0-star verified Google reviews from our regular clients, brides, and academy students in Kottaiyur, Karaikkudi.
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
                    Google Business Profile • Kottaiyur, Karaikkudi
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

                <div className="review-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="google-brand-tag">
                    <GoogleIcon size={13} />
                    <span>Google Review</span>
                  </div>
                  <a 
                    href={mapsLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '0.78rem', color: 'var(--burgundy-dark)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>View on Maps</span>
                    <ArrowRight size={12} />
                  </a>
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
            <span className="pill-tag pill-dusty">VISIT US • KOTTAIYUR, KARAIKKUDI</span>
            <h2>Find Us in <em>Karaikkudi</em></h2>
            <p>
              Conveniently located at Nattar Layout G-Block, Trichy Main Road, Pichai Servai Colony, Kottaiyur, Karaikudi.
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
                    <span style={{ fontSize: '0.8rem', color: 'var(--burgundy)', fontWeight: 600 }}>Landmark: Trichy Main Road, Pichai Servai Colony, Kottaiyur</span>
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
                src="https://maps.google.com/maps?q=She%20GLAM,%20Trichy%20Main%20Road,%20Kottaiyur,%20Karaikudi,%20Tamil%20Nadu%20630002&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
              <p style={{ color: 'var(--cream)', fontSize: '0.85rem', marginBottom: '8px', lineHeight: 1.5 }}>
                {locationAddress}
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
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={() => setPrivacyModalOpen(true)}
                style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', fontSize: '0.82rem', textDecoration: 'underline', padding: 0 }}
              >
                Privacy Policy
              </button>
              <button 
                type="button" 
                onClick={() => setTermsModalOpen(true)}
                style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', fontSize: '0.82rem', textDecoration: 'underline', padding: 0 }}
              >
                Terms of Service
              </button>
              <span>Kottaiyur, Karaikudi - 630002</span>
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
                Kottaiyur, Karaikudi • Direct WhatsApp Confirmation
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

      {/* 13.5 Full Menu Booklet Modal (All 95 Services) */}
      {isBookletModalOpen && (
        <div className="modal-overlay" onClick={() => setIsBookletModalOpen(false)}>
          <div className="modal-content-box booklet-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px', maxHeight: '90vh', overflowY: 'auto', padding: '32px' }}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsBookletModalOpen(false)}
              aria-label="Close booklet"
            >
              <X size={20} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span className="pill-tag pill-dusty" style={{ marginBottom: '8px' }}>OFFICIAL SALON PRICE LIST • KARAIKKUDI</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--burgundy)', margin: '6px 0' }}>
                She GLAM <em>Complete Service Booklet</em>
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                All 95 authentic salon treatments with final net pricing. Paginated 20 items per page for effortless reading.
              </p>
            </div>

            {/* Booklet Filter & Search Bar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { id: 'all', label: 'All Services' },
                  { id: 'hair', label: 'Hair Care' },
                  { id: 'skin', label: 'Skin & Facial' },
                  { id: 'spa', label: 'Body Spa & Wax' },
                  { id: 'bridal', label: 'Bridal & Makeup' },
                  { id: 'nails', label: 'Nails & Mani-Pedi' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => { setBookletCategory(cat.id); setBookletPage(1); }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: bookletCategory === cat.id ? '1px solid var(--burgundy)' : '1px solid rgba(0,0,0,0.12)',
                      background: bookletCategory === cat.id ? 'var(--burgundy)' : '#fff',
                      color: bookletCategory === cat.id ? '#fff' : 'var(--text-main)',
                      transition: 'all 0.15s'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div style={{ position: 'relative', maxWidth: '420px', width: '100%', margin: '0 auto' }}>
                <input
                  type="text"
                  placeholder="Search in booklet (e.g. Hydra, Hair Spa, Waxing)..."
                  value={bookletSearch}
                  onChange={(e) => { setBookletSearch(e.target.value); setBookletPage(1); }}
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(114, 47, 55, 0.25)',
                    fontSize: '0.88rem',
                    background: '#fff'
                  }}
                />
              </div>
            </div>

            {/* Booklet Services (20 per page) */}
            <div className="booklet-page-container">
              {bookletPageServices.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-sub)' }}>
                  No services found matching your filter.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: '#faf8f5', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(114, 47, 55, 0.1)' }}>
                  {bookletPageServices.map((s, idx) => (
                    <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: idx < bookletPageServices.length - 1 ? '1px dashed rgba(0,0,0,0.08)' : 'none' }}>
                      <div style={{ flex: 1, minWidth: 0, paddingRight: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-main)' }}>{s.title}</span>
                          {s.section && (
                            <span style={{ fontSize: '0.72rem', background: 'rgba(114, 47, 55, 0.08)', color: 'var(--burgundy)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                              {s.section}
                            </span>
                          )}
                        </div>
                        {s.description && <span style={{ fontSize: '0.78rem', color: 'var(--text-sub)', marginTop: '2px', display: 'block' }}>{s.description}</span>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--burgundy-primary)' }}>{s.price}</span>
                        <button
                          type="button"
                          className="btn btn-outline-burgundy"
                          style={{ padding: '5px 12px', fontSize: '0.8rem' }}
                          onClick={() => {
                            setIsBookletModalOpen(false);
                            openBookingWithService(`${s.title} (${s.price})`);
                          }}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Booklet Pagination Controls (20 and 20) */}
            {bookletTotalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '12px 16px', background: '#fff', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  type="button"
                  className="btn btn-outline-burgundy"
                  disabled={currentBookletPage <= 1}
                  onClick={() => setBookletPage(prev => Math.max(1, prev - 1))}
                  style={{ padding: '6px 16px', fontSize: '0.85rem', opacity: currentBookletPage <= 1 ? 0.4 : 1, cursor: currentBookletPage <= 1 ? 'not-allowed' : 'pointer' }}
                >
                  ← Previous 20
                </button>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Page <strong>{currentBookletPage}</strong> of <strong>{bookletTotalPages}</strong> ({bookletFilteredServices.length} Total Services)
                </span>
                <button
                  type="button"
                  className="btn btn-outline-burgundy"
                  disabled={currentBookletPage >= bookletTotalPages}
                  onClick={() => setBookletPage(prev => Math.min(bookletTotalPages, prev + 1))}
                  style={{ padding: '6px 16px', fontSize: '0.85rem', opacity: currentBookletPage >= bookletTotalPages ? 0.4 : 1, cursor: currentBookletPage >= bookletTotalPages ? 'not-allowed' : 'pointer' }}
                >
                  Next 20 →
                </button>
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '16px' }}>
              <button className="btn btn-burgundy" onClick={() => setIsBookletModalOpen(false)}>
                Done Browsing Booklet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 14. Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="modal-overlay" onClick={() => setPrivacyModalOpen(false)}>
          <div className="modal-content-box" style={{ maxWidth: '580px', maxHeight: '85vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setPrivacyModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--burgundy-dark)', marginBottom: '12px' }}>Privacy Policy</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginBottom: '14px' }}>
              Last updated: October 2026 • She GLAM Salon &amp; Academy, Karaikkudi
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                She GLAM Salon &amp; Academy ("we", "our") respects client privacy and complies with India's Digital Personal Data Protection (DPDP) Act.
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>1. Data Collection</h4>
              <p>
                We only collect information necessary to deliver salon treatments, manage appointments, and conduct academy admissions (such as client full name, phone/WhatsApp number, service history, and styling notes).
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>2. Use of Information</h4>
              <p>
                Your contact details are solely used for appointment confirmations, scheduling updates, service consultations, and optional loyalty recall reminders. We never sell, lease, or share personal data with external marketing brokers.
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>3. Data Rights &amp; Contact</h4>
              <p>
                Clients may request access, updates, or deletion of their appointment records at any time by contacting our desk at Kottaiyur, Karaikudi, or via phone at <strong>+91 63813 74330</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 15. Terms of Service Modal */}
      {termsModalOpen && (
        <div className="modal-overlay" onClick={() => setTermsModalOpen(false)}>
          <div className="modal-content-box" style={{ maxWidth: '580px', maxHeight: '85vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setTermsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--burgundy-dark)', marginBottom: '12px' }}>Terms of Service</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginBottom: '14px' }}>
              She GLAM Salon &amp; Academy Appointment &amp; Service Terms
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>1. Appointments &amp; Punctuality</h4>
              <p>
                We value your time and allocate dedicated salon stations for pre-booked appointments. Please arrive 10 minutes prior to your scheduled time. In case of delay exceeding 15 minutes, the slot may be rescheduled to prevent contention for upcoming clients.
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>2. Consultations &amp; Patch Tests</h4>
              <p>
                For chemical hair therapies (Keratin, Botox, Global Color) and intensive facials, our stylists recommend an initial strand or skin patch assessment to verify suitability.
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>3. Academy Courses</h4>
              <p>
                Academy courses follow a structured, hands-on curriculum with live model demonstrations. Course schedules and syllabus details are provided during orientation.
              </p>
              <h4 style={{ color: 'var(--burgundy)', margin: '4px 0' }}>4. Contact &amp; Grievances</h4>
              <p>
                For questions regarding terms or appointments, reach us at <strong>+91 63813 74330</strong> or visit our Karaikkudi salon.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
