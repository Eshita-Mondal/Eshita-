# 📦 Products A to Z - Complete Website Catalog

A fully functional, responsive website showcasing products from A to Z with two browse options: **alphabetical forward** (A→Z) and **alphabetical reverse** (Z→A).

## 🌟 Features

- **Complete A-Z Product Catalog**: 26 products, one for each letter
- **Dual Browse Modes**: View products A-to-Z or Z-to-A
- **🎨 Product Ad Generator**: Create beautiful product ads with photos and descriptions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Product Details**: Each product includes:
  - Product name and letter identifier
  - Tagline and description
  - Product image
  - Price and rating
- **Beautiful UI**: Modern gradient design with smooth animations
- **Fast Loading**: Static HTML for instant performance
- **SEO Friendly**: Proper semantic HTML structure

## 📁 Project Structure

```
Eshita-/
├── index.html              # Landing page / Home
├── products-a-z.html       # A to Z product catalog
├── products-z-a.html       # Z to A product catalog
├── ad-generator.html       # Product ad generator tool
├── style.css               # Complete styling
├── script.js               # Dynamic product loading
├── products.json           # Product data
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
└── README.md              # This file
```

## 🛍️ Products Included

- **A** - AirPods Case
- **B** - Bluetooth Beanie
- **C** - Ceramic Coffee Drip
- **D** - Desk Organizer Dock
- **E** - Eco Yoga Mat
- **F** - Foldable Travel Jacket
- **G** - Glass Smart Mug
- **H** - Home Scent Diffuser
- **I** - Indoor Plant Kit
- **J** - Jewelry Cleaning Wand
- **K** - Knife Sharpening Station
- **L** - LED Desk Lamp
- **M** - Modular Backpack
- **N** - Noise-Cancelling Earbuds
- **O** - Organic Skincare Set
- **P** - Portable Projector
- **Q** - Quick-Charge Power Bank
- **R** - Reusable Water Bottle
- **S** - Smart Scale
- **T** - Travel Pillow
- **U** - UV Sanitizer Box
- **V** - Virtual Fitness Subscription
- **W** - Wireless Keyboard
- **X** - X-Factor Insulated Lunchbox
- **Y** - Yoga Block + Strap Set
- **Z** - Zinc Supplement Pack

## 🚀 How to Use Locally

1. Clone the repository:
```bash
git clone https://github.com/Eshita-Mondal/Eshita-.git
cd Eshita-
```

2. Open in your browser:
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Or simply open index.html directly in your browser
```

3. Visit `http://localhost:8000` (or the port shown by your server)

## 🌐 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### 📍 Live URL
**https://eshita-mondal.github.io/Eshita-/**

### How GitHub Pages Works
1. Push code to `main` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site is live at the URL above

### Manual Deployment Steps
1. Ensure all files are in the repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" or "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` handles deployment automatically

## 📱 Navigation

- **Home Page** (`index.html`) - Landing page with overview
- **A → Z Browse** (`products-a-z.html`) - Traditional alphabetical order
- **Z → A Browse** (`products-z-a.html`) - Reverse alphabetical order
- **Ad Generator** (`ad-generator.html`) - Create beautiful product ads

## 🎨 Design Features

- **Color Scheme**:
  - Primary: #e74c3c (Red)
  - Secondary: #667eea (Blue)
  - Background: #f9f9f9 (Light Gray)
  - Text: #333 (Dark Gray)

- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

- **Animations**:
  - Hover effects on cards
  - Smooth transitions
  - Button animations

## 💻 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (Vanilla)**: Dynamic product loading
- **JSON**: Product data storage
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## 📦 Product Data Format

Each product in `products.json` contains:
```json
{
  "id": "A",
  "name": "AirPods Case",
  "tagline": "Protect and personalize",
  "description": "Premium silicone case with...",
  "image": "https://images.unsplash.com/...",
  "price": "$19.99",
  "rating": 4.8
}
```

## ✨ Features & Benefits

✅ **No Dependencies** - Pure HTML, CSS, and JavaScript
✅ **Fast Performance** - Static site loads instantly
✅ **Mobile Friendly** - Fully responsive design
✅ **Easy to Customize** - Modify `products.json` to change content
✅ **SEO Optimized** - Proper meta tags and structure
✅ **Free Hosting** - Deployed via GitHub Pages
✅ **Always Updated** - Edit and push to auto-deploy
✅ **Ad Generator** - Create product ads with custom photos and text

## 🔧 Customization

### Add New Products
Edit `products.json` and add new entries following the existing format.

### Create Product Ads
1. Visit the Ad Generator page
2. Upload product image or paste image URL
3. Enter product name and description
4. Customize colors and button text
5. Click "Generate Ad Preview"
6. Download or view all created ads

### Change Colors
Edit the color variables in `style.css`.

### Modify Product Images
Update the `image` field in each product entry in `products.json`.

## 📞 Contact & Support

- **Email**: info@productsaz.com
- **Phone**: 1-800-PRODUCTS
- **Repository**: https://github.com/Eshita-Mondal/Eshita-

## 📄 License

This project is open source and available under the MIT License.

---

**Created by**: Eshita Mondal  
**Last Updated**: March 24, 2026  
**Version**: 1.0.0 
