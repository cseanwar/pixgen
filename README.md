# 🎨 PixGen — AI Image Generation Platform

**PixGen** is a modern, full-stack AI image generation web application where users can turn text prompts into stunning, production-ready visuals. Browse a curated gallery of AI-generated artwork across multiple styles, generate your own images, and manage your creations — all in one place.

---

## 🌐 Live URL

🔗 [https://pixgen-chi-pink.vercel.app](https://pixgen-chi-pink.vercel.app)

---

## 🎯 Purpose

PixGen is built for creators, designers, and AI art enthusiasts who want to:

- Generate high-quality images from simple text prompts
- Explore a public gallery of AI-generated artwork filtered by style/category
- Manage their profile and generated image history
- Access tiered plans via a pricing page for different generation limits

The project demonstrates a full-stack Next.js application with user authentication (email/password + Google OAuth), a categorized image gallery, protected routes, and an AI image generation workflow.

---

## ✨ Key Features

- 🤖 **AI Image Generation** — Generate high-quality images from text prompts via the `/generate` page
- 🖼️ **Public Gallery** — Browse all AI-generated images on the `/all-photos` page with likes and view counts
- 🏷️ **Category Filtering** — Filter gallery images by style: Sci-Fi, Fantasy, Cyberpunk, Pixel Art, Surreal, Vaporwave, Realistic, Minimal, Steampunk
- 🔍 **Image Detail View** — Click any image to view its full details (protected — requires sign in)
- 💰 **Pricing Plans** — Tiered subscription/credit plans for different generation quotas
- 🔐 **Authentication** — Email/password sign up & sign in, plus **Sign In with Google** (OAuth)
- 👤 **User Profile** — Protected profile page showing user info and generated images
- 🛡️ **Protected Routes** — Detail pages and generation require authentication via middleware
- 📱 **Fully Responsive** — Clean, modern UI optimised for mobile, tablet, and desktop
- ⚡ **Next.js App Router** — Server-side rendering and fast navigation with the App Router

---

## 🛠️ NPM Packages Used

### Core Framework

| Package | Purpose |
|---|---|
| `next` | React framework — App Router, SSR, API routes, Image optimisation |
| `react` | UI component library |
| `react-dom` | React DOM rendering |

### Authentication

| Package | Purpose |
|---|---|
| `better-auth` | Authentication library — handles email/password + Google OAuth, sessions |
| `@better-auth/client` | Client-side hooks and utilities for Better Auth |

### Database

| Package | Purpose |
|---|---|
| `mongodb` | Official MongoDB driver — stores users, sessions, and image data |

### Styling

| Package | Purpose |
|---|---|
| `tailwindcss` | Utility-first CSS framework for all UI styling |
| `postcss` | CSS transformation tooling (required by Tailwind) |

### Icons & UI

| Package | Purpose |
|---|---|
| `react-icons` | Icon sets used across navbar, buttons, and cards |

### Developer Tools

| Package | Purpose |
|---|---|
| `eslint` | JavaScript/JSX code linting |
| `eslint-config-next` | Next.js ESLint rules |

---

## 📁 Project Structure

```
pixgen/
├── app/
│   ├── (auth)/
│   │   ├── signin/          # Sign in page (email/password + Google)
│   │   └── signup/          # Sign up page
│   ├── all-photos/
│   │   ├── page.jsx         # Gallery with category filters
│   │   └── [id]/            # Image detail page (protected)
│   ├── generate/            # AI image generation page (protected)
│   ├── profile/             # User profile page (protected)
│   ├── pricing/             # Pricing/plans page
│   ├── about/
│   ├── contact/
│   ├── terms/
│   ├── privacy/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/    # Better Auth API handler
│   ├── layout.jsx
│   └── page.jsx             # Homepage with hero + top generations
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── ImageCard/
│   └── CategoryFilter/
├── lib/
│   ├── auth.js              # Better Auth server config
│   └── auth-client.js       # Better Auth client config
├── middleware.js             # Route protection for detail/generate/profile
└── public/
    └── logo.png
```

---

## 🔒 Authentication Flow

1. **Sign Up** — User registers with name, image URL, email, and password (`/signup`)
2. **Sign In** — Email/password login or **Google OAuth** (`/signin`)
3. Better Auth issues a secure HTTP-only session cookie
4. **Middleware** intercepts protected routes (`/all-photos/[id]`, `/generate`, `/profile`) and redirects unauthenticated users to `/signin`
5. **Sign Out** clears the session cookie

---

## 🖼️ Gallery Categories

The gallery supports filtering across **9 styles**:

`Sci-Fi` · `Pixel Art` · `Fantasy` · `Cyberpunk` · `Surreal` · `Vaporwave` · `Realistic` · `Minimal` · `Steampunk`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB connection string (Atlas or local)
- Google OAuth credentials (for Google sign-in)

### Installation

```bash
# Clone the repository
git clone https://github.com/cseanwar/pixgen.git
cd pixgen

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deployment

Deployed on **Vercel** with:

- Environment variables set in the Vercel dashboard
- MongoDB hosted on **MongoDB Atlas**
- Automatic deployments on push to `main`

---

## 👤 Author

**Anwar Hossain**
- GitHub: [@cseanwar](https://github.com/cseanwar)
- LinkedIn: [anwar-hossain-a3095147](https://www.linkedin.com/in/anwar-hossain-a3095147)
- Twitter/X: [@cseanwar](https://x.com/cseanwar)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).