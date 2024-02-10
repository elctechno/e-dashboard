<template>
    <button :disabled="disabled" :class="['button', colorButton, sizeButton, outlinedButton]">
        <Spinner v-if="loading" :color="outlined ? color : colorSpinner  " />
        <slot v-else />
    </button>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'
import Spinner from '@/library/spinner/Spinner.vue'

export default defineComponent({
    components: {
        Spinner,
    },
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium'
        },
        outlined: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        colorSpinner: {
            type: String,
            default: '',
        }
    },
    setup(props){

        const colorButton = computed(() => {
            return `button-${props.color}`
        })

        const sizeButton = computed(() => {
            return `button-${props.size}`
        })

        const outlinedButton = computed(() =>{
            if(props.outlined){
                return `button-outlined`
            }
        })


        return {
            colorButton,
            sizeButton,
            outlinedButton,
        }

    }
})

</script>

<style lang="scss" scoped>

.button {
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
    width: 60px;

    &:not(:disabled):hover {
        opacity: 90%;
    }

    &-outlined {
        background: transparent !important;
        color: inherit !important;
    }

    &-disabled {
        cursor: not-allowed;
        opacity: 50%;
    }

    &-primary {
        background-color: $primary-100;
        color: $secondary-100;
        border: 1px solid $primary-100;
    }

    &-secondary {
        background: $secondary-100;
        color: $dark-100;
        border: 1px solid $secondary-100;
    }

    &-dark {
        background: $dark-100;
        color: $secondary-100;
        border: 1px solid $dark-100;
    }

    @media(min-width: 720px){

        &-small {
            width: 70px;
            padding: 10px;
        }

        &-medium {
            width: 141px;
            padding: 15px 26px;
        }

        &-large {
            width: 187px;
            padding: 11px 31px;
        }

    }

}

</style>