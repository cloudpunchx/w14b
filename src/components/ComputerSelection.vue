<template>
    <div>
        <h2>let's do this!</h2>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/19446/cartoon-cat-face-clipart-xl.png" alt="Transparent Dog Cartoon">
    </div>
</template>

<script>
    export default {
        name: "ComputerSelection",
        data() {
            return {
                computerChoices: [
                                "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                                "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                                "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                                ],
                randomChoice: "",
            }
        },

        methods: {
            randomSelection(){
                let randomChoiceIndex = Math.floor(Math.random() * this.computerChoices.length);
                this.randomChoice = this.choices[randomChoiceIndex];
                this.$root.$emit(`computerSelection`, this.choice);
            }
        },
        created () {
            this.computerSelectionImg = this.randomSelection(this.computerChoices);
        },
    }
</script>

<style scoped>
img{
    width: 5vw;
}
</style>