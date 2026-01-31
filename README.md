# Pratik Travels Ujjain - Tours & Travels Website

## Overview
A professional, fully responsive website for Pratik Travels Ujjain, showcasing tours and travel packages focused on Madhya Pradesh attractions. Built with HTML, CSS, and JavaScript with no external dependencies.

## Website Structure

### Pages

1. **Homepage (index.html)**
   - Hero section with call-to-action
   - Featured tours section with 6 MP attractions
   - Why choose us section with 6 key features
   - Customer testimonials
   - Call-to-action section
   - Footer with contact information

2. **About Page (about.html)**
   - Company information
   - Mission, vision, and values
   - Major Madhya Pradesh destinations
   - Team member profiles
   - Company statistics

3. **Contact Page (contact.html)**
   - Contact information
   - Functional contact form with validation
   - FAQ section with accordion functionality
   - Social media integration

4. **Destinations Page (destinations.html)**
   - Detailed information about major MP attractions
   - Popular tour combinations
   - Tour booking links

## Featured Madhya Pradesh Tours

### 1. Khajuraho Temples 🏛️
- **UNESCO World Heritage Site**
- 10th-century temples with intricate stone carvings
- Duration: 3 days | Price: ₹8,999

### 2. Sanchi Stupa 🏯
- **Ancient Buddhist Monument (3rd Century BC)**
- Sacred monument with decorated gateways
- Duration: 2 days | Price: ₹6,999

### 3. Gwalior Fort 🏰
- **Grand Fortress with Medieval Architecture**
- Palaces, temples, and light & sound show
- Duration: 3 days | Price: ₹7,999

### 4. Jabalpur Marble Rocks 🌊
- **Natural Wonder along Narmada River**
- Boat cruises and Dhuandhar Waterfall
- Duration: 3 days | Price: ₹7,499

### 5. Kanha National Park Safari 🐅
- **India's Premier Tiger Reserve**
- Wildlife jeep safaris and nature walks
- Duration: 4 days | Price: ₹11,999

### 6. Mandu Heritage Tour 👑
- **Fortified City of Joy**
- Historic palaces, mosques, and sunset views
- Duration: 3 days | Price: ₹9,499

## Technical Features

### Frontend
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Form validation, FAQ accordion, smooth scrolling, interactive elements

### Responsive Design
- Fully responsive on mobile, tablet, and desktop
- CSS Grid and Flexbox for layout
- Media queries for breakpoints at 768px and 480px

### Key Functionalities
- Contact form with email validation
- FAQ accordion toggle
- Smooth scroll navigation
- Active page highlighting
- Auto-fill tour selection from package cards
- Secure form submission handling
- Newsletter subscription option

## Files and Directories

```
pratik-travels-website/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── destinations.html       # Destinations page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── README.md               # This file
└── images/
    ├── packages/
    │   ├── khajuraho.svg
    │   ├── sanchi.svg
    │   ├── gwalior.svg
    │   ├── jabalpur.svg
    │   ├── kanha.svg
    │   └── mandu.svg
    └── attractions/         # For future high-res images
```

## CSS Features

- **Color Scheme**:
  - Primary: #667eea (Indigo)
  - Secondary: #764ba2 (Purple)
  - Accent: #f5576c (Red/Pink)
  - Light background: #f8f9fa
  - Text dark: #333

- **Animations**:
  - Fade-in effects on scroll
  - Smooth transitions on hover
  - Slide-in animations for elements
  - Hover effects on buttons and cards

- **Responsive Breakpoints**:
  - Desktop: 1200px max-width
  - Tablet: < 768px
  - Mobile: < 480px

## JavaScript Functionality

### Core Features
1. **Form Validation**
   - Email validation using regex
   - Required field checking
   - Phone number formatting

2. **FAQ Accordion**
   - Toggle open/close functionality
   - Arrow rotation animation
   - Single open at a time

3. **Navigation**
   - Active link highlighting
   - Smooth scroll to sections
   - Dynamic page detection

4. **User Experience**
   - Intersection Observer for scroll animations
   - Form dirty state detection
   - Auto-fill tour selection
   - Social media sharing functions

## Package Content

Each tour package includes:
- Duration details
- Price per person
- Included features (meals, guides, insurance, etc.)
- Professional guides
- Hotel accommodation
- Travel insurance
- Airport/station transfers

## Customization Guide

### Colors
Edit `:root` CSS variables in styles.css:
```css
--primary-color: #667eea;
--secondary-color: #764ba2;
--accent-color: #f5576c;
```

### Contact Information
Update in all pages (footer and contact form):
- Phone numbers
- Email addresses
- Office address
- Business hours

### Tour Packages
Edit the package cards in index.html:
- Package names and descriptions
- Prices
- Duration
- Features and inclusions

### Team Information
Update the team section in about.html with:
- Team member names
- Positions
- Biographical information

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization
- No external dependencies
- Lightweight SVG images
- CSS Grid for efficient layouts
- Optimized animations using GPU acceleration
- Minimal JavaScript for fast loading

## SEO Features
- Semantic HTML5 elements
- Meta tags for viewport and charset
- Descriptive page titles
- Alt text for images
- Structured content hierarchy

## Future Enhancements
- Backend integration for form submissions
- Real image uploads (currently using SVG placeholders)
- Online payment gateway integration
- Customer login/registration system
- Booking management dashboard
- Multi-language support
- Blog section
- Virtual tour/360° images
- Customer reviews system
- Newsletter email integration
- SMS notifications

## Installation & Usage

1. **Extract files** to your web server or local directory
2. **Open index.html** in a web browser
3. **Navigate** through different pages using the menu
4. **Book tours** by filling the contact form

### Local Development
```bash
# No build process needed - just open index.html in a browser
# Or run a simple server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Contact & Support
- Email: info@pratiktravels.com
- Phone: +91-7314-XXXXX
- Location: Ujjain, Madhya Pradesh

## License
© 2026 Pratik Travels Ujjain. All rights reserved.

---

**Last Updated**: January 31, 2026
**Version**: 1.0
**Status**: Production Ready
