<template>
    <label
      v-if="label"
      :for="uuid"
    >
      {{ label }}
    </label>
    <input
      class="field"
      v-bind="{
        ...$attrs,
        onInput: updateValue
      }"
      :id="uuid"
      :value="modelValue"
      :placeholder="label"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : false"
      :class="{ error }"
    >
  </template>
  
  <script>
  
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number],
        default: ''
      }
    },
    methods:{
        updateValue(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
  }
  </script>
  