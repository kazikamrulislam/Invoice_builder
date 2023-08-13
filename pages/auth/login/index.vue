<template>
  <div>
    <div class="logo mb-4">
      <img height="60" src="~assets/images/new_logo.svg" alt="auth-image" />
    </div>
    <div class="login_desc">
      <h1 class="pb-2">
        Artificial Intelligence Driving Results For The all Indrustry
      </h1>
      <div class="pb-4 welcom_back">Welcome  back! Please Login to your account.</div>
    </div>
    <div class="form">
      <div>
        <label for="email" class="pt-2 mb-0">Email</label>
        <b-input-group>
          <b-form-input v-model="email"
          @input="$store.commit('authentication/userloginemail', email)"
          class="pl-3 border-1 pb-2"
          id="email"
          type="text"
          placeholder="abc@example.com" > </b-form-input>
        </b-input-group>
      </div>
      <div>
        <label for="password" class="pt-2 mb-0">Password</label>
        <b-input-group>
          <template #append>
            <b-input-group-text
              class="border-1 bg-white"
              style="cursor: pointer"
              @click="togglePass()"
            >
              <i class="material-icons-outlined">{{
                showPassword ? "visibility_off" : "visibility"
              }}</i>
            </b-input-group-text>
          </template>
          <b-form-input 
          id="password"
          :type="showPassword?'password':'text'"
          placeholder="******"
          v-model="password"
          @input="$store.commit('authentication/userloginpassword', password)" 
          class="pl-3 border-1 pb-2">
          </b-form-input>
        </b-input-group>
      </div>
      <div class="check_box d-flex justify-content-between mt-3">
        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
          ><span class="remember_next_time">Remember me</span> <br> <span class="save_next_time">Save my login details for next time.</span></b-form-checkbox
        >
        <div class="forget_pass">
          <a href="javascript:void(0)" @click="$bvModal.show('forget-password')"
            >Forget Password ?</a
          >
        </div>
      </div>
    </div>
    <div>
      <b-modal hide-header hide-footer id="forget-password" centered>
        <b-row class="forget-modal">
          <b-col sm="12" md="12" lg="12" xl="12" class="text-center">
            <img
              height="300px"
              src="~assets/images/Forgot-password.svg"
              alt="image"
            />
            <h5>Enter Your Email</h5>
          </b-col>
          <b-col class="text-center" sm="12" md="12" lg="12" xl="12">
            <b-input-group>
              <b-form-input
                v-model="forgetemail"
                class="pl-3 pb-2"
                id="email"
                type="text"
                placeholder="ex:kazi@example.com"
              >
              </b-form-input>
            </b-input-group>
            <b-button @click="forgetPassword()" class="mt-3" variant="primary">
              <b-spinner v-if="forgetPassLoader" small></b-spinner> Send Email</b-button>
          </b-col>
        </b-row>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
      showPassword: true,
      forgetemail: null,
      forgetPassLoader: false,
    };
  },
  methods: {
    // Toggle Password
    togglePass() {
      this.showPassword = !this.showPassword;
    },

    async forgetPassword() {
      try {
        if (this.forgetemail) {
          this.forgetPassLoader = true;
          await this.$axios
            .$post("/password/forgot-password", { email: this.forgetemail })
            .then((response) => {
              this.toast({
                header: "Success",
                body: response.message,
                variant: "success",
                append: true,
              });
              this.$bvModal.hide("forget-password");
              this.forgetPassLoader = false;
            });
        } else {
          this.toast({
            header: "Warning!",
            body: "Fill the empty fields",
            variant: "warning",
            append: true,
          });
        }
      } catch (error) {
        this.toast({
          header: "Error",
          body: error.response.data.message,
          variant: "danger",
          append: true,
        });
      }
    },
  },
};
</script>

<style>
/* .border input::placeholder{
        color: #0075FF;
    } */

a{
  text-decoration: none;
  color: #38427D;
}
a:hover{
  color: #38427D;
}

.login_desc h1 {
  font-size: 36px;
  font-weight: 700;
  color: #614DFF;
  line-height: 1.2;
}

.login_desc p {
  color: #00000099;
}

.login_desc .welcom_back{
  font-size: 18px;
  line-height: 1.2;
}

.form{
  width: 496px;
}

.input-group>.form-control{
  height: 50px;
  border-radius: 8px;
}

.input-group-text{
  border-radius: 8px;
}

input {
  color: #0075ff;
  background: #FFFFFF;
}

input:focus-visible {
  outline: none;
}
.custom-select:focus {
  box-shadow: none;
  outline: none;
}

.form-control:focus{
  border-color: #614DFF;
}

.custom-control-input:focus ~ .custom-control-label::before{
  outline-color: #614DFF;
  border-color: #614DFF;
  box-shadow: none;
}

.custom-control-input:visited ~ .custom-control-label::before{
  border-color: #614DFF;
  box-shadow: none;
}

.custom-control-input:checked ~ .custom-control-label::before{
    color: #fff;
    border-color: #614DFF;
    background-color: #614DFF;
}

/* .custom-select{
        color: #0075FF;
    } */

.forget-modal button {
  padding: 18px 50px;
}

.forget-modal .btn-primary:focus,
.forget-modal .btn-primary.focus {
  box-shadow: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #FFFFFF inset !important;
}

.remember_next_time{
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
}

.save_next_time{
  font-size: 14px;
  line-height: 1.2;
  color: #667085;
}

.forget_pass{
  font-size: 14px;
  line-height: 1.2;
}

</style>