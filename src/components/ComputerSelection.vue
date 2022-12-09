<template>
    <div>
        <button @click="randomSelection">Opponent Play!</button>
    </div>
</template>

<script>
    export default {
        name: "ComputerSelection",
        data() {
            return {
            compSelectionImg: "",
            }
        },
        methods: {
            randomSelection() {
                
            }
        },
        mounted () {
            this.$root.$on(``);
        },
    }
</script>

<style scoped>

</style>