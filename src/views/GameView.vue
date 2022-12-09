<template>
    <div>
        <h1>Welcome to ROCK, PAPER, SCISSORS!</h1>
        <div>
            <button @click="chooseRock"><img :src="rock" alt="Rock"></button>
            <button @click="choosePaper"><img :src="paper" alt="Paper"></button>
            <button @click="chooseScissors"><img :src="scissors" alt="Scissors"></button>
            <UserSelection/>
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
                rock: "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                paper: "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                scissors: "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png"
            }
        },
        components: {
            UserSelection,
            ComputerSelection
        },
        methods: {
            chooseRock() {
                this.$root.$emit(`getSelection`, this.rock);
            },
            choosePaper() {
                this.$root.$emit(`getSelection`, this.paper);
            },
            chooseScissors() {
                this.$root.$emit(`getSelection`, this.scissors);
            },
            // randomSelection(){
            //     let randomSelection = Math.floor(Math.random() * this.choices.length);
            //     this.selection = this.choices[randomSelection];
            //     this.$emit(`getRandomSelection`, this.selection);
            // }
        },
    }
</script>

<style scoped>
img{
    width: 10vw;
}
button{
    margin: 15px;
}
</style>