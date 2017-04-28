<template>
	<section>
		<section id="banner">
			<h1 class="bannerTitle">找教練 選課程</h1>
			<h1 class="bannerSubtitle">自由自在 不受拘束</h1>
			<h2 class="bannerContent">隨時隨地安排個人健身套餐</h2>
		</section>
		<section id="recommend">
			<p>
				<i class="fa fa-users fa-3x"></i><br>
				<span class="recommendTitle">為你推薦優質個人教練</span>	
			</p>
			<router-link to="/trainer/ch" class="recommendItem1">
				<div class="recommendImg1" style="background-image:url(src/assets:lib/trainer_ch.jpg)"></div>
				<p class="recommendContent">C.H.</p>
			</router-link>
			<router-link to="/trainer/kevin" class="recommendItem2">
				<div class="recommendImg2" style="background-image:url(src/assets:lib/trainer_kevin.jpg)"></div>
				<p class="recommendContent">Kevin</p>
			</router-link>
			<router-link to="/trainer/rob" class="recommendItem3">
				<div class="recommendImg3" style="background-image:url(src/assets:lib/trainer_rob.jpg)"></div>
				<p class="recommendContent">Rob</p>
			</router-link>
			<router-link to="/trainer/hunt" class="recommendItem1">
				<div class="recommendImg1" style="background-image:url(src/assets:lib/trainer_hunt.jpg)"></div>
				<p class="recommendContent">Hunt</p>
			</router-link>
			<router-link to="/trainer/johnny" class="recommendItem2">
				<div class="recommendImg2" style="background-image:url(src/assets:lib/trainer_johnny.jpg)"></div>
				<p class="recommendContent">Johnny</p>
			</router-link>
			<router-link to="/trainer/sunny" class="recommendItem3">
				<div class="recommendImg3" style="background-image:url(src/assets:lib/trainer_sunny.jpg)"></div>
				<p class="recommendContent">Sunny</p>
			</router-link>
			<router-link to="/trainer/soon" class="recommendItem1">
				<div class="recommendImg1" style="background-image:url(src/assets:lib/trainer_soon.jpg)"></div>
				<p class="recommendContent">Soon</p>
			</router-link>
			<router-link to="/trainer/woojo" class="recommendItem2">
				<div class="recommendImg2" style="background-image:url(src/assets:lib/trainer_woojo.jpg)"></div>
				<p class="recommendContent">Woojo</p>
			</router-link>
			<article class="recommendItem3">
			</article>
		</section>
	</section>
</template>

<script>
	
</script>

<style lang="sass" scoped>
	@import '../assets:lib/main.scss';

	$recommendHeight: 22.5rem;
	#banner{
		color: white;
		text-align: center;
		background-image: url(../assets:lib/banner.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		padding: 5.5rem 0px 13rem 0px;
		@include pad-width{
			padding-bottom: 8rem;
		}
		.bannerTitle, .bannerSubtitle{
			margin: 0px;
			font-size: 3rem;
			font-weight: normal;
			text-shadow: .1rem .1rem .1rem rgba(0, 0, 0, .7);
		}
		.bannerContent{
			margin: 0px;
			font-size: 1.4rem;
			line-height: 2.3rem;
			font-weight: normal;
			text-shadow: .1rem .1rem .1rem rgba(0, 0, 0, .7);
		}
	}
	#recommend{
		text-align: center;
		color: #6d6e71;
		margin: 3% auto;
		max-width: 75rem;
		.recommendTitle{
			font-size: 1.4rem;
			font-weight: bold;
		}
		.recommendItem1, .recommendItem2, .recommendItem3{
			display: inline-block;
			width: 15%;
			margin-top: 3rem;
			text-decoration: none;
			&:link, &:visited{
				color: #6d6e71;
			}
			@include pad-width{
				margin: 0px auto 15vw;
				width: 65%;
				height: 125vw;
			}
			.recommendImg1, .recommendImg2, .recommendImg3{
				background-position: center;
				background-size: auto 100%;
				background-repeat: no-repeat;
				width: 100%;
				height: $recommendHeight;
				transition: all .7s ease-in-out;
				&:hover{
					background-size: auto 120%;
					opacity: .8;
				}
				&:hover ~ .recommendContent{
					color: #ec8443;
				}
				@include pad-width{
					height: 100%;
				}

			}
			.recommendContent{
				transition: all .7s ease-in-out;
				text-align: right;
				font-size: 1.1rem;
			}
			p{
				@include pad-width{
					margin: 2vw 0px 0px;
				}
			}
		}
		.recommendItem1{
			margin-right: 7.5%;
			margin-left: 16.5%;
			@include pad-width{
				margin: 0px auto 15vw;
			}
		}
		.recommendItem3{
			width: 20%;
			margin-left: 7.5%;
			margin-right: 16.5%;
			@include pad-width{
				margin: 0px auto 15vw;
				width: 65%;
			}
		}
		article.recommendItem3{
			@include pad-width{
				display: none;
			}
		}
	}
</style>