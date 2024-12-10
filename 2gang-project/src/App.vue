<template>
  <div id="app" class="container">
    <img class="background" src="/images/bg.png" alt="background" />
    <Header :money="money" :stars="stars" />
    <Character @add-money = "incrementMoney" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Character from "./components/Character.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Character,
    Footer,
  },
  data() {
    return {
      money: 0,
      stars: 0, // значение звезд пока статично
    };
  },
  methods: {
    async fetchMoney() {
      try {
        const response = await axios.get("http://localhost:3000/money");
        this.money = response.data.money;
      } catch (error) {
        console.error("Error fetching money:", error);
      }
    },
    async incrementMoney() {
      try {
        this.money++;
        await axios.post("http://localhost:3000/money", { amount: 1 });
      } catch (error) {
        console.error("Error updating money:", error);
      }
    },
  },
  mounted() {
    this.fetchMoney(); // Получить текущее значение денег при загрузке
  },
}


</script>

<style>
.container {
  position: relative;
  text-align: center;
  height: 100vh;
  overflow: hidden;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
  z-index: -1;
}
</style>

