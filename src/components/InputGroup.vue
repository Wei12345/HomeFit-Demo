<template>
	<div>
		<label>{{ label }}</label>
		<input type="text" :placeholder="placeholder" :value="value" @input="updateValue">
	</div>
</template>

<script>
	export default{
		props: ['label', 'placeholder', 'value'],
		methods: {
			updateValue: function(event){
				this.$emit('input', event.target.value);
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import '../assets:lib/main.scss';

</style>