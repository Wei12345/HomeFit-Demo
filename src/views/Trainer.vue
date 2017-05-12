<template>
	<section id="trainer">
		<img :src="'src/assets:lib/' + trainer.image + '.jpg'">
		<trainer-article :title="'姓名'" :content="trainer.showName"></trainer-article>
		<trainer-article :title="'專長'" :content="trainer.major"></trainer-article>
		<div>
			<button class="black-button">馬上預約</button>
		</div>
		{{ trainer }}
	</section>
</template>

<script>
	import TrainerArticle from '../components/trainer/TrainerArticle.vue';
	import InputGroup from '../components/InputGroup.vue';

	export default {
		props: ['name'],
		components: {
			TrainerArticle: TrainerArticle,
			InputGroup: InputGroup
		},
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
		background-color: white;
		width: 40%;
		margin: 3% auto;
		max-width: 75rem;
		padding: 1rem 10%;
		img{
			margin: 0px 20% 1rem;
			width: 60%;
		}
		div{
			text-align: center;
		}
	}
</style>