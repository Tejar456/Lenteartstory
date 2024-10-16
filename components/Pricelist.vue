<script setup>
const supabase = useSupabaseClient();
const engagement = ref([]);
const prewedding = ref([]);
const wedding = ref([]);
const spesial = ref([]);
const video = ref([]);
const Maternity = ref([]);
const PrewedStudio = ref([]);
const Wisuda = ref([]);
const Group = ref([]);

const getEngagement = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Engagement");
  if (data) engagement.value = data;
};
const getPrewedding = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Prewedding");
  if (data) prewedding.value = data;
};
const getWedding = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Wedding");
  if (data) wedding.value = data;
};
const getSpesial = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Spesial");
  if (data) spesial.value = data;
};
const getVideo = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Video");
  if (data) video.value = data;
};
const getMaternity = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Maternity");
  if (data) Maternity.value = data;
};
const getPrewedStudio = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "PreweddingStudio");
  if (data) PrewedStudio.value = data;
};
const getWisuda = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Wisuda/Keluarga");
  if (data) Wisuda.value = data;
};
const getGroup = async () => {
  const { data } = await supabase.from("package").select(`*`).eq("package", "Group");
  if (data) Group.value = data;
};

onMounted(() => {
  getEngagement();
  getPrewedding();
  getWedding();
  getSpesial();
  getVideo();
  getMaternity();
  getPrewedStudio();
  getWisuda();
  getGroup();
});
</script>

<template>
  <div class="container">
    <div class="pricelist">
      <h1>ENGAGEMENT PACKAGE</h1>
      <div class="grid-container">
        <div v-for="(list, i) in engagement" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <span><b>Benefit</b></span>
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>PREWEDDING ONLY PACKAGE</h1>
      <div class="grid-container">
        <div v-for="(list, i) in prewedding" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <span><b>Benefit</b></span>
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>WEDDING ONLY PACKAGE</h1>
      <div class="grid-container">
        <div v-for="(list, i) in wedding" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <span><b>Benefit</b></span>
                <p>{{ list.benefit }}</p>
              </div>
              <div class="output">
                <span><b>Output</b></span>
                <p>{{ list.output }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>SPESIAL PACKAGE</h1>
      <div class="grid-container">
        <div v-for="(list, i) in spesial" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <span><b>Benefit</b></span>
                <p>{{ list.benefit }}</p>
              </div>
              <div class="output">
                <span><b>Output</b></span>
                <p>{{ list.output }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>VIDEO PACKAGE</h1>
      <div class="grid-container">
        <div v-for="(list, i) in video" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <span><b>Benefit</b></span>
                <p>{{ list.benefit }}</p>
              </div>
              <div class="output">
                <span><b>Output</b></span>
                <p>{{ list.output }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      <span> Noted :</span>
      <p>Belum termasuk akomodasi ( diluar Kota Tasikmalaya, Ciamis kota ) Belum termasuk MUA, Wardrobe & Charge Lokasi</p>
    </div>
    <div class="pricelist">
      <h1>Maternity</h1>
      <div class="grid-container">
        <div v-for="(list, i) in Maternity" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>Prewedding Studio</h1>
      <div class="grid-container">
        <div v-for="(list, i) in PrewedStudio" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>Wisuda / Foto Keluarga</h1>
      <div class="grid-container">
        <div v-for="(list, i) in Wisuda" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricelist">
      <h1>Group</h1>
      <div class="grid-container">
        <div v-for="(list, i) in Group" :key="i" class="card-container">
          <div class="card">
            <div class="card-content">
              <div class="title">
                <p>{{ list.judul }}</p>
              </div>
              <div class="price">
                <p>Rp.{{ list.price }}</p>
              </div>
              <div class="benefit">
                <p>{{ list.benefit }}</p>
              </div>
            </div>
            <div class="button-container">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      <div class="keterangan">
        <span>keterangan :</span>
        <p>4R (10 x 15 cm) 10R (20 x 30 cm) 12RP (30 x 45 cm) 16RP (40 x 60 cm)</p>
      </div>
      <div class="keterangan">
        <span>Catatan :</span>
        <p>konsultasi terlebih dahulu mengenai konsep dan jenis outfit yg mau di pakai supaya hasilnya bagus</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
}

.pricelist > h1 {
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 10px;
}

.card-container {
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  min-height: 200px;
  border-radius: 12px;
  font-family: sans-serif;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  padding: 20px;
  margin: 20px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-content {
  flex-grow: 1;
}

.title > p,
.price > p {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.price > p {
  font-size: 1.3em;
}

.benefit,
.output {
  margin-bottom: 10px;
}

.benefit,
.output > p {
  line-height: 1.5em;
  white-space: pre-line;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3f3f3f;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e8e8e8;
  color: #000;
  border: 1px solid #000;
}

button:active {
  background-color: #e8e8e8;
  color: #000;
  border: 1px solid #000;
}

.note {
  width: 100%;
  text-align: center;
}

.keterangan {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: auto auto;
    gap: 10px;
  }

  .card {
    padding: 15px;
  }

  .title > p,
  .price > p {
    font-size: 1.2em;
  }

  button {
    padding: 8px;
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: auto;
    gap: 10px;
  }
}
</style>
