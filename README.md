# ToDo 📝
**A Simple and Elegant Task Management Web App**

ToDo is a clean, responsive task management application built with **React.js** that helps you organize your daily activities. With local storage persistence, your tasks remain safe even after closing your browser. Create, edit, delete, and manage your tasks with an intuitive interface designed for productivity.

🌐 **Live App**: [ToDo App](https://reactjstodoslists.netlify.app/)  
<br/>

<img width="1919" height="999" alt="image" src="https://github.com/user-attachments/assets/5eff01c2-f356-45f4-a7e1-c4ea28cefe22" />
<img width="1919" height="995" alt="image" src="https://github.com/user-attachments/assets/b5f53165-c9be-43c4-95b1-92bc06e3efc6" />

---

## 📋 Features

- ✅ **Create Tasks**: Add new tasks with a simple, clean interface
- ✏️ **Edit Tasks**: Modify existing tasks inline with ease
- 🗑️ **Delete Tasks**: Remove completed or unwanted tasks
- 💾 **Local Storage**: All tasks persist in browser storage
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Clean UI**: Minimalist design focused on productivity

---

## 🛠️ Tech Stack

| Frontend       | Storage        | Styling       | Deployment    |
|----------------|----------------|---------------|---------------|
| React.js       | Local Storage  | CSS3          | Netlify       |
| JavaScript ES6 | Browser API    | Flexbox       |               |
| HTML5          |                | CSS Grid      |               |

---

## 🌿 System Overview

```
User Input → React State → Local Storage → Persistent Tasks
     ↑                                            ↓
Task Actions ← UI Components ← Rendered Tasks ←───┘
```

## 🗂️ Project Structure

```bash
ToDo/
├── public/
│   └── favicon.ico        # App icon
├── src/
│   ├── assests/           # Assests
│   ├── components/        # React components
│   │   ├── ToDoCard.jsx   # Individual task component
│   │   ├── ToDoInput.jsx  # Input Field
│   │   ├── ToDoList.jss   # Task list creator
│   ├── App.css            # Main app styles
│   ├── index.css          # Global styles
│   ├── App.jsx            # Main App component
│   └── main.jsx           # React DOM entry point
├── index.html             # Main HTML file
├── package.json           # Dependencies & scripts
└── README.md              # You're here!
```

---

## 🚀 How It Works

### ➕ Creating Tasks
1. User types a task in the input field
2. Clicks "Add Task" or presses Enter
3. Task is added to React state and saved to local storage
4. New task appears in the task list immediately

### ✏️ Editing Tasks
1. User clicks the edit button on any task
2. Task text becomes editable inline
3. Changes are saved on Enter or blur
4. Updated task is synchronized with local storage

### ✅ Managing Tasks
1. Use delete button to remove tasks permanently
2. All changes are instantly saved to local storage
3. Tasks persist between browser sessions

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v16+
- npm or yarn package manager
- Modern web browser

---

### 🔌 Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

---

### ⚙️ Setup Instructions

#### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 2. Start Development Server
```bash
npm start
# or
yarn start
```

The app will open at `http://localhost:3000`

#### 3. Build for Production
```bash
npm run build
# or
yarn build
```

---

## 🎨 Styling Features

- **Custom CSS**: Hand-crafted styles without external libraries
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: CSS transitions for better UX
- **Modern Design**: Clean, minimalist interface
- **Accessibility**: Keyboard navigation and screen reader support

---

## 💾 Local Storage Implementation

```javascript
// Save tasks to local storage
function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:newList}));
}

// Load tasks from local storage
useEffect(() => {
    // return null; prevents the further JSX from loading because I am returning null
    if (!localStorage) {return;}

    let localTodo = localStorage.getItem('todos');
    if (!localTodo) {return;}

    localTodo = JSON.parse(localTodo).todos;
    setTodos(localTodo);
}, []) // Empty [] means run on page load
```

---

## 🧠 Key Learning Points

- **React Hooks**: Mastered `useState` and `useEffect` for state management
- **Local Storage API**: Implemented persistent data without a backend
- **Component Architecture**: Built reusable and maintainable components
- **Event Handling**: Managed form submissions and user interactions
- **CSS Mastery**: Created responsive layouts with pure CSS

---

## 📈 Future Enhancements

- 🏷️ **Categories & Tags**: Organize tasks by category
- 📅 **Due Dates**: Add deadline functionality with reminders
- 🔍 **Search & Filter**: Find tasks quickly with search
- 📊 **Statistics**: Track productivity and completion rates
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ☁️ **Cloud Sync**: Sync tasks across devices
- 📱 **PWA Support**: Install as a mobile app

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/yourusername/todo-app/issues).

### How to Contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License



---

## 🙏 Acknowledgments

- React.js community for excellent documentation
- MDN Web Docs for Local Storage API guidance
- Netlify for seamless deployment experience

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/yourprofile)  
💻 [GitHub](https://github.com/yourusername)

---

⭐ **Star this repository if you found it helpful!**
