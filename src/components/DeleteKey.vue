<template>
    <div class="keypad-key">
        <div class="icon"></div>
    </div>
</template>

<script>
export default {
    name: "DeleteKey",
}
</script>

<style scoped>
.keypad-key {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
}

.icon {
    height: 25px;
    width: 25px;
    background: #2a2a2a;
    mask-image: url('~@/assets/delete.svg');
    mask-size: contain;
}

.keypad-key:hover .icon {
    background: #535353;
}

.keypad-key:active .icon {
    background: #000000;
}
</style>