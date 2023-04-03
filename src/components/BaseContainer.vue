<template>
    <h6>Base Container</h6>
</template>

<script>
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
