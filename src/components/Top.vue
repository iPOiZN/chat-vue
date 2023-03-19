<template>
	<div class="chat__head">
		<div class="chat__avatar">
			<img v-if="message.user == currentUser" src="@/assets/img/avatar1.png" />
			<img v-else src="@/assets/img/avatar2.png" />
		</div>
		<div class="chat__titles">
			<h3 class="chat__titles-name">
				{{ message.user == currentUser ? "Александр" : "Евгений" }}
			</h3>
			<div class="chat__titles-status">Онлайн</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Top",
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

<style>
</style>