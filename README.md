# 🍔 Food Delivery Web App

A full-stack food delivery platform where users can explore restaurants, place orders, and pay online. Built with a modern UI and scalable backend, it’s responsive, fast, and production-ready.

🌐 **Live Demo**: [food-del-frontend-2r1l.onrender.com](https://food-del-frontend-2r1l.onrender.com)

---

## 🚀 Features

-  User login/signup (JWT Auth)
-  Browse food items & restaurants
-  Cart management & checkout
-  Razorpay payment integration
-  Real-time order status
-  Admin panel to manage menu/orders
-  Fully responsive (mobile + desktop)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, Bcrypt
- **Payment**: Razorpay
- **Hosting**: Render + MongoDB Atlas

---

## 📁 Folder Structure

```
food-del/
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   ├── index.js
│   └── .env  ← (ignored in git)
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env  ← (ignored in git)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-del.git
cd food-del
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

Then run the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/` and add:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY=your_razorpay_key
```

Then run the frontend:

```bash
npm start
```

---

## 🔮 Upcoming Features

-  Location-based restaurant search  
-  React Native mobile app  
-  Notifications system  
-  Dark mode toggle  
-  Review & rating system  

---

## 🧠 Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a new branch  
3. Make your changes  
4. Open a PR

---

## 📄 License

This project is licensed under the **MIT License**.
