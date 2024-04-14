<template>
    <div>
        <!-- User authentication UI -->
        <button @click="signInWithGoogle">Sign In with Google</button>
        <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import { auth } from '../../firebaseConfig.js';

    export default {
        name: 'Auth',
        setup() {
            const errorMessage = ref('');

            const signInWithGoogle = async () => {
                try {
                    const provider = new GoogleAuthProvider();
                    await signInWithPopup(auth, provider);
                } catch (error) {
                    errorMessage.value = error.message;
                    console.error('Google Sign-In Error:', error.message);
                }
            };

            return {
                errorMessage,
                signInWithGoogle,
            };
        },
    };
</script>