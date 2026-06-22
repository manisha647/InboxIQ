# InboxIQ – AI-Powered Email Reply Assistant

InboxIQ is an intelligent email assistant that helps users craft professional, context-aware email replies in seconds. Powered by Google's Gemini AI, InboxIQ analyzes the content of incoming emails and generates polished responses based on the selected tone and length.

## Live Demo

🔗 Frontend: https://inbox-iq-one.vercel.app/

## ✨ Features

* 🤖 AI-generated email replies using Gemini AI
* 🎯 Multiple reply tones:

  * Professional
  * Friendly
  * Formal
  * Casual
* 📏 Adjustable response lengths:

  * Short
  * Medium
  * Detailed
* 🔐 Google Authentication with Firebase
* 📋 One-click copy functionality
* 🎨 Modern responsive UI built with React and Tailwind CSS
* ⚡ Fast backend powered by Node.js and Express
* ☁️ Cloud deployment using Vercel and Render

---

## 🖥️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Lucide React Icons

### Backend

* Node.js
* Express.js
* Google Gemini API

### Authentication

* Firebase Authentication
* Google Sign-In

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
InboxIQ/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
├── backend/
│   ├── server.js
│   ├── geminiService.js
│   └── package.json
│
├── public/
└── package.json
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/manisha647/InboxIQ.git
cd InboxIQ
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Start Backend:

```bash
npm start
```

---

## 🔐 Environment Variables

### Backend

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### Firebase

Configure your Firebase credentials inside:

```bash
src/firebase.js
```

---

## 🎯 Future Enhancements

* Gmail API Integration
* Email History Management
* AI Subject Line Generator
* Multi-language Support
* Custom Tone Training
* Browser Extension Support

---

## 👩‍💻 Author

**Manisha Kumari**

GitHub: https://github.com/manisha647

---

## 📜 License

This project is open-source and available under the MIT License.
