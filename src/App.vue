<template>
  <div class="content">
    <h1> evan</h1>
    <CardGroup :data="data" model="horizontal">
        <template v-slot:default="{ props }">
          {{ props.items }}
        </template>
    </CardGroup>

    <Spinner color="dark" />

    <Card color="dark" size="large" bordered>
      example
    </Card>

    <Seperator color="primary" />
    
    <Button color="primary" size="large" outlined  :loading="false" color-spinner="secondary" >asdsa</Button>

    <Dropdown v-model="select" color="dark" size="small" placeholder="selected value" :options="data" optionsLabel="name" optionsValue="items" />

        <Calendar :selectedDate="selectedDate" />

    <Input  name="example"
        v-model="inputValue"
        label="Example Input"
        placeholder="Enter something..."
        :required="true"
        size="medium"
        errorMessage="This field is required" />

        {{ inputValue }}
  </div>
</template>


<script lang="ts">

import { defineComponent, ref } from 'vue'
import Card from '@/library/card/Card.vue'
import CardGroup from '@/library/card/CardGroup.vue'
import Seperator from '@/library/separator/Separator.vue'
import Button from '@/library/button/Button.vue'
import Spinner from '@/library/spinner/Spinner.vue'
import Dropdown from '@/library/dropdown/Dropdown.vue'
import Calendar from '@/library/calendar/Calendar.vue'
import Input from '@/library/input/Input.vue'

export default defineComponent({
  components: {
    Card,
    Seperator,
    CardGroup,
    Button,
    Spinner,
    Dropdown,
    Calendar,
    Input
  },
  setup(){

    const data = ref([
      { items: 1, name: 'evan'},
      { items: 2, name: 'pan' },
      { items: 3, name: 'wilz' },
      { items: 4, name: 'adam' },
      { items: 5, name: 'luthfi' },
      { items: 6, name: 'kiwil' },
      { items: 7, name: 'young' },
      { items: 8, name: 'start' },
      { items: 9, name: 'staasdrt' },
      { items: 10, name: 'staasdrt' },
      { items: 11, name: 'staasdrt' },
      { items: 12, name: 'stasdaart' },
    ])

     const select = ref('')

     const  selectedDate = ref('2024-02-10')

     const inputValue = ref('');


    return {
      data,
      select,
      selectedDate,
      inputValue
    }

  }
})

</script>

<style lang="scss">



</style>


