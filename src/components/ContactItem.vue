<template>
    <div class="contact-item-wrapper">
        <div class="contact-item">
            <span class="name"> {{ name }}</span>
            <span class="phone-number">{{ prettyPhoneNumber }}</span>
            <div class="icon" @click="call" ></div>
        </div>
        <div class="separator" v-if="!last"></div>
    </div>
</template>

<script>
export default {
    name: "ContactItem",
    props: {
        phoneNumber: String,
        name: String,
        last: Boolean,
    },
    computed: {
        prettyPhoneNumber() {
            return this.phoneNumber
            .replace(/(\d\d)(\d\d)/g, '$1 $2')
            .replace(/(\d\d)(\d\d)/g, '$1 $2');
        },
    },
    methods: {
        call() {
            this.$store.commit("call", this.phoneNumber);
        }
    }
}
</script>

<style scoped>
.contact-item {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.name {
    margin-right: auto;
    color: #0d0d0d;
    font-size: 20px;
    font-weight: bold;
}

.phone-number {
    font-size: 15px;
}

.icon {
    height: 30px;
    width: 30px;
    background: #ff8e3c;
    mask-image: url('~@/assets/phone-call-receiver.svg');
    mask-size: contain;
    cursor: pointer;
    transition: background .3s;
}

.icon:hover {
    background-color: #ff7614;
}

.separator {
    width: 90%;
    height: 2px;
    background-color: #2a2a2a;
    margin: 10px auto;
    border-radius: 1px;
}
</style>