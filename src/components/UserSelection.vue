<template>
    <div>
        <img :src="selectionImg">
    </div>
</template>

<script>
    export default {
        name: "UserSelection",
        data() {
            return {
                selectionImg: "",
            }
        },
        methods: {
            displaySelection(img) {
                this.selectionImg = img;
            }
        },
        mounted () {
            this.$root.$on(`getSelection`, this.displaySelection);
            this.$root.$on(`getSelection`, this.displaySelection);
            this.$root.$on(`getSelection`, this.displaySelection);
        },
    }
</script>

<style scoped>

</style>