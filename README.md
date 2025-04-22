# 📝 React Todo App

A simple and elegant **Todo List** application built with **React**, using **Context API** for state management and **localStorage** for persistence. This project helps users manage their daily tasks efficiently.

## 🚀 Features

- ✅ Add new todos
- 📝 Update existing todos
- ❌ Delete todos
- 🎯 Mark todos as completed/incomplete
- 💾 Persists data using localStorage
- 🌙 Clean UI with Tailwind CSS

## 🛠️ Tech Stack

- **React**
- **Context API**
- **Tailwind CSS**
- **UUID** (to generate unique IDs)
- **LocalStorage API** (to store data in browser)

## 📁 Folder Structure

src/ ├── components/ │ ├── TodoForm.jsx │ └── TodoList.jsx ├── contexts/ │ └── index.js (Context Provider) ├── App.jsx └── main.jsx


## 🧠 Key Learnings

- Used the **callback form of `setState`** to safely update todos when previous state is required:
  ```js
  setTodos(prev => [...prev, newTodo]);
Context API was used to avoid prop drilling and share todos and handlers across components.

localStorage sync:

Loaded existing todos on first mount using getItem

Synced todos to localStorage on every state update using setItem

Prevented overwriting localStorage by conditionally checking if existing data is available on mount
