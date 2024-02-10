## DROPDOWN

### API

| Property       | Description                                                          | Type           | Default |
| :------------- | :------------------------------------------------------------------- | :------------- | :------ |
| `color`        | Set the Dropdown type, options include ( primary , secondary, dark ) | String         | primary |
| `size`         | Set the Dropdown size, options include ( small, medium, large )      | String         | medium  |
| `placeholder`  | Set the placeholder for dropdown                                     | String         | ' '     |
| `options`      | Set the option                                                       | Array          | []      |
| `optionsLabel` | Set the option label                                                 | String, number | null    |
| `optionsValue` | Set the options value                                                | String, number | null    |

#### Usage / Examples

```vue
<template>
  <EDropdown
    v-model="select"
    size="large"
    color="dark"
    placeholder="selected value"
    :options="data"
    optionsLabel="name"
    optionsValue="items"
  />
</template>

<script lang="ts" setup>
const data = ref([
  { items: 1, name: "evan" },
  { items: 2, name: "pan" },
  { items: 3, name: "wilz" },
  { items: 4, name: "adam" },
  { items: 5, name: "luthfi" },
  { items: 6, name: "kiwil" },
  { items: 7, name: "young" },
  { items: 8, name: "start" },
]);

const select = ref("evan");
</script>
```
