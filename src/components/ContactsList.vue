<template>
    <section id="contacts" v-if="contactsListInfoData !== null">

            <div class="contacts_section_wrap">
                <div class="contacts_wrap">
                    <div class="cont_left_wrap">
                         <div v-for="(contacts, index) in contactsListInfoData.contacts" :key="index">
                            <p>{{ contacts.contact_type }}</p>
                            <a class="contacts_icons" :href="contacts.href" rel="nofollow, noreferrer" :title="contacts.contact_type">
                               <div v-html="contacts.svg"></div>
                               <span>{{ contacts.contact_data }}<b>{{ contacts.contact_data_b }}</b></span>
                            </a>
                         </div>
                    </div>
                    <div class="cont_right_wrap">
                        <div v-for="(socials, index) in contactsListInfoData.socials" :key="index">
                            <p>{{ socials.social_type }}</p>
                            <a class="contacts_icons" itemprop="url" :href="socials.href" rel="nofollow, noreferrer" target="_blank" title="{{ socials.social_type }}">
                                <div v-html="socials.svg"></div>
                                <span>{{ socials.social_data }}</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div class="contacts_map_wrap">
                    <p class="map_arrow">{{contactsListInfoData.where_we}}</p>
                    <MapLeaflet />
                </div>
            </div>

    </section>

    <ContactsForm />

</template>



<script>
import axios from 'axios'
import MapLeaflet from '@/components/Modules/MapLeaflet.vue'
import ContactsForm from '@/components/Modules/ContactsForm.vue';

export default {
    name: "ContactsList",
    data() {
        return {
            contactsListInfoData: null,
        };
    },
    components: {
    MapLeaflet,
    ContactsForm
},
    created() {
        axios
            .get("data/contactsInfo.json")
            .then(resp => {
            this.contactsListInfoData = resp.data;
        })
            .catch(err => {
            this.$toast.error(err);
        });
    },
}
</script>