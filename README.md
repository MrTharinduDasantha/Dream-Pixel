# Dream Pixel: AI-Powered Image Style Converter

[![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/ORM-Drizzle-C5F74F?logo=drizzle)](https://orm.drizzle.team/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/UI-Shadcn_UI-000000?logo=shadcnui)](https://ui.shadcn.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF)](https://clerk.com/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI-412991?logo=openai)](https://openai.com/)
[![ImageKit](https://img.shields.io/badge/Storage-ImageKit-F3BE00)](https://imagekit.io/)
[![Motion](https://img.shields.io/badge/Animation-Motion-E903A3)](https://motion.dev/)
[![Sentry](https://img.shields.io/badge/Monitoring-Sentry-362D59?logo=sentry)](https://sentry.io/)

Dream Pixel is a modern, fully responsive web application that leverages advanced AI to transform your ordinary images into stunning, high-quality artistic styles. With a beautiful UI, users can easily upload photos and convert them into formats like Storybook 3D, Anime Cel, Clay Render, and more. The platform features secure authentication, a detailed generation history dashboard, and tiered subscription plans to suit different creative needs.

---

## 🚀 Demo

Click the link below to see the demonstration of the Dream Pixel platform.

Link 👉 https://drive.google.com/file/d/1oPGm5uS0id-Ru-f5vejyCB0CWipgEsLW/view?usp=sharing 👈

---

## ✨ Features

| Category | Features |
|---|---|
| Authentication | Secure sign up, sign in, and account settings powered by Clerk |
| Free Tier | 3 free credits per month for every new user |
| Image Conversion | Convert uploaded images into 6 unique styles: Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, and Marble Sculpture |
| Model Selection | Choose between OpenAI's `gpt-image-1` and `gpt-image-1.5` models for generation |
| Credit System | 1 credit cost per image generation |
| Billing & Plans | Upgrade via Clerk Billing to Pro ($19/month for 75 credits) or Studio ($29/month for 175 credits) |
| History Panel | Automatically saves generated images for quick access |
| History Preview | View full generation details (Model, generated time, style, source file) and download the final image |
| Modern UI & UX | Highly attractive, mobile and tablet-responsive design with smooth Motion animations and Shadcn UI components |
| Monitoring | Real-time performance and error tracking using Sentry |

---

## 🛠️ Technologies Used

### Frontend (Client)
* **TypeScript:** For static typing and robust code.
* **Next.js:** React framework for building the full-stack application and rendering the UI.
* **Tailwind CSS:** Utility-first CSS framework for rapid and modern styling.
* **Shadcn UI:** Reusable and accessible UI components.
* **Motion:** For seamless, engaging page and component animations.
* **React Hot Toast:** For elegant success and error notifications.

### Backend (Server) & Database
* **PostgreSQL (Neon):** Serverless, highly scalable relational database.
* **Drizzle ORM:** Lightweight, high-performance TypeScript ORM for database interactions.
* **ImageKit:** Fast and secure cloud storage for managing user uploads and generated images.
* **Sentry:** For advanced performance monitoring and error tracking.

### AI & Third-Party Services
* **OpenAI API:** Powering the core image conversion features (`gpt-image-1` and `gpt-image-1.5`).
* **Clerk:** For seamless user authentication and profile management.
* **Clerk Billing:** For managing monthly subscription plans (Pro/Studio) and credit allocations.

---

## ⚙️ Installation & Setup

Clone the repository and navigate to the project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Dream-Pixel.git
  cd Dream-Pixel
```

**1. Install Dependencies**

Install all required packages for the application:
```bash
npm install
```

**2. Database Setup (Neon & Drizzle)**

Sync your Drizzle schema with your Neon PostgreSQL database:
```bash
npm run db:push
```

**3. Environment Variables**

Create a .env file in the root directory and configure the necessary environment variables. You will need to obtain API keys from Neon, ImageKit, Sentry, Clerk, and OpenAI.
```bash
# PostgreSQL database configuration (Neon)
DATABASE_URL = "Enter your PostgreSQL database url"

# Imagekit configuration
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY = "Enter your next public imagekit public key"
IMAGEKIT_PRIVATE_KEY = "Enter your imagekit private key"

# Sentry configuration
SENTRY_AUTH_TOKEN = "Enter your sentry auth token"

# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "Enter your next public clerk publishable key"
CLERK_SECRET_KEY = "Enter your clerk secret key"

# OpenAI configuration
OPEN_AI_API_KEY = "Enter your open ai api key"
```

**4. Run the Application**
Start the Next.js development server:
```bash
npm run dev
```

---

## 💻 Usage
**1. Authentication:** Register an account to receive your 3 free monthly credits and access the Studio.

**2. Configure & Upload:** Navigate to the Studio page. Upload your source image, choose your desired artistic style (Ex: Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, and Marble Sculpture), and select your preferred OpenAI model (GPT Image 1 or GPT Image 1.5).

**3. Generate:** Click the generate button. The AI will process your image (this typically takes about a minute).

**4. Review & Download:** Once completed, the result will appear in your History Panel. Click "View" to open the History Preview panel, where you can see metadata (generation time, style used, original source file) and download your newly styled image.

---

## 📸 Screenshots

![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/Dream-Pixel/blob/f00a497ceaf3d43e003baab42d6cb86f3967633d/public/website-images/Img%20-%2010.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>
