<template>
	<footer id="footer">
		<div class="footerTitle">
			<img src="../assets:lib/logo_black.png">
		</div>
		<div class="footerAbout">
			<p class="footerAboutTitle"><router-link to="/about">關於HomeFit</router-link></p>
			<div class="footerMobileContact">
				<a href="https://www.facebook.com/homefitTW" target="_blank"><i class="fa fa-facebook-square fa-2x"></i></a>
				<a href="#"><i class="fa fa-envelope fa-2x"></i></a><br>
				<span class="footerContactTitle">聯絡我們</span>
			</div>
			<p class="footerMobileAboutTitle"><router-link to="/about">關於HomeFit</router-link></p>
			<ul>
				<li class="ulTitle">合作提案</li>
				<li><router-link to="/host">刊教練</router-link></li>
			</ul>
			<ul>
				<li class="ulTitle">網站條款</li>
				<li><router-link to="/about">服務條款</router-link></li>
			</ul>
			<small class="footerAboutSmall">
				本網站的所有資訊均由用戶提供，如有觸犯您的知識版權，請聯繫我們，我們會於接到投訴後即時處理。<br><br>© homefit 找教練 2017 All Rights Reserved
			</small>
		</div>
		<div class="footerContact">
			<a href="https://www.facebook.com/homefitTW" target="_blank"><i class="fa fa-facebook-square fa-2x"></i></a>
			<a href="#"><i class="fa fa-envelope fa-2x"></i></a><br>
			<span class="footerContactTitle">聯絡我們</span>
		</div>
	</footer>
</template>

<script>

</script>

<style lang="sass" scoped>
	@import '../assets:lib/main.scss';
	$height: 5rem;

	#footer{
		background-color: #a6a6a6;
		padding: 3% 6% 4%;
		@include pad-width{
			padding: 10% 8% 14%;
		}
		.footerTitle{
			display: inline-block;
			height: $height;
			font-size: 2rem;
			margin-left: 1%;
			color: #2ab1ef;
			vertical-align: top;
			img{
				height: $height;
			}
		}
		.footerAbout{
			display: inline-block;
			margin-left: 5%;
			color: #333333;
			max-width: 26rem;
			.footerAboutTitle{
				display: block;
				@include pad-width{
					display: none;
				}
				a{
					text-decoration: none;
					&:link, &:visited{
						color: #333333;
					}
					&:hover, &:active{
						color: black;
					}
				}
			}
			ul{
				list-style: none;
				padding: 0px;
				display: inline-block;
				vertical-align: top;
				margin-right: 4%;
				margin-bottom: 3rem;
				li{
					margin-bottom: 1rem;
					a{
						text-decoration: none;
						&:link, &:visited{
							color: #333333;
						}
						&:hover, &:active{
							color: black;
						}
					}
				}
			}
			.ulTitle{
				font-size: 1.1rem;
				font-weight: bold;
				color: #444444;
			}
			.footerAboutSmall{
				display: block;
				color: #404040;
			}
			.footerMobileContact{
				display: none;
				vertical-align: top;
				color: black;
				margin-left: 2%;
				margin: 10% 0px 20%;
				@include pad-width{
					display: block;
				}
				a{
					letter-spacing: 1.5rem;
					text-decoration: none;
					&:link, &:visited{
						color: #333333;
					}
					&:hover, &:active{
						color: black;
					}
				}
				.footerContactTitle{
					display: block;
					font-size: 1.1rem;
					margin-top: 2rem;
					color: #333333;
					font-weight: bold;
				}
			}
			.footerMobileAboutTitle{
				display: none;
				@include pad-width{
					display: block;
				}
				a{
					text-decoration: none;
					&:link, &:visited{
						color: #333333;
					}
					&:hover, &:active{
						color: black;
					}
				}
			}
		}
		
		.footerContact{
			display: inline-block;
			vertical-align: top;
			color: black;
			margin-left: 2%;
			@include pad-width{
				display: none;
			}
			a{
				letter-spacing: 1.5rem;
				&:link, &:visited{
					color: black;
				}
				&:hover, &:active{
					color: white;
				}
			}
			.footerContactTitle{
				display: block;
				font-size: 1.1rem;
				margin-top: 2rem;
				color: #444444;
				font-weight: bold;
			}
		}
	}
		
</style>