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
