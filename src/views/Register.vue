<template>
  <div>
    <navbar />
    <div class="container mt-4">
    <h1>Daftar Akun Baru</h1>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="signUp" class="needs-validation">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
              <div class="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
              <div class="invalid-feedback">Please enter a password with at least 8 characters.</div>
            </div>
            <button type="submit" class="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import supabase from '@/supabase';
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Register",
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
    async signUp() {
      const { user, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })

      if (error) {
    console.log(error.message)
      } else {
    console.log(user)
    alert('Pendaftaran telah berhasil, Silahkan buka email untuk verifikasi.')
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