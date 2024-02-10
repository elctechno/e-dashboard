## WELCOME TO LIBRARY ELC DASHBOARD

Hi this component using vue 3 + typescript.

| Component    |
| :----------- |
| `EButton`    |
| `ECard`      |
| `ECardGroup` |
| `ECalendar`  |
| `EDropdown`  |
| `EInput`     |
| `ESpinner`   |
| `ESeparator` |

## Installation

```bash
 npm install -s github:elctechno/e-dashboard

  import { EButton } from 'e-dashboard'

  <EButton label="evan" />
```

### BUTTON

### API

| Property     | Description                                                        | Type    | Default |
| :----------- | :----------------------------------------------------------------- | :------ | :------ |
| `color`      | Set the button type, options include ( primary , secondary, dark ) | String  | primary |
| size         | Set the button size, options include ( small, medium , large )     | String  | medium  |
| outlined     | Set the button type outlined                                       | Boolean | false   |
| loading      | Set the condition of loading                                       | Boolean | false   |
| colorSpinner | Set the color spinner when loading                                 | String  | primary |
| disabled     | Set the button to disabled                                         | Boolean | false   |

#### Usage / Examples

```vue
<EButton
  color="primary"
  size="large"
  outlined
  :loading="false"
  color-spinner="secondary"
>
        asdsa
    </EButton>
```

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

## CARD

### API

| Property   | Description                                                        | Type    | Default |
| :--------- | :----------------------------------------------------------------- | :------ | :------ |
| `color`    | Set the button type, options include ( primary , secondary, dark ) | String  | primary |
| `size`     | Set the card size, options include ( small , medium, large )       | String  | medium  |
| `bordered` | Set the card bordered model                                        | Boolean | false   |

#### Usage / Examples

Button with type

```vue
<ECard color="dark" size="large" bordered>
      example
</ECard>
```

## CARD GROUP

### API

| Property   | Description                                                        | Type    | Default    |
| :--------- | :----------------------------------------------------------------- | :------ | :--------- |
| `data`     | Set the value for loop                                             | Array   | []         |
| `model`    | Set the model cardGroup , options include ( vertical, horizontal ) | String  | horizontal |
| `bordered` | Set the card bordered model                                        | Boolean | false      |

#### Usage / Examples

Button with type

```vue
<ECardGroup :data="data" model="horizontal">
        <template v-slot:default="{ props }">
          {{ props.items }}
        </template>
  </ECardGroup>
```

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

## SEPARATOR

### API

| Property | Description                                                        | Type   | Default |
| :------- | :----------------------------------------------------------------- | :----- | :------ |
| `color`  | Set the button type, options include ( primary , secondary, dark ) | String | primary |

#### Usage / Examples

Button with type

```vue
<ESeperator color="primary" />
```

## SPINNER

### API

| Property | Description                                                        | Type   | Default |
| :------- | :----------------------------------------------------------------- | :----- | :------ |
| `color`  | Set the button type, options include ( primary , secondary, dark ) | String | primary |

#### Usage / Examples

Button with type

```vue
<ESpinner color="dark" />
```
