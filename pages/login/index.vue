<template>
  <div class="container">
    <div class="Login">
      <img src="~/assets/logo.png" alt="lenteart" class="logo" />
      <form @submit.prevent="Login">
        <h3>Login</h3>
        <label for="email">Email</label>
        <input v-model="email" type="email" placeholder="Email" />

        <label for="password">Password</label>
        <input v-model="password" type="password" placeholder="Password" />

        <button>LogIn</button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

const Login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (data) {
    navigateTo("/admin/gallery");
  }
  if (error) console.log("error");
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  width: 80px;
  margin-bottom: 20px;
  margin-left: 150px;
}

form {
  height: 520px;
  width: 400px;
  background-color: #212121;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

input:hover {
  border: #ffffff solid 1px;
}

::placeholder {
  color: #e5e5e5;
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  color: #000000;
}

button:hover {
  background-color: #212121;
  border: #ffffff solid 1px;
  color: #ffffff;
}
</style>
