<template>
  <div>
    <Navbar />
    <table border="1">
        <thead>
            <tr>
                <td>nama</td>
                <td>np</td>
                <td>ttl</td>
                <td>jk</td>
                <td>agama</td>
                <td>alamat</td>
                <td>ak</td>
                <td>ortu</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in datas" :key="data.id">
                <td>{{ data.nama }}</td>
                <td>{{ data.np }}</td>
                <td>{{ data.ttl }}</td>
                <td>{{ data.jk }}</td>
                <td>{{ data.agama }}</td>
                <td>{{ data.alamat }}</td>
                <td>{{ data.ak }}</td>
                <td>{{ data.ortu }}</td>
               
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import supabase from '@/supabase';
import Navbar from "@/components/Navbar.vue";

  export default {
  name: "Daftar",
  components: {
    Navbar,
  },
data(){
    return {
        datas:[]
    }
},
methods:{
     async getdata(){
        const {data} = await supabase 
        .from("pendaftaran")
        .select()
         this.datas = data
        
    }
    
},
mounted(){
    this.getdata()
}
}
</script>
