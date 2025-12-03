# PHYSIQ FITNESS Website

Website statis untuk Physiq Fitness - Redefining Fitness Through Science

## 🚀 Tech Stack

- **HTML5** - Struktur website
- **CSS3** - Styling dengan custom properties
- **JavaScript (Vanilla)** - Interaktivitas dan slider
- **Node.js** - Runtime environment
- **Express.js** - Web server

## 📁 Struktur Project

```
physiq-site/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── slider.js
│   ├── images/
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   └── hero3.jpg
│   └── favicon.ico
└── README.md
```

## 🛠️ Instalasi

1. **Clone atau download project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan server**
   ```bash
   npm start
   ```
   
   Atau untuk development dengan auto-reload:
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## ✨ Fitur

- ✅ Responsive design untuk semua device
- ✅ Hero slider dengan auto-play
- ✅ Smooth scroll navigation
- ✅ Interactive form dengan validasi
- ✅ Hover effects dan animations
- ✅ Social media integration
- ✅ Modern glassmorphism effects
- ✅ SEO-friendly structure

## 🎨 Design System

### Colors
- **Primary Yellow**: `#FFE500`
- **Dark Background**: `#0A0A0A`
- **Light Gray**: `#1A1A1A`
- **White**: `#FFFFFF`
- **Text Gray**: `#CCCCCC`

### Typography
- Font: Arial, Helvetica, sans-serif
- Heading sizes: 72px, 56px, 48px, 32px, 24px
- Body text: 16px, 14px, 13px

## 📱 Sections

1. **Header** - Navigation dengan logo dan menu
2. **Hero** - Full-screen slider dengan CTA
3. **Why Physiq** - 4 keunggulan dengan numbering
4. **Gym Facility** - Showcase fasilitas gym
5. **Our Program** - 4 program cards (Muscle Gain, Weight Loss, Overall Fitness, Personal Training)
6. **Science Section** - 3 pendekatan ilmiah
7. **Data Section** - Informasi berbasis data
8. **Join Now** - Form pendaftaran
9. **Footer** - Links, contact info, dan social media

## 🔧 Customization

### Mengganti Background Images

Edit di `public/js/slider.js`:
```javascript
const backgrounds = [
    'url("path/to/your/image1.jpg")',
    'url("path/to/your/image2.jpg")',
    'url("path/to/your/image3.jpg")'
];
```

### Mengganti Warna

Edit di `public/css/style.css`:
```css
:root {
    --primary-yellow: #FFE500;
    --dark-bg: #0A0A0A;
    --light-gray: #1A1A1A;
}
```

### Menambah Section

Tambahkan HTML di `public/index.html` dan styling di `public/css/style.css`

## 📦 Dependencies

```json
{
  "express": "^4.18.2"
}
```

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

### Heroku
```bash
git push heroku main
```

## 📝 Notes

- Website menggunakan placeholder images dari Unsplash
- Ganti dengan images asli di folder `public/images/`
- Form submission saat ini hanya demo (alert)
- Untuk production, integrasikan dengan backend API

## 📄 License

MIT License - Bebas digunakan untuk project personal atau komersial

## 👤 Author

Created for Physiq Fitness - 2024

## 🤝 Support

Untuk pertanyaan atau support, hubungi:
- Email: info@physiq.com
- Phone: (022) 1234-5678
- Location: Bandung, Jawa Barat# PHYSIQ-Website
