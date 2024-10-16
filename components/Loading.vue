<template>
    <div class="loading" v-if="isLoading">
        <div class="curtain">
            <div class="logo">
                <img src="~/assets/logo.png" alt="Lenteart" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});
</script>

<style scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    z-index: 9999;
}

.curtain {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-color: #fff;
    animation: openCurtain 2s forwards;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.logo > img {
    width: 200px;
}

@keyframes openCurtain {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>