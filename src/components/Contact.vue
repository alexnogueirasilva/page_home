<template>

    <div class="columns main">

        <div class="animated slideInUp column is-4 is-offset-1">

            <h2>Send me a message!</h2>

            <div class="content has-text-centered">
                <a class="icon" href="https://github.com/jharmon141">
                    <icon name="github" scale="5"></icon>
                </a>
                <a class="icon" href="https://www.linkedin.com/in/jeremy-harmon-b5553212a/">
                    <icon name="linkedin" scale="5"></icon>
                </a>
                <a class="icon" href="https://twitter.com/jspacemanjr">
                    <icon name="twitter" scale="5"></icon>
                </a>
                <a class="icon" href="mailto:jeremy.l.harmon@gmail.com">
                    <icon name="envelope"></icon>
                </a>
            </div>

        </div>

        <div class="animated slideInDown column is-5">

            <form>

                <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                <input :class="{ 'errorInput': errors.has('name') }" v-model="name" placeholder="Name" v-validate="'required'" type="text" name="name">
                <br>
                <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                <input :class="{ 'errorInput': errors.has('email') }" v-model="email" placeholder="E-Mail Address" v-validate="'required|email'" type="text" name="email">
                <br>
                <span class="error" v-show="errors.has('message')">{{ errors.first('message') }}</span>
                <textarea :class="{ 'errorInput': errors.has('message') }" v-model="message" placeholder="Message" v-validate="'required'" type="text" name="message"></textarea>
                <br>
                <span v-if="loading" type="submit" class="button is-outlined is-danger"><img class="loading" src="../assets/img_loading.gif"></span>
                <span v-else type="submit" class="button is-outlined is-danger" @click="submitMessage">&lt;Submit/&gt;</span>

            </form>

        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'Contact',
    data: () => ({
        name: '',
        email: '',
        message: '',
        loading: false,
    }),
    methods: {
        submitMessage() {
            if (this.name === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Por favo digite seu nome!',
                    type: 'warning',
                })
            }
            else if (this.email === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Por favor, indique o seu endereço de e-mail!',
                    type: 'warning',
                })
            }
            else if (this.message === '') {
                this.$swal({
                    title: 'Oops!',
                    text: 'Por favor, digite uma mensagem!',
                    type: 'warning',
                })
            }
            else {
                this.loading = true
                let name = this.name.trim().split(' ').join('+')
                let message = this.message.trim().split(' ').join('+')
                axios.get(`/message/${name}/${this.email}/${message}`).then((res) => {
                    if (res.data === 'Success!') {
                        this.loading = false
                        this.$swal({
                            title: 'Success!',
                            text: 'Ynossa mensagem foi enviada!',
                            type: 'success',
                            timer: '5000'
                        }).then( () => {
                            this.$router.push('/')
                        })
                    }
                    else {
                        console.log(res)
                        this.loading = false
                        this.$swal({
                            title: 'Error!',
                            text: 'Ah não! Algo deu errado. Por favor, recarregue a página e tente denovo!',
                            type: 'error',
                            timer: '5000'
                        })
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.loading {
    height: 75px;
}
.error {
    color: red;
    font-size: 12px;
    text-align: left !important;
}
.errorInput {
    outline-color: red;
}
input {
    outline-color: green;
}
.button {
    width: 100%;
    height: 50px !important;
    margin-top: 15px;
}
input {
    margin-bottom: 25px;
    height: 50px;
    font-size: 18px;
    width: 100%;
    padding: 9px;
}
textarea {
    outline-color: green;
    height: 200px;
    width: 100%;
    font-size: 18px;
    border: solid 1px #bbb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    padding: 9px;
}
h2 {
    margin-bottom: 30px !important;
    font-size: 24px !important;
    text-align: center;
}
h2:hover {
    color: orange;
}
a.icon {
    font-size: 28px !important;
    display: inline;
}
svg.fa-icon {
    height: 50px;
    width: 60px;
}
.fa-icon:hover {
    color: cyan !important;
}
</style>
