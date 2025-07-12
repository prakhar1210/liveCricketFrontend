# 🏏 Live Cricket App - Frontend

A real-time cricket score and commentary web application frontend built with **Next.js**, **TypeScript**, and **Tailwind CSS** (if you're using it — adjust if not).  
This connects to the backend server to display ongoing matches, detailed commentary, and match updates.

---

## 📦 Tech Stack

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Fetch API**
- **CSS/Tailwind CSS** (if applicable)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/prakhar1210/liveCricketApp.git
cd liveCricketApp/frontend/my-app

npm install

npm run dev
```

📂 Project Structure (App Directory)
src/
 └── app/
      ├── page.tsx            // Homepage showing match list
      └── match/
           └── [matchid]/
               └── page.tsx   // Commentary page for individual matches


📝 Features
📜 List ongoing cricket matches

📝 View live commentary for each match

🚀 Next.js App Router dynamic routing

🔥 Clean and responsive UI

🌐 API Endpoints (used by frontend)
GET http://localhost:5000/matches → Fetch list of matches

GET http://localhost:5000/matches/:matchId → Fetch match details & commentary

⚠️ Backend must be running for the frontend to function

🛠️ Development Notes
Ensure CORS is enabled on the backend (Access-Control-Allow-Origin: *)

Matches are identified via matchId as dynamic route parameters in URL

Code uses Next.js' useParams() for accessing route params and fetch() for data fetching

📃 License
MIT © 2025 Prakhar Shrivastava
