# Vercel 部署脚本
# 使用方法: .\deploy.ps1

Write-Host "🚀 开始部署到 Vercel..." -ForegroundColor Green

# 检查是否已构建
if (-not (Test-Path "dist")) {
    Write-Host "❌ dist 目录不存在，正在构建..." -ForegroundColor Yellow
    pnpm build
}

# 检查构建结果
if (-not (Test-Path "dist\index.html")) {
    Write-Host "❌ 构建失败，请检查错误信息" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建完成" -ForegroundColor Green
Write-Host ""
Write-Host "📦 开始部署..." -ForegroundColor Cyan

# 部署到生产环境
npx vercel --prod --yes

Write-Host ""
Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host ""
Write-Host "📝 下一步：" -ForegroundColor Yellow
Write-Host "1. 访问 https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. 进入项目 Settings → Domains" -ForegroundColor White
Write-Host "3. 添加域名: webpsy.net 和 www.webpsy.net" -ForegroundColor White
Write-Host "4. 等待 DNS 生效（通常几分钟）" -ForegroundColor White

