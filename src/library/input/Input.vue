<template>
    <div class="input-wrapper" :class="{ 'has-error': showError }">
        <label :for="name">{{ label }}</label>
        <input :id="name" v-model="inputValue" :placeholder="placeholder"
            :class="[{ 'input-error': showError }, sizeInput] " />
        <span v-if="showError" class="error-message">{{ errorMessage }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value: string) => ['small', 'medium', 'large'].includes(value),
        },
        placeholder: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: 'This field is required',
        },
    },
    setup(props, { emit }) {

        const inputValue = ref(props.modelValue);
        const showError = ref(false);

        watch(inputValue, () => {
            validate();
            emit('update:modelValue', inputValue.value);
        });

        const validate = () => {
            showError.value = props.required && !inputValue.value;
        };

         const sizeInput = computed(() => {
            return `input-${props.size}`;
        })

        return {
            inputValue,
            showError,
            sizeInput
        };
    },
});
</script>

<style lang="scss">
.input-wrapper {
    display: flex;
    flex-direction: column;

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;

        &.input-large {
            width: 300px;
        }

        &.input-medium {
            width: 250px;
        }

        &.input-small {
            width: 150px;
        }

        &.input-auto {
            width: 100%;
        }

        &.input-error {
            border-color: red;
        }
    }

    .error-message {
        color: red;
        font-size: 0.8rem;
        padding: 5px 5px;
    }
}
</style>
