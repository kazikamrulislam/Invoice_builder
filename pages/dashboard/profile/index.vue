<template>
  <div>
    <section class="clients_detail_section bg-white">
      <div class="form_title">
        <h2>User Profile</h2>
      </div>
      <form class="profile_form bg-white">
        <div class="first_name">
          <div class="first_name_title mb-2">First Name</div>
          <b-form-input v-model="first_name" placeholder="Enter your first name"></b-form-input>
        </div>

        <div class="last_name">
          <div class="last_name_title mb-2">Last Name</div>
          <b-form-input v-model="last_name" placeholder="Enter your last name"></b-form-input>
        </div>

        <div class="email_adress">
          <div class="email_adress_title mb-2">E-mail</div>
          <b-form-input disabled v-model="email" placeholder="Enter your email"></b-form-input>
        </div>

        <div class="industry">
          <div class="industry_title mb-2">Industry</div>
          <b-form-select v-model="industry" :options="industryOptions"></b-form-select>
        </div>
      </form>
      <div class="actions_button">
        <b-button @click="updateUser()" variant="primary" size="lg" class="profile_save_btn pl-4 pr-4">
          <b-spinner v-if="updateUserbtnspin" small></b-spinner>
          <span
            class="material-icons pr-2">save</span>Update Profile</b-button>
      </div>
    </section>


    <!-- Change Your Password  -->
    <section class="clients_pass_change bg-white">
      <div class="form_title">
        <h2>Change Password</h2>
      </div>
      <div class="chang_form">
        <form class="change_pass_form bg-white">
          <div class="your_pass">
            <div class="your_pass_title mb-2">Current Password</div>
            <b-form-input type="password" v-model="current_pass" placeholder="******"></b-form-input>
          </div>

          <div class="new_pass">
            <div class="new_pass_title mb-2">New Password</div>
            <b-form-input type="password" v-model="new_pass" placeholder="******"></b-form-input>
          </div>

          <div class="re_write_pass">
            <div class="re_write_pass_title mb-2">Confirm Password</div>
            <b-form-input type="password" v-model="confirm_pass" placeholder="******"></b-form-input>
          </div>
        </form>
      </div>
      <div class="actions_button">
        <b-button @click="changePassword()" variant="primary" size="lg" class="profile_save_btn pl-4 pr-4">
          <b-spinner v-if="changePassbtnSpin" small></b-spinner>
          <span class="material-icons pr-2">save</span>Change Password</b-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      current_pass: null,
      new_pass: null,
      confirm_pass: '',
      first_name: null,
      last_name: null,
      email: null,
      industryOptions: [],
      industry: null,
      changePassbtnSpin: false,
      updateUserbtnspin: false,
    }
  },
  mounted() {
    this.getIndustries();
  },
  methods: {
    async getIndustries() {
      let self = this;
      await this.$axios.$get('/industrylist').then((response) => {
        for (const iterator of response) {
          self.industryOptions.push(
            {
              text: iterator.industryName,
              value: iterator.id
            }
          );
        }
        self.industry = self.$auth.user.industry;
        self.first_name = self.$auth.user.firstname;
        self.last_name = self.$auth.user.lastname;
      });
    },
        // Logout
        async logoutCall() {
      try {
        await this.$auth.logout().then((response) => {
          this.$router.push("/auth/login");
        });
      } catch (error) {

      }
    },

    // Change Password
    async updateUser() {
      let self = this;
      this.updateUserbtnspin = true;
        var userChanData = {
            id: this.$auth.user.id,
            firstname: this.first_name,
            lastname: this.last_name,
            industry: this.industry
        };
        try {
          await this.$axios
            .$post("/updateuser", userChanData)
            .then(function (response) {
              console.log(response);
              self.toast({
                header: "Success!",
                body: response.message,
                variant: "success",
                append: true,
              });
              self.updateUserbtnspin = false;
              self.logoutCall();
            });
        } catch (error) {
          this.toast({
            header: "Warning!",
            body: error.response.data.message,
            variant: "warning",
            append: true,
          });
          self.updateUserbtnspin = false;
        }
    },

    // Change Password
    async changePassword() {
      let self = this;
      this.changePassbtnSpin = true;
        var changePassData = {
          email: this.$auth.user.email,
          old_Password: this.current_pass,
          new_Password: this.new_pass,
          confirm_password: this.confirm_pass
        };
        try {
          await this.$axios
            .$post("/changepassword", changePassData)
            .then(function (response) {
              self.toast({
                header: "Success!",
                body: response.message,
                variant: "success",
                append: true,
              });
              self.changePassbtnSpin = false;
              self.current_pass = null;
              self.new_pass = null;
              self.confirm_pass = null;
              self.logoutCall();
            });
        } catch (error) {
          this.toast({
            header: "Warning!",
            body: error.response.data.message,
            variant: "warning",
            append: true,
          });
          self.changePassbtnSpin = false;
        }
    },
  }


}
</script>

<style>
.clients_detail_section {
  max-width: 900px;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #dbdbdb;
  margin: 0 auto;
}

.form_title {
  background: #f0f7fd;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}

.form_title h2 {
  font-size: 28px;
  font-weight: 600;
  color: #294997;
}

.profile_form {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.first_name,
.last_name,
.email_adress,
.industry {
  width: 45%;
  padding-top: 10px;
}

.profile_form input:focus {
  box-shadow: none;
}

.profile_form input:focus-visible {
  outline: none;
}

.first_name input,
.last_name input,
.email_adress input,
.industry select {
  height: 50px;
}

.first_name_title,
.last_name_title,
.email_adress_title,
.industry_title {
  font-size: 20px;
  font-weight: 500;
}

.actions_button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 30px 0;
}

.profile_save_btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Change Password */
.clients_pass_change {
  max-width: 900px;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #dbdbdb;
  margin: 20px auto;
}

.chang_form {
  margin-top: 30px;
}

.change_pass_form {
  text-align: left;
}

.your_pass,
.new_pass,
.re_write_pass {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

/* .profile_form input:focus{
  box-shadow:none;
}
.profile_form input:focus-visible{
  outline: none;
} */
.your_pass input,
.new_pass input,
.re_write_pass input {
  width: 45%;
  height: 50px;
}

.your_pass_title,
.new_pass_title,
.re_write_pass_title {
  width: 30%;
  font-size: 20px;
  font-weight: 500;
}

.clients_pass_change .actions_button {
  width: 91%;
}
@media (max-width: 768px) { 
  .first_name, .last_name, .email_adress, .industry{
    width: 100%;
  }
  .your_pass,
  .new_pass,
  .re_write_pass{
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .your_pass input,
  .new_pass input,
  .re_write_pass input {
    width: 100%;
  }

  .your_pass_title,
  .new_pass_title,
  .re_write_pass_title {
    width: 100%;
  }

  .clients_pass_change .actions_button{
    width: 100%;
  }

  .actions_button{
    width: 100%;
    padding: 30px 0 0;
  }
}
</style>