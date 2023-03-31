<template>

    <h1>{{ notice }}</h1>

  <button @click="close">X</button>

</template>

<script>

export default{
    props:{
        notice:String,
    },
    methods:{
        close(){
            this.$emit('button-clicked');
        }
    }
}

</script>