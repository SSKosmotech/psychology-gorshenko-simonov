<template>
    <section id="payment">
            <div class="container">
                <h1>Оплата</h1>
                <div class="payment_method">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>01</p>
                            <h2>На картку</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div>
    
                    <div class="wrap_img">
                        <picture>
                            <source srcset="@/assets/images/payment-card-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-card.jpg" alt="example"/>
                        </picture>
                        <!-- <img src="@/assets/images/payment-card.jpg" alt="Оплата на картку"> -->
                    </div>
                </div>
                <div class="payment_method flex_row_reverse payment_method_reverse">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>02</p>
                            <h2>Готівка</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div>
    
                    <div class="wrap_img wrap_img_reverse">
                        <picture>
                            <source srcset="@/assets/images/payment-cash-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-cash.jpg" alt="example"/>
                        </picture>
                        <!-- <img src="@/assets/images/payment-cash.jpg" alt="Оплата готівкою"> -->
                    </div>
                </div>
                <div class="payment_method">
                    <div class="wrap_content">
                        <div class="title_wrap">
                            <p>03</p>
                            <h2>На рахунок</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn_red">Сплатити</button>
                    </div>
    
                    <div class="wrap_img">
                        <picture>
                            <source srcset="@/assets/images/payment-check-1350.jpg" media="(max-width: 1350px)"/>
                            <img src="@/assets/images/payment-check.jpg" alt="example"/>
                        </picture>
                        <!-- <img src="@/assets/images/payment-check.jpg" alt="Оплата на рахунок"> -->
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'PaymentList'
}
</script>