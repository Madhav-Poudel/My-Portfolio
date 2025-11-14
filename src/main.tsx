import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";

// Prevent right-click and drag on all images
function protectImages(img) {
	if (!img.__protected) {
		img.addEventListener('contextmenu', e => e.preventDefault());
		img.addEventListener('dragstart', e => e.preventDefault());
		img.__protected = true;
	}
}

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('img').forEach(protectImages);
	// Observe for new images added to the DOM
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
					mutation.addedNodes.forEach(node => {
						if (node.nodeType === 1) {
							const el = node as Element;
							if (el.tagName === 'IMG') {
								protectImages(el);
							} else {
								el.querySelectorAll('img').forEach(protectImages);
							}
						}
					});
		});
	});
	observer.observe(document.body, { childList: true, subtree: true });
});

createRoot(document.getElementById("root")!).render(<App />);
