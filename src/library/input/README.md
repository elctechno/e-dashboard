## INPUT

### API

| Property       | Description                                                         | Type    | Default |
| :------------- | :------------------------------------------------------------------ | :------ | :------ |
| `name`         | Set the name input                                                  | String  | null    |
| `label`        | Set the label for                                                   | String  | null    |
| `size`         | Set the input size, options include ( small , medium, large, auto ) | String  | medium  |
| `placeholder`  | Set the placeholder for input                                       | String  | null    |
| `required`     | Set the required for input                                          | Boolean | false   |
| `errorMessage` | Set the message for error message                                   | String  | null    |

#### Usage / Examples

```vue
<template>
  <EInput
    name="example"
    v-model="inputValue"
    label="Example Input"
    placeholder="Enter something..."
    :required="true"
    size="medium"
    errorMessage="This field is required"
  />
</template>

<script lang="ts" setup>
const inputValue = ref("");
</script>
```
