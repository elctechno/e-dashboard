<template>
    <div :class="['spinner', colorSpinner]" />
</template>


<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        color: {
            type: String,
            default: 'primary'
        }
    },
    setup(props){

        const colorSpinner = computed(() => {
            return `spinner-${props.color}`
        })

        return {
            colorSpinner
        }

    }
})

</script>


<style lang="scss" scoped>
.spinner {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid;
  margin: auto;
  animation: spin 1s infinite ease-out;

  &-primary {
      border-color: $primary-100 transparent;
  }

  &-secondary {
      border-color: $secondary-100 transparent;
  }

  &-dark {
      border-color: $dark-100 transparent;
  }

}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>