<template>
    <div class="logs-item-wrapper">
        <div class="logs-item">
            <span class="phone-number">{{ prettyPhoneNumber }}</span>
            <span class="date"> {{ prettyDate }}</span>
            <div class="icon" ></div>
        </div>
        <div class="separator" v-if="!last"></div>
    </div>
</template>

<script>
export default {
    name: "LogsItem",
    props: {
        phoneNumber: String,
        timestamp: Number,
        last: Boolean,
    },
    computed: {
        prettyPhoneNumber() {
            const contact = this.$store.state.contacts.find(c => c.phoneNumber === this.phoneNumber);
            
            if (contact) return contact.name;
            
            return this.phoneNumber
            .replace(/(\d\d)(\d\d)/g, '$1 $2')
            .replace(/(\d\d)(\d\d)/g, '$1 $2');
        },
        prettyDate() {
            const date = new Date(this.timestamp);
            return 'le ' + date.toLocaleDateString() 
            + ' à ' + date.getHours().toString().padStart(2, '0') 
            + 'h' + date.getMinutes().toString().padStart(2, '0');
        }
    }
}
</script>

<style scoped>
.logs-item {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.phone-number {
    margin-right: auto;
    color: #0d0d0d;
    font-size: 20px;
    font-weight: bold;
}

.date {
    font-size: 15px;
}

.icon {
    height: 30px;
    width: 30px;
    background: #ff8e3c;
    mask-image: url('~@/assets/phone-call-receiver.svg');
    mask-size: contain;
}

.separator {
    width: 90%;
    height: 2px;
    background-color: #2a2a2a;
    margin: 10px auto;
    border-radius: 1px;
}
</style>