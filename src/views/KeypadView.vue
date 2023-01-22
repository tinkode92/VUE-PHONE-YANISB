<template>
	<div class="keypad">
		<h1>Clavier Numérique</h1>
		<span class="input">{{ prettyPhoneNumber }}</span>
		<div class="keys">
			<KeypadKey v-for="n in '123456789*0#'.split('')" :key="n" :number="n" @click="type(n)"/>
			<CallKey @click="call"/>
			<DeleteKey v-if="phoneNumber.length !== 0" @click="deelete"/>
			<div v-else class="empty-key"></div>
		</div>
	</div>
</template>

<script>
import CallKey from '@/components/CallKey.vue';
import DeleteKey from '@/components/DeleteKey.vue';
import KeypadKey from '@/components/KeypadKey.vue';

export default {
	name: "KeypadView",
	components: { KeypadKey, CallKey, DeleteKey },
	data() {
		return {
			phoneNumber: ""
		}
	},
	methods: {
		type(number) {
			if (this.phoneNumber.length >= 10) return;
			this.phoneNumber += number;
		},
		deelete() {
			this.phoneNumber = this.phoneNumber.slice(0, -1)
		},
		call() {
			this.$store.commit("call", this.phoneNumber);
			this.phoneNumber = "";
		}
	},
    computed: {
        prettyPhoneNumber() {
            const contact = this.$store.state.contacts.find(c => c.phoneNumber === this.phoneNumber);
            
            if (contact) return contact.name;

            return this.phoneNumber
				.replace(/(\d\d)(\d\d)/g, '$1 $2')
				.replace(/(\d\d)(\d\d)/g, '$1 $2')
				.replace(/(\d\d)(\d)$/g, '$1 $2');
        }
	}
}
</script>

<style>
.keypad {
	width: 400px;
	margin: 0 auto;
}

.keys {
	display: flex;
	justify-content: right;
	flex-wrap: wrap;
	width: 180px;
	margin: 0 auto;
	gap: 15px;
}

.empty-key {
	width: 50px;
	height: 50px;
	display: block;
}

.input {
	color: #0d0d0d;
	font-size: 50px;
	margin: 50px auto;
	width: 334px;
	height: 50px;
	display: block;
	text-align: center;
	position: relative;
}

.input::after {
	content: "";
	display: block;
	width: 100%;
	height: 2px;
	background-color: #2a2a2a;
	position: absolute;
	top: 120%;
	border-radius: 2px;
}

</style>