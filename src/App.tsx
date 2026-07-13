import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Viewer from "./components/Viewer";
import InfoPanel from "./components/InfoPanel";

function App() {
  return (
    <div className="app">

      {/* Top Navigation */}
      <Header />

      {/* Main Dashboard */}
      <main className="dashboard">

        {/* Left Controls */}
        <aside className="left-panel">
          <Sidebar />
        </aside>

        {/* 3D Viewer */}
        <section className="viewer-panel">
          <Viewer />
        </section>

        {/* Right Information */}
        <aside className="right-panel">
          <InfoPanel />
        </aside>

      </main>

    </div>
  );
}

export default App;