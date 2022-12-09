<template>
    <div>
        <h1>Welcome to ROCK, PAPER, SCISSORS!</h1>
        <div>
            <p>Make your choice!</p>
            <UserSelection/>
            <div>
                <img :src="userSelectionImg">
            </div>
            <div>
                <img v-if="userSelectionImg" :src="computerSelectionImg">
                <ComputerSelection/>
                <!-- <ComputerSelection v-for="choices in computerChoices" 
                :key=""
                :computerSelection=""
                /> -->
            </div>
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
                computerSelectionImg: "",
            }
        },
        components: {
            UserSelection,
            ComputerSelection
        },
        methods: {
            displaySelection(img){
                this.userSelectionImg = img;


                // LEFT OFF ON REFS?? NEED TO DISPLAY COMPUTER SELECTION ON GAME PAGE
                this.$refs.ComputerSelection.randomSelection();
            },
            displayComputerSelection(img){
                this.computerSelectionImg = img;
            },
        },
        mounted () {
            this.$root.$on(`userSelection`, this.displaySelection);
            this.$root.$on(`userSelection`, this.displaySelection);
            this.$root.$on(`userSelection`, this.displaySelection);
            this.$root.$on(`computerSelection`, this.displayComputerSelection);
        },
    }
</script>

<style scoped>
img{
    width: 15vw;
}
</style>