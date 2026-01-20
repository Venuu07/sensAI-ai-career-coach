# 🚀 SensAI - AI Career Coach

![SensAI Banner](public/banner.jpeg)

> **Your Personal AI-Powered Career Strategist.** > *Built with Next.js, Neon DB, Prisma, and Inngest.*

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-000000)](https://ui.shadcn.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)](https://www.prisma.io/)
[![Neon](https://img.shields.io/badge/Neon-PostgreSQL-00E599)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)](https://clerk.com/)
[![Inngest](https://img.shields.io/badge/Inngest-Event%20Driven-0052CC)](https://www.inngest.com/)

---

## 📖 Introduction

**SensAI** is an advanced career management platform designed to help job seekers navigate the competitive tech landscape. Unlike generic tools, SensAI provides personalized guidance by analyzing the user's profile against real-time industry trends.

It features an intelligent **Resume Analyzer**, automated **Cover Letter Generator**, and **AI Mock Interviews**, all powered by a robust event-driven backend to ensure scalability and performance.

---

## ✨ Key Features

* **🤖 AI Resume & Cover Letter Builder:** Generates ATS-optimized documents tailored to specific job descriptions.
* **📊 Industry Insights:** Real-time visualization of salary ranges, growth rates, and demand levels using Recharts.
* **🧠 Mock Interview Coach:** Interactive AI assessments with instant feedback and improvement tips.
* **⚡ Event-Driven Architecture:** Uses **Inngest** to handle heavy AI processing in the background without blocking the UI.
* **🔒 Secure Authentication:** Enterprise-grade security via **Clerk**.
* **🎨 Responsive UI:** Beautiful, dark-mode-first interface built with **Shadcn UI** and **Tailwind CSS**.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), Tailwind CSS, Shadcn UI, Recharts |
| **Backend** | Next.js Server Actions, Inngest (Background Jobs) |
| **Database** | PostgreSQL (Neon.tech), Prisma ORM |
| **Auth** | Clerk |
| **AI Integration** | Google Gemini API (or OpenAI) |

---

## 🏗️ Architecture & Database

The application is built on a **Serverless Architecture**.
* **User Data** is stored in **Neon (PostgreSQL)**.
* **Prisma** manages the schema and relationships (1:1 for Resumes, 1:N for Applications).
* **Inngest** handles long-running AI tasks (e.g., generating a 500-word cover letter) asynchronously to prevent timeouts.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/Venuu07/sensAI-ai-career-coach.git](https://github.com/Venuu07/sensAI-ai-career-coach.git)
cd sensAI-ai-career-coach

### 2\. Install Dependencies

Bash

    npm install

### 3\. Setup Environment Variables

Create a `.env` file in the root directory and add the following keys:

Code snippet

    # Database (Neon)
    DATABASE_URL="postgresql://user:password@ep-pooler.region.aws.neon.tech/sensai?sslmode=require"
    
    # Authentication (Clerk)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...
    
    # AI Provider
    GEMINI_API_KEY=AIzaSy...
    
    # Background Jobs
    INNGEST_EVENT_KEY=local  # Optional for dev

### 4\. Setup Database

Bash

    npx prisma generate
    npx prisma db push

### 5\. Run the Application

Bash

    npm run dev

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in your browser.

* * *

## 🤝 Contributing

Contributions are welcome!

1.  Fork the Project
    
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
    
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
    
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
    
5.  Open a Pull Request
    

* * *

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.