<template>
  <div>
    <navbar />
    <div class="container mt-4">
    <h1>Login Admin</h1>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="signIn" class="needs-validation">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
              <div class="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
              <div class="invalid-feedback">Please enter your password.</div>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
          </form>
          <div class="mt-3">
            <p>Tidak memiliki akun?</p>
            <router-link to="/register" class="btn btn-secondary">Daftar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import supabase from '@/supabase';
import Navbar from "@/components/Navbar.vue";


console.log(supabase.auth.user)
export default {
  name: "Auth",
  components: {
    Navbar,
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      console.log(supabase.auth.user)
      console.log(this.email)
      console.log(this.password)
      const { error } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
   
      if (error) {
        alert("konto")
        console.log(error)
      } 
    }
  }
}
</script>

<style scoped>
  .needs-validation input:valid {
    border-color: #28a745;
  }
  .needs-validation input:invalid {
    border-color: #dc3545;
  }
  .needs-validation .invalid-feedback {
    display: block;
  }
</style>