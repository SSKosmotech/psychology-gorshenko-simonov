<template>
    <section id="for_psychologists_form" v-if="psychologistsInfoData !== null">
        <!-- <div class="container"> -->

            <h2>{{ psychologistsInfoData.title_form }}</h2>

            <div v-if="answer.success" class="alert alert-success">
                <div>
                    {{ answer.text }}
                </div>
            </div>
            <div v-if="answer.success === false" class="alert alert-danger">
                <div>
                    {{ answer.text }}
                </div>
            </div>

            <form id="feedback_for_psychologists_form" @submit.prevent="checkAndSend">
                <input type="text" id="name" :class="{'is-invalid': errors.name !== ''}" v-model.trim="name" @focus="resetError('name')" :placeholder="psychologistsInfoData?.placeholders?.name">
                <label for="name"></label>
                <div class="wrap_error">
                    <div class="error_text" :class="{'error_text_up': errors.name !== ''}">{{errors.name}}</div>
                </div>
                
                <input type="text" id="tel" :class="{'is-invalid': errors.phone !== ''}" v-model.trim="phone" @focus="resetError('phone')" :placeholder="psychologistsInfoData?.placeholders?.phone">
                <label for="tel"></label>
                <div class="wrap_error">
                    <div class="error_text" :class="{'error_text_up': errors.phone !== ''}">{{ errors.phone }}</div>
                </div>
                
                <button type="submit" class="btn btn_m">{{ psychologistsInfoData.button }}</button>
            </form>

        <!-- </div> -->
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ForPsychologistsForm',
    data() {
        return {
            psychologistsInfoData: null,
            telegramInfo: '',
            API_BOT_ID: '5339742012:AAFVS4C4_rDpQZ_1UEzICsjDJxSltd5Jii4',
            CHAT_ID: '-1001780131978',
            name: '',
            phone: '',
            errors: {
                name: '',
                phone: '',
            },
            answer: {
                success: null,
                text: ''
            }
        };
    },
    created() {
        axios
            .get("/data/psychologistsInfoData.json")
            .then(resp => {
            this.psychologistsInfoData = resp.data;
        })
            .catch(err => {
            this.$toast.error(err);
        });
    },
    methods: {
        checkAndSend(){
            let valid = true

            if(this.name === ''){
                this.errors.name = 'Введіть ім\'я';
                valid = false
            }

            if(this.name.length === 1){
                this.errors.name = 'Введіть хоча б 2 літери';
                valid = false
            }

            if(this.phone === ''){
                this.errors.phone = 'Введіть телефон';
                valid = false
            }else{
                if(this.isValidPhone(this.phone) === false){
                    this.errors.phone = 'Введіть валідний телефон'
                    valid = false
                }
            }

            if(valid){
                const message_text = "<i>Заявка з форми на сторінці \"Для психологів\"</i>"+
                "%0a<b>Ім'я: </b>"+this.name+
                "%0a<b>Телефон: </b>"+this.phone
                axios
                .get(`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`)
                .then(resp=>{
                    // return resp.json()
                    return this.telegramInfo = resp.data
                })
                .then(resp=>{
                    if(this.telegramInfo.ok){
                        this.answer.success = true
                        this.answer.text = 'Повідомлення відправлено.'
                        this.name = this.phone = this.message = ''
                    } else {
                        this.answer.success = false
                        this.answer.text = resp.description
                    }
                    setTimeout(()=>{
                        this.answer.success = null
                        this.answer.text = ''
                    }, 3000)
                })
                .catch(()=>{
                    this.answer.success = false
                    this.answer.text = 'AJAX error. Please try again later.'
                })
            }
        },
        resetError(field) {
            this.errors[field] = '';
        },
        isValidPhone(phone){
            return Boolean(phone.match(
                //eslint-disable-next-line
                /^((8|\+3)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\-]{7,10}$/
                // /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
                // /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm
              ));
        }
    }
}
</script>