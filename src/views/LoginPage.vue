<template>
    <div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="userEmail">
            <label for="password">Password:</label>
            <input type="password" name="password" id="userPW">
            <!-- I wanted to toggle password view in case user wants to see what they typed -->
            <input type="checkbox" @click="viewPassword">
            <button @click="login">Submit</button>

            <div>
                <h2>{{loginError}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
// import router to be used below in axios request on success
import router from '@/router';

    export default {
        name: "LoginPage",
        data() {
            return {
                loginError: "",
            }
        },
        methods: {
            viewPassword() {
                let userPW = document.getElementById(`userPW`);
                // if 'userPW's input type is password, then change it to Text
                if (userPW.type === "password"){
                    userPW.type = "text";
                    // otherwise, keep it as password input
                } else{
                    userPW = "password";
                }
            },
            login() {
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    data: {
                        email: document.getElementById(`userEmail`).value,
                        password: document.getElementById(`userPW`).value, 
                    }
                }).then((response)=>{
                    // send user to game page if login is successful
                    // router.push then (path)
                    router.push("/game-start");
                    // set cookie with the login token
                    cookies.set(`sessionToken`, response.data.token);
                }).catch((error)=>{
                    this.loginError = error;
                    this.loginError = "Incorrect Email or Password"
                })
            }
        },
    }
</script>

<style scoped>

</style>