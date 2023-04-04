<template>
  <div class="container mt-4">
    <Navbar />
  <div>
      <h1>Peserta Didik Baru</h1>
  <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="nama">Nama:</label>
        <input type="text" class="form-control" id="nama" v-model="nama" required>
      </div>
      <div class="form-group">
        <label for="np">Nama Panggilan:</label>
        <input type="text" class="form-control" id="np" v-model="np" required>
      </div>
      <div class="form-group">
        <label for="ttl">Tempat, Tanggal Lahir:</label>
        <input type="text" class="form-control" id="ttl" v-model="ttl" required>
      </div>
      <div class="form-group">
        <label for="jk">Jenis Kelamin:</label>
        <select class="form-control" id="jk" v-model="jk" required>
          <option value="">Pilih jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div class="form-group">
        <label for="agama">Agama:</label>
        <select class="form-control" id="agama" v-model="agama" required>
          <option value="">Pilih agama</option>
          <option value="Islam">Islam</option>
          <option value="Kristen">Kristen</option>
          <option value="Katolik">Katolik</option>
          <option value="Hindu">Hindu</option>
          <option value="Buddha">Buddha</option>
          <option value="Konghucu">Konghucu</option>
        </select>
      </div>
      <div class="form-group">
        <label for="alamat">Alamat:</label>
        <textarea class="form-control" id="alamat" rows="3" v-model="alamat" required></textarea>
      </div>
      <div class="form-group">
        <label for="ak">Anak ke :</label>
        <input type="text" class="form-control" id="ak" v-model="ak" required>
      </div>
      <div class="form-group mb-2">
        <label for="ortu">Nama Orang Tua:</label>
        <input type="text" class="form-control" id="ortu" v-model="ortu" required>
      </div>
      <a href="/" class="btn btn-danger me-2">Kembali</a>
      <button type="submit" class="btn btn-primary">Daftar</button>
    </form>
  </div>
  </div>
</template>

<script >
import supabase from '@/supabase';
import Navbar from "@/components/Navbar.vue";

  export default {
  name: "Daftar",
  components: {
    Navbar,
  },
  methods: {
  onSubmit() {
    const data = {
      nama: this.nama,
      np: this.np,
      ttl: this.ttl,
      jk: this.jk,
      agama: this.agama,
      alamat: this.alamat,
      ak: this.ak,
      ortu: this.ortu,
    }

    supabase
      .from('pendaftaran')
      .insert(data)
      .then(() => {
        alert('Pendaftaran peserta didik baru telah berhasil dibuat.')
      })
      .catch((error) => {
        console.log(error.message)
      })
      console.log(data)
    }
  }
};

// const alamat = ref()
// const nama = ref()
// const np = ref()
// const ttl = ref()
// const jk = ref()
// const agama = ref()
// const ak = ref()
// const ortu = ref()

// const onSubmit = async () =>{
//   const {data,error} = await supabase
//   .from("pendaftaran")
//   .insert({
//     nama:nama.value,
//     np:np.value,
//     ttl:ttl.value,
//     jk:jk.value,
//     agama:agama.value,
//     alamat:alamat.value,
//     ak:ak.value,
//     ortu:ortu.value
//   })
//   if(error){
//     console.log(error)
//   }
// }

</script>