# Balance with Shree

A professional wellness platform for Dhanashree, providing personalized services in Clinical Nutrition, Yoga Therapy, and Ayurveda.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/laxitarajpurohit/balance-with-shree.git

# Navigate to the app directory
cd balance-with-shree

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## 🏗 Architecture

The project follows a **Feature-Driven Architecture** to ensure scalability and maintainability:

- **src/app**: Global application logic, providers, and route orchestration.
- **src/shared**: Reusable UI primitives, layout components, shared types, and centralized data.
- **src/features**: Domain-specific features (Yoga, Nutrition, Ayurveda, etc.) containing their own components and logic.
- **src/pages**: Composition layer that maps feature sets to specific routes.
- **src/assets**: Static media assets including watercolor illustrations and certificates.

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the `balance-with-shree` directory based on `.env.example`:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID.
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID.
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key.
- `VITE_EMAIL_RECEIVER`: The email address where contact form submissions are sent.

## 📝 Content & Media Management

### Text Content
Most centralized data (navigation, contact info, journey timeline) is managed in `src/shared/data/`.

### Media
The application uses a mix of local assets (`src/assets/`) and Cloudinary-hosted media. The media map is centralized in `src/shared/data/media.ts`.

## 🛠 Tech Stack
- **React 18**
- **Vite**
- **TypeScript**
- **Styled Components**
- **GSAP** (Animations)
- **Lucide React** (Icons)
- **EmailJS** (Contact Form)

## 🌐 Deployment
The project is optimized for deployment on Vercel. Ensure all `VITE_` environment variables are correctly configured in your deployment settings.
