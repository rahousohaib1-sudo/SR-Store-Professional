<?php
session_start();

$cartCount = 0;
if (!empty($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $qty) {
        $cartCount += (int) $qty;
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'SR Store'; ?></title>
    <meta name="description" content="SR Store — متجر عربي للأم والطفل والعائلة.">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.php" class="brand">
                <span class="brand-mark">SR</span>
                <span class="brand-text">STORE</span>
            </a>

            <nav class="main-nav" aria-label="التنقل الرئيسي">
                <a href="index.php">الرئيسية</a>
                <a href="products.php">المنتجات</a>
                <a href="#collections">المجموعات</a>
                <a href="#reviews">التقييمات</a>
                <a href="checkout.php">الدفع</a>
            </nav>

            <div class="header-actions">
                <a href="cart.php" class="cart-link">
                    السلة
                    <span class="cart-badge"><?php echo $cartCount; ?></span>
                </a>
            </div>
        </div>
    </header>
