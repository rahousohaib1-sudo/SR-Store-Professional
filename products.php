<?php
$pageTitle = 'SR Store | المنتجات';
$products = require __DIR__ . '/data/products.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_to_cart'])) {
    session_start();
    $productId = $_POST['product_id'] ?? '';
    $quantity = max(1, (int) ($_POST['quantity'] ?? 1));

    if (!empty($productId)) {
        if (!isset($_SESSION['cart'][$productId])) {
            $_SESSION['cart'][$productId] = 0;
        }
        $_SESSION['cart'][$productId] += $quantity;
    }
}

require __DIR__ . '/includes/header.php';
?>

<main>
    <section class="page-head">
        <div class="container">
            <span class="eyebrow">المنتجات</span>
            <h1>كل المنتجات</h1>
            <p>اكتشف تشكيلة مختارة بعناية من منتجات الراحة للعائلة.</p>
        </div>
    </section>

    <section class="container section">
        <div class="products-grid">
            <?php foreach ($products as $product): ?>
                <article class="product-card">
                    <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                    <div class="product-body">
                        <div class="product-meta">
                            <span class="badge"><?php echo $product['badge']; ?></span>
                            <span><?php echo $product['category']; ?></span>
                        </div>
                        <h3><?php echo $product['name']; ?></h3>
                        <p><?php echo $product['description']; ?></p>
                        <div class="price-box">
                            <span class="price"><?php echo number_format($product['price']); ?> ر.س</span>
                            <span class="old-price"><?php echo number_format($product['oldPrice']); ?> ر.س</span>
                        </div>
                        <div class="product-actions">
                            <form method="post" action="products.php">
                                <input type="hidden" name="product_id" value="<?php echo $product['id']; ?>">
                                <input type="hidden" name="quantity" value="1">
                                <button type="submit" name="add_to_cart" class="btn-small">أضف للسلة</button>
                            </form>
                            <a href="checkout.php" class="link-btn">شراء</a>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
