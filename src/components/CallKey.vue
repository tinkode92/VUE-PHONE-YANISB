<template>
    <div class="keypad-key">
        <div class="icon"></div>
    </div>
</template>

<script>
export default {
    name: "CallKey",
}
</script>

<style scoped>
.keypad-key {
    width: 50px;
    height: 50px;
    background-color: #ff8e3c;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color .2s;
    user-select: none;
}

.keypad-key:hover {
    background-color: #ff6a00;
}

.keypad-key:active {
    background-color: #e66000;
}

.icon {
    height: 20px;
    width: 20px;
    background: #ffffff;
    mask-image: url('~@/assets/phone-call.svg');
    mask-size: contain;
}
</style>