<template>
	<div class="chat">
		<img src="@/assets/img/window-bg.jpg" alt="" class="chat__bg" />
		<Top :currentUser="currentUser" />
		<List :currentUser="currentUser" :messages="messages" />
		<Send
			@sendMsg="sendMsg"
			@openModal="openModal"
			:currentUser="currentUser"
		/>
		<Modal v-show="modalOpen" @closeModal="closeModal" @sendMsg="sendMsg" />
	</div>
</template>

<script>
import Top from "@/components/Top.vue";
import List from "@/components/List.vue";
import Send from "@/components/Send.vue";
import Modal from "@/components/Modal.vue";
export default {
	name: "ChatWindow",
	components: { Top, Send, List, Modal },
	props: {
		messages: {
			typeof: Array,
		},
		currentUser: {
			typeof: Number,
		},
	},
	data() {
		return {
			modalOpen: false,
		};
	},
	methods: {
		openModal() {
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOpen = false;
		},
		sendMsg(item) {
			if (item.value != "") {
				this.modalOpen = false;
				this.$emit("new-message", item);
			}
			
		},
	},
};
</script>
