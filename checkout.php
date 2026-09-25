<?php
$pageTitle = 'SR Store | الدفع';
$products = require __DIR__ . '/data/products.php';
session_start();

$cartItems = [];
$total = 0;
if (!empty($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $productId => $quantity) {
        foreach ($products as $product) {
            if ($product['id'] === $productId) {
                $lineTotal = $product['price'] * $quantity;
                $total += $lineTotal;
                $cartItems[] = [
                    'name' => $product['name'],
                    'quantity' => $quantity,
                    'price' => $product['price'],
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
            <span class="eyebrow">الدفع</span>
            <h1>إتمام الطلب</h1>
        </div>
    </section>

    <section class="container section">
        <div class="checkout-layout">
            <div class="checkout-card">
                <form action="#" method="post">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="full_name">الاسم الكامل</label>
                            <input id="full_name" type="text" placeholder="أدخل اسمك الكامل">
                        </div>
                        <div class="form-group">
                            <label for="phone">رقم الهاتف</label>
                            <input id="phone" type="tel" placeholder="05xxxxxxxx">
                        </div>
                        <div class="form-group full">
                            <label for="address">العنوان</label>
                            <input id="address" type="text" placeholder="المدينة، الحي، الشارع">
                        </div>
                        <div class="form-group full">
                            <label for="notes">ملاحظات الطلب</label>
                            <textarea id="notes" placeholder="إضافة ملاحظات أو تعليمات خاصة"></textarea>
                        </div>
                    </div>

                    <div style="margin-top: 18px;">
                        <button type="submit" class="sr-gold-button">تأكيد الطلب</button>
                    </div>
                </form>
            </div>

            <aside class="summary-box">
                <h3>ملخص الطلب</h3>
                <?php if (empty($cartItems)): ?>
                    <p>لا توجد عناصر في السلة الآن.</p>
                <?php else: ?>
                    <?php foreach ($cartItems as $item): ?>
                        <div class="row">
                            <span><?php echo $item['name']; ?> × <?php echo $item['quantity']; ?></span>
                            <span><?php echo number_format($item['lineTotal']); ?> ر.س</span>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>

                <div class="row total">
                    <span>الإجمالي</span>
                    <span><?php echo number_format($total); ?> ر.س</span>
                </div>
            </aside>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
