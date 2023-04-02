<template>

    <!-- <h1>
        Box {{ value }} {{ $attrs }} {{ array }}
    </h1> -->

    <div style="background-color:red" @click="scoreIncrement">
        <h6 style="color:white">{{ data.id }}</h6>
        <h6 style="color:white">{{ data.name }}</h6>
    </div>

    <!-- <div style="background-color:red" v-for="(data,index) in array" :key="index" >
        <h6 style="color:white">{{ data.id }}</h6>
        <h6 style="color:white">{{ data.name }}</h6>
    </div> -->

</template>

<script>
export default{
    setup() {
        
    },
    data() {
        return {
        score: 0
        }
    },
    props:{
        data:{
            type:Object,
        },
        name:{
            type:String,
            required:true
        },
        array:{
            type:Array
        },
        modelValue: {
        type: [String, Number],
        default: ''
      },
    },
    methods:{
        scoreIncrement(){
            // console.log(this.modelValue);
            this.$emit('update:modelValue', parseInt(this.modelValue) + 1);
        }
    }
}
</script>
