<template>
  <div>
    <section class="profile_section">
      <b-modal
        hide-footer
        centered
        @hidden="onModalHide"
        id="modal-add-profile"
        size="lg"
        title=""
      >
        <b-form
          @submit.prevent="
            buttonClick == 'Create profile' ? createProfile() : updateProfile()
          "
        >
          <b-row>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-3"
                label="First Name"
                label-for="input-3"
              >
                <b-form-input
                  v-model="firstname"
                  id="input-3"
                  type="text"
                  placeholder="Oliver"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-4"
                label="Last Name"
                label-for="input-4"
              >
                <b-form-input
                  v-model="lastname"
                  id="input-4"
                  type="text"
                  placeholder="Queen"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-1"
                label="Organization"
                label-for="input-1"
              >
                <b-form-input
                  v-model="organizationname"
                  id="input-1"
                  type="text"
                  placeholder="Oliver Q ltd."
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-9"
                label="Website"
                label-for="input-9"
              >
                <b-form-input
                  v-model="website"
                  id="input-9"
                  type="url"
                  placeholder="www.oliverqueen.com"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-5"
                label="Email Address"
                label-for="input-5"
              >
                <b-form-input
                  v-model="email"
                  id="input-5"
                  type="email"
                  placeholder="polash@monsterclaw.com"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-8"
                label="Phone"
                label-for="input-8"
              >
                <b-form-input
                  v-model="phone"
                  id="input-8"
                  type="number"
                  placeholder="+1 609 933 4422"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-6"
                label="Address 1"
                label-for="input-6"
              >
                <b-form-input
                  v-model="address1"
                  id="input-6"
                  type="text"
                  placeholder="54 Pier Road, STAPLEFIELD, RH17 4WF."
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-7"
                label="Address"
                label-for="input-7"
              >
                <b-form-input
                  v-model="address2"
                  id="input-7"
                  type="text"
                  placeholder="54 Pier Road, STAPLEFIELD, RH17 4WF."
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-10"
                label="Tax ID"
                label-for="input-10"
              >
                <b-form-input
                  v-model="tin"
                  id="input-10"
                  type="number"
                  placeholder="Tax-8894"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <b-form-group
                id="input-group-2"
                label="Country"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="country"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :options="countryOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- <div class="border-bottom mb-2 mt-2"></div> -->
          <!-- <b-button type="submit" variant="primary">{{ buttonClick }}</b-button> -->
          <b-row class="popup_submit_button" align-h="center">
            <b-button class="mr-3" type="submit" variant="primary">SUBMIT</b-button>
            <b-button type="submit" variant="primary" @click="close()">CANCEL</b-button>
          </b-row>
        </b-form>
      </b-modal>
      <b-row class="top_row">
        <b-col sm="4" md="6" lg="6" xl="6">
          <div class="creat_profile_left">
            <h2 class="profile_title">Profile</h2>
            <div class="profile_count">
              {{ dashboardStatistics.totalprofiles }} pepole found 
            </div>
          </div>
        </b-col>
        <b-col class="profiles_detail_col" sm="8" md="6" lg="6" xl="6">
            <div
            class="creat_profile_right"
            @click="$bvModal.show('modal-add-profile')"
          >
            <BaseButton
              @click="buttonClick = 'Create profile'"
              type="subbmit"
            >
              + Create profile
            </BaseButton>
          </div>
        </b-col>
      </b-row>
    </section>

    <!-- <div class="profile_row">
      <div
        v-for="(item, index) in profilesList"
        :key="index"
        class=""
      > -->
        <!-- <div class="profile_detail">
          <div class="profile_left">
            <b-avatar :src="item.url"></b-avatar>
            <h2 class="profile_name">{{ item.name }}</h2>
            <div class="profile_address">{{ item.address }}</div>
          </div>
          <div class="profile_info">
            <h3>{{ item.company }}</h3>
            <div class="profile_phone"><span class="material-icons"> phone </span>{{ item.phone }}</div>
            <div class="profile_mail"><span class="material-icons"> mail </span>{{ item.mail }}</div>
            <div class="profile_web"><span class="material-icons"> language </span>{{ item.website }}</div>
          </div>
        </div> -->
        <!-- <div class="dots-menu">
          
          <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
            <template #button-content class="dot_button">
            <span class="material-icons-outlined">more_vert</span>
            </template>
            <b-dropdown-item>
              <b-button
                @click="editProfile(item.id)"
                size="md"
                variant="primary"
                class="pl-4 pr-4 mr-2"
              >
                <span class="material-icons"> edit </span>
                Edit
              </b-button>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-button
                @click="deleteUser(item.id)"
                variant="danger"
                size="md"
                class="pl-4 pr-4"
              >
                <span class="material-icons">clear</span>
                Delete
              </b-button>
            </b-dropdown-item>
          </b-dropdown>
        </div> -->
        
        <!-- <div class="actions_button">
          <b-button
            @click="editProfile(item.id)"
            size="md"
            variant="primary"
            class="pl-4 pr-4 mr-2"
            ><span class="material-icons"> edit </span>Edit</b-button
          >
          <b-button
            @click="deleteUser(item.id)"
            variant="danger"
            size="md"
            class="pl-4 pr-4"
            ><span class="material-icons">clear</span>Delete</b-button
          >
        </div> -->
        <!-- Dot Menue  -->
      <!-- </div>
    </div> -->
  
    <div class="profiles_row">
      <div
        v-for="(item, index) in profilesList"
        :key="index"
        class="profiles_col"
      >
        <div class="profiles">
          <div class="profiles_left">
            <div class="profile_left_content">
                  <div class="avatar">
                    <b-avatar :src="item.url"></b-avatar>
                  </div>
                  <div class="profile_name">
                    <h2>{{ item.name }}</h2>
                  </div>
                  <div class="profile_adress">
                    <div class="profile_address">{{ item.address }}</div>
                  </div>
                </div>
          </div>
          <div class="profiles_right">
            <div class="profile_right_content">
              <div class="profile_details">
                <div class="phone">
                  <div class="profile_phone">
                    <!-- <span class="material-icons"> phone </span> -->
                    <span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7468 6.27012C10.6107 6.27012 10.4801 6.21604 10.3838 6.11977C10.2876 6.0235 10.2335 5.89293 10.2335 5.75679C10.2335 5.51012 9.98683 4.99679 9.57349 4.55012C9.16683 4.11679 8.72016 3.86346 8.34683 3.86346C8.21068 3.86346 8.08012 3.80937 7.98385 3.7131C7.88758 3.61683 7.8335 3.48627 7.8335 3.35012C7.8335 3.07012 8.06683 2.83679 8.34683 2.83679C9.0135 2.83679 9.7135 3.19679 10.3268 3.84346C10.9002 4.45012 11.2668 5.20345 11.2668 5.75012C11.2668 6.03679 11.0335 6.27012 10.7468 6.27012ZM13.1535 6.26879C13.0174 6.26879 12.8868 6.2147 12.7905 6.11844C12.6942 6.02217 12.6402 5.8916 12.6402 5.75545C12.6402 3.38879 10.7135 1.46879 8.3535 1.46879C8.21735 1.46879 8.08678 1.41471 7.99051 1.31844C7.89425 1.22217 7.84016 1.0916 7.84016 0.955455C7.84016 0.675455 8.06683 0.435455 8.34683 0.435455C11.2802 0.435455 13.6668 2.82212 13.6668 5.75545C13.6668 6.03545 13.4335 6.26879 13.1535 6.26879ZM6.36683 9.06879L5.1335 10.3021C4.8735 10.5621 4.46016 10.5621 4.1935 10.3088C4.12016 10.2355 4.04683 10.1688 3.9735 10.0955C3.29934 9.41679 2.67756 8.68804 2.1135 7.91545C1.56683 7.15546 1.12683 6.39546 0.806829 5.64212C0.493496 4.88212 0.333496 4.15546 0.333496 3.46212C0.333496 3.00879 0.413496 2.57546 0.573496 2.17546C0.733496 1.76879 0.986829 1.39546 1.34016 1.06212C1.76683 0.642122 2.2335 0.435455 2.72683 0.435455C2.9135 0.435455 3.10016 0.475455 3.26683 0.555455C3.44016 0.635455 3.5935 0.755455 3.7135 0.928789L5.26016 3.10879C5.38016 3.27546 5.46683 3.42879 5.52683 3.57546C5.58683 3.71546 5.62016 3.85546 5.62016 3.98212C5.62016 4.14212 5.5735 4.30212 5.48016 4.45545C5.3935 4.60879 5.26683 4.76879 5.10683 4.92879L4.60016 5.45545C4.52683 5.52879 4.4935 5.61546 4.4935 5.72212C4.4935 5.77545 4.50016 5.82212 4.5135 5.87545C4.5335 5.92879 4.5535 5.96879 4.56683 6.00879C4.68683 6.22879 4.8935 6.51546 5.18683 6.86212C5.48683 7.20879 5.80683 7.56212 6.1535 7.91545C6.22016 7.98212 6.2935 8.04879 6.36016 8.11546C6.62683 8.37546 6.6335 8.80212 6.36683 9.06879ZM13.6468 11.3221C13.6459 11.5737 13.589 11.822 13.4802 12.0488C13.3668 12.2888 13.2202 12.5155 13.0268 12.7288C12.7002 13.0888 12.3402 13.3488 11.9335 13.5155C11.9268 13.5155 11.9202 13.5221 11.9135 13.5221C11.5202 13.6821 11.0935 13.7688 10.6335 13.7688C9.9535 13.7688 9.22683 13.6088 8.46016 13.2821C7.6935 12.9555 6.92683 12.5155 6.16683 11.9621C5.90683 11.7688 5.64683 11.5755 5.40016 11.3688L7.58016 9.18879C7.76683 9.32879 7.9335 9.43545 8.0735 9.50879C8.10683 9.52212 8.14683 9.54212 8.1935 9.56212C8.24683 9.58212 8.30016 9.58879 8.36016 9.58879C8.4735 9.58879 8.56016 9.54879 8.6335 9.47546L9.14016 8.97546C9.30683 8.80879 9.46683 8.68212 9.62016 8.60212C9.7735 8.50879 9.92683 8.46212 10.0935 8.46212C10.2202 8.46212 10.3535 8.48879 10.5002 8.54879C10.6468 8.60879 10.8002 8.69546 10.9668 8.80879L13.1735 10.3755C13.3468 10.4955 13.4668 10.6355 13.5402 10.8021C13.6068 10.9688 13.6468 11.1355 13.6468 11.3221Z" fill="#AEB8D6"/>
                      </svg>
                    </span>
                    {{ item.phone }}
                  </div>
                </div>
                <div class="email">
                  <div class="profile_mail">
                    <!-- <span class="material-icons"> mail </span> -->
                    <span>
                      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0468 4.27477L4.34018 1.42144C0.506843 -0.498561 -1.06649 1.07477 0.853509 4.9081L1.43351 6.06811C1.60018 6.40811 1.60018 6.80144 1.43351 7.14144L0.853509 8.29477C-1.06649 12.1281 0.500176 13.7014 4.34018 11.7814L10.0468 8.92811C12.6068 7.64811 12.6068 5.55477 10.0468 4.27477ZM7.89351 7.10144H4.29351C4.02018 7.10144 3.79351 6.87477 3.79351 6.60144C3.79351 6.32811 4.02018 6.10144 4.29351 6.10144H7.89351C8.16684 6.10144 8.39351 6.32811 8.39351 6.60144C8.39351 6.87477 8.16684 7.10144 7.89351 7.10144Z" fill="#AEB8D6"/>
                      </svg>
                    </span>
                    {{ item.mail }}
                  </div>
                </div>
                <div class="web_adress">
                  <div class="profile_web">
                    <!-- <span class="material-icons"> language </span> -->
                    <span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.0995 13.0421C4.0795 13.0421 4.05283 13.0554 4.03283 13.0554C2.7395 12.4154 1.68616 11.3554 1.0395 10.0621C1.0395 10.0421 1.05283 10.0154 1.05283 9.99544C1.86616 10.2354 2.70616 10.4154 3.5395 10.5554C3.68616 11.3954 3.8595 12.2288 4.0995 13.0421ZM12.9602 10.0688C12.3002 11.3954 11.2002 12.4688 9.86016 13.1154C10.1135 12.2688 10.3268 11.4154 10.4668 10.5554C11.3068 10.4154 12.1335 10.2354 12.9468 9.99544C12.9402 10.0221 12.9602 10.0488 12.9602 10.0688ZM13.0135 4.24211C12.1735 3.98877 11.3268 3.78211 10.4668 3.63544C10.3268 2.77544 10.1202 1.92211 9.86016 1.08877C11.2402 1.74877 12.3535 2.86211 13.0135 4.24211ZM4.10016 1.16144C3.86016 1.97477 3.68683 2.80144 3.54683 3.64144C2.68683 3.77477 1.8335 3.98811 0.986829 4.24144C1.6335 2.90144 2.70683 1.80144 4.0335 1.14144C4.0535 1.14144 4.08016 1.16144 4.10016 1.16144ZM9.32816 3.49544C7.7815 3.32211 6.2215 3.32211 4.67483 3.49544C4.8415 2.58211 5.05483 1.66877 5.35483 0.788773C5.36816 0.73544 5.3615 0.69544 5.36816 0.642107C5.89483 0.51544 6.43483 0.43544 7.0015 0.43544C7.5615 0.43544 8.10816 0.51544 8.62816 0.642107C8.63483 0.69544 8.63483 0.73544 8.64816 0.788773C8.94816 1.67544 9.1615 2.58211 9.32816 3.49544ZM3.3935 9.43011C2.4735 9.26344 1.56683 9.05011 0.686829 8.75011C0.633496 8.73677 0.593496 8.74344 0.540163 8.73677C0.413496 8.21011 0.333496 7.67011 0.333496 7.10344C0.333496 6.54344 0.413496 5.99677 0.540163 5.47677C0.593496 5.47011 0.633496 5.47011 0.686829 5.45677C1.5735 5.16344 2.4735 4.94344 3.3935 4.77677C3.22683 6.32344 3.22683 7.88344 3.3935 9.43011ZM13.6668 7.10344C13.6668 7.67011 13.5868 8.21011 13.4602 8.73677C13.4068 8.74344 13.3668 8.73677 13.3135 8.75011C12.4268 9.04344 11.5202 9.26344 10.6068 9.43011C10.7802 7.88344 10.7802 6.32344 10.6068 4.77677C11.5202 4.94344 12.4335 5.15677 13.3135 5.45677C13.3668 5.47011 13.4068 5.47677 13.4602 5.47677C13.5868 6.00344 13.6668 6.54344 13.6668 7.10344ZM9.32816 10.7088C9.1615 11.6288 8.94816 12.5354 8.64816 13.4154C8.63483 13.4688 8.63483 13.5088 8.62816 13.5621C8.10816 13.6888 7.5615 13.7688 7.0015 13.7688C6.43483 13.7688 5.89483 13.6888 5.36816 13.5621C5.3615 13.5088 5.36816 13.4688 5.35483 13.4154C5.06493 12.5303 4.8377 11.6258 4.67483 10.7088C5.44816 10.7954 6.2215 10.8554 7.0015 10.8554C7.7815 10.8554 8.5615 10.7954 9.32816 10.7088ZM9.50883 9.61077C7.843 9.82114 6.15733 9.82114 4.4915 9.61077C4.28116 7.94494 4.28116 6.25927 4.4915 4.59344C6.15733 4.3831 7.843 4.3831 9.50883 4.59344C9.71919 6.25927 9.71919 7.94494 9.50883 9.61077Z" fill="#AEB8D6"/>
                      </svg>
                    </span>
                    {{ item.website }}
                  </div>
                </div>
              </div>
              <div class="actions_btn">
                <div class="action">
                  <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content class="dot_button">
                      <span class="material-icons-outlined">more_vert</span>
                    </template>
                    <b-dropdown-item>
                      <b-button
                        @click="editProfile(item.id)"
                        size="md"
                        variant="link"
                        class="pl-4 pr-4 mr-2"
                      >
                        <span class="material-icons"> edit </span>
                        Edit
                      </b-button>
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <div
                        @click="deleteUser(item.id)"
                        variant="link"
                        size="md"
                        class="pl-4 pr-4"
                      >
                        <span class="material-icons">clear</span>
                        Delete
                      </div>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      dashboardStatistics: {},
      countryOptions: [{ text: "Select One", value: null }],
      organizationname: null,
      country: null,
      firstname: null,
      lastname: null,
      email: null,
      tin: null,
      address1: null,
      address2: null,
      phone: null,
      website: null,
      profilesList: [],
      buttonClick: null,
      profileId: null,
    };
  },
  mounted() {
    this.getCountries();
    this.getProfiles();
    this.getDashStatistics();
  },
  methods: {
    onModalHide() {
      this.organizationname = null;
      this.country = null;
      this.firstname = null;
      this.lastname = null;
      this.tin = null;
      this.email = null;
      this.address1 = null;
      this.address2 = null;
      this.phone = null;
      this.website = null;
    },
    getDashStatistics() {
      this.$axios.$get("/getdashstatistics").then((response) => {
        this.dashboardStatistics = response;
      });
    },
    async getCountries() {
      let self = this;
      await this.$axios.$get("/countrylist").then((response) => {
        for (const iterator of response) {
          self.countryOptions.push({
            text: iterator.countryName,
            value: iterator.id,
          });
        }
      });
    },

    async createProfile() {
      try {
        let self = this;
        var profileBody = {
          organizationName: this.organizationname,
          country: this.country,
          firstname: this.firstname,
          lastname: this.lastname,
          tin: this.tin,
          email: this.email,
          address1: this.address1,
          address2: this.address2,
          phone: this.phone,
          website: this.website,
        };
        await this.$axios
          .$post("/createprofile", profileBody)
          .then((response) => {
            self.$bvModal.hide("modal-add-profile");
            self.organizationname = null;
            self.country = null;
            self.firstname = null;
            self.lastname = null;
            self.tin = null;
            self.email = null;
            self.address1 = null;
            self.address2 = null;
            self.phone = null;
            self.website = null;
            self.getProfiles();
            self.toast({
                    header: 'Success',
                    body: response.message,
                    variant: 'success',
                    append: true
                });
          });
      } catch (error) {
        console.log(error.response);
      }
    },

    async getProfiles() {
      let self = this;
      this.profilesList = [];
      await this.$axios.$get("/getprofile").then((response) => {
        for (const iterator of response) {
          self.profilesList.push({
            id: iterator.id,
            url: "https://placekitten.com/300/300",
            name: iterator.firstname + " " + iterator.lastname,
            company: iterator.organizationName,
            website: iterator.website,
            mail: iterator.email,
            phone: iterator.phone,
            address: iterator.address1,
          });
        }
      });
    },

    async deleteUser(id) {
      let self = this;
      await this.$axios.$get("/deleteprofile/" + id).then(function (response) {
        self.toast({
                    header: 'Success',
                    body: response.message,
                    variant: 'success',
                    append: true
                });
        self.getProfiles();
      });
    },

    async editProfile(id) {
      this.profileId = id;
      let self = this;
      await this.$axios.$get("/singleprofile/" + id).then((response) => {
        self.$bvModal.show("modal-add-profile");
        self.buttonClick = "Update Profile";
        self.organizationname = response.organizationName;
        self.country = response.country;
        self.firstname = response.firstname;
        self.lastname = response.lastname;
        self.tin = response.tin;
        self.email = response.email;
        self.address1 = response.address1;
        self.address2 = response.address2;
        self.phone = response.phone;
        self.website = response.website;
      });
    },

    async updateProfile() {
      try {
        let self = this;

        var profileBody = {
          profile_id: this.profileId,
          organizationName: this.organizationname,
          country: this.country,
          firstname: this.firstname,
          lastname: this.lastname,
          tin: this.tin,
          email: this.email,
          address1: this.address1,
          address2: this.address2,
          phone: this.phone,
          website: this.website,
        };
        await this.$axios
          .$post("/updateprofile", profileBody)
          .then((response) => {
            self.$bvModal.hide("modal-add-profile");
            self.organizationname = null;
            self.country = null;
            self.firstname = null;
            self.lastname = null;
            self.tin = null;
            self.email = null;
            self.address1 = null;
            self.address2 = null;
            self.phone = null;
            self.website = null;
            self.profileId = null;
            self.getProfiles();
            self.toast({
                    header: 'Success',
                    body: response.message,
                    variant: 'success',
                    append: true
                });
          });
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style scoped>
.top_row {
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
}

.creat_profile_left h2{
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: #93B0C8;
}

.creat_profile_left .profile_count{
  font-size: 14px;
  font-weight: 500;
  color: #707EAE;
}

.creat_profile_right {
  text-align: right;
}


.creat_profile_right button:focus {
  box-shadow: none;
}

/* Pop-Up Form Design  */
:deep(.nav-tabs .nav-link.active){
  border: none;
  font-size: 24px;
  color: #294997;
}
.form_message p{
  margin: 0;
  font-size: 14px;
  color: #667085B2;
}
.popup_submit_button button{
  padding: 8px 20px;
  font-size: 14px;
  background: #614DFF;
}

/* .first_name,.lastname,.organization,
.website,.email_add,.phone_num,
.addrss_1,.addrss_2,.tin,.country{
  position: relative;
} */
.form-group{
  position: relative;
}
.form-group :deep(label){
  position: absolute;
  top: -9px;
  left: 17px;
  background: #FFFFFF;
  font-size: 12px;
  color: #66708580;
}
.form-group :deep(input),
.form-group :deep(select){
  height: 50px;
}
.form-group :deep(input:focus),
.form-group :deep(select:focus){
  box-shadow:none !important;
}
:deep(.modal-header){
  border: none;
}

/* Pop Up Form Design End  */

/* #NEW DESIGN  */
.profiles_row{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.profiles_col{
  width: 32.20%;
  margin-bottom: 20px;
  margin-right: 20px;
}

.profiles_col:nth-child(3n+0){
  margin-right: 0;
}

.profiles{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 180px;
}
.profiles_left{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  width: 40%;
  height: 100%;
  border-radius: 12px 0 0 12px;
}
.profile_left_content{
  text-align: center;
  padding: 20px 10px 20px 20px;
}
.profile_name h2{
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
}
.profile_address {
  font-size: 10px;
  line-height: 1.2;
  font-weight: 500;
}
.profiles_right{
  height: 100%;
  width: 60%;
  border-radius: 0 12px 12px 0;
}
.profile_right_content{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #614DFF1A;
  height: 100%;
  border-radius: 0 12px 12px 0;
}
.profile_details{
  padding: 10px 0 10px 20px;
  width: 100%;
}
.profile_phone,
.profile_mail,
.profile_web{
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
  padding-bottom: 10px;
  word-break: break-all;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
}
.profile_phone span,
.profile_mail span,
.profile_web span{
  padding-right: 12px;
}
.actions_btn{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 10px 20px 10px 0;
  width: 10%;
}
.action{
  line-height: 0;
}
.dots-menu{
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 20px 20px 0;
}
:deep(.btn.dropdown-toggle.btn-link.btn-lg.text-decoration-none.dropdown-toggle-no-caret){
  padding: 0;
  color: #AEB8D6;
}
:deep(.btn.dropdown-toggle.btn-link.btn-lg.text-decoration-none.dropdown-toggle-no-caret:focus){
  outline: none;
  box-shadow: none;
}
:deep(.b-avatar) {
  height: 55px;
  width: 55px;
  margin: 0 auto 10px;
}

.profile_name{
  font-size: 14px;
  font-weight: 600;
}
/* #NEW DESIGN END  */

/* .profile_row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
} */
/* .profile_col{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 32%;
  height: 220px;
  margin-bottom: 20px;
  border-radius: 12px;
} */




/* .profile_detail{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
} */

/* .profile_left{
  width: 45%;
  text-align: center;
  padding: 20px 5px 20px 20px;
} */

/* .profile_detail .profile_info{ */
   /* These are technically the same, but use both */
  /* overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all; */
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  /* word-break: break-all; */
  /* Instead use this non-standard one: */
  /* word-break: break-word; */

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  /* -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  width: 55%;
  padding: 20px 0 20px 10px;
} */


/* .profile_details .profile_info h3 {
  font-size: 16px;
  font-weight: 700;
} */


/* .profile_details .profile_info .profile_mail,
.profile_details .profile_info .profile_id,
.profile_details .profile_info .profile_address {
  font-size: 15px;
} */


/* .actions_button {
  display: flex;
  justify-content: space-between;
}

:deep(.actions_button button) {
  display: flex;
  align-items: center;
} */


/* Pop up designe  */
/* :deep(.modal-body button) {
  padding: 15px 0;
}

:deep(.modal-body) {
  padding: 25px;
}
.form-control,
.custom-select {
  height: 42px;
}
:deep(.modal-header) {
  background: #f0f7fd;
} */

@media all and (max-width: 767px){
  .profile_detail_col {
    flex-wrap: wrap;
  }
  .actions_button{
    justify-content: flex-end;
    width: 100%;
    padding-top: 20px;
  }
}

@media all and (max-width: 480px) {
  .top_row .profiles_col,
  .top_row .profiles_detail_col {
    padding: 0;
    width: auto;
  }

  .top_row {
    padding: 20px 30px;
    flex-wrap: nowrap;
  }

  .creat_profile_left h2{
    font-size: 20px;
    font-weight: 500;
    color: #93B0C8;
  }

  .creat_profile_right button {
    padding: 10px;
  }

  .profile_detail_col {
    display: block;
    padding: 15px 20px;
  }

  .profile_details {
    display: inline-block;
    padding: 10px 0;
  }

  .profile_details .b-avatar {
    margin: 0 0 10px 0;
  }
}
</style>