# 部署指南 - webpsy.net

## DNS 配置检查 ✅

根据您的 DNS 配置截图，配置是正确的：
- ✅ `webpsy.net` → `cname.vercel-dns.com` (已代理)
- ✅ `www` → `cname.vercel-dns.com` (已代理)

## 部署步骤

### 方法 1：使用 Vercel CLI（推荐）

1. **安装 Vercel CLI**（如果还没有）：
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**：
   ```bash
   vercel login
   ```

3. **部署项目**：
   ```bash
   vercel --prod
   ```

4. **配置域名**：
   - 部署完成后，在 Vercel Dashboard 中
   - 进入项目设置 → Domains
   - 添加 `webpsy.net` 和 `www.webpsy.net`
   - Vercel 会自动验证 DNS 配置

### 方法 2：使用 Git 集成（自动部署）

1. **初始化 Git**（如果还没有）：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **连接到 GitHub/GitLab/Bitbucket**：
   - 在 Vercel Dashboard 中导入项目
   - 选择您的 Git 仓库
   - Vercel 会自动检测 Vite 配置

3. **自动部署**：
   - 每次 push 到 main/master 分支会自动部署到生产环境

## 项目配置

### vercel.json
已创建 `vercel.json` 配置文件：
- ✅ 构建命令：`pnpm build`
- ✅ 输出目录：`dist`
- ✅ SPA 路由重写配置

### 构建输出
- ✅ 构建成功
- ✅ 输出文件在 `dist/` 目录
- ⚠️ 注意：bundle 大小较大（669KB），建议后续优化

## 验证部署

部署完成后，访问：
- https://webpsy.net
- https://www.webpsy.net

## 常见问题

### 1. 域名未生效
- 等待 DNS 传播（通常几分钟到几小时）
- 检查 Vercel Dashboard 中的域名状态

### 2. 404 错误
- 确保 `vercel.json` 中的 rewrites 配置正确
- 检查路由配置

### 3. 样式丢失
- 确保 Tailwind CSS CDN 链接正常
- 检查静态资源路径

## 下一步

1. ✅ 运行 `vercel --prod` 部署
2. ✅ 在 Vercel Dashboard 中配置域名
3. ✅ 等待 DNS 传播
4. ✅ 测试访问 webpsy.net

