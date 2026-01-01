# 解决 Vercel 部署权限问题

## 问题

错误信息：
```
Error: Git author 2819404727@qq.com must have access to the team cygnenoir's projects on Vercel to create deployments.
```

**原因**：Git 历史记录中的提交使用了 `2819404727@qq.com`，但这个邮箱对应的账户没有访问 `cygnenoir` 团队的权限。

## 解决方案

### 方案 1：在 Vercel Dashboard 中添加团队成员（推荐）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 进入 **Settings** → **Team** → **Members**
3. 添加 `2819404727@qq.com` 对应的账户为团队成员
4. 或者联系团队管理员添加该账户

### 方案 2：创建新提交使用正确邮箱

```powershell
# 1. 确保 Git 配置正确
git config user.email "a406113864@hotmail.com"
git config user.name "huangbuqing"

# 2. 提交当前更改
git add .
git commit -m "Deploy to Vercel"

# 3. 部署
npx vercel --prod --yes
```

### 方案 3：使用 Vercel Dashboard 直接部署（最简单）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 找到项目 `hacker-retreat`
3. 点击 **Deployments** → **Create Deployment**
4. 上传 `dist` 目录或连接 Git 仓库

### 方案 4：使用 Git 连接（自动部署）

如果项目已连接到 Git 仓库：

1. 在 Vercel Dashboard 中，进入项目设置
2. 确保 Git 集成已配置
3. 推送代码到 Git 仓库会自动触发部署
4. 使用当前已登录的账户（cygnenoir）进行部署

## 当前状态

- ✅ Vercel 已登录：`cygnenoir`
- ✅ 项目已关联：`hacker-retreat`
- ✅ Git 配置：`a406113864@hotmail.com`
- ❌ Git 历史：包含 `2819404727@qq.com` 的提交

## 推荐操作

**最快的方法**：使用 Vercel Dashboard 直接部署，绕过 Git 检查。

1. 访问 https://vercel.com/dashboard
2. 选择项目 `hacker-retreat`
3. 使用手动部署或 Git 集成部署

