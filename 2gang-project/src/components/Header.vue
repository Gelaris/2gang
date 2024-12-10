<template>
    <div class="header">
      <div class="status-bar">
        <img src="/images/icon-home.png" alt="home" />
        <div class="status">
          <img src="/images/icon-money.png" alt="money" />
          <span>{{ money }}</span>
        </div>
        <div class="status">
          <img src="/images/icon-star.png" alt="star" />
          <span>{{ stars }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
    props:{
     money: {
      type: Number, // Убедитесь, что это число
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
};
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
  }
  .status-bar {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .status {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  </style>
  