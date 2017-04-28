<template>
	<section id="trainer">
		{{ trainer }}
	</section>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		props: ['name'],
		computed: {
			trainer(){
				return this.$store.getters.trainerList.filter(trainer => trainer.name == this.name)[0];
			}
		}
	};
</script>

<style lang="sass" scoped>
	@import '../assets:lib/main.scss';
	
	#trainer{
		margin: 3% auto;
		max-width: 75rem;
		padding: 0px 15%;
	}
</style>