# 🚀 3D Point Cloud Dashboard

A modern and interactive **3D Point Cloud Visualization Dashboard** built with **React, TypeScript, Vite, React Three Fiber, and Three.js**. The application provides a professional interface for loading, viewing, and interacting with LiDAR point cloud datasets in `.ply` format.

---

## ✨ Features

- 🌐 Interactive 3D Point Cloud Viewer
- 📂 Load PLY (Point Cloud) Files
- 🔄 Rotate, Pan & Zoom Controls
- 📏 Dynamic Point Size Adjustment
- 🎨 Background Color Customization
- 📊 Dataset Information Panel
- 📷 Camera Position Tracking
- 🧭 3D Axis Gizmo
- 📐 Grid Helper
- 📱 Responsive Dashboard UI
- ⚡ Fast Performance with React Three Fiber

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite

### 3D Graphics
- Three.js
- React Three Fiber
- @react-three/drei

### Styling
- CSS3

### Version Control
- Git
- GitHub

---

## 📂 Project Structure

```
point-cloud-dashboard
│
├── public/
│   ├── logo.png
│   ├── icons.svg
│   ├── favicon.svg
│   └── sample_point_cloud.ply
│
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Bcode-here/3D-Point-Cloud-Dashboard.git
```

Go to the project folder

```bash
cd 3D-Point-Cloud-Dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build the project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## 🎮 Controls

| Action | Mouse |
|---------|-------|
| Rotate | Left Click + Drag |
| Pan | Right Click + Drag |
| Zoom | Mouse Wheel |

---

## 📸 Screenshots

> Add screenshots of your dashboard here.

---

## 🌍 Live Demo

GitHub Pages

https://bcode-here.github.io/3D-Point-Cloud-Dashboard/

---

## 📦 Dependencies

- React
- TypeScript
- Vite
- Three.js
- React Three Fiber
- @react-three/drei

---

## 👩‍💻 Author

**Bhagyashri Badiger**

GitHub:
https://github.com/Bcode-here

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star!
<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# 3D-Point-Cloud-Dashboard
>>>>>>> ff53ccd3d04abd5a5c2932f58b9e3ff00462d541
