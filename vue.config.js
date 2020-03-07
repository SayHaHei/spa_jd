module.exports = {
	configureWebpack: {
		devServer: {
			port: 8080,
			open: true,
			/* mock接口编写的地方 */
			/* 每次更改这个配置文件的时候，都必须重启项目才生效 */
			before(app) {
				// app.get("请求地址", (req, res)=>{res.json({})})
				//用户信息池
				let userpoor = [
					{
						username: "xiaodi",
						password: "123456"
					},
					{
						username: "kim",
						password: "123456"
					}
				];
				//注册接口
				app.get("/api/register", (req, res) => {
					const { username, password } = req.query;
					const userlength = userpoor.filter(item => item.username == username)
						.length;
					if (userlength > 0) {
						res.json({
							success: false,
							message: "用户名已存在"
						});
					} else {
						res.json({
							success: true,
							message: "注册成功"
						});
					}
				});
				//登录接口
				let tokenkey = "xdclass";
				app.get("/api/login", (req, res) => {
					const { username, password } = req.query;
					if (
						(username == "xiaodi" && password == "123456") ||
						(username == "kim" && password == "123456")
					) {
						res.json({
							code: 0,
							message: "登录成功",
							token:
								tokenkey +
								"-" +
								username +
								"-" +
								(new Date().getTime() + 60 * 60 * 1000)
						});
					} else {
						res.json({
							code: 1,
							message: "账号或密码错误"
						});
					}
				});
				//首页轮播图的数据接口
				app.get("/api/banner", (req, res) => {
					res.json({
						data: [
							{
								url: "https://m.xdclass.net",
								image:
									"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png"
							},
							{
								url: "https://m.xdclass.net",
								image:
									"https://file.xdclass.net/video/2020/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98/%E9%9D%A2%E8%AF%95%E4%B8%93%E9%A2%98%E7%AC%AC%E4%B8%80%E5%AD%A3banner.png"
							},
							{
								url: "https://m.xdclass.net",
								image:
									"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png"
							}
						]
					});
				});
				//滚动分类接口
				app.get("/api/rollinglist", (req, res) => {
					res.json({
						data: [
							[
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
									label: "分类一"
								}
							],
							[
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								},
								{
									url: "https://m.xdclass.net",
									image:
										"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png",
									label: "分类一"
								}
							]
						]
					});
				});
			}
		}
	},

	css: {
		loaderOptions: {
			stylus: {
				"resolve url": true,
				import: ["./src/theme"]
			}
		}
	},

	pluginOptions: {
		"cube-ui": {
			postCompile: true,
			theme: true
		}
	}
};
