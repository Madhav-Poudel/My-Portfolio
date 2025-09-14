import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";

// Prevent right-click / save / drag / long-press on images site-wide
// Use event delegation so dynamically added images are covered as well
function preventImageActions(e: Event) {
	const target = e.target as HTMLElement | null;
	if (!target) return;
	// If the event target is an image or inside a picture element
	if (target.tagName === 'IMG' || target.closest && (target.closest('img') || target.closest('picture'))) {
		e.preventDefault();
	}
}

// Block context menu on images
document.addEventListener('contextmenu', (e) => {
	const el = e.target as HTMLElement | null;
	if (!el) return;
	if (el.tagName === 'IMG' || el.closest && (el.closest('img') || el.closest('picture'))) {
		e.preventDefault();
	}
});

// Prevent dragstart for images
document.addEventListener('dragstart', (e) => preventImageActions(e));

// Prevent long-press on touch devices by preventing touchstart + contextmenu default
document.addEventListener('touchstart', (e) => preventImageActions(e), { passive: false });
// Some mobile browsers still fire contextmenu on long-press
document.addEventListener('contextmenu', (e) => preventImageActions(e));

// Ensure images added later are not draggable via attribute
const observer = new MutationObserver((mutations) => {
	for (const m of mutations) {
		for (const node of Array.from(m.addedNodes)) {
			if (!(node instanceof HTMLElement)) continue;
			if (node.tagName === 'IMG') {
				(node as HTMLImageElement).draggable = false;
			}
			node.querySelectorAll && node.querySelectorAll('img').forEach(img => (img as HTMLImageElement).draggable = false);
		}
	}
});
observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

// Also set existing images to non-draggable immediately
document.querySelectorAll && document.querySelectorAll('img').forEach(img => (img as HTMLImageElement).draggable = false);

createRoot(document.getElementById("root")!).render(<App />);
