<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

let email:Ref<string> = ref('');
let password: Ref<string> = ref('');

const authUser = async ():Promise<void> => {
    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        alert("Éxito");
    } catch (error) {
        alert("error: ")
    }
}

</script>

<style scoped></style>