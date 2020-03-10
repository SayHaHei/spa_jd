<template>
	<div>
		<img
			src="https://file.xdclass.net/video/2020/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98%E7%AC%AC%E4%B8%80%E5%AD%A3banner.png"
			alt=""
			class="headerImg"
		/>
		<ul>
			<li
				class="mineitem"
				v-for="(item, index) in minearry"
				:key="index"
				@click="itemclick(item)"
			>
				<span class="minititle">{{ item.label }}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			minearry: [
				{
					label: "商品收藏"
				},
				{
					label: "我的足迹"
				},
				{
					label: "店铺收藏"
				},
				{
					label: "我的订单"
				},
				{
					label: "退出",
					type: "exit"
				}
			]
		};
  },
	methods: {
		itemclick(item) {
      console.log("=============");
			if (item.type == "exit") {
				this.$store.commit("setToken", "");
				localStorage.removeItem("token");
				this.$router.push({ path: "/login" });
			}
		}
	}
};
</script>

<style lang="stylus" scoped>
.mineitem
  font-size 14px
  text-align left
  height 50px
  line-height 50px
  padding-left 5%
  border-bottom 1px solid #eeeeee
  .minititle
    display inline-block
    width 90%

.headerImg
  height 150px
  width  100%
</style>
