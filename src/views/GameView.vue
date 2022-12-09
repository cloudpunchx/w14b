<template>
    <div>
        <h1>Welcome to ROCK, PAPER, SCISSORS!</h1>
        <div>
            <UserSelection/>
            <div>
                <img :src="userSelectionImg">
            </div>
            <ComputerSelection/>
        </div>
    </div>
</template>

<script>
import UserSelection from '@/components/UserSelection.vue';
import ComputerSelection from '@/components/ComputerSelection.vue';

    export default {
        name: "GameView",
        data() {
            return {
                userSelectionImg: "", 
                // rock: "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                // paper: "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                // scissors: "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                // choices: ["rock", "paper", "scissors"],
                // choice: "",
                // choices: [
                //     {
                //         rock: "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                //     },
                //     {
                //         paper: "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                //     },
                //     {
                //         scissors: "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                //     }
                // ],
                // choice: "",
            }
        },
        components: {
            UserSelection,
            ComputerSelection
        },
        methods: {
            displaySelection(img){
                this.userSelectionImg = img;
            }
        },
        mounted () {
            this.$root.$on(`userSelection`, this.displaySelection);
            this.$root.$on(`userSelection`, this.displaySelection);
            this.$root.$on(`userSelection`, this.displaySelection);
        },
    }
</script>

<style scoped>
</style>