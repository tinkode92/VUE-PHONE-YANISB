<template>
    <div class="keypad-key">
        <span class="number">{{ number }}</span>
        <span class="aliases">{{ aliases }}</span>
    </div>
</template>

<script>
export default {
    name: "KeypadKey",
    props: {
        number: String,
    },
    computed: {
        aliases() {
            return ["+", "ㅤ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"][this.number]
        }
    }
}
</script>

<style scoped>
.keypad-key {
    width: 50px;
    height: 50px;
    background-color: #eff0f3;
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
    background-color: #dcdee5;
}

.keypad-key:active {
    background-color: #c4c8d4;
}

.number {
    color: #0d0d0d;
    font-size: 20px;
    line-height: 15px;
}

.aliases {
    font-size: 10px;
}
</style>