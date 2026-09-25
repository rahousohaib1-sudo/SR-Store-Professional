$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Yellow
Write-Host " SR STORE - APPLY PHASES 1 TO 6" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow
Write-Host ""

$repo = Read-Host "Enter the full path of your sr-store-website folder"

if ([string]::IsNullOrWhiteSpace($repo)) {
    throw "Repository path cannot be empty."
}

$repo = $repo.Trim('"').Trim()

if (-not (Test-Path -LiteralPath $repo -PathType Container)) {
    throw "Repository folder not found: $repo"
}

$packageRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$source = Join-Path $packageRoot "sr-store-ui-phases-1-6"

if (-not (Test-Path -LiteralPath $source -PathType Container)) {
    throw "Package folder not found: $source"
}

Write-Host ""
Write-Host "Copying UI files..." -ForegroundColor Cyan

Get-ChildItem -LiteralPath $source -Recurse -File | ForEach-Object {
    $relative = $_.FullName.Substring($source.Length).TrimStart([char]'\', [char]'/')
    $destination = Join-Path $repo $relative
    $destinationFolder = Split-Path -Parent $destination

    if (-not (Test-Path -LiteralPath $destinationFolder -PathType Container)) {
        New-Item -ItemType Directory -Force -Path $destinationFolder | Out-Null
    }

    Copy-Item -LiteralPath $_.FullName -Destination $destination -Force
    Write-Host ("  OK  " + $relative) -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host " DONE - PHASES 1 TO 6 APPLIED SUCCESSFULLY" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "NOT modified by this script:" -ForegroundColor Cyan
Write-Host "  - n8n workflows"
Write-Host "  - Google Sheets"
Write-Host "  - Yalidine"
Write-Host "  - .env.local"
Write-Host "  - existing CartProvider"
Write-Host ""
Write-Host "Next: place your reference images in public/hero, public/collections, public/products and public/banners." -ForegroundColor Yellow
Write-Host ""
