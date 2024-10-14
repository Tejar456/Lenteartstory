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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
  },
};
</script>

<template>
  <div class="container">
    <header>
      <nav :class="{ 'nav-scroll': isScrolled }">
        <div class="logoM">
          <img src="~/assets/logo.png" alt="Lenteart" />
        </div>
        <div class="menu" id="nav-links" :class="{ show: menuOpen }">
          <div class="kiri">
            <NuxtLink to="/"><p class="activ">Home</p></NuxtLink>
            <NuxtLink to="#about"><p class="activ">About</p></NuxtLink>
          </div>
          <NuxtLink to="/admin/gallery">
            <div class="logoNav">
              <img src="~/assets/logo.png" alt="Lenteart" />
            </div>
          </NuxtLink>
          <div class="kanan">
            <NuxtLink to="/gallery"><p class="activ">Gallery</p></NuxtLink>
            <NuxtLink to="pricelist"><p class="activ">Price List</p></NuxtLink>
          </div>
        </div>
        <div class="hamburger" id="hamburger" @click="toggleMenu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </nav>
    </header>
    <slot />

    <footer class="footer">
      <div class="footer__content">
        <div class="footer__section footer__social">
          <h2>Media Sosial</h2>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px">
                  <title>Instagram</title>
                  <path
                    d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                  />
                </svg>
                lenteartstory
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__section footer__contact">
          <h2>Kontak</h2>
          <ul>
            <li>
              <a href="https://wa.me/+123456789" target="_blank" rel="noopener noreferrer">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px">
                  <title>WhatsApp</title>
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                087737422055
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com"
                ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px">
                  <title>Gmail</title>
                  <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  />
                </svg>
                lenteartstory@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__legal">
        <p>&copy; 2024 Lenteart. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

svg {
  margin-right: 10px;
}

header {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  margin-left: 25px;
  transition: background-color 0.3s, backdrop-filter 0.3s;
}

nav.nav-scroll {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  height: 50px;
}

nav {
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 10;
}

.logoM > img {
  display: none;
}

.logoNav > img {
  width: 50px;
  margin-top: 15px;
  margin: 30px;
}

.kiri {
  display: flex;
  gap: 15px;
}

.kanan {
  display: flex;
  gap: 15px;
}

.menu {
  display: flex;
  align-items: center;
  margin-right: 50px;
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

.footer {
  /* background-color: #333; */
  background-color: #000000;
  color: #fff;
  padding: 20px;
}

.footer__content {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
}

.footer__section {
  flex: 1;
  margin: 0 15px;
  margin-bottom: 10px;
}

.footer__section h2 {
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 18px;
}

.footer__section ul {
  list-style: none;
  padding: 0;
}

.footer__section li {
  margin: 10px 0;
}

.footer__section a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.footer__section a:hover {
  color: #fff;
}

.footer__section i {
  margin-right: 8px; /* Spacing between icon and text */
}

.footer__legal {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}

@media (max-width: 768px) {
  nav {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    padding: 10px;
    width: 30%;
  }

  .activ {
    padding: 2px;
  }

  .activ:active {
    background-color: #000000;
    color: #ffffff;
    padding: 2px;
  }

  .menu.show {
    display: flex;
  }

  .kiri > p {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .kanan > p {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20px;
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

  .logoNav > img {
    display: none;
  }

  .logoM > img {
    display: flex;
    width: 50px;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 15px;
  }
}
</style>
