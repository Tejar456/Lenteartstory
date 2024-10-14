<script setup>
const supabase = useSupabaseClient();

async function keluar() {
  const { error } = await supabase.auth.signOut();
  if (!error) navigateTo("/");
}

onMounted(() => {
  keluar();
});
</script>

<template>
  <div>
    <h1 class="logout">Logout</h1>
  </div>
</template>

<style scoped>
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
