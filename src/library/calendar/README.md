## CALENDAR

### API

| Property       | Description                               | Type   | Default |
| :------------- | :---------------------------------------- | :----- | :------ |
| `selectDate`   | Set the date default (YYYY-MM-DD)         | String | null    |
| `border-color` | set the color ( primary, secondary, dark) | String | primary |

#### Usage / Examples

```vue
<template>
  <ECalendar :selectedDate="selectedDate" />
</template>

<script lang="ts" setup>
const selectDate = ref("2024-10-10");
</script>
```
