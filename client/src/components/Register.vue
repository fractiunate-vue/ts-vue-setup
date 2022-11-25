<template>

  <div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <input type="email"
            name="email"
            placeholder="email"
            v-model="email"
            />
            <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
            />
            <div class="error" v-html="error"></div>
            <v-btn class="cyan" @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
  </template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  // },watch: {
  //   email (value) {
  //     console.log("email has changed", value);
  //   }
  },
  methods: {
    async register () {
      // console.log("register", this.email,this.password)
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
