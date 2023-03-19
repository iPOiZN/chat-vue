<template>
	<div :class="message.user == currentUser ? 'chat__item you' : 'chat__item'">
		<div class="chat__message">
			<img v-if="message.imgSrc != ''" :src="message.imgSrc" alt="" />
			<div class="chat__message-text">{{ message.value }}</div>
		</div>
		<div class="chat__message-time">{{ message.time }}</div>
	</div>
</template>

<script>
export default {
	name: "MessageItem",
	props: {
		currentUser: {
			type: Number,
		},
		message: {
			typeof: Object,
			default: {
				user: 1,
				value: "",
				imgSrc: "",
				time: "",
			},
		},
	},
};
</script>
