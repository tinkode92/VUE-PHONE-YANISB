<template>
	<div class="contacts">
		<h1>Mes Contacts <router-link to="/contacts/new">+</router-link></h1>
		<ContactItem v-for="(contact, i) in contacts" :key="contact.id" :phone-number="contact.phoneNumber" :name="contact.name"  :last="i === contacts.length - 1"/>
	</div>
</template>

<script>
import ContactItem from '@/components/ContactItem.vue';

export default {
	name: "ContactsView",
	computed: {
		contacts() {
			return [...this.$store.state.contacts].reverse();
		}
	},
	components: { ContactItem }
}
</script>

<style scoped>
.contacts {
	width: 400px;
	margin: 0 auto;
} 

a {
	font-weight: bold;
	color: #ff8e3c;
	text-decoration: none;
	margin-left: 10px;
	transition: color .3s;
}

a:hover {
	color: #ff7614;
}
</style>