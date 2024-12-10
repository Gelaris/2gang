<template>
    <div class="character">
      <img src="/images/character.png" alt="character" @click="increaseMoney" />
    </div>
  </template>
  
  <script>
  export default {
  name: "Character",
  emits: ["add-money"],
  methods: {
    increaseMoney() {
      this.$emit("add-money");
    },
  },
};
  </script>
  
  <style scoped>
.character {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  cursor: pointer;
}
.character img {
  max-width: 300px;
  object-fit: contain;
  transition: transform 0.2s;
}
.character img:hover {
  transform: scale(1.1);
}
</style>
  