# 📝 To Doxx - Todo App

A modern, clean todo application built with vanilla JavaScript that helps you organize your tasks into projects and keeps everything saved locally in your browser.

## 🚀 [Live Demo](https://fabianherr.github.io/Todo-App/)

## ✨ Features

- **📁 Project Management**: Create custom projects to organize your todos
- **✅ Task Management**: Add, complete, and delete todos with ease
- **💾 Local Storage**: All your data is automatically saved and persists between sessions
- **🎯 Current Project Tracking**: The app remembers which project you were working on
- **🗑️ Easy Deletion**: Remove individual todos or entire projects
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Fast & Lightweight**: Built with vanilla JavaScript - no frameworks needed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox layout
- **JavaScript (ES6+)**: Modular architecture with classes and modules
- **LocalStorage API**: Client-side data persistence
- **CSS Grid & Flexbox**: Responsive layout design

## 📋 Project Structure

```
todo-app/
├── index.html              # Main HTML file
├── index.js                # Main JavaScript entry point
├── styles.css              # Application styles
├── projectAdder.js         # Project creation functionality
├── projectManager.js       # Project management and storage logic
├── projects.js             # Project class definition
├── sideBar.js              # Sidebar rendering and interaction
├── mainSpace.js            # Main content area rendering
├── todo.js                 # Todo class definition
├── toDoFetcher.js          # Todo creation functionality
└── README.md               # This file
```

## 🚀 Getting Started

### Option 1: Use the Live Demo
Simply click the [Live Demo](https://yourusername.github.io/todo-app) link above to start using the app immediately.

### Option 2: Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Serve the files** (required for ES6 modules):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open your browser** and navigate to `http://localhost:8000`

> **Note**: Due to CORS restrictions, you cannot simply open the `index.html` file directly in your browser. You need to serve it through a local server.

## 📖 How to Use

### Creating Projects
1. Click the **"+ New Project"** button in the sidebar
2. Type your project name and press **Enter**
3. Your new project will appear in the sidebar

### Managing Todos
1. Select a project from the sidebar
2. Click **"+ New Task"** in the main area
3. Type your task and press **Enter**
4. Check the checkbox to mark tasks as complete
5. Click the **"✖"** button to delete tasks

### Special Projects
- **AllTodos**: Shows all tasks from every project
- **All**: Contains all tasks (special project that cannot be deleted)

### Data Persistence
- All your projects and todos are automatically saved to your browser's local storage
- Your data will persist even after closing the browser
- The app remembers which project you were viewing


### Architecture Overview
```
ProjectManager (Singleton)
├── manages multiple Projects
├── handles localStorage operations
├── tracks current project
└── coordinates todo operations

Project Class
├── contains array of todos
├── provides CRUD operations
└── maintains project metadata

Todo Class
├── simple task representation
├── tracks completion status
└── serializable for storage
```

### Adding New Features
1. **New Todo Properties**: Modify the `Todo` class and update serialization
2. **New Project Features**: Extend the `Project` class
3. **UI Changes**: Update the corresponding render functions
4. **Storage**: Ensure new data is included in `toJSON()` methods

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Add features, fix bugs, or improve documentation
4. **Test thoroughly**: Ensure your changes work across different browsers
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes and why they're needed

### Contribution Ideas
- Add due dates for todos
- Implement todo categories or tags
- Add data export/import functionality
- Improve mobile responsiveness
- Add keyboard shortcuts
- Implement todo search functionality


## 📚 Learning Resources

This project demonstrates:
- **JavaScript ES6+**: Classes, modules, arrow functions, destructuring
- **DOM Manipulation**: Dynamic content creation and event handling
- **Local Storage**: Client-side data persistence
- **Modular Architecture**: Clean code organization and separation of concerns
- **CSS Flexbox**: Modern layout techniques
- **Responsive Design**: Mobile-first approach

---
