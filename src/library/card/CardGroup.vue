<template>
    <div :class="['card-group', modelCard]">
        <Card v-for="items in data" :key="items">
           <slot :props="items" />
        </Card>
    </div>
</template>

<script lang="ts">

import { defineComponent, computed , PropType } from 'vue'
import Card from '@/library/card/Card.vue'



export default defineComponent({
    components: {
        Card
    },
    props: {
        data: {
            type: Array as PropType<any[]>,
            default: [],
            required: false
        },
        model: {
            type: String,
            default: 'horizontal',
            validator: (value: string) => ['horizontal', 'vertical' ].includes(value),
        }
    },
    setup(props){

        const data = computed(() => {
            return props.data
        })

        const modelCard = computed(() => {
            return `card-group-${props.model}`
        })

        return {
            modelCard,
            data
        }

    }
})

</script>

<style lang="scss" scoped>

.card-group {
    
    &-horizontal {
        display: flex;
        flex-wrap: wrap;
        gap: 15px 43px;

        @media (min-width: 720px) {
            gap: 45px 43px;
        }

    }

    &-vertical {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

}

</style>