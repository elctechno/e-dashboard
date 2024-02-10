## CALENDAR

### API

| Property     | Description                       | Type   | Default |
| :----------- | :-------------------------------- | :----- | :------ |
| `selectDate` | Set the date default (YYYY-MM-DD) | String | null    |

#### Usage / Examples

```vue
<template>
  <ECalendar :selectedDate="selectedDate" />
</template>

<script lang="ts" setup>
const selectDate = ref("2024-10-10");
</script>
```
