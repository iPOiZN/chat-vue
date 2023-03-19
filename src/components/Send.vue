<template>
	<div class="chat__bottom">
		<!-- <input type="text" class="chat__input" placeholder="Написать сообщение..." /> -->
		<textarea
			class="chat__textarea"
			rows="1"
			placeholder="Написать сообщение..."
			v-model="value"
			@keyup.enter.exact="sendMsg"
			@input="resizeTextarea"
		></textarea>
		<SendBtn v-if="value != ''" @click="sendMsg" />
		<AddBtn v-else @click="$emit('openModal')" />
	</div>
</template>

<script>
import AddBtn from "@/components/Addbtn.vue";
import SendBtn from "./Sendbtn.vue";

export default {
	name: "SendMessage",
	components: { AddBtn, SendBtn },
	props: {
		currentUser: {
			type: Number,
		},
	},
	data() {
		return {
			user: 1,
			value: "",
			imgSrc: "",
			time: "",
		};
	},
	methods: {
		resizeTextarea() {
			const textarea = document.querySelector("textarea");
			textarea.style.height = "auto";
			textarea.style.height = `${textarea.scrollHeight}px`;
		},
		sendMsg() {
			if (this.value != "") {
				const item = {
					user: this.currentUser,
					value: this.value,
					imgSrc: "",
					time: new Date().toLocaleTimeString([], {
						hour: "numeric",
						minute: "numeric",
					}),
				};
				document.querySelector("textarea").style.height = "auto";
				this.$emit("sendMsg", item),
					(this.user = ""),
					(this.value = ""),
					(this.imgSrc = "");
			}
			
		},
	},
};
</script>

<style>
</style>