<template>
	<header id="header">
		<div class="headerTitle">
			<router-link to="/"><img src="../assets:lib/logo.png"></router-link>
		</div>
		<div class="headerSmall">
			找教練 | 為你找到最適合
		</div>
		<nav class="headerNav">
			<ul>
				<li><router-link to="/host">成為自由教練</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>

</script>

<style lang="sass" scoped>
	@import '../assets:lib/main.scss';
	$height: 5rem;

	#header{
		width: 94%;
		height: $height;
		padding: 0px 3%;
		background-color: black;
		color: white;
		position: fixed;
		top: 0px;
		z-index: 999;
		.headerTitle{
			float: left;
			height: $height;
			line-height: $height;
			font-size: 2rem;
			margin-left: 1%;
			img{
				height: $height;
			}
		}
		.headerSmall{
			float: left;
			height: $height;
			line-height: $height;
			font-size: 1.1rem;
			letter-spacing: .1rem;
			color: rgba(255, 255, 255, .83);
			margin-left: 2%;
			@include pad-width{
				display: none;
			}
		}
		.headerNav{
			float: right;
			height: $height;
			ul{
				margin: 0px;
				float: left;
				li{
					display: inline-block;
					font-size: 1.2rem;
					line-height: $height;
					margin-left: 1rem;
					a{
						text-decoration: none;
						&:link, &:visited{
							color: white;
						}
						&:hover, &:active{
							opacity: .7
						}
					}
				}
			}
		}
	}
</style>