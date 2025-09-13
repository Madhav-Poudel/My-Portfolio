import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";

// Prevent right-click and drag on all images
window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('img').forEach(img => {
		img.addEventListener('contextmenu', e => e.preventDefault());
		img.addEventListener('dragstart', e => e.preventDefault());
	});
});

createRoot(document.getElementById("root")!).render(<App />);
