<template>
	<div>
		<img
			src="https://file.xdclass.net/video/2020/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98%E7%AC%AC%E4%B8%80%E5%AD%A3banner.png"
			alt=""
			class="headerImg"
		/>
		<cube-form
			:model="model"
			:schema="schema"
			@submit="submitHandler"
		></cube-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			model: {
				username: "",
				password: ""
			},
			schema: {
				fields: [
					//用户名配置
					{
						type: "input",
						modelKey: "username",
						label: "用户名",
						props: {
							placeholder: "请输入用户名"
						},
						rules: {
							//校验规则
							required: true,
							type: "string",
							min: 3,
							max: 15
						},
						trigger: "blur", //失焦时检测是否符合校验规则
						messages: {
							required: "用户名不能为空",
							min: "用户名不能少于3个字符",
							max: "用户名不能大于15个字符"
						}
					},
					{
						type: "input",
						modelKey: "password",
						label: "密码",
						props: {
							placeholder: "请输入密码",
							type: "password",
							eye: {
								open: false
							}
						},
						rules: {
							//校验规则
							required: true
						},
						trigger: "blur", //失焦时检测是否符合校验规则
						messages: {
							required: "用户名不能为空"
						}
					},
					{
						type: "submit",
						label: "登录"
					}
				]
			}
		};
	},
	methods: {
		async submitHandler(e) {
			e.preventDefault(); //阻止浏览器默认事件
			try {
				const result = await this.$http.get("/api/login", {
					params: this.model
				});
				if (result.code == 0) {
					/* 设置token */
					this.$store.commit("setToken", result.token);
					/* 设置本地存储 */
					window.localStorage.setItem("token", result.token);
					/* 跳转到首页，防止返回操作用replace */
					//判断路由是否带参，带参就去到重定向参数地址，否则就去首页
					if (this.$route.query.redirect) {
						this.$router.replace({ path: this.$route.query.redirect });
					} else {
						this.$router.replace({ path: "/botnav/index" });
					}
				} else {
					alert(result.message);
				}
			} catch (err) {
				console.log(err);
			}
		}
	}
};
</script>

<style lang="stylus" scoped>
.headerImg
  height 150px
  width  100%
</style>
