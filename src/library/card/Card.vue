<template>
    <div :class="['card', colorCard, sizeCard, borderedCard]">
        <div class="card__content">
            <slot />
        </div>
    </div>  
</template>


<script lang="ts">

import { defineComponent, computed  } from "vue"

export default defineComponent({
    props: {
        color: {
            type: String,
            default: 'primary',
            validator: (value: string) => ['primary', 'secondary', 'dark'].includes(value),
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value: string) => ['small', 'medium', 'large'].includes(value),
        },
        bordered: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, {emit}){

        const colorCard = computed(() => {
            return `card-${props.color}`;
        })

        const sizeCard = computed(() => {
            return `card-${props.size}`;
        })

        const borderedCard = computed(() => {
            if(props.bordered){
                 return `card-${props.color}-bordered`
            }
        })

        return {
            colorCard,
            sizeCard,
            borderedCard
        }
        
    }
})

</script>

<style lang="scss" scoped>
.card {
    width: auto;
    border-radius: 10px;
    padding: 10px;

    &-primary {
        background: $primary-200;
        color: $secondary-100;

        &-bordered {
            border: 1px solid $dark-100;
        }

    }

    &-secondary {
        background: $secondary-100;
        color: $dark-100;

        &-bordered {
            border: 1px solid $secondary-200;
        }

    }

    &-dark {
        background: $dark-100;
        color: $secondary-100;

        &-bordered {
            border: 1px solid $secondary-200;
        }

    }


    @media(min-width:720px){
        width: 290px;
        padding: 11px 11px;

        &-small {
            width: 187px;
        }

        &-medium {
            width: 200px;
        }

        &-large {
            width: 290px;
        }

    }

}
</style>