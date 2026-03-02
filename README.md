# 🕌 Faraz Abaya — E-Commerce Web App

> Premium modest fashion store built with React + Tailwind CSS

![Preview](https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80)

## ✨ Features

- 🛍 **Product Catalog** — Filter by category, live search
- 📱 **Mobile-First** — Fully responsive design
- 💬 **WhatsApp Integration** — One-click ordering with pre-filled message
- 🛡 **Admin Panel** — Password-protected CRUD (Add / Edit / Delete products)
- 🎨 **Luxury Design** — Pearl White, Charcoal & Soft Gold theme

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
```

---

## 📦 Deploy to GitHub Pages

### Step 1 — Update `package.json`
Change the `homepage` field to your GitHub Pages URL:
```json
"homepage": "https://YOUR_USERNAME.github.io/faraz-abaya"
```

### Step 2 — Push to GitHub
```bash
git init
git add .
git commit -m "🕌 Initial commit - Faraz Abaya store"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/faraz-abaya.git
git push -u origin main
```

### Step 3 — Deploy
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/faraz-abaya`

---

## ⚙️ Configuration

Edit `src/mockData.js` to update:

| Setting | Description |
|---|---|
| `WHATSAPP` | Your WhatsApp number (country code + number, no +) |
| `INITIAL_PRODUCTS` | Your product catalog |

---

## 🛡 Admin Panel

- URL: Click **Admin** in the navbar
- Password: `faraz2025` *(change in `src/components/AdminPanel.jsx`)*

---

## 📁 Project Structure

```
faraz-abaya/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   └── AdminPanel.jsx
│   ├── mockData.js       ← Products & config
│   ├── styles.js         ← Global CSS
│   ├── App.jsx           ← Main app + routing
│   └── index.js
├── package.json
└── README.md
```

---

## 🌐 Alternative: Deploy to Vercel (Easier!)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — done! ✅

---

*Built with ♡ for modest fashion*
