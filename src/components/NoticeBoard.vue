<template>

    <h1>{{ notice }}</h1>

    <h6>Key : {{ key }}</h6>

  <button @click="close">X</button>

</template>

<script>

export default{
    inject:['key'],
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