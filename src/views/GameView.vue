<template>
    <div>
        <!-- Header -->
        <h1>Welcome to ROCK, PAPER, SCISSORS!</h1>

        <!-- Scoreboard -->
        <div class="scoreboardContainer">
            <ScoreBoard v-for="(score,index) in scores"
            :key="index"
            :userScore="score.userScore"
            :compScore="score.compScore"
            :winner="winner"
            />
        </div>

        <!-- User Profile Img (cartoon dog) -->
        <div>
            <img src="https://www.transparentpng.com/thumb/dog/transparent-dog-image-icon-17.png" alt="Cute cartoon dog">
        </div>

        <!-- User choices and make choice prompt -->
        <div>
            <p>Make your choice!</p>
            <img @click="chooseRock" :src="rock.img" alt="Rock">
            <img @click="choosePaper" :src="paper.img" alt="Paper">
            <img @click="chooseScissors" :src="scissors.img" alt="Scissors">

            <!-- UserSelection here -->
            <div class="selectionContainer">
                <UserSelection/>
            </div>

            <p>VS</p>

            <!-- ComputerSelection here -->
            <div class="selectionContainer">
                <ComputerSelection/>
                <!-- Computer profile Img (cartoon cat) -->
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/19446/cartoon-cat-face-clipart-xl.png" alt="Transparent Dog Cartoon">
            </div>
        </div>
    </div>
</template>

<script>
import UserSelection from '@/components/UserSelection.vue';
import ComputerSelection from '@/components/ComputerSelection.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';

    export default {
        name: "GameView",
        data() {
            return {
                rock: {
                    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                },
                paper: {
                    img: "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                },
                scissors: {
                        img: "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                },
                selectedUserChoice: "",
                computerChoices: ["Rock", "Paper", "Scissors"],
                // computerChoices: [
                //                 "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                //                 "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                //                 "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                //                 ],
                selectedCompChoice: "",
                scores: [
                    {
                    userScore : 0,
                    compScore: 0,
                    winner: "",
                    }
                ],

            }
        },
        components: {
            UserSelection,
            ComputerSelection,
            ScoreBoard
        },
        methods: {
            // after button click, emit this selection to UserSelection.vue then triggers CounterMove function
            chooseRock(){
                this.selectedUserChoice = "Rock";
                this.$root.$emit(`userSelection`, this.rock.img);
                this.counterMove();
            },
            choosePaper(){
                this.selectedUserChoice = "Paper";
                this.$root.$emit(`userSelection`, this.paper.img);
                this.counterMove();
            },
            chooseScissors(){
                this.selectedUserChoice = "Scissors";
                this.$root.$emit(`userSelection`, this.scissors.img);
                this.counterMove();
            },
            getChoiceImg(){
                if (this.selectedCompChoice === "Rock"){
                    let compSelect = "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png";
                    this.$root.$emit(`compSelection`, compSelect);
                } else if (this.selectedCompChoice === "Paper"){
                    let compSelect = "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png";
                    this.$root.$emit(`compSelection`, compSelect);
                } else if (this.selectedCompChoice === "Scissors"){
                    let compSelect = "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png";
                    this.$root.$emit(`compSelection`, compSelect);
                } else{
                    alert("Please make selection!");
                }
            },
            counterMove(){
                // Math.floor rounds a number down to nearest integer, then randomize my array
                let compSelect = Math.floor(Math.random() * this.computerChoices.length);
                // set variable for math function, then assigned empty variable to the array with random selection
                this.selectedCompChoice = this.computerChoices[compSelect];
                this.getChoiceImg();
                // emit random selection to ComputerSelection.vue
                // this.$root.$emit(`compSelection`, this.selectedCompChoice);
            },
            gamePlay(){
                
            }
        },
    }
</script>

<style scoped>
img{
    width: 5vw;
    margin: 15px;
}
button{
    margin: 15px;
}
p{
    color: #FC6471;
    font-size: 16pt;
    font-weight: bold;
}
.scoreboardContainer{
    position: absolute;
    width: 75%;
    left: 50%;
    transform: translateX(-50%);

}
</style>