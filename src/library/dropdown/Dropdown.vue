<template>
    <div class="dropdown">
        <div @click="toogleDropdown" :class="['dropdown__table', colorTableDropdown, sizeDropdownTable]" >
            <div class="dropdown__table__title">
                <span v-if="!selectedItems">{{ placeholder }}</span>
                <span v-else>{{ selectedItems[optionsLabel] }}</span>
            </div>
            <div :class="['dropdown__table__icon', colorIconDropdown]">
                <Icon v-if="!isOpen"  icon="mdi:arrow-bottom-circle" />
                <Icon v-else  icon="mdi:arrow-top-circle" />
            </div>
        </div>
        <div v-if="isOpen" :class="['dropdown__option', colorOptionDropdown, sizeDropdownOption]">
            <div v-for="(items, index) in options" :key="index" @click="toogleItem(items)" :class="['dropdown__option__content', colorHoverOptionDropdown]">
                {{ items[optionsLabel] }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref, computed , PropType } from 'vue'
import Separator from '@/library/separator/Separator.vue'


export default defineComponent({
    components: {
        Separator,
    },
    props: {
        modelValue: {
            type: [String, Number, Array],
            default: null,
        },
        options: {
            type: Array as PropType<{ [key: string]: any }[]>,
            default: []
        },
        optionsLabel : {
            type: String,
            default: ''
        },
        optionsValue: {
            type: String || Number,
            default: null
        },
        placeholder: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'primary',
            validator: (value: string) => ['primary', 'secondary', 'dark'].includes(value),
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value: string) => ['small', 'medium', 'large'].includes(value),
        }
    },
    setup(props, {emit}){

        const isOpen = ref(false);
        const selectedItems = ref<any>(props.modelValue)     

        const toogleDropdown = () => {
            isOpen.value = !isOpen.value
        }

        const toogleItem = (value: any) => {
            selectedItems.value = value;
            emit('update:modelValue', value[props.optionsValue])
            toogleDropdown()
        }

        const colorTableDropdown = computed(() => {
            return `dropdown__table-${props.color}`
        })

        const colorOptionDropdown = computed(() => {
            return `dropdown__option-${props.color}`
        })

        const colorIconDropdown = computed(() => {
            return `dropdown__table__icon-${props.color}`
        })

        const colorHoverOptionDropdown = computed(() => {
            return `dropdown__option__content-${props.color}`
        })

        const sizeDropdownTable = computed(() => {
            return `dropdown__table-${props.size}`
        })

        const sizeDropdownOption = computed(() => {
            return `dropdown__option-${props.size}`
        })


        return {
            isOpen,
            toogleDropdown,
            toogleItem,
            selectedItems,
            colorTableDropdown,
            colorOptionDropdown,
            colorIconDropdown,
            colorHoverOptionDropdown,
            sizeDropdownTable,
            sizeDropdownOption
        }

    }
})

</script>

<style lang="scss">

.dropdown {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    justify-items: center;
    justify-self: center;

    &__table {
        display: flex;
        gap: 3%;
        width: 80px;
        justify-content: space-between;
        border-radius: 5px;
        padding: 7px;
        align-items: center;
        cursor: pointer;

        @media(min-width: 720px){

             &-small {
                width: 131px;
            }

            &-medium {
                width: 216px;
            }

            &-large {
                width: 320px;
            }

        }

        &-primary {
            border: 1px solid $primary-100;
        }

        &-secondary {
            border: 1px solid $secondary-300;
        }

        &-dark {
            border: 1px solid $dark-100;
        }

    
        &__title {
            overflow: hidden;
            font-size: 7px;
        }

        &__icon {
            font-size: 10px;

            &-primary {
                color: $primary-100
            }

            &-secondary {
                color: $secondary-300
            }

            &-dark {
                color: $dark-100;
            }
            
        }

    }

    &__option {
        display: flex;
        flex-direction: column;
        gap: 0px;
        width: 90px;
        padding: 0px 0px;
        height: 100px;
        overflow-y: scroll;
        border-radius: 5px;

        @media(min-width: 720px) {

             &-small {
                width: 141px;
            }

            &-medium {
                width: 226px;
            }

            &-large {
                width: 330px;
            }

        }


        &-primary {
            border: 1px solid $primary-100;
        }

        &-secondary {
            border: 1px solid $secondary-300;
        }

        &-dark {
            border: 1px solid $dark-100;
        }


        &__content {
            font-size: 7px;
            padding: 5px 5px;


            &-primary:hover {
                background: $primary-100;
                opacity: 90%;
                cursor: pointer;
            }

            &-secondary:hover {
                background: $secondary-300;
                opacity: 90%;
                cursor: pointer;
            }

            &-dark:hover {
                background: $dark-100;
                opacity: 65%;
                cursor: pointer;
            }

        }

    }



}

</style>