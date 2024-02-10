<template>
        <hr :class="['separator', colorSeparator]" />
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        color: {
            type: String,
            default: 'dark',
            validator: (value: string) => ['primary', 'secondary', 'dark'].includes(value),
        }
    },
    setup(props){

        const colorSeparator = computed(() => {
            return `separator-${props.color}`
        })

        return {
            colorSeparator
        }

    }
})

</script>

<style lang="scss" scoped>

.separator {
    border: none;
    height: 1px;
    display: block;
    margin: auto;

    &-dark {
        background: $dark-100;
    }

    &-primary {
        background: $primary-200;
    }

    &-secondary {
        background: $secondary-100;
    }

}

</style>