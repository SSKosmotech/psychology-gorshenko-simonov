<template>
    <section id="for_psychologists">
            <div class="container">
                <div class="psychologists_content_wrap">
                    <div class="wrap_img">
                        <img src="@/assets/images/for-psychologists.jpg" alt="Пропозиції для психологів">
                    </div>

                    <div class="wrap_content">
                        <h1>Для психологів</h1>
                        <p>Психологічний центр Gorshenko пропонує співпрацю психологам. Ви можете арендувати у нашому центрі затишні кабінети для індивідуальної, сімейної та групової терапії. Кабінети обладнані диваном та кріслами, Кабінет для дитячої психотерапії обладнано інвентарем для роботи з дітьми різного віку (наприклад пісочницею, кольоровими олівцями, фломастерами та іншим)</p>
                        <p>Або стати повноцінним членом команди Gorshenko і отримати нашу підтримку. Ми будемо з вами саме тоді, коли ви цього потребуєте, допомагаючи вирішити будь-яке питання будь то допомога з оформлення вашого профілю чи технічна підтримка.</p>
                    </div>
                </div>
               
            </div>
    </section>

    <section id="for_psychologists_form">
        <div class="container">

            <h2>Відправ свої контакти</h2>

            <form action="#">
                <input type="text" id="name" name="name" placeholder="Марія" required>
                <label for="name"></label>
                
                <input type="tel" id="tel" name="tel" placeholder="+ 38 (000) 000-00-00" required>
                <label for="tel"></label>
                
                <button type="submit" class="btn btn_m">Відправити</button>
            </form>

        </div>
    </section>
</template>

<script>
export default {
    name: 'ForPsychologistsList1'
}
</script>