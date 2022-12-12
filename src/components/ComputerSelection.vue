<template>
    <div>
        <img :src="compSelect">
    </div>
</template>

<script>
    export default {
        name: "ComputerSelection",
        data() {
            return {
                compSelect: ""
            }
        },
        methods: {
            displaySelection(img){
                this.compSelect = img;
            }
        },
        mounted () {
            this.$root.$on(`compSelection`, this.displaySelection);
        },
    }
</script>

<style scoped>
img{
    width: 15vw;
}
</style>