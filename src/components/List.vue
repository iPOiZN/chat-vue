<template>
	<div class="chat__main">
		<Message
			v-for="(message, index) in messages"
			:key="index"
			:message="message"
			:currentUser="currentUser"
		/>
	</div>
</template>

<script>
import Message from "@/components/MessageItem.vue";
export default {
	name: "MessageList",
	components: { Message },
	props: {
		currentUser: {
			type: Number,
		},
		messages: {
			typeof: Array,
		},
	},
};
</script>

