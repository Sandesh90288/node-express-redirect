 # Express Redirect Example

This is a simple **Node.js + Express** application that demonstrates how to:
- Use environment variables with `dotenv`
- Create GET routes in Express
- Send plain text responses
- Redirect users to external websites

---

## 📂 Project Structure
```
.
├── index.js      # Main Express app
├── .env          # Environment variables
└── package.json  # Project dependencies
```

---

## ⚙️ Installation & Setup

1. **Clone the repository** (or create your project folder)
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install dependencies**
```bash
npm install express dotenv
```

3. **Create a `.env` file** in the root folder:
```env
PORT=3000
```

4. **Run the server**
```bash
node index.js
```
or with nodemon (if installed):
```bash
nodemon index.js
```

---

## 🚀 Routes Overview

### `GET /`
- Sends **"Hello World!"** as plain text.

### `GET /youtube`
- Redirects user to **YouTube**.

### `GET /chatgpt`
- Redirects user to **ChatGPT**.

---

## 📚 What I Learned
- How to set up a **basic Express server**.
- How to use **`dotenv`** to store sensitive or configurable data like `PORT`.
- How to create **GET routes** in Express.
- How to send plain responses with `res.send()`.
- How to **redirect** users to other websites using `res.redirect()`.

---

## 🛠 Dependencies
- **Express** – Web framework for Node.js
- **Dotenv** – For loading environment variables

---

## 💡 Example
Once the server is running, open your browser and try:
- `http://localhost:3000/` → Hello World!
- `http://localhost:3000/youtube` → Redirect to YouTube
- `http://localhost:3000/chatgpt` → Redirect to ChatGPT

---
