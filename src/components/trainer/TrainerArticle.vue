<template>
	<article>
		<div class="title">{{ title }}</div>
		<div class="content">{{ content }}</div>
	</article>
</template>

<script>
	export default{
		props: ['title', 'content']
	}
</script>

<style lang="sass" scoped>
	@import '../../assets:lib/main.scss';
	
	article{
		font-family: 微軟正黑體;
		border-top: .08rem solid #9e9e9e;
		padding: .8rem 0px 1rem;
		.title{
			color: #5d5c5c;
			display: inline-block;
			width: 25%;
			padding-left: 5%;
			font-size: 1.1rem;
		}
		.content{
			color: #72716d;
			display: inline-block;
			width: 69%;
			font-size: 1rem;
		}
	}	
</style>