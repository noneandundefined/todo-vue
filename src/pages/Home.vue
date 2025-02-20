<script>
import TodoAdd from '../components/TodoAdd.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Home',
	components: {
		TodoAdd, // Регистрируем компонент TodoAdd
	},
	setup() {
		return {};
	},
});
</script>

<template>
	<TodoAdd />
</template>

<style scoped></style>
