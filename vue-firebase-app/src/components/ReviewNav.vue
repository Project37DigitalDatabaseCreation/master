<template>
    <div class="col-3 px-0" style="height:100%; background-color:#333333; font-family: Calibri, Candara, Segoe,
    'Segoe UI', Optima, Arial, sans-serif; font-size: 1em;">
        <div
            style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding-bottom:10px; padding-top:10px;">
            <template v-for="(item, i) in sortedStandards" :key="i">
                <div style="color:white; text-align:center;"
                    :style="selectedIndex === i ? 'background-color:#D5E8D4;' : ''"
                    @click="selectedIndex = i">
                    <button
                        style="color:white; display:inline; background-color:unset; border:unset !important;"
                        :style="selectedIndex === i ? 'color:black !important;' : ''"
                        @click="goToItem(item)">{{ item.genStandard.title }}</button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'
import { ref } from 'vue'
export default {
    setup() {
        const listItems = reactive([
            {
                title: 'Course Overview and Introduction',
                link: 'course',
                selected: false
            },
            {
                title: 'Learning Objectives (Competencies)',
                link: 'comp',
                selected: false
            },
            {
                title: 'Assessment and Measurement',
                link: 'assess',
                selected: false
            },
            {
                title: 'Instructional Materials',
                link: 'instruct',
                selected: false
            },
            {
                title: 'Learning Activities and Learner Interaction',
                link: 'learn',
                selected: false
            },
            {
                title: 'Course Technology',
                link: 'tech',
                selected: false
            },
            {
                title: 'Learner Support',
                link: 'support',
                selected: false
            },
            {
                title: 'Accessibilty and Usability',
                link: 'usable',
                selected: false
            }
        ])
        const selectedIndex = ref(-1)
        return { listItems, selectedIndex }
    },
    computed: {
        sortedStandards() {
            return this.$store.getters.sortedStandards
        }
    },
    methods: {
        goToItem(item) {
            this.$emit('go-to-item', item)
        }
    }
}
</script>