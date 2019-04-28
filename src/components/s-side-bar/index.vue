<template>
	<div id="s-side-bar" class="s-side-bar" :class="{'active': $store.getters.getShowSide}">
		
	</div>
</template>

<script>
	export default{
		data(){
			return {};
		}
	}
</script>

<style lang="less" scoped>
	.s-side-bar{
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		bottom: 0;
		background: #444;
		visibility: visible;
		transform-origin: -100% center;
		transform: translate3d(0px, 0px, 0px) scale(0.8);
		transition: transform 350ms cubic-bezier(.165,.84,.44,1);
	}
	.active{
		transform: translate3d(0px, 0px, 0px) scale(1);
	}
</style>