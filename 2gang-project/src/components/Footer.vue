<template>
    <div class="footer">
      <button v-for="button in buttons" :key="button.icon">
        <img :src="button.icon" :alt="button.name" />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        buttons: [
          { name: "Action1", icon: "/images/icon-button1.png" },
          { name: "Action2", icon: "/images/icon-button2.png" },
          { name: "Action3", icon: "/images/icon-button3.png" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  button img {
    width: 30px;
    height: 30px;
  }
  </style>
  