<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const supabase = useSupabaseClient();
const file = ref(null);
const form = ref({
  kategori: "",
  ukuran: "",
});
const prewedver = ref([]);
const prewedhor = ref([]);
const weddingver = ref([]);
const weddinghor = ref([]);

const handleFileInput = (event) => {
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  if (!file.value) {
    alert("Pilih file terlebih dahulu!");
    return;
  }

  try {
    const { data, error } = await supabase.storage.from("Homeimg").upload(`public/${file.value.name}`, file.value);

    if (error) {
      throw error;
    }

    const publicUrl = supabase.storage.from("Homeimg").getPublicUrl(`public/${file.value.name}`).data.publicUrl;
    const { error: insertError } = await supabase.from("gallery").insert([{ img: publicUrl, ...form.value }]);

    if (!error) {
      window.location.reload();
    }

    if (insertError) {
      throw insertError;
    }

    alert("Foto berhasil diupload dan disimpan ke gallery!");
  } catch (error) {
    console.error("Error uploading file:", error.message);
    // alert("Gagal mengupload file.");
  }
};

const prewedVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "ver");
  if (data) {
    prewedver.value = data;
  }
};
const prewedHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "prewed").eq("ukuran", "hor");
  if (data) prewedhor.value = data;
};
const weddingVer = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "ver");
  if (data) weddingver.value = data;
};
const weddingHor = async () => {
  const { data, error } = await supabase.from("gallery").select("*").eq("kategori", "wedding").eq("ukuran", "hor");
  if (data) weddinghor.value = data;
};

const hapusFoto = async (fotoId) => {
  const { error } = await supabase.from("gallery").delete().eq("id", fotoId);
  if (!error) {
    window.location.reload();
  }
};

onMounted(() => {
  prewedVer();
  prewedHor();
  weddingVer();
  weddingHor();
});
</script>

<template>
  <div class="container">
    <div class="kiri">
      <div class="form">
        <form @submit.prevent="uploadImage">
          <div class="form-group">
            <label>File</label>
            <input type="file" @change="handleFileInput" class="input-file" accept=".webp" />
          </div>

          <div class="form-group">
            <label>Kategori</label>
            <select v-model="form.kategori" class="input-select">
              <option value="">Pilih ketegori</option>
              <option value="prewed">Prewedding</option>
              <option value="wedding">Wedding</option>
            </select>
          </div>

          <div class="form-group">
            <label>Ukuran</label>
            <select v-model="form.ukuran" class="input-select">
              <option value="">Pilih Ukuran</option>
              <option value="hor">Horizontal</option>
              <option value="ver">Vertical</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">Upload Foto</button>
        </form>
      </div>
    </div>

    <div class="kanan">
      <div class="gallery">
        <div class="column prewedding-horizontal">
          <div v-for="(image, index) in prewedhor" :key="index" class="img img-hor">
            <img :src="image.img" alt="Prewedding Horizontal" />
            <button class="overlay-button" @click="hapusFoto(image.id)">Hapus</button>
          </div>
        </div>

        <div class="column prewedding-vertical">
          <div v-for="(image, index) in prewedver" :key="index" class="img img-ver">
            <img :src="image.img" alt="Prewedding Vertical" />
            <button class="overlay-button" @click="hapusFoto(image.id)">Hapus</button>
          </div>
        </div>

        <div class="column wedding-vertical">
          <div v-for="(image, index) in weddingver" :key="index" class="img img-ver">
            <img :src="image.img" alt="Wedding Vertical" />
            <button class="overlay-button" @click="hapusFoto(image.id)">Hapus</button>
          </div>
        </div>

        <div class="column wedding-horizontal">
          <div v-for="(image, index) in weddinghor" :key="index" class="img img-hor">
            <img :src="image.img" alt="Wedding Horizontal" />
            <button class="overlay-button" @click="hapusFoto(image.id)">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kiri {
  margin-right: 3.5rem;
}

.overlay-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.img > img {
  width: 280px;
}

.img {
  gap: 10px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}

.prewedding-horizontal .img-hor,
.wedding-horizontal .img-hor {
  width: 100%;
  height: calc(20vh);
}

.prewedding-vertical .img-ver,
.wedding-vertical .img-ver {
  width: 100%;
  height: calc(40.8vh);
}

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  margin: 20px 0px 20px 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery {
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: 90vh;
  width: 60vw;
}

::-webkit-scrollbar {
  display: none;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  display: block;
  color: #333;
}

.input-file,
.input-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  background-color: #ff0000;
}

.input-file {
  background-color: #fff;
  width: 18, 1rem;
}

.input-select {
  background-color: #f0f0f0;
  width: 20rem;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #3f3f3f;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #e8e8e8;
  color: #000;
}

.btn-submit:active {
  background-color: #e8e8e8;
  color: #000;
}
</style>
