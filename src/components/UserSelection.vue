<template>
    <div>
        <img @click="chooseRock" :src="rock.img" alt="Rock">
        <img @click="choosePaper" :src="paper.img" alt="Paper">
        <img @click="chooseScissors" :src="scissors.img" alt="Scissors">
    </div>
</template>

<script>
    export default {
        name: "UserSelection",
        data() {
            return {
                rock: {
                    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/643e731d-0134-40ca-b297-d7ced02ea763-profile_image-300x300.png",
                    selected: false,
                },
                paper: {
                    img: "https://images.vexels.com/media/users/3/255354/isolated/preview/0b19fb50abf91bf096def197e3b9b49f-notebook-retro-cartoon-stroke.png",
                    selected: false,
                },
                scissors: {
                        img: "https://images.vexels.com/media/users/3/255327/isolated/preview/10043bb06e70e61625b1afa5f6a17975-scissors-school-supplies-cartoon.png",
                        selected: false,
                }
            }
        },
        methods: {
            chooseRock(){
                this.$root.$emit(`userSelection`, this.rock.img);
            },
            choosePaper(){
                this.$root.$emit(`userSelection`, this.paper.img);
            },
            chooseScissors(){
                this.$root.$emit(`userSelection`, this.scissors.img);
            }
        },
    }
</script>

<style scoped>
img{
    width: 10vw;
    margin: 15px;
}
button{
    margin: 15px;
}
</style>