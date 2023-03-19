<template>
	<div class="container">
		<div class="chat-room">
			<Window
				:currentUser="currentUserA"
				:messages="messagesA"
				@new-message="sendMsgA"
			/>
			<Window
				:currentUser="currentUserB"
				:messages="messagesB"
				@new-message="sendMsgB"
			/>
		</div>
	</div>
</template>

<script>
import Window from "@/components/Window.vue";
export default {
	name: "Chat",
	components: { Window },
	data() {
		return {
			messagesA: [],
			messagesB: [],
			currentUserA: 1,
			currentUserB: 2,
		};
	},
	methods: {
		sendMsgA(msg) {
			console.log(msg);
			this.messagesA.push(msg);
			this.messagesB.push(msg);
		},
		sendMsgB(msg) {
			console.log(msg);
			this.messagesB.push(msg);
			this.messagesA.push(msg);
		},
	},
};
</script>
