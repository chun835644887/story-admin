<template>
	<div class="s-header">
		<div class="s-header-left">
			<slot name="left">
			
			</slot>
		</div>
		<div class="s-header-center">
			<slot name="center">
			
			</slot>
		</div>
		<div class="s-header-right">
			<slot name="right">
			
			</slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {};
		},
		components: {
			
		}
	}
</script>

<style lang="less" scoped>
	.s-header{
		position: absolute;
		display: -webkit-flex;
  		display: flex;
  		flex-wrap: nowrap;
  		justify-content: space-between;
		top: 0;
		height: 45px;
		width: 100%;
		left: 0;
		right: 0;
		overflow: height;
		border-bottom: 1px solid rgba(33,33,33,.1);
		.s-header-left{
			height: 44px;
			width: auto;
			padding-left: 1rem;
			overflow-y: hidden;
		}
		.s-header-center{
			flex: 1;
			height: 44px;
		}
		.s-header-right{
			height: 44px;
			padding-right: 1rem;
			width: auto;
		}
	}
</style>