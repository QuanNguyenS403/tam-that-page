# ============================================================
# Tam Thất Quân Nguyễn — Image Rename Script
# Run this from the project root: .\rename-images.ps1
# ============================================================

$imgDir = Join-Path $PSScriptRoot "assets\images"

Write-Host "=== Image Rename Script ===" -ForegroundColor Cyan
Write-Host "Directory: $imgDir`n"

# Step 1: Create copies FIRST (before source files are renamed)
$copies = @{
    "5.png" = "gift-packaging-set.png"   # Gift section uses its own copy
    "1.png" = "product-thumb-1.png"       # Thumb 1 = copy of main hero
}

foreach ($src in $copies.Keys) {
    $srcPath = Join-Path $imgDir $src
    $dstPath = Join-Path $imgDir $copies[$src]
    if (Test-Path $srcPath) {
        Copy-Item $srcPath $dstPath -Force
        Write-Host "[COPY] $src -> $($copies[$src])" -ForegroundColor Green
    } else {
        Write-Host "[SKIP] $src not found" -ForegroundColor Yellow
    }
}

# Step 2: Rename all numbered files to semantic names
$renames = @{
    "1.png" = "product-hero-main.png"
    "2.png" = "heritage-tradition-banner.png"
    "3.png" = "product-thumb-4.png"
    "4.png" = "video-cover-poster.png"
    "5.png" = "product-thumb-2.png"
    "6.png" = "quality-certifications-ocop-iso.png"
    "7.png" = "daily-wellness-guide.png"
    "8.png" = "product-thumb-3.png"
    "9.png" = "herbal-preparation-story.png"
}

foreach ($old in $renames.Keys) {
    $srcPath = Join-Path $imgDir $old
    $dstPath = Join-Path $imgDir $renames[$old]
    if (Test-Path $srcPath) {
        Rename-Item $srcPath -NewName $renames[$old] -Force
        Write-Host "[RENAME] $old -> $($renames[$old])" -ForegroundColor Green
    } else {
        Write-Host "[SKIP] $old not found (already renamed?)" -ForegroundColor Yellow
    }
}

# Step 3: Verify
Write-Host "`n=== Final File Listing ===" -ForegroundColor Cyan
Get-ChildItem (Join-Path $imgDir "*.png") | ForEach-Object {
    Write-Host "  $($_.Name) ($([math]::Round($_.Length/1KB)) KB)"
}

Write-Host "`nDone! All images renamed to semantic names." -ForegroundColor Green
