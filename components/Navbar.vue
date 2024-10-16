<script>
export default {
    data() {
        return {
            isScrolled: false,
            menuOpen: false,
        };
    },
    mounted() {
        this.showSlides();
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener("click", this.handleOutsideClick);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
        document.removeEventListener("click", this.handleOutsideClick);
    },
    methods: {
        showSlides() {
            let slideIndex = 0;
            const slides = document.getElementsByClassName("slide");
            setInterval(() => {
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                slides[slideIndex - 1].style.display = "block";
            }, 2000);
        },

        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },

        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            const hamburger = document.getElementById("hamburger");
            if (hamburger) {
                hamburger.classList.toggle("menuOpen", this.menuOpen);
            }
        },

        handleOutsideClick(event) {
            const menu = document.getElementById("nav-links");
            const hamburger = document.getElementById("hamburger");
            if (
                this.menuOpen &&
                !menu.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {
                this.menuOpen = false;
                hamburger.classList.remove("menuOpen");
            }
        },
    },
};
</script>

<template>
    <div>
        <header>
            <nav :class="{ 'nav-scroll': isScrolled }">
                <div class="logoM">
                    <img src="~/assets/logo.png" alt="Lenteart" />
                </div>
                <div class="menu" id="nav-links" :class="{ show: menuOpen }" role="navigation">
                    <div class="kiri">
                        <NuxtLink to="/">
                            <p class="activ">Home</p>
                        </NuxtLink>
                        <NuxtLink to="#about">
                            <p class="activ">About</p>
                        </NuxtLink>
                    </div>
                    <NuxtLink to="/admin/gallery">
                        <div class="logoNav">
                            <img src="~/assets/logo.png" alt="Lenteart" />
                        </div>
                    </NuxtLink>
                    <div class="kanan">
                        <NuxtLink to="/gallery">
                            <p class="activ">Gallery</p>
                        </NuxtLink>
                        <NuxtLink to="/pricelist">
                            <p class="activ">Price List</p>
                        </NuxtLink>
                    </div>
                </div>
                <div class="hamburger" id="hamburger" @click="toggleMenu" aria-expanded="menuOpen">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </nav>
        </header>
    </div>
</template>


<style scoped>
header {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: background-color 0.3s, backdrop-filter 0.3s;
}

nav.nav-scroll {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    height: 80px;
}

nav {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 10;
}

.logoM>img {
    display: none;
}

.logoNav>img {
    width: 50px;
    margin-top: 15px;
    margin: 30px;
}

.kiri,
.kanan {
    display: flex;
    gap: 15px;
}

.menu {
    display: flex;
    align-items: center;
    margin-left: 25px;
}

.menu a {
    text-decoration: none;
    color: black;
}

.hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

@media (max-width: 768px) {
    nav {
        justify-content: space-between;
    }

    .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 50px;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        padding: 15px;
        width: 20%;
    }

    .menu.show {
        display: flex;
    }

    .kiri {
        margin-bottom: 15px;
    }

    .kanan, .kiri {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0px;
    }

    .kiri > p,
    .kanan > p {
        text-align: center;
        padding: 0px;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 20px;
        height: 20px;
        margin-right: 50px;
    }

    .hamburger > span {
        transition: all 0.3s;
        margin: 2px;
    }

    .hamburger.menuOpen span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 2px);
    }

    .hamburger.menuOpen span:nth-child(2) {
        scale: 0;
    }

    .hamburger.menuOpen span:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -2px);
    }

    .line {
        width: 20px;
        height: 3px;
        background-color: #000000;
        display: block;
        margin: 4px 0;
    }

    .logoNav>img {
        display: none;
    }

    .logoM>img {
        display: flex;
        width: 50px;
        margin-top: 15px;
        margin-left: 30px;
        margin-bottom: 15px;
    }
}
</style>