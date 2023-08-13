<template>
  <div class="auth_body">
    <b-container>
      <div class="auth-page">
        <b-row align-v="center" class="justify-content-between">
          <b-col align-v="center" sm="12" md="6" lg="6" xl="6">
            <Nuxt />
            <div class="pt-2 mt-4">
              <nuxt-link to="/auth/login">
                <b-button
                  @click="$route.name == 'auth-login' ? userLogin() : ''"
                  :variant="
                    $route.name == 'auth-login' ? 'primary' : 'outline-primary'
                  "
                  >Login</b-button
                >
              </nuxt-link>
              <nuxt-link to="/auth/signup">
                <b-button
                  class="ml-4"
                  @click="$route.name == 'auth-signup' ? signup() : ''"
                  :variant="
                    $route.name == 'auth-signup' ? 'primary' : 'outline-primary'
                  "
                  > <b-spinner v-if="signupButtonLoader" small></b-spinner> Sign Up</b-button
                >
              </nuxt-link>
            </div>
            <div class="privecy mt-5">
              <a href="#">Terms and Privacy Policy</a>
            </div>
            <div></div>
          </b-col>
          <b-col align-v="center" sm="12" md="6" lg="6" xl="6">
            <img src="~assets/images/robo_invoice_logo.svg" alt="auth-image" />
          </b-col>
        </b-row>
      </div>
    </b-container>
    
  </div>
</template>

<script>
export default {
  data (){
    return {
      signupButtonLoader: false,
      loginButtonLoader: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        if (
          this.$store.state.authentication.email &&
          this.$store.state.authentication.password
        ) {
          if (this.$store.state.authentication.password.length < 6) {
            this.toast({
            header: 'Warning!',
            body: 'Password must have at least letters.',
            variant: 'warning',
            append: true
          });
          }else{
            await this.$auth
            .loginWith("local", {
              data: {
                email: this.$store.state.authentication.email,
                password: this.$store.state.authentication.password,
              },
            })
            .then((response) => {
              this.$store.commit("authentication/userloginemail");
              this.$store.commit("authentication/userloginpassword");
              this.$router.push("/");
            });
          }
          
        } else {
          this.toast({
          header: 'Warning!',
          body: 'Fill the empty fields',
          variant: 'warning',
          append: true
        });          
        }
      } catch (error) {
        if (error.response.status == 403) {
          this.toast({
              header: 'Warning!',
              body: error.response.data.message,
              variant: 'danger',
              append: true
            });
        } else if (error.response.status == 404) {
          this.toast({
              header: 'Warning!',
              body: error.response.data.message,
              variant: 'danger',
              append: true
            });
        } else {
        }
      }
    },
    async signup() {
      
      if (
        this.$store.state.authentication.firstname &&
        this.$store.state.authentication.lastname &&
        this.$store.state.authentication.signupemail &&
        this.$store.state.authentication.industry &&
        this.$store.state.authentication.signuppassword
      ) {
        this.signupButtonLoader = true;
        try {
          var signupBody = {
            firstname: this.$store.state.authentication.firstname,
            lastname: this.$store.state.authentication.lastname,
            email: this.$store.state.authentication.signupemail,
            industry: this.$store.state.authentication.industry,
            password: this.$store.state.authentication.signuppassword,
          };
          if (this.$store.state.authentication.signuppassword < 6) {
                this.toast({
                header: 'Warning!',
                body: 'Password must have at least letters.',
                variant: 'warning',
                append: true
                });
          } else {
            await this.$axios.$post("/register", signupBody).then((response) => {
            this.$store.commit("authentication/userSignupEmail");
            this.$store.commit("authentication/userSignupfirstname");
            this.$store.commit("authentication/userSignuplastname");
            this.$store.commit("authentication/userSignupindustry");
            this.$store.commit("authentication/userSignupsignuppassword");
            this.signupButtonLoader = false;
            this.$router.push("/auth/login");
          });
          }
        } catch (error) {
          if (error.response.status == 403) {
          this.toast({
              header: 'Warning!',
              body: error.response.data.message,
              variant: 'danger',
              append: true
            });
        }
        }
      } else {
        this.toast({
          header: 'Warning!',
          body: 'Fill the empty fields',
          variant: 'warning',
          append: true
        });  
      }
    },
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: #38427D;
}
a:hover{
  color: #38427D;
}
.auth_body{
  background: #fff;
}
.auth-page {
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-page button {
  padding: 14px 41px;
  border-radius: 8px;
}

.auth-page .btn-primary:focus,
.auth-page .btn-primary.focus {
  box-shadow: none;
}

.auth-page .privecy a {
  font-size: 14px;
  color: #38427D;
  text-decoration: underline;
}
@media screen and (max-width : 767px){
  .auth-page {
    display: block;
    max-height: 100%;
}
}
</style>