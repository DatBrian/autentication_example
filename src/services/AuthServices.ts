import { ref, Ref } from 'vue'
class AuthService {

    private jwt: Ref<string>;
    private error: Ref<string>;

    constructor() {
        this.jwt = ref('');
        this.error = ref('');
    }

    getJwt():Ref<string> {
        return this.jwt;
    }

    getError():Ref<string> {
        return this.error;
    }

    private config(data:any) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        return config;
    }

    async login(email:string, password:string):Promise<boolean> {
        try {
            const data = {
                email: email,
                password: password
            }
            const req = await fetch('https//url.de.prueba', this.config(data));

            const res = await req.json();

            if ('errors' in res) {
                this.error.value = "Login failed";
                return false;
            }

            this.jwt.value = res.data.access_token;
            $session.start()
            $session.set('auth', res.data.access_token);
            return true;

        } catch (error) {
            this.error.value = "Login failed";
            return false;
        }
    }
}

export default AuthService;