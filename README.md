# 🔸 YASHTASK

YASHTASK is a **full-stack modern task management platform** built with **Next.js App Router**, **MongoDB + Mongoose**, **NextAuth v5**, and **Google Gemini (AI SDK)**.  
It provides authentication, project/task CRUD workflows, status tracking, and an AI-powered project planning experience.

## 🌐 Live Demo

- **Website:** [YASHTASK - Task Management](https://task-mangement-cyan.vercel.app/)
- **Showcase Video:** [Watch on YouTube](https://youtu.be/ICznpDFLNyA?si=Ji5P7yITTgW4zh6k)

---

## 📁 Project Structure

```bash
YASHTASK/
│
├── app/
│   ├── (auth)/login, register/      # Authentication pages
│   ├── about/                       # About page
│   ├── api/
│   │   ├── auth/[...nextauth]/      # NextAuth handlers
│   │   └── chat/                    # AI chat streaming endpoint
│   ├── dashboard/
│   │   ├── create-project/          # Manual project creation
│   │   ├── create-project-ai/       # AI-powered planning flow
│   │   └── [slug]/                  # Project details, tasks, edit/add task
│   ├── layout.tsx                   # Root layout + navbar + toaster
│   └── page.tsx                     # Landing page
│
├── action/                          # Server Actions (auth, projects, tasks, AI)
├── components/                      # Reusable UI and feature components
├── lib/
│   ├── db.ts                        # MongoDB connection helper
│   └── utils.ts                     # Utility helpers
├── models/                          # Mongoose models (User, Project, Task)
├── auth.ts                          # NextAuth v5 config (Credentials + Google)
├── middleware.ts                    # Middleware scaffold (currently empty)
├── next.config.mjs                  # Next.js config (image domains)
└── tailwind.config.ts               # Tailwind + animation config
```

---

## 🚀 Tech Stack

### Core

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)

### Data & Auth

- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Authentication:** [NextAuth.js v5 (beta)](https://authjs.dev/)
  - Credentials login
  - Google OAuth login
  - Session/JWT callbacks with role support

### AI

- **AI SDK:** [Vercel AI SDK](https://sdk.vercel.ai/)
- **Model Provider:** [Google Gemini](https://ai.google.dev/)
  - `generateObject()` in server actions for schedule/task suggestions
  - Streaming chat response endpoint in `/api/chat`

### UI/UX & Utilities

- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [Lucide React](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/)
- [Embla Carousel](https://www.embla-carousel.com/) for project slider UI

---

## 🧩 Core Features

### 👤 Authentication

- Register with first name, last name, email, and password
- Login with credentials
- Google sign-in support
- Password hashing with `bcryptjs`
- Auth-gated dashboard routes

### 📂 Project Management

- Create project with title + description
- Auto-generated slug from title
- List user-owned projects in dashboard
- View a project by slug
- Edit project details
- Delete project

### ✅ Task Management

- Add tasks to a project
- Delete tasks
- Update status with dropdown (`Pending`, `In Progress`, `Completed`)
- Status grouping support in server-side queries

### 🤖 AI-Powered Planner

- Guided multi-step form for personal routine inputs:
  - Wake/sleep time
  - Work location/hours
  - Meals
  - Hobbies
- Server action uses Gemini to generate structured weekly suggestions
- Additional AI streaming endpoint for chat-style workflows

---

## 🗃️ Database Models (Mongoose)

Main entities:

- `User`
- `Project`
- `Task`

Notable fields:

- `User.role` (default: `user`)
- `Project.slug` for route-based access
- `Task.status` enum:
  - `Pending`
  - `In Progress`
  - `Completed`

---

## 📦 API Endpoints

### Auth

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| GET    | `/api/auth/[...nextauth]` | NextAuth route handler |
| POST   | `/api/auth/[...nextauth]` | NextAuth route handler |

### AI

| Method | Endpoint    | Description                             |
| ------ | ----------- | --------------------------------------- |
| POST   | `/api/chat` | Streams Gemini-generated text responses |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root.

```env
# Database
MONGODB_URI="mongodb+srv://..."

# NextAuth Google provider
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Recommended for Auth.js in production
AUTH_SECRET="your_auth_secret"

# Google AI SDK (Gemini)
GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key"
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB database (local or Atlas)
- Google OAuth credentials
- Gemini API key (for AI features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd YASHTASK
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create `.env.local`
   - Add all required variables from the section above

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open app**
   - [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run Next.js linting
```

---

## ☁️ Deployment

Recommended stack:

- **App:** Vercel
- **Database:** MongoDB Atlas
- **AI Provider:** Google Gemini API

Deployment checklist:

1. Add all environment variables in hosting provider
2. Configure Google OAuth callback URLs correctly
3. Add production domain to auth settings
4. Verify Gemini key is enabled for production

---

## 🔒 Security Notes

- Passwords are hashed with `bcryptjs`
- Dashboard pages require authenticated sessions
- Credentials are validated server-side
- Middleware exists as scaffold and can be extended for stricter route controls

---

## 📈 Future Improvements

- Persist AI-generated plans directly into project/tasks
- Add search/filter for projects and tasks
- Add due dates, priorities, and reminders
- Add tests (unit + integration + e2e)
- Complete middleware-based access controls

---

## 🧑‍💻 Author

Built by **YASHDEV42**.

---

## 📄 License

Add a license file (e.g., MIT) if you plan to distribute this project publicly.

---

**YASHTASK — a modern full-stack task management experience. ✨**
