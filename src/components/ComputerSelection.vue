<template>
    <div>
        <img :src="compSelectionImg">
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
            randomSelection(img) {
                this.compSelectionImg = img;
            }
        },
        mounted () {
            this.$root.$on(`getRandomChoice`, this.randomSelection);
        },
    }
</script>

<style scoped>

</style>