<template>

    <button @click="reset">Reset</button>
    
</template>

<script>

export default {
    props:{
        modelValue:{
            type:[Number,String]
        }
    },
    methods: {
        reset(){
            this.$emit('update:modelValue', 0)
        }
    },
}

</script>