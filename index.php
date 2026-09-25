<?php
    $pageTitle = 'SR Store | الرئيسية';
    require __DIR__ . '/data/products.php';
    $products = require __DIR__ . '/data/products.php';
    require __DIR__ . '/includes/header.php';
?>

<main>
    <section class="hero">
        <div class="container hero-wrap">
            <div>
                <span class="eyebrow">SR STORE</span>
                <h1>مستلزمات الراحة اليومية للعائلة</h1>
                <p>منتجات عملية ومريحة وآمنة للأطفال والرضع، تم اختيارها بعناية لتناسب أسلوب حياتك المنزلي والتنقل اليومي.</p>
                <div class="hero-actions">
                    <a href="products.php" class="sr-gold-button">تسوق الآن</a>
                    <a href="checkout.php" class="sr-outline-button">إتمام الطلب</a>
                </div>
            </div>

            <div class="hero-visual">
                <img src="public/products/حاملة أطفال مريحة.jpeg" alt="منتجات SR Store">
            </div>
        </div>
    </section>

    <section class="container section">
        <div class="trust-row">
            <div class="trust-item">
                <strong>توصيل سريع</strong>
                <div>خلال 24-48 ساعة</div>
            </div>
            <div class="trust-item">
                <strong>جودة مضمونة</strong>
                <div>مضامين مختارة بعناية</div>
            </div>
            <div class="trust-item">
                <strong>دعم متواصل</strong>
                <div>رد خلال دقائق</div>
            </div>
            <div class="trust-item">
                <strong>استرجاع سهل</strong>
                <div>في حال عدم الرضا</div>
            </div>
        </div>
    </section>

    <section class="container section" id="collections">
        <div class="section-head">
            <span class="eyebrow">المجموعات</span>
            <h2>اختر ما يناسب عائلتك</h2>
        </div>

        <div class="section-grid">
            <article class="category-card">
                <div class="mini-visual"></div>
                <h3>SR Kids</h3>
                <p>منتجات عملية ومريحة للأطفال والرضع بأسلوب أنيق ومريح.</p>
            </article>
            <article class="category-card">
                <div class="mini-visual"></div>
                <h3>SR Mom</h3>
                <p>حلول يومية تساعد الأم على تنظيم وقتها وتوفير الراحة.</p>
            </article>
            <article class="category-card">
                <div class="mini-visual"></div>
                <h3>SR Family</h3>
                <p>منتجات عملية تعزز الراحة في المنزل وفي التنقل اليومي.</p>
            </article>
        </div>
    </section>

    <section class="container section">
        <div class="section-head">
            <span class="eyebrow">منتجات مميزة</span>
            <h2>أفضل المنتجات</h2>
        </div>

        <div class="featured-grid">
            <?php foreach (array_slice($products, 0, 4) as $product): ?>
                <article class="product-card">
                    <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                    <div class="product-body">
                        <div class="product-meta">
                            <span class="badge"><?php echo $product['badge']; ?></span>
                            <span><?php echo $product['category']; ?></span>
                        </div>
                        <h3><?php echo $product['name']; ?></h3>
                        <div class="price-box">
                            <span class="price"><?php echo number_format($product['price']); ?> ر.س</span>
                            <span class="old-price"><?php echo number_format($product['oldPrice']); ?> ر.س</span>
                        </div>
                        <div class="product-actions">
                            <form method="post" action="cart.php">
                                <input type="hidden" name="product_id" value="<?php echo $product['id']; ?>">
                                <input type="hidden" name="quantity" value="1">
                                <button type="submit" name="add_to_cart" class="btn-small">أضف للسلة</button>
                            </form>
                            <a href="products.php" class="link-btn">عرض</a>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="container section">
        <div class="offer-box">
            <div>
                <span class="eyebrow">عرض خاص</span>
                <h3>خصم 30% على منتجات الأطفال والأم</h3>
                <p>تسوق الآن واستفد من عروضنا المميزة على منتجات الراحة اليومية والملائمة للعائلة.</p>
                <div class="hero-actions">
                    <a href="products.php" class="sr-gold-button">اكتشف العروض</a>
                </div>
            </div>
            <div>
                <img src="public/products/family-product.jpeg" alt="عرض خاص" style="border-radius: 24px;">
            </div>
        </div>
    </section>

    <section class="container section" id="reviews">
        <div class="section-head">
            <span class="eyebrow">التقييمات</span>
            <h2>ماذا يقول عملاؤنا</h2>
        </div>

        <div class="review-grid">
            <article class="review-card">
                <div class="stars">★★★★★</div>
                <h3>أحمد</h3>
                <p>منتجات ممتازة، مريحة جدًا في الاستخدام اليومي. الخدمة كانت سريعة والمراجعة ممتازة.</p>
            </article>
            <article class="review-card">
                <div class="stars">★★★★★</div>
                <h3>سارة</h3>
                <p>التصميم عملي جدًا والألوان أنيقة، خاصة الحاملة. أنصح بها لأي أم تحتاج الراحة.</p>
            </article>
            <article class="review-card">
                <div class="stars">★★★★★</div>
                <h3>سالم</h3>
                <p>سعر مناسب وجودة عالية. الموقع سهل وسريعة جدًا في الطلب والتوصيل.</p>
            </article>
        </div>
    </section>

    <section class="container section">
        <div class="section-head">
            <span class="eyebrow">الأسئلة الشائعة</span>
            <h2>معلومات هامة</h2>
        </div>

        <div class="faq-grid">
            <article class="faq-item">
                <h3>هل التوصيل مجاني؟</h3>
                <p>نعم، على الطلبات فوق 300 ر.س يتم التوصيل مجانًا داخل المدن الرئيسية.</p>
            </article>
            <article class="faq-item">
                <h3>هل استرداد المنتجات سهل؟</h3>
                <p>نعم، يمكن إرجاع المنتجات خلال 7 أيام من الاستلام إذا كانت بحالة جيدة.</p>
            </article>
            <article class="faq-item">
                <h3>كيف أطلب؟</h3>
                <p>اختر المنتج، أضفه للسلة، ثم أكمل بياناتك في صفحة الدفع لإتمام الطلب.</p>
            </article>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
