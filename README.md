# Blog Services


A full-stack blog platform built with **Node.js (Express)** + **MongoDB/Prisma** backend and **React TypeScript Vite (Zustand)** frontend.

![blog](./public/screen.gif)  


## Features


- **Authentication**
  - Register / Login
  - Access token (short-lived) stored in **Zustand** (in memory, disappears on page refresh)
  - Refresh token stored in **httpOnly secure cookie**
  - Auto-refresh flow with Axios interceptors

- **Blog**
  - Create blog with **banner image upload** (Cloudinary)
  - Read all blogs or a single blog
  - Like blogs
  - Comment on blogs

- **Security**
  - JWT auth (access + refresh)
  - rate limit
  - CORS with credentials
  - Refresh token stored securely in cookie (not accessible by JS)


----


## Tech Stack

### Backend
- Node.js + Express
- MongoDB (Mongoose) 
- JWT authentication
- Multer + Cloudinary for file upload
- Cookie-parser, CORS

### Frontend
- React (Vite)
- Zustand for state management
- Axios with interceptors
- Tailwind CSS

---

##  Workflow

1. Login

    - Backend sets `refreshToken` cookie

    - Returns `accessToken` + `user info`

    - Save `accessToken` + `user` in `Zustand`

2. Access protected routes

    - Attach Authorization: Bearer `<accessToken>`

3. Token expired?

    - Axios interceptor automatically calls `/auth/refresh`

    - New `accessToken` returned and stored in Zustand

4. Page refresh

    - Zustand cleared

    - App calls `/auth/refresh` on mount to restore session



## Run Locally

Clone the project

```bash
  git clone https://github.com/ouyniya/blog-frontend.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_URL`



## 📌 Notes

For production:

Use HTTPS (refresh cookie requires secure=true)

Use sameSite=none if frontend/backend are on different domains

Consider refresh token rotation + DB storage for added security



## Thank you

- UI from [shadcn](https://ui.shadcn.com/docs/installation) [motion-primitives](https://motion-primitives.com/) [magicui](https://magicui.design/)
- image from [unsplash](https://unsplash.com/s/photos/snowflake?license=free)
- transform tools [transform](https://transform.tools/)
- SVG Icons [svgrepo](https://www.svgrepo.com/)
- Animate Icons [animateicons](https://animateicons.vercel.app/)

