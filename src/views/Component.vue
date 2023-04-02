<template>
  <!-- <ScoreBoard></ScoreBoard> -->

  <div>
    <img :src="userStore.avatar" alt="User Avatar">
  </div>

  <Fire @fire="handleFire">Fire</Fire>

  <h6>Score:{{ score }}</h6>

  <Reset v-model="score"></Reset>

  <Box
    name="Box"
    v-model="score"
    v-for="(data, index) in data.array"
    :key="index"
    :data="data"
  ></Box>
</template>

<script>
import Box from "../components/Box.vue";
import Reset from "../components/Reset.vue";
import Fire from "../components/Fire.vue";
import { useUserStore } from "../stores/UserStore";

export default {
  setup(){
    const userStore = useUserStore()
    return {
      userStore,
      avatar: userStore.avatar,
    }
  },
  components: {
    Box,
    Reset,
    Fire,
  },
  data() {
    return {
      avatar:'',
      score: 0,
      data: {
        array: [
          {
            id: 1,
            name: "Box A",
          },
          {
            id: 2,
            name: "Box B",
          },
          {
            id: 3,
            name: "Box C",
          },
        ],
      },
    };
  },
  methods: {
    handleFire(value) {
      this.score = parseInt(value);
    },
  },

  created(){
    this.avatar = this.userStore.avatar;
  }
};
</script>
