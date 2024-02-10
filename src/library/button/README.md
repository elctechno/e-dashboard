## BUTTON

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
