<template>
    <div>
        <img :src="userSelect">
    </div>
</template>

<script>
    export default {
        name: "UserSelection",
        data() {
            return {
                userSelect: ""
            }
        },
        methods: {
            displaySelection(img){
                this.userSelect = img;
            }
        },
        mounted () {
            this.$root.$on(`userSelection`, this.displaySelection);
        },
    }
</script>

<style scoped>
img{
    width: 15vw;
}
</style>