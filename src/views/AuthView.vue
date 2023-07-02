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

<script lang="ts" setup>
import { Ref, ref } from 'vue'
import AuthService from '../services/AuthServices'

let email: Ref = ref("");
let password: Ref = ref("");

const authUser = async () => {
    const auth = new AuthService();
    const success = await auth.login(email.value, password.value);

    (success) ? alert('Exito!') : alert('Login failed');

}

const getUserInfo = (){
    const token = $session.get('auth');
}

</script>

<style scoped lang="scss"></style>
