<template>
  <div class="resetpass-container">
    <div class="reset-middle">
        <b-form @submit.prevent="resetPassword" class="auth-form pt-5">
        <h6>RESET PASSWORD</h6>
        <b-row class="text-left">
            <b-col sm="12" md="12" lg="12" xl="12">
                    <div class="border">
                    <label for="email" class="pt-2 pl-3 mb-0">Email</label>
                    <b-input-group>
                    <b-form-input v-model.trim="$v.resetPasswordData.email.$model"
                    class="pl-3 border-0 pb-2"
                    id="email"
                    type="text"
                    placeholder="ex:kazi@example.com" > </b-form-input>
                    </b-input-group>
                    <div class="s-feild-error" v-if="$v.resetPasswordData.email.$error && !$v.resetPasswordData.email.required">Field is required.</div>
        <div class="s-feild-error" v-if="$v.resetPasswordData.email.$error && !$v.resetPasswordData.email.email">Email formate not correct</div>
                </div>
                
            </b-col>
            <b-col sm="12" md="12" lg="12" xl="12">
                    <div class="border">
                    <label for="password" class="pt-2 pl-3 mb-0">Password</label>
                    <b-input-group>
                    <b-form-input v-model.trim="$v.resetPasswordData.password.$model" placeholder="Password"
                    class="pl-3 border-0 pb-2"
                    id="password"
                    type="text"> </b-form-input>
                    </b-input-group>
                    <div class="s-feild-error" v-if="$v.resetPasswordData.password.$error && !$v.resetPasswordData.password.required">Field is required.</div>
                    <div class="s-feild-error" v-if="$v.resetPasswordData.password.$error && !$v.resetPasswordData.password.minLength">Email formate not correct</div>
                </div>
            </b-col>
            <b-col sm="12" md="12" lg="12" xl="12">
                    <div class="border">
                    <label for="confirmpassword" class="pt-2 pl-3 mb-0">Confirm Password</label>
                    <b-input-group>
                    <b-form-input v-model.trim="$v.resetPasswordData.confirmPassword.$model" placeholder="Confirm Password"
                    class="pl-3 border-0 pb-2"
                    id="confirmpassword"
                    type="text"> </b-form-input>
                    </b-input-group>
                    <div class="s-feild-error" v-if="$v.resetPasswordData.confirmPassword.$error && !$v.resetPasswordData.confirmPassword.sameAsPassword">Passwords must be identical.</div>
                </div>
            </b-col>
            <b-col class="pt-5" sm="12" md="12" lg="12" xl="12">
                <b-button   :disabled="$v.$invalid ? true : false" :class="$v.$invalid?'submitbutton-disablebutton':'submitbutton'" type="submit" >Submit</b-button>
            </b-col>
        </b-row>
        </b-form>
    </div>
  </div>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
    // layout: 'auth',
    auth: false,
    data(){
      return {
        resetPasswordData: {
            email: '',
            password: '',
            token: this.$route.query.token,
            confirmPassword: ''
        }
      }
    },
    validations: {
        resetPasswordData:{
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    },
    methods: {
      async resetPassword(){
        this.$v.$touch();
    if (this.$v.$invalid) {
      this.toast({
        header: 'Warning!',
        body: 'Field is required',
        variant: 'warning',
        append: true
       });

    } else {
        if (this.resetPasswordData.token !== null) {

            try {

          await this.$axios.$post('/password/reset-password',this.resetPasswordData).then(function(response){
        //   this.toast({
        //   header: 'Warning!',
        //   body: response.message,
        //   variant: 'warning',
        //   append: true
        //   });
        this.$router.push('/auth/login');
        });
            } catch (error) {
                this.toast({
                    header: 'Error',
                    body: error.response.data.message,
                    variant: 'danger',
                    append: true
                });

        }
        } else {
            
        }
    }

      }
    }
}
</script>

<style>
.resetpass-container{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.reset-middle{
    width: 450px;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 13px;
}
.submitbutton {
  padding: 18px 50px;
  width: 100%;
  background-color: #0075ff;
  
}
.submitbutton-disablebutton{
    border: none;
    padding: 18px 50px;
    width: 100%;
}
</style>