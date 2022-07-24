<template>
    <div id="feedback_form" v-if="feedbackFormInfoData !== null">
       <h3>{{ feedbackFormInfoData.title }}</h3>
       <p>{{ feedbackFormInfoData.feedback_form_text }}</p>

       <form class="form_feedback" @submit.prevent="checkAndSend">

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

                <label for="name"></label>
                <input type="text" id="name" :class="{'is-invalid': errors.name !== ''}" v-model.trim="name" @focus="resetError('name')" :placeholder="feedbackFormInfoData?.placeholders?.name">
                <div class="wrap_error">
                    <div class="error_text" :class="{'error_text_up': errors.name !== ''}">{{errors.name}}</div>
                </div>
                
                <label for="text"></label>
                <input type="text" id="tel" :class="{'is-invalid': errors.phone !== ''}" v-model.trim="phone" @focus="resetError('phone')" :placeholder="feedbackFormInfoData?.placeholders?.phone">
                <div class="wrap_error">
                    <div class="error_text" :class="{'error_text_up': errors.phone !== ''}">{{ errors.phone }}</div>
                </div>
                
                <!-- <textarea id="worries" :placeholder="feedbackFormInfoData?.placeholders?.worries" required> </textarea> -->
                <label for="worries"></label>
                <input type="text" id="worries" :class="{'is-invalid': errors.message !== ''}" v-model.trim="message" @focus="resetError('message')" :placeholder="feedbackFormInfoData?.placeholders?.worries">
                <div class="wrap_error">
                    <div class="error_text" :class="{'error_text_up': errors.message !== ''}">{{ errors.message }}</div>
                </div>

                <button type="submit" class="btn btn_xs">{{ feedbackFormInfoData.button }}</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FeedbackForm',
    data () {
        return {
            feedbackFormInfoData: null,
            telegramInfo: '',
            API_BOT_ID: '5339742012:AAFVS4C4_rDpQZ_1UEzICsjDJxSltd5Jii4',
            CHAT_ID: '-1001780131978',
            name: '',
            phone: '',
            message: '',
            errors: {
                name: '',
                phone: '',
                message: '',
            },
            answer: {
                success: null,
                text: ''
            }
        }
    },
    created() {
        axios
            .get('/data/feedbackFormInfo.json')
            .then(resp=>{
                this.feedbackFormInfoData = resp.data
            })
            .catch(err=>{
                this.$toast.error(err)
            })

    },
    methods: {
        checkAndSend(){
            // alert('Send method!');
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

            if(this.message === ''){
                this.errors.message = 'Введіть повідомлення';
                valid = false
            }

            if(valid){
                const message_text = "<i>Заявка з вспливаючої форми \"Зворотній зв'язок\"</i>"+
                "%0a<b>Ім'я: </b>"+this.name+
                "%0a<b>Телефон: </b>"+this.phone+
                "%0a<b>Повідомлання: </b>"+this.message
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