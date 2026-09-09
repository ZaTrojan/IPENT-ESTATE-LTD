# Ipent Estates Ltd

Official website for **Ipent Estates Ltd** — Real estate development company in Abuja, FCT. Direct developer sales, residential and commercial properties.

## 🚀 Features

- **Modern Responsive Design**: Optimized for mobile, tablet, and desktop viewports.
- **Mobile Navigation**: Accessible hamburger navigation with animated overlay.
- **Construction Progress Gallery**: Responsive showcase of actual on-site development progress.
- **Enquiry Modal**: Interactive inquiry form with modal focus trapping and keyboard navigation (Esc, Tab).
- **Direct WhatsApp Chat**: Floating quick-access action button with pre-filled message.
- **SEO & Accessibility**: Complete Open Graph metadata, Schema.org JSON-LD structured data, skip-link navigation, and ARIA attributes.
- **Performance Optimized**: Google Fonts preconnect, eager LCP hero loading, and lightweight vanilla CSS/JS.

## 📁 File Structure

```
├── index.html       # Semantic HTML5 markup and SEO tags
├── styles.css       # Complete design styles, animations, and media queries
├── main.js          # Interactive UI behaviors, modal, menu, and scroll reveal
├── render.yaml      # Render Blueprint deployment configuration
├── pics/            # Project photography and media assets
│   ├── pic1.jpg
│   ├── pic2.jpg
│   ├── pic3.jpg
│   ├── pic4.jpg
│   └── pic5.jpg
└── README.md        # Project documentation
```

## 🌐 Deployment on Render

This site is configured as a **Static Site** on [Render](https://render.com).

### Automatic Deployment (Blueprint)
1. Go to [dashboard.render.com](https://dashboard.render.com/).
2. Click **New +** > **Blueprint**.
3. Connect your repository: `https://github.com/ZaTrojan/IPENT-ESTATE-LTD`.
4. Render will read `render.yaml` and deploy the static site automatically.

### Manual Setup (Alternative)
1. In the Render Dashboard, click **New +** > **Static Site**.
2. Connect your GitHub repository: `https://github.com/ZaTrojan/IPENT-ESTATE-LTD`.
3. Configure:
   - **Name**: `ipent-estates`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.`
4. Click **Create Static Site**.
