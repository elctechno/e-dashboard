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
