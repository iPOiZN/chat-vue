<template>
	<Transition name="scale">
		<div class="modal">
			<div class="modal__content">
				<h3 class="modal__h3">Отправить картинку</h3>
				<div class="modal__inputs">
					<div class="input__content">
						<div class="input__label">URL<span>*</span></div>
						<input
							class="modal__input"
							type="text"
							placeholder="Вставьте URL картинки"
							required
							v-model="imgSrc"
						/>
					</div>
					<div class="input__content">
						<div class="input__label">Комментарий<span>*</span></div>
						<input
							class="modal__input"
							type="text"
							placeholder="Написать комментарий..."
							required
							v-model="value"
						/>
					</div>
				</div>
				<div class="modal__btns">
					<button class="modal__btn cancel" @click="closeModal">Отмена</button>
					<button class="modal__btn add" @click="sendMsg">Отправить</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script>
export default {
	name: "SendImgModal",
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
		closeModal() {
			this.$emit("closeModal", false);
			// (this.desc = ""), (this.title = "");
		},
		sendMsg() {
			if (this.value != "" && this.imgSrc != "") {
				console.log("modal");
				const item = {
					user: 1,
					value: this.value,
					imgSrc: this.imgSrc,
					time: new Date().toLocaleTimeString([], {
						hour: "numeric",
						minute: "numeric",
					}),
				};
				this.$emit("sendMsg", item), (this.value = ""), (this.imgSrc = "");
			}
		},
	},
};
</script>
