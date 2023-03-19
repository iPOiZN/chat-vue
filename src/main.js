import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/main.scss";

createApp(App).mount("#app");

var textareas = document.querySelectorAll(".chat__textarea");

for (let i = 0; i < textareas.length; i++) {
	const textarea = textareas[i];
	textarea.addEventListener("keydown", (e) => {
		const keyCode = e.which || e.keyCode;

		if (keyCode === 13 && !e.shiftKey) {
			e.preventDefault();
		}
	});
}
