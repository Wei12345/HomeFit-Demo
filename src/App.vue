<template>
	<section class="main">
		<page-header></page-header>
		<router-view></router-view>
		<page-footer></page-footer>
	</section>
</template>
	
<script>
	import PageHeader from './components/PageHeader.vue';
	import PageFooter from './components/PageFooter.vue';

	export default{
		components: {
			PageHeader: PageHeader,
			PageFooter: PageFooter
		}
	}
</script>

<style lang="sass" scoped>
	@import url(https://fonts.googleapis.com/css?family=Varela+Round);
	@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
	.main{
		background-color: rgb(241, 242, 242);
		font-family: cwTeXYen, Varela Round;
		padding-top: 5rem;
	}
</style>