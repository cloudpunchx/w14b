<template>
    <div>
        <!-- Header -->
        <h1>Welcome to ROCK, PAPER, SCISSORS!</h1>

        <!-- Scoreboard -->
        <div class="scoreboardContainer">
            <ScoreBoard v-for="(scores,index) in scores"
            :key="index"
            :userScore="scores.userScore"
            :compScore="scores.compScore"
            :winner="scores.winner"
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
                // If the random selection for Computer Opponent = names: Rock, Paper or Scissors, I want to assign the correct img and emit to ComputerSelection.vue
                if (this.selectedCompChoice === "Rock"){
                    let compSelect = "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png";
                    // emit random selection to ComputerSelection.vue
                    this.$root.$emit(`compSelection`, compSelect);
                    // I want gamePlay function to run after this to determine score
                    this.gamePlay();
                } else if (this.selectedCompChoice === "Paper"){
                    let compSelect = "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png";
                    this.$root.$emit(`compSelection`, compSelect);
                    this.gamePlay();
                } else if (this.selectedCompChoice === "Scissors"){
                    let compSelect = "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png";
                    this.$root.$emit(`compSelection`, compSelect);
                    this.gamePlay();
                } else{
                    alert("Please make selection to start game!");
                }
            },
            counterMove(){
                // Math.floor rounds a number down to nearest integer, then randomize my array
                let compSelect = Math.floor(Math.random() * this.computerChoices.length);
                // set variable for math function, then assigned empty variable to the array with random selection
                this.selectedCompChoice = this.computerChoices[compSelect];
                // run function after completion so we can assign img and send to Computer Selection Component.
                this.getChoiceImg();
            },
            gamePlay(){
                // if both selections are the same, I want my 'Winner' variable to say Tie Game
                // my SelectedUserChoice should be set once the specific button is clicked (in above functions choose____)
                if (this.selectedUserChoice === this.selectedCompChoice){
                    this.scores.winner = "Tie game!";
                } else if(
                    // this should cover all outcomes for User winning the round
                    (this.selectedUserChoice === "Scissors" && this.selectedCompChoice === "Paper") ||
                    (this.selectedUserChoice === "Rock" && this.selectedCompChoice === "Scissors") ||
                    (this.selectedUserChoice === "Paper" && this.selectedCompChoice === "Rock")
                    ){
                        // add to User score if they win, and update Winner string to say win.
                        this.scores.userScore++;
                        this.scores.winner = "You win!";
                } else if (this.selectedUserChoice === ""){
                    alert("Please make selection to start game!");
                } else{
                    // otherwise computer will win if User didn't. Update computer score and Winner message.
                    this.scores.compScore++;
                    this.scores.winner = "You lost!";
                }
            },
        },
        mounted () {
            this.gamePlay();
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