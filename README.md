# 🛍️ ProductHub - Modern E-Commerce Frontend

A modern, responsive e-commerce frontend application built with React.js and Vite. Features product catalog, search, filtering, shopping cart, and beautiful UI.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![React Router](https://img.shields.io/badge/React_Router-6.0.0-orange)

## ✨ Features

### 🏪 Product Management
- **30+ Products** across 6 categories (Electronics, Sports, Clothing, Beauty, Home, Accessories)
- **Product Details** with high-quality images and descriptions
- **Category Filtering** - Easy navigation between product categories
- **Smart Search** - Real-time product search functionality

### 🛒 Shopping Experience
- **Shopping Cart** - Add/remove items with persistent storage
- **Quantity Management** - Adjust quantities in product details
- **Cart Counter** - Real-time item count in navigation
- **Quick View Modal** - Preview products without page navigation

### 🎨 User Interface
- **Responsive Design** - Mobile-friendly layout
- **Modern UI** - Clean and professional design
- **Smooth Animations** - Hover effects and transitions
- **Intuitive Navigation** - Easy-to-use interface

### ⚡ Technical Features
- **Fast Performance** - Built with Vite for optimal speed
- **State Management** - React Context API for cart management
- **Client-Side Routing** - React Router for seamless navigation
- **Local Storage** - Persistent cart data across sessions

## 🛠️ Tech Stack

- **Frontend Framework:** React.js 18.2.0
- **Build Tool:** Vite 5.0.0
- **Routing:** React Router DOM 6.0.0
- **Icons:** React Icons
- **Styling:** CSS3 with modern features
- **State Management:** React Context API
- **Data Persistence:** Browser localStorage

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/GayathriKumarOfficial/producthub-frontend.git
cd producthub-frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173`


## 📁 Project Structure

```
producthub-frontend/
├── public/
│   └── products/          # Product images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── CategoryFilter.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductModal.jsx
│   ├── context/           # State management
│   │   └── CartContext.jsx
│   ├── data/              # Static data
│   │   └── products.js
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json
└── README.md
```

## 🎯 Component Overview

### Core Components
- **Navbar** - Navigation with cart counter and routes
- **HeroBanner** - Welcome section with call-to-action
- **ProductGrid** - Displays products in responsive grid
- **ProductCard** - Individual product display with hover effects
- **SearchBar** - Real-time product search
- **CategoryFilter** - Category-based product filtering
- **ProductModal** - Quick product preview modal
- **Cart** - Shopping cart management page

### Pages
- **Home** (`/`) - Main landing page with all features
- **ProductDetails** (`/product/:id`) - Individual product page
- **Cart** (`/cart`) - Shopping cart management
- **About** (`/about`) - About page
- **Contact** (`/contact`) - Contact information

## 🎨 Features in Detail

### Product Catalog
- 30+ carefully curated products
- 6 categories: Electronics, Sports, Clothing, Beauty, Home, Accessories
- High-quality product images
- Detailed product descriptions

### Shopping Cart
- Add items from modal or product details page
- Persistent storage using localStorage
- Quantity management
- Total price calculation
- Easy item removal

### Search & Filter
- Real-time search as you type
- Category-based filtering
- Combined search and filter functionality
- "No products found" states

### Responsive Design
- Mobile-first approach
- 4 products per row on desktop
- 2 products per row on tablet
- 1 product per row on mobile
- Touch-friendly interface

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

```

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js`:
```javascript
{
  id: 31,
  name: "New Product",
  price: "₹999",
  image: "/products/new-product.jpg",
  category: "Electronics",
  description: "Product description here"
}
```

### Styling Changes
- Modify `src/index.css` for global styles
- Update inline styles in individual components
- Primary color: `#4a6bfd`

### Adding New Categories
Update `src/components/CategoryFilter.jsx`:
```javascript
const categories = ["All", "Electronics", "Sports", "Clothing", "Beauty", "Home", "Accessories", "NewCategory"];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Gayathri Kumar**
- GitHub: [@GayathriKumarOfficial](https://github.com/GayathriKumarOfficial)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Vite team for the fast build tool
- React Router for seamless navigation
- React Icons for beautiful icons

---

**⭐ Star this repository if you find it helpful!**

---

*Built with ❤️ using React.js and Vite*
<img width="1919" height="1016" alt="image" src="https://github.com/user-attachments/assets/836882cd-026d-4b8a-9981-7155e6fd1426" />
