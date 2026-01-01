# 部署到 webpsy.net 指南

## ✅ DNS 配置检查

您的 DNS 配置**完全正确**：
- ✅ `webpsy.net` → `cname.vercel-dns.com` (已代理)
- ✅ `www` → `cname.vercel-dns.com` (已代理)

这意味着域名已经准备好连接到 Vercel。

## 📦 构建状态

✅ **项目已成功构建**
- 输出目录：`dist/`
- 构建文件：`dist/index.html` 和 `dist/assets/`

## 🚀 部署步骤

### 步骤 1：登录 Vercel

```bash
npx vercel login
```

这会打开浏览器让您登录 Vercel 账户。

### 步骤 2：部署到生产环境

```bash
npx vercel --prod
```

或者使用完整命令：

```bash
npx vercel --prod --yes
```

### 步骤 3：配置域名

部署完成后：

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 找到项目 `hacker-retreat`
3. 进入 **Settings** → **Domains**
4. 添加域名：
   - `webpsy.net`
   - `www.webpsy.net`
5. Vercel 会自动验证 DNS 配置（应该立即通过，因为 DNS 已配置）

## 📋 项目配置

### vercel.json
已创建并配置：
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### .vercel/project.json
项目已关联：
- 项目 ID: `prj_ibe0YvfAsmsZ7VJJxRxr5EhCHKCS`
- 项目名: `hacker-retreat`
- 团队: `team_Ievv2la9A8UZn5dzJ2OSX0gB`

## ✅ 验证清单

部署前检查：
- ✅ 项目已构建 (`dist/` 目录存在)
- ✅ `vercel.json` 配置正确
- ✅ DNS 配置正确（webpsy.net → Vercel）
- ✅ `.vercel/project.json` 存在

## 🎯 快速部署命令

```bash
# 1. 登录（首次需要）
npx vercel login

# 2. 部署到生产环境
npx vercel --prod --yes
```

## 📝 部署后

部署成功后，您会看到：
- 部署 URL（例如：`hacker-retreat-xxx.vercel.app`）
- 在 Vercel Dashboard 中添加 `webpsy.net` 域名
- 等待几分钟让 DNS 生效
- 访问 https://webpsy.net 查看网站

## ⚠️ 注意事项

1. **Bundle 大小警告**：当前 bundle 为 669KB，建议后续优化
2. **Tailwind CDN**：生产环境建议使用本地 Tailwind CSS
3. **静态资源**：确保 `public/` 目录中的文件正确复制到 `dist/`

## 🔧 如果遇到问题

### 问题：部署失败
- 检查 `vercel.json` 配置
- 确认构建命令正确
- 查看 Vercel Dashboard 的构建日志

### 问题：域名无法访问
- 检查 Vercel Dashboard 中的域名状态
- 确认 DNS 配置正确
- 等待 DNS 传播（最多 24 小时，通常几分钟）

### 问题：页面显示 404
- 检查 `vercel.json` 中的 rewrites 配置
- 确认 `dist/index.html` 存在

