<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo">
        <img src="~/assets/logo.webp" alt="Logo" />
      </div>

      <div class="navbar">
        <NuxtLink to="gallery" class="navigasi">
          <button>Gallery</button>
        </NuxtLink>
        <NuxtLink to="pricelist" class="navigasi">
          <button>Pricelist</button>
        </NuxtLink>
      </div>

      <div class="button">
        <NuxtLink to="/">
          <button>Keluar</button>
        </NuxtLink>
        <NuxtLink to="/logout">
          <button>Logout</button>
        </NuxtLink>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

.container {
  background-color: #dfdfdf;
  display: grid;
  grid-template-columns: 250px 1fr;
}

.sidebar {
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  overflow: hidden;
}

.logo > img {
  width: 80px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
}

button {
  background-color: #dfdfdf;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
}

button:hover {
  background-color: #353535;
  color: #ffffff;
  transform: scale(1.1);
  border-radius: 8px;
}

.content {
  margin-left: 250px;
}

.navbar {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
