<template>
    <div class="scoreBoard">
        <p>ScoreBoard</p>
        <div>
            <p>Your Score: {{userScore}}</p>
            <p>Opponent: {{compScore}}</p>

            <!-- set If statement If scores = 10 then show -->
            <p v-if="winner">{{winner}} wins!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScoreBoard",
        props: {
            userScore: Number,
            compScore: Number,
            winner: String
        },
        data() {
            return {
                // userScore: "",
                // compScore: "",
            }
        },
    }
</script>

<style scoped>
p{
    color: black;
    font-weight: bold;
}
.scoreBoard{
    background-color: white;
    width: 25%;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>