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
/EmaiListInbox
|-- /public
    |-- favicon.ico
    |-- index.html
    |-- script.js
    |-- success.html
|-- /api
    |-- sendNotificationEmail.js
    |-- addSubscriberToNotion.js
|-- LICENSE
|-- server.js
|-- README.md
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- main.py
```
以下是每个文件的简介：

## 文件简介

### public/
这个目录包含静态文件和前端代码。

- **favicon.ico**: 网站的图标文件，显示在浏览器标签页上。
- **index.html**: 订阅页面的主HTML文件，用户在这里输入他们的姓名和电子邮件地址进行订阅。
- **script.js**: 处理前端表单提交的JavaScript代码，将用户输入的数据发送到服务器。
- **success.html**: 用户成功订阅后的确认页面。

### api/
这个目录包含服务器端的功能模块，用于处理Notion写入和邮件发送。

- **sendNotificationEmail.js**: 封装发送电子邮件通知的功能，使用nodemailer库。
- **addSubscriberToNotion.js**: 封装将订阅者信息写入Notion数据库的功能，使用node-fetch库与Notion API交互。

### LICENSE
项目的许可证文件，规定了项目的使用和分发权限。

### server.js
服务器的主入口文件，设置Express服务器并处理API请求，将订阅者信息写入Notion并发送通知邮件。

### README.md
项目的说明文件，包含项目简介、安装和使用说明。

### .gitignore
Git忽略文件，列出不需要添加到版本控制中的文件和目录（如node_modules、日志文件等）。

### package.json
Node.js项目的配置文件，包含项目的元数据、依赖项和脚本命令。


 
## 如何部署

要部署 TechNewsLetter 项目，请按照以下步骤操作：

1. **在本地配置项目**:
   克隆项目到本地并安装所有依赖。

```bash
   git clone https://github.com/nowscott/EmaiListInbox.git
   cd EmaiListInbox
   npm install  
```

1. **在 Vercel 中部署**:
   - 登录到 [Vercel](https://vercel.com) 并导入您的项目仓库。
   - 根据需要配置项目（例如，设置环境变量）。
   - 点击“Deploy”部署您的项目。

2. **设置环境变量**:
   - 在 Notion 配置您的集成并获取 API 密钥。
   - 在 Vercel 的项目设置中添加 Notion API 密钥作为环境变量。
   - 在 Vercel 的项目设置中添加 Notion API 密钥作为环境变量。

更多详细信息，请查看 [Vercel 文档](https://vercel.com/docs) 关于部署的部分。

## 贡献

如果您想对 EmaiListInbox 做出贡献，请随时克隆仓库并提交 pull 请求。

## 联系方式

如果您有任何问题，请通过 nowscott@qq.com 与我们联系。
