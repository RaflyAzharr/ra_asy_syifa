<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="/">
          <img src="assets/images/logo.jpeg" alt="Logo" class="logo" width="35px" height="35px">
          RA ASY SYIFA
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <b-icon icon="house-door-fill" aria-hidden="true"></b-icon>
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                <b-icon icon="info-circle-fill" aria-hidden="true"></b-icon>
                About
              </router-link>
            </li>
            <li v-if="authenticated" class="nav-item">
              <button class="btn btn-danger" @click="logout" >
                <b-icon icon="box-arrow-right" aria-hidden="true"></b-icon>
                Log Out
              </button>
            </li>
            <li v-if="!authenticated" class="nav-item">
              <router-link class="nav-link" to="/auth">
                <b-icon icon="box-arrow-in-right" aria-hidden="true"></b-icon>
                Login
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// import router from '@/router'
import { supabase } from '@/supabase'
import router from '../router'


export default {
  data() {
    return {
      authenticated: false,
      error: null
    }
  },
  methods: {

    logout() {
      supabase.auth.signOut()
      router.push("/")
    }
  },

  created() {
    supabase.auth.onAuthStateChange((_, session) => {
      this.authenticated = session !== null
      
    })
  }
}
</script>
