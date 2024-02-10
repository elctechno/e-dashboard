<!-- CalendarDropdown.vue -->

<template>
    <div class="calendar-dropdown">
        <div :class="['dropdown', colorDropdown]" @click="toggleDropdown">
            <span>{{ currentDate ? currentDate.format('D MMMM, YYYY') : placeholder }}</span>
            <span><Icon icon="mdi:calendar" /></span>
        </div>
        <div v-show="isOpen" :class="['calendar-container', colorCalendar]">
            <div class="calendar">
                <div class="calendar-header">
                    <button @click="prevYear">&lt;&lt;</button>
                    <button @click="prevMonth">&lt;</button>
                    <div class="month-year-selector">
                        <select v-model="selectedMonth" @change="updateMonth" :class="colorSelect">
                            <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
                        </select>
                        <select v-model="selectedYear" @change="updateYear" :class="colorSelect">
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                    <button @click="nextMonth">&gt;</button>
                    <button @click="nextYear">&gt;&gt;</button>
                </div>
                <div class="calendar-days">
                    <div v-for="day in daysOfWeek" :key="day" class="calendar-day">{{ day }}</div>
                    <div v-for="day in daysInMonth" :key="day" :class="['calendar-day', { 'selected': isSelected(day) }]"
                        @click="selectDate(day)">
                        {{ day > 0 ? day : '' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
    props: {
        placeholder: {
            type: String,
            default: 'Select a date',
        },
        selectedDate: {
            type: String,
            default: '',
        },
        borderColor: {
            type: String,
            default: 'primary',
            validator: (value: string) => ['primary', 'secondary', 'dark'].includes(value),
        },
    },
    setup(props) {
        const isOpen = ref(false); 
        
        const currentDate = ref(props.selectedDate ? dayjs(props.selectedDate) : dayjs());

        const currentMonth = computed(() => currentDate.value.clone().startOf('month'));

        const currentYear = computed(() => currentDate.value.clone().startOf('year'));

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const years = computed(() => {
            const currentYear = dayjs().year();
            return Array.from({ length: 12 }, (_, index) => currentYear - 10  + index);
        });

        const daysInMonth = computed(() => {
            const firstDayOfMonth = currentMonth.value.day();
            const daysInMonth = currentMonth.value.daysInMonth();
            const days = Array.from({ length: daysInMonth + firstDayOfMonth }, (_, index) =>
                index >= firstDayOfMonth ? index - firstDayOfMonth + 1 : 0
            );
            return days;
        });

        const selectedMonth = ref(currentMonth.value.month());

        const selectedYear = ref(currentYear.value.year());



        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
        };

        const prevYear = () => {
            selectedYear.value -= 1;
            updateMonthYear();
        };

        const nextYear = () => {
            selectedYear.value += 1;
            updateMonthYear();
        };

        const prevMonth = () => {
            selectedMonth.value -= 1;
            if (selectedMonth.value < 0) {
                selectedMonth.value = 11;
                selectedYear.value -= 1;
            }
            updateMonthYear();
        };

        const nextMonth = () => {
            selectedMonth.value += 1;
            if (selectedMonth.value > 11) {
                selectedMonth.value = 0;
                selectedYear.value += 1;
            }
            updateMonthYear();
        };

        const updateMonthYear = () => {
            currentDate.value = dayjs().year(selectedYear.value).month(selectedMonth.value).date(1);
        };

        const updateMonth = () => {
            updateMonthYear();
        };

        const updateYear = () => {
            updateMonthYear();
        };

        const selectDate = (day: any) => {
            if (day > 0) {
                currentDate.value = currentMonth.value.date(day);
                isOpen.value = false;
            }
        };

        const isSelected = (day: any) => {
            return day > 0 && currentDate.value.date() === day;
        };

         const colorDropdown = computed(() => {
            return `dropdown-${props.borderColor}`
        })

        const colorCalendar = computed(() => {
            return `calendar-container-${props.borderColor}`
        })

         const colorSelect = computed(() => {
            return `select-${props.borderColor}`
        })

        watch([() => selectedYear.value, () => selectedMonth.value], () => {
            currentDate.value = dayjs().year(selectedYear.value).month(selectedMonth.value).date(1);
        });

        return {
            isOpen,
            currentDate,
            currentMonth,
            daysOfWeek,
            months,
            years,
            daysInMonth,
            selectedMonth,
            selectedYear,
            colorDropdown,
            colorCalendar,
            toggleDropdown,
            colorSelect,
            prevYear,
            nextYear,
            prevMonth,
            nextMonth,
            updateMonth,
            updateYear,
            selectDate,
            isSelected,
        };
    },
});
</script>

<style lang="scss">

.calendar-dropdown {
    display: inline-block;
    position: relative;

    .dropdown {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 10px 5px;
        border: 1px solid #ccc;
        border-radius: 5px;

        &-primary {
            border: 1px solid $primary-200;
        }

        &-secondary {
            border: 1px solid $secondary-200;
        }

        &-dark {
            border: 1px solid $dark-100;
        }
        
    }

    .calendar-container {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
        display: inline-block;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

         &-primary {
            border: 1px solid $primary-200;
        }

        &-secondary {
            border: 1px solid $secondary-200;
        }

        &-dark {
            border: 1px solid $dark-100;
        }
    }

    .calendar {
        width: 320px;
        margin: auto;
    }

    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 14px;
            color: #333;

            &:hover {
                text-decoration: underline;
            }

            
        }

        h2 {
            font-size: 16px;
            font-weight: bold;
            color: #333;
        }

        .month-year-selector {
            display: flex;
            gap: 5px;

            select {
                padding: 5px;
                border-radius: 5px;
                font-size: 14px;
            }

            .select {

                &-primary {
                    border: 1px solid $primary-200;
                }

                &-secondary {
                    border: 1px solid $secondary-200;
                }

                &-dark {
                    border: 1px solid $dark-100;
                }

            }
        }
    }

    .calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
    }

    .calendar-day {
        text-align: center;
        padding: 5px;
        border: 1px solid #ccc;
        cursor: pointer;

        &.disabled {
            color: #aaa;
            cursor: not-allowed;
        }

        &.selected {
            background-color: $secondary-300;
            opacity: 95%;
            color: #fff;
            
        }

        &:hover {
            background-color: $secondary-200;
        }
    }
}
</style>
