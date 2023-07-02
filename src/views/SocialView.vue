<template>
    <h1>Social Login</h1>
    <button class="btn" @click="loginGoogle">Social with Google</button>
    <button class="btn" @click="loginFacebook">Social with Facebook</button>
    <button class="btn">Social with Twitter</button>
    <button class="btn">Social with GitHub</button>
</template>

<script lang="ts" setup>

import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

const loginGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert("Exito");
    } catch (error) {
        alert("Error");
    }
}

const loginFacebook = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert("Exito");
    } catch (error) {
        alert("Error");
    }
}

</script>

<style scoped lang="scss"></style>