import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    /** @type {call[]} */ calls: [],
    /** @type {contact[]} */ contacts: [],
  },
  mutations: {
    call(state, phoneNumber) {
      state.calls.push({ id: state.calls.length, phoneNumber, timestamp: Date.now() })
    },
    addContact(state, { phoneNumber, name }) {
      state.contacts.push({ id: state.contacts.length, phoneNumber, name });
    }
  },
  plugins: [createPersistedState()]
})

/** 
 * @typedef call 
 * @type {object}
 * @property {number} id
 * @property {string} phoneNumber
 * @property {number} timestamp
 */

/** 
 * @typedef contact 
 * @type {object}
 * @property {number} id
 * @property {string} phoneNumber
 * @property {string} name
 */