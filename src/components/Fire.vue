<template>

    <button @click="fire">Fire</button>
    
</template>

<script>

export default {
    props:{
        modelValue:{
            type:[Number,String]
        }
    },
    methods: {
        fire(){
            this.$emit('fire', Math.floor(Math.random() * 100) + 1);

        }
    },
}

</script>