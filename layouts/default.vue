<template>
  <div class="container">
    <Loading />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}
</style>
