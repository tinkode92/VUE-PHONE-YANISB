<template>
  <div class="new-contact">
    <h1>Nouveau Contact</h1>
    <form @submit.prevent="addContact()">
      <label for="name">Nom</label>
      <input type="text" v-model="name" id="name" placeholder="Jean Michel">
      <label for="phoneNumber">Numéro</label>
      <input type="text" v-model="phoneNumber" id="phoneNumber" placeholder="06 43 89 34 98" @keyup="prettifyPhoneNumber()">
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "NewContactView",
    data() {
      return {
        name: "",
        phoneNumber: ""
      }
    },
    methods: {
      addContact() {
        this.$store.commit("addContact", { 
          name: this.name, 
          phoneNumber: this.phoneNumber.replace(/\s+/g, '') 
        });
        this.$router.push("/contacts")  
      },
      prettifyPhoneNumber() {
        this.phoneNumber = this.phoneNumber
          .replace(/[^\d]/g, '') // not really prettifying but it's not a big deal
          .replace(/(\d\d)(\d\d)/g, '$1 $2')
          .replace(/(\d\d)(\d\d)/g, '$1 $2')
          .replace(/(\d\d)(\d)$/g, '$1 $2');
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
}

label {
  width: 100%;
  text-align: left;
  font-weight: 500;
  color: #0d0d0d;
  font-size: 1rem;
  margin-bottom: 5px;
}

input {
  margin-bottom: 20px;
  background-color: #eff0f3;
  color: #0d0d0d;
  font-size: 14px;
  border: none;
  outline: none;
  height: 4rem;
  padding-left: 20px;
  border-radius: 3px;
}

button {
  background-color: #ff8e3c;
  color: #fffffe;
  border: none;
  height: 4rem;
  padding: 0px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 18px;
  width: min-content;
  padding: 0 60px;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color .3s;
}

button:hover {
  background-color: #ff7614;
}
</style>