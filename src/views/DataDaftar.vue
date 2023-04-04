<template>
  <div class="container mt-4">
    <Navbar />
    <div>
      <h1>Data Peserta Didik Baru</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nama Panggilan</th>
            <th>Tempat, Tanggal Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Agama</th>
            <th>Alamat</th>
            <th>Anak ke</th>
            <th>Nama Orang Tua</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.nama }}</td>
            <td>{{ item.np }}</td>
            <td>{{ item.ttl }}</td>
            <td>{{ item.jk }}</td>
            <td>{{ item.agama }}</td>
            <td>{{ item.alamat }}</td>
            <td>{{ item.ak }}</td>
            <td>{{ item.ortu }}</td>
            <td v-if="authenticated"><button @click="hapus(item.id)">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import supabase from '@/supabase';
import Navbar from "@/components/Navbar.vue";
import router from '../router';


export default {
  name: "DataDaftar",
  components: {
    Navbar,
  },
  data() {
    return {
      authenticated: true,
      items: []
    }
  },
  methods:{
     async hapus(items){
      const{error} =  await supabase
      .from("pendaftaran")
      .delete()
      .eq("id",items)
      alert("delete berhasil")
      router.push("/datadaftar")
      if(error){
        console.log(error)
      }
    }
  },
  created() {
    supabase
      .from('pendaftaran')
      .select('*')
      .then(({ data }) => {
        this.items = data
      })
      .catch((error) => {
        console.log(error.message)
      }),
      supabase.auth.onAuthStateChange((_, session) => {
      this.authenticated = session !== null
      
    })
  
      
  },
  mounted(){
    this.items
  }

};
</script>