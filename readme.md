# 🛍️ Geer Clone – Frontend

This is the **frontend** of the Geer-like e-commerce platform built with **Next.js 15 (App Router)**. It fetches product data from the backend and displays them in a responsive product grid. Clicking a product navigates to its dynamic detail page.

## 🚀 Features

- Next.js 15 with App Router
- Dynamic routing (`/app/[productId]`)
- Tailwind CSS for styling
- Client-side data fetching (`fetch`)
- Reusable `ProductCard` component 
- Fully responsive UI

## 📦 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS


## ⚙️ Setup Instructions

```bash
# 1. git clone https://github.com/Suvo-Ghosh/geer-intern-assignment.git
# 2. Navigate to frontend
cd frontend

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

```
Access the site at: http://localhost:3000

# 🔧 Geer Clone – Backend

This is the **backend API** server for the Geer-like e-commerce platform built using **Express.js**.

It serves product data to the frontend via REST API.

## 🚀 Features

- REST API with Express.js    
- Simple `GET /api/products` , `POST /api/products` , `DELETE /api/products/:id`endpoint

## 📦 Tech Stack

- Node.js
- Express.js  
 
 
## ⚙️ Setup Instructions

```bash
# 1. git clone https://github.com/Suvo-Ghosh/geer-intern-assignment.git
# 2. Navigate to frontend
cd frontend

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```
Access API at: http://localhost:5000/api/products


