<?php
$pageTitle = 'SR Store | السلة';
session_start();
$products = require __DIR__ . '/data/products.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_cart'])) {
    foreach ($_POST['qty'] as $id => $qty) {
        $qty = max(0, (int) $qty);
        if ($qty <= 0) {
            unset($_SESSION['cart'][$id]);
        } else {
            $_SESSION['cart'][$id] = $qty;
        }
    }
}

$cartItems = [];
$total = 0;
if (!empty($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $productId => $quantity) {
        foreach ($products as $product) {
            if ($product['id'] === $productId) {
                $price = $product['price'];
                $lineTotal = $price * $quantity;
                $total += $lineTotal;

                $cartItems[] = [
                    'id' => $product['id'],
                    'name' => $product['name'],
                    'price' => $price,
                    'quantity' => $quantity,
                    'image' => $product['image'],
                    'lineTotal' => $lineTotal,
                ];
                break;
            }
        }
    }
}

require __DIR__ . '/includes/header.php';
?>

<main>
    <section class="page-head">
        <div class="container">
            <span class="eyebrow">السلة</span>
            <h1>محتوى الطلب</h1>
        </div>
    </section>

    <section class="container section">
        <div class="cart-layout">
            <div>
                <?php if (empty($cartItems)): ?>
                    <div class="cart-item">
                        <div>
                            <h3>السلة فارغة</h3>
                            <p>أضف بعض المنتجات للاستمرار في الطلب.</p>
                            <a href="products.php" class="sr-gold-button" style="margin-top:14px;">تسوق الآن</a>
                        </div>
                    </div>
                <?php else: ?>
                    <form method="post" action="cart.php">
                        <?php foreach ($cartItems as $item): ?>
                            <div class="cart-item">
                                <div class="left">
                                    <img src="<?php echo $item['image']; ?>" alt="<?php echo $item['name']; ?>">
                                    <div>
                                        <h3><?php echo $item['name']; ?></h3>
                                        <p><?php echo number_format($item['price']); ?> ر.س</p>
                                    </div>
                                </div>
                                <div class="left">
                                    <input type="number" name="qty[<?php echo $item['id']; ?>]" value="<?php echo $item['quantity']; ?>" min="0" style="width: 70px; background: rgba(255,255,255,0.02); border: 1px solid var(--sr-border); border-radius: 12px; color: white; padding: 10px;">
                                    <strong><?php echo number_format($item['lineTotal']); ?> ر.س</strong>
                                </div>
                            </div>
                        <?php endforeach; ?>

                        <div class="hero-actions">
                            <button type="submit" name="update_cart" class="sr-outline-button">تحديث السلة</button>
                            <a href="checkout.php" class="sr-gold-button">إتمام الطلب</a>
                        </div>
                    </form>
                <?php endif; ?>
            </div>

            <aside class="summary-box">
                <h3>ملخص الطلب</h3>
                <div class="row">
                    <span>المجموع</span>
                    <span><?php echo number_format($total); ?> ر.س</span>
                </div>
                <div class="row">
                    <span>التوصيل</span>
                    <span>مجاني</span>
                </div>
                <div class="row total">
                    <span>الإجمالي</span>
                    <span><?php echo number_format($total); ?> ر.س</span>
                </div>
            </aside>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
