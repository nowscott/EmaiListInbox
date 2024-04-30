# EmaiListInbox

EmaiListInbox 是一个简单的订阅服务，允许用户订阅日常技术新闻。通过填写表单，用户可以用他们的名字和电子邮件地址来订阅新闻，订阅信息将被发送到一个 Notion 数据库。

## 功能

- 用户可以通过提供姓名和电子邮件地址来订阅新闻。
- 支持通过 Notion API 将订阅数据存储到 Notion 数据库。
- 使用 Vercel 进行云部署，实现快速和便捷的访问。

## 技术栈

- **前端**: HTML, CSS, JavaScript
- **后端**: Node.js 
- **API**: Notion API
- **部署**: Vercel

## 项目结构
```
/TechNewsLetter
|-- /public
|   |-- index.html
|   |-- script.js
|   |-- style.css
|-- .gitignore
|-- README.md
|-- package.json
```
- `public/` - 包含网站的静态文件。
- `index.html` - 订阅表单的主页面。
- `script.js` - 处理订阅表单逻辑的 JavaScript 文件。
- `style.css` - 定义网页样式的 CSS 文件。
- `.gitignore` - 指定 git 忽略的文件和目录。
- `README.md` - 项目的文档说明文件。
- `package.json` - Node.js 项目的依赖配置文件。

## 如何部署

要部署 TechNewsLetter 项目，请按照以下步骤操作：

1. **在本地配置项目**:
   克隆项目到本地并安装所有依赖。

```bash
   git clone https://github.com/your-username/TechNewsLetter.git
   cd TechNewsLetter
   npm install  # 如果有后端代码
```

1. **在 Vercel 中部署**:
   - 登录到 [Vercel](https://vercel.com) 并导入您的项目仓库。
   - 根据需要配置项目（例如，设置环境变量）。
   - 点击“Deploy”部署您的项目。

2. **设置 Notion API**:
   - 在 Notion 配置您的集成并获取 API 密钥。
   - 在 Vercel 的项目设置中添加 Notion API 密钥作为环境变量。

更多详细信息，请查看 [Vercel 文档](https://vercel.com/docs) 关于部署的部分。

## 贡献

如果您想对 TechNewsLetter 做出贡献，请随时克隆仓库并提交 pull 请求。

## 联系方式

如果您有任何问题，请通过 nowscott@qq.com 与我们联系。
