<template>
  <div>
    <!-- From whome  -->
    <b-modal
      scrollable
      hide-footer
      centered
      id="modal-from"
      size="lg"
      title=""
    >
      <div>
        <b-tabs content-class="" justified>
          <b-tab title="Sender Info" active>
            <b-form @submit.prevent="addCustomProfile()" >
                <div class="form_message">
                  <p class="text-center pb-4">Updating user details will receive a privacy audit.</p>
                </div>
                <b-row class="popup_from_row_1">
                  <b-col class="first_name" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-3"
                      label="First Name"
                      label-for="input-3"
                    >
                      <b-form-input
                        v-model="addcustomProfile.firstname"
                        id="input-3"
                        type="text"
                        placeholder="Oliver"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="lastname " sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-4"
                      label="Last Name"
                      label-for="input-4"
                    >
                      <b-form-input
                        v-model="addcustomProfile.lastname"
                        id="input-4"
                        type="text"
                        placeholder="Queen"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="popup_from_row_2">
                  <b-col class="organization" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-1"
                      label="Organization"
                      label-for="input-1"
                    >
                      <b-form-input
                        v-model="addcustomProfile.organizationName"
                        id="input-1"
                        type="text"
                        placeholder="Oliver Q ltd."
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="website" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-9"
                      label="Website"
                      label-for="input-9"
                    >
                      <b-form-input
                        v-model="addcustomProfile.website"
                        id="input-9"
                        type="url"
                        placeholder="www.oliverqueen.com"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="popup_from_row_3">
                  <b-col class="email_add" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-5"
                      label="Billing Email"
                      label-for="input-5"
                    >
                      <b-form-input
                        v-model="addcustomProfile.email"
                        id="input-5"
                        type="email"
                        placeholder="info@gmail.com"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="phone_num" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-8"
                      label="Contact"
                      label-for="input-8"
                    >
                      <b-form-input
                        v-model="addcustomProfile.phone"
                        id="input-8"
                        type="number"
                        placeholder="+1 609 933 4422"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <!-- <div class="border-bottom mb-2 mt-2"></div> -->
                <b-row class="popup_from_row_4">
                  <b-col class="addrss_1" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-6"
                      label="Address 1"
                      label-for="input-6"
                    >
                      <b-form-input
                        v-model="addcustomProfile.address1"
                        id="input-6"
                        type="text"
                        placeholder="54 Pier Road, STAPLEFIELD, RH17 4WF."
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="addrss_2" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-7"
                      label="Address 2"
                      label-for="input-7"
                    >
                      <b-form-input
                        v-model="addcustomProfile.address2"
                        id="input-7"
                        type="text"
                        placeholder="54 Pier Road, STAPLEFIELD, RH17 4WF."
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="popup_from_row_5">
                  <b-col class="tin" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-10"
                      label="Tax ID"
                      label-for="input-10"
                    >
                      <b-form-input
                        v-model="addcustomProfile.tin"
                        id="input-10"
                        type="number"
                        placeholder="Tax-8894"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="country" sm="12" md="6" lg="6" xl="6">
                    <b-form-group
                      id="input-group-2"
                      label="Country"
                      label-for="input-2"
                    >
                      <b-form-select
                        id="input-2"
                        v-model="addcustomProfile.country"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        :options="countryOptions"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row >
                <b-row class="popup_submit_button" align-h="center">
                  <b-button class="mr-3" type="submit" variant="primary">SUBMIT</b-button>
                  <b-button type="submit" variant="primary" @click="cancel()">CANCLE</b-button>
                </b-row>
              </b-form>
          </b-tab>
          <!-- <b-tab title="Add from save">
            <div class="add_invo_btn">
                <nuxt-link to="/dashboard/profiles">
                  <BaseButton>Add Profile</BaseButton>
                </nuxt-link>
              </div>

              <div
                @click="getSingleProfile(item.id)"
                v-for="(item, index) in profileList"
                :key="index"
                class="border profileitem" 
              >
                <h3>{{ item.firstname + " " + item.lastname }}</h3>
                <div>
                  {{ item.email }}
                </div>
                <div>
                  {{ item.phone }}
                </div>
                <div>
                  {{ item.website }}
                </div>
                <div>
                  {{ item.address1 }}
                </div>

            </div>
          </b-tab> -->
        </b-tabs>
      </div>
    </b-modal>
    <!-- Send TO whome Stert Here  -->
    <b-modal hide-footer  centered id="modal-to" size="lg" title="">
      <div >
        <b-tabs content-class=" mt-3"  justified>
          <b-tab title="Client’s Info" active>
            <b-form
              @submit.prevent="addCustomClient()"
            >
              <b-row>
                <b-col sm="12" md="6" lg="6" xl="6">
                  <b-form-group
                    id="input-group-3"
                    label="First Name"
                    label-for="input-3"
                  >
                    <b-form-input
                      v-model="addcustomClient.firstname"
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
                      v-model="addcustomClient.lastname"
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
                    label="Organization Name"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="addcustomClient.organizationName"
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
                      v-model="addcustomClient.website"
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
                      v-model="addcustomClient.email"
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
                      v-model="addcustomClient.phone"
                      id="input-8"
                      type="number"
                      placeholder="+1 609 933 4422"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- <div class="border-bottom mb-2 mt-2"></div> -->
              <b-row>
                <b-col sm="12" md="6" lg="6" xl="6">
                  <b-form-group
                    id="input-group-6"
                    label="Address 1"
                    label-for="input-6"
                  >
                    <b-form-input
                      v-model="addcustomClient.address1"
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
                      v-model="addcustomClient.address2"
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
                      label="Tax Registration Number"
                      label-for="input-10"
                    >
                      <b-form-input
                        v-model="addcustomClient.tin"
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
                      v-model="addcustomClient.country"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      :options="countryOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="popup_submit_button" align-h="center">
                <b-button class="mr-3" type="submit" variant="primary">SUBMIT</b-button>
                <b-button type="submit" variant="primary" @click="cancel()">CANCEL</b-button>
              </b-row>
            </b-form>
          </b-tab>
          <!-- <b-tab title="Add from save">
            <div class="add_invo_btn">
              <nuxt-link to="/dashboard/clients">
                <BaseButton>Add Client</BaseButton>
              </nuxt-link>
            </div>
            <div
              @click="getSingleClient(item.id)"
              v-for="(item, index) in clientList"
              :key="index"
              class="border profileitem"
            >
              <h3>{{ item.firstname + " " + item.lastname }}</h3>
              <div>
                {{ item.email }}
              </div>
              <div>
                {{ item.phone }}
              </div>
              <div>
                {{ item.website }}
              </div>
              <div>
                {{ item.address1 }}
              </div>
            </div>
          </b-tab> -->
        </b-tabs>
      </div>
    </b-modal>
    <section class="can_sav_section">
      <b-row class="top_row">
        <b-col sm="12" md="3" lg="3" xl="3">
          <div class="creat_invo_title">Create Invoices</div>
        </b-col>
        <b-col sm="12" md="5" lg="5" xl="5">
          <div class="creat_invo_btn">
            <b-button @click="$router.back()" variant="danger" type="subbmit"
              >Cancle Invoice
            </b-button>
            <b-button @click="saveInvoice()" variant="success" type="subbmit"
              >Save Invoice
            </b-button>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="d-flex">
      <div class="from_area mt-3 bg-white">
        <div class="invoice_form">
          <div class="form_row_1 mb-4">
            <div class="form_row_1_left">
              <h3>Sender Detail </h3>
              <div class="form_row_1_left_input">
                <div class="form_row_1_left_input_left">
                  <b-form-select
                    id="inline-form-custom-select-pref"
                    v-model="invoicetype"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :options="invoicetypeOptions"
                  >
                  
                  </b-form-select>
                  <!-- <div
                      @click="getSingleProfile(item.id)"
                      v-for="(item, index) in profileList"
                      :key="index"
                      class="border profileitem" 
                  >
                    <h3>{{ item.firstname + " " + item.lastname }}</h3>
                    <div>
                      {{ item.email }}
                    </div>
                    <div>
                      {{ item.phone }}
                    </div>
                    <div>
                      {{ item.website }}
                    </div>
                    <div>
                      {{ item.address1 }}
                    </div>

                  </div> -->
                  </div>
                <div class="form_row_1_left_input_right">
                  <b-butto type="submit" @click="$bvModal.show('modal-from')">
                    Create new
                  </b-butto>
                </div>
              </div>
            </div>
            
            <div class="form_row_1_right">
              <h3>Sender Detail </h3>
              <div class="form_row_1_right_input">
                <div class="form_row_1_right_input_left">
                  <b-form-select
                    id="inline-form-custom-select-pref"
                    v-model="invoicetype"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :options="invoicetypeOptions"
                  >
                  </b-form-select>
                </div>
                <div class="form_row_1_right_input_right">
                  <b-butto type="submit" @click="$bvModal.show('modal-to')">
                    Create new
                  </b-butto>
                </div>
              </div>
            </div>
          </div>
          <div class="form_row_2 mb-4">
            <div class="form_row_2_left">
              <div class="from_row_2_input_left">
                <b-form-select
                  id="inline-form-custom-select-pref"
                  v-model="invoicetype"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :options="invoicetypeOptions"
                ></b-form-select>
              </div>
            </div>
            <div class="form_row_2_right">
              <div class="from_row_2_input_right">
                <div
                  v-if="imageUrl == null"
                  @click="$refs.importimage.$el.click()"
                  class="col_left insert_img"
                >
                  <span id="insert-img-i" class="material-icons"
                    >add_photo_alternate
                  </span>
                  <div class="insert_img_text">
                    <p>Drag your logo here</p>
                    <p>or</p>
                    <a href="#">Slecet File</a>
                  </div>
                  <b-form-file
                    ref="importimage"
                    v-model="uploadFile"
                    @input="importImage"
                    class="mt-3 insert_img"
                    plain
                  ></b-form-file>
                </div>
                <div class="image-div" v-else>
                  <img height="94" width="94" :src="imageUrl" alt="logo" />
                  <span @click="imageUrl = null" class="material-icons">
                    backspace
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="form_row_3 mb-5">
            <div class="form_row_3_left">
              <div class="form_row_3_left_input">
                <div class="form_row_3_left_input_top mb-3">
                  <div class="form_row_3_left_input_top_left">
                    <div class="form_row_3_left_input_top_left_title">
                      Invoice No:
                    </div>
                    <b-form-input
                      v-model="builder.invoiceNo"
                      id="invo-no"
                      type="text"
                      required
                    ></b-form-input>
                  </div>
                </div>
                <div class="form_row_3_left_input_bottom">
                  <div class="form_row_3_left_input_bottom_left">
                    <div class="form_row_3_left_input_bottom_left_title">
                      Invoice Date:
                    </div>
                    <date-picker
                      class="fil_date"
                      v-model="builder.invoiceDate"
                      type="date"
                      placeholder="Select date "
                    ></date-picker>
                  </div>
                </div>
              </div>
            </div>
            <div class="form_row_3_right">
              <div class="from_row_3_right_input">
                <div class="form_row_3_right_input_col">
                  <div class="form_row_3_right_input_col_title">
                    Due Date:
                  </div>
                  <date-picker
                    class="fil_date"
                    v-model="builder.dueDate"
                    type="date"
                    placeholder="Select date "
                  ></date-picker>
                </div>
              </div>
            </div>
          </div>
          <div class="item_list">
            <b-table hover :items="items" :fields="fields">
              <template #cell(item)="data">
                <input v-model="data.item.item" type="text" />
              </template>
              <template #cell(qty)="data">
                <input
                :disabled="data.item.item==''?true:false"
                  @input="calculateItemSubtotal(data.index, data.item.tax)"
                  width="20px"
                  v-model="data.item.qty"
                  type="number"
                />
              </template>
              <template #cell(rate)="data">
                <input
                  :disabled="data.item.qty==''?true:false"
                  @input="calculateItemSubtotal(data.index, data.item.tax)"
                  v-model="data.item.rate"
                  type="number"
                />
              </template>
              <template #cell(tax)="data">
                <b-form-select
                :disabled="data.item.rate==''?true:false"
                  id="inline-form-custom-select-pref"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  @change="individualTaxCalculation(data.index, data.item.tax)"
                  :options="[
                    { text: 'Select', value: null },
                    { text: '4%', value: 4 },
                    { text: '5%', value: 5 },
                    { text: '6%', value: 6 },
                    { text: '10%', value: 10 },
                  ]"
                  v-model="data.item.tax"
                ></b-form-select>
              </template>
              <template #cell(subtotal)="data">
                {{ data.item.subtotal }}
              </template>
              <template #cell(action)="data">
                <span
                  @click="removeInvoiceItem(data.index)"
                  class="material-icons">
                  clear
                </span>
              </template>
            </b-table>
          </div>

          <div @click="addInvoiceItem()" class="add_invo_item_row">
            <div class="add_invo_item">
              <div class="add_invo_item_text">+ Add New Invoice Item</div>
            </div>
          </div>

          <div class="invoice-summery-table text-right">
            <div class="summery-data">
              <h2 class="invoice-summery-title">Invoice Summery</h2>
              <div class="subtotal-row">
                <div class="subtotal-key">Subtotal</div>
                <div class="subtotal-data">{{ tsubtotal }}</div>
              </div>
              <div class="tax-row">
                <div class="tax-key">Tax</div>
                <div class="tax-data">{{ taxCalculation }}</div>
              </div>
              <div class="total-row">
                <div class="total-key">
                  Total
                  <b-button
                    dashed
                    variant="outline-secondary"
                    @click="$bvModal.show('modal-currency')"
                    >{{ builder.currency.currencyCode }}</b-button>
                </div>
                <div class="total-data">{{ ttotal }}</div>
              </div>
              <div v-if="isPaymentLink" class="payment-link text-center">
                <a target="_blank" :href="paymentLink">Payment Here</a>
            </div>
            </div>
            
          </div>
        
          <div class="lower_section">
            <b-form-input v-model="builder.note" placeholder="Note...">
            </b-form-input>
          </div>
        </div>
      </div>
      <div class="additional-area">
        <!-- <div class="additional-items p-3">
          <h4 class="border-bottom">Additional Items</h4>
            <div class="pt-2">
              <b-form-checkbox v-model="isPaymentLink"  class="mb-2 mr-sm-2 mb-sm-0">Payment Link Box</b-form-checkbox>
              <div class="pt-2">
                <b-form-input v-if="isPaymentLink" v-model="paymentLink" type="url" placeholder="https://"></b-form-input>
              </div>
            </div>
        </div> -->
        <div class="template_style tex-center">
          <div class="template_style_area_title text-center">
            <h3>Choose Template</h3>
          </div>
          <div class="print_templates">
            <div class="print_template">asd</div>
            <div class="print_template">asd</div>
            <div class="print_template">asd</div>
            <div class="print_template">asd</div>
          </div>
          <div class="download_btn">
            <b-button @click="pdfDownlaod()" variant="info" type="subbmit"
              >Downlaod</b-button
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

// Scripts 
<script>
  import DatePicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";
  import jsPDF from "jspdf";
  import html2Canvas from "html2canvas";
  export default {
    components: { DatePicker },
    layout: "dashboard",
    data() {
      return {
        // Custom ADD Profile
        addcustomProfile: {
          id: null,
          user_id: null,
          organizationName: null,
          country: null,
          firstname: null,
          lastname: null,
          email: null,
          tin: null,
          address1: null,
          address2: null,
          phone: null,
          website: null
        },
        //
        //  Custom ADD Cleint
        addcustomClient: {
          id: null,
          user_id: null,
          organizationName: null,
          country: null,
          firstname: null,
          lastname: null,
          email: null,
          tin: null,
          address1: null,
          address2: null,
          phone: null,
          website: null
        },
        // 
        // Additiona Items Variables
        isPaymentLink: false,
        paymentLink: null,
        // 
        demo: null,
        currency_search: null,
        currencyStore: [],
        uploadFile: null,
        imageUrl: null,
        logoUploadURL: null,
        countryOptions: [{ text: "Select One", value: null }],

        invoicetypeOptions: [],
        invoicetype: null,
        // Note `isActive` is left out and will not appear in the rendered table
        fields: [
          {
            key: "item",
            thClass: "table-header-item",
            tdClass: "table-rows-item",
          },
          {
            key: "qty",
            thClass: "table-header",
            tdClass: "table-rows",
          },
          {
            key: "rate",
            thClass: "table-header",
            tdClass: "table-rows",
          },
          {
            key: "tax",
            thClass: "table-header",
            tdClass: "table-rows",
          },
          { key: "subtotal", thClass: "table-header", tdClass: "table-rows" },
          { key: "action", thClass: "table-header", tdClass: "table-rows" },
        ],

        items: [],

        form: {},
        value1: "",
        value2: "",
        currenciesList: [],
        profileList: [],
        clientList: [],
        builder: {
          logo: null,
          invoiceType: {},
          fromData: null,
          toData: null,
          invoiceNo: "#01",
          invoiceDate: null,
          dueDate: null,
          currency: {},
          note: null
        }
      };
    },
    computed: {
      ttotal() {
        return Number(this.tsubtotal) + Number(this.taxCalculation);
      },
      tsubtotal() {
        if (this.items) {
          return this.items.reduce((accumulator, object) => {
            return accumulator + object.subtotal;
          }, 0);
        } else {
          return 0;
        }
      },
      taxCalculation() {
        if (this.items) {
          var taxcal = this.items.reduce((accumulator, object) => {
            return accumulator + Number(object.taxcal);
          }, 0);
          return taxcal.toFixed(2);
        }
      },
    },
    watch: {
      isPaymentLink: function(value){
        if (!value) {
          this.paymentLink = null;
        }
      }
    },
    mounted() {
      this.getCountries();
      this.getInvoicetype();
      this.getAllCurrecies(null);
      this.getProfiles();
      this.getClients();
    },
    methods: {

      // Add Profile
      addCustomProfile(){
        this.builder.fromData = this.addcustomProfile;
        this.$bvModal.hide("modal-from");
      },
      onProfileModalHide() {
        this.addcustomProfile.id = null;
        this.addcustomProfile.user_id = null;
        this.addcustomProfile.organizationName = null;
        this.addcustomProfile.country = null;
        this.addcustomProfile.firstname = null;
        this.addcustomProfile.lastname = null;
        this.addcustomProfile.tin = null;
        this.addcustomProfile.email = null;
        this.addcustomProfile.address1 = null;
        this.addcustomProfile.address2 = null;
        this.addcustomProfile.phone = null;
        this.addcustomProfile.website = null;
      },
      //
      // Add Client
      addCustomClient(){
        this.builder.toData = this.addcustomClient;
        this.$bvModal.hide("modal-to");
      },
      onClientModalHide() {
        this.addcustomClient.id = null;
        this.addcustomClient.user_id = null;
        this.addcustomClient.organizationName = null;
        this.addcustomClient.country = null;
        this.addcustomClient.firstname = null;
        this.addcustomClient.lastname = null;
        this.addcustomClient.tin = null;
        this.addcustomClient.email = null;
        this.addcustomClient.address1 = null;
        this.addcustomClient.address2 = null;
        this.addcustomClient.phone = null;
        this.addcustomClient.website = null;
      },
      // 
      percentage(percent, total) {
        return ((percent / 100) * total).toFixed(2);
      },
      individualTaxCalculation(index, data) {
        var td = this.items[index];
        var st = Number(td.qty) * Number(td.rate);
        this.items[index].taxcal = this.percentage(data, st);
      },
      clickCurrency(index) {
        var currency = this.currenciesList[index];
        this.builder.currency = currency;
        this.$bvModal.hide("modal-currency");
      },
      calculateItemSubtotal(index, data) {
        var td = this.items[index];
        var st = Number(td.qty) * Number(td.rate);
        this.items[index].subtotal = st;
        this.individualTaxCalculation(index, data);
      },

      async saveInvoice() {
        var finalBuilderData = {
          ...this.builder,
          invoiceItems: this.items,
          subtotal: this.tsubtotal,
          totalTax: this.taxCalculation,
          total: this.ttotal,
          ispayment: this.isPaymentLink,
          paymentlink: this.paymentLink
        };
        try {
          let self = this;
          var invoiceBody = {
            logo: this.logoUploadURL,
            invoiceTypeId: finalBuilderData.invoiceType.value,
            fromProfileId: finalBuilderData.fromData.id,
            toClientId: finalBuilderData.toData.id,
            invoiceNo: finalBuilderData.invoiceNo,
            invoiceDate: finalBuilderData.invoiceDate,
            dueDate: finalBuilderData.dueDate,
            currencyId: finalBuilderData.currency.id,
            note: finalBuilderData.note,
            invoiceItems: finalBuilderData.invoiceItems,
            subtotal: finalBuilderData.subtotal,
            totalTax: finalBuilderData.totalTax,
            total: finalBuilderData.total,
            ispayment: finalBuilderData.ispayment,
            paymentlink: finalBuilderData.paymentlink,
            ispaymentcompleted: false
          };
          await this.$axios
            .$post("/createinvoice", invoiceBody)
            .then((response) => {
              self.toast({
                header: "Success",
                body: response.message,
                variant: "success",
                append: true,
              });
            });
        } catch (error) {
          console.log(error.response);
        }
      },

      addInvoiceItem() {
        this.items.push({
          item: "",
          qty: "",
          rate: "",
          tax: null,
          taxcal: null,
          subtotal: "",
        });
      },
      removeInvoiceItem(index) {
        this.items.splice(index, 1);
      },
      async importImage(file) {
        var reader = new FileReader(),
          name = file.name,
          self = this;
        reader.onload = (e) => {
          const data = e.target.result;
          self.imageUrl = data;
          this.logoUpload(self.imageUrl);
        };
        reader.readAsDataURL(file);
      },

      async logoUpload(imgbase64){
        let self = this;
        try {
          await this.$axios.$post('/uploadinvoicelogo', {imagefile: imgbase64}).then((response)=>{
            self.logoUploadURL = response.filepath;
          });
        } catch (error) {
          if (error.response.status == 413) {
            self.toast({
                header: "warning!",
                body: "Image is too large",
                variant: "warning",
                append: true,
              });
          }
          console.log(error.response);        
        }
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
      async getInvoicetype() {
        this.invoicetypeOptions = [{ text: "Select One", value: null }];
        let self = this;
        await this.$axios.$get("/invoicetypelist").then((response) => {
          self.builder.invoiceType = {
                text: response[0].invoicetype,
                value: response[0].id,
              };
          for (const iterator of response) {
            self.invoicetypeOptions.push({
              text: iterator.invoicetype,
              value: iterator.id,
            });
          }
        });
      },

      async getAllCurrecies(currency) {
        var curpost = currency == '' || currency == undefined ? null : currency;
        let self = this;
        await this.$axios.$get('/currencylist/'+curpost).then((response)=> {
          if(response.length !== 0){
            self.builder.currency = response[0]
          }
          self.currenciesList = response;
        });
      },

      async getProfiles() {
        let self = this;
        await this.$axios.$get("/getprofile").then((response) => {
          self.profileList = response;
        });
      },

      async getClients() {
        let self = this;
        await this.$axios.$get("/getclient").then((response) => {
          self.clientList = response;
        });
      },

      // Builder ALL Functionality
      setInvoiceType() {
        this.$bvModal.hide("modal-invoice-type");
        var findInvoice = this.invoicetypeOptions.find(
          (e) => e.value == this.invoicetype
        );
        this.builder.invoiceType = findInvoice;
      },

      async getSingleProfile(id) {
        let self = this;
        await this.$axios.$get("/singleprofile/" + id).then((response) => {
          self.$bvModal.hide("modal-from");
          self.builder.fromData = response;
        });
      },
      async getSingleClient(id) {
        let self = this;
        await this.$axios.$get("/singleclient/" + id).then((response) => {
          self.$bvModal.hide("modal-to");
          self.builder.toData = response;
        });
      },

      async pdfDownlaod() {
        document.html2Canvas = html2Canvas;
        var doc = new jsPDF("p", "px", [1056, 816]);
        var date = new Date(Date.now());
        var dateNow = date.toDateString();
        let pdfName = dateNow;
        var plogo = this.builder.logo;
        var pInvoiceType = this.builder.invoiceType.text;
        var pFrom = this.builder.fromData;
        var pTo = this.builder.toData;
        var pInvoiceNo = this.builder.invoiceNo;
        var pInvoiceDate = this.builder.invoiceDate.toLocaleDateString();
        var pDueDate = this.builder.dueDate.toLocaleDateString();
        var pCurrency = this.builder.currency.currencyCode;
        var pNote = this.builder.note;
        var pTosubTotal = this.tsubtotal;
        var pTaxTotal = this.taxCalculation;
        var pTotal = this.ttotal;
        var pItems = this.items;
        var pTableheader = [];
        var pTableBody = [];

        Object.keys(pItems[0]).forEach((key) => {
          if (key != "id" && key != "invoice_id" && key != "taxcal") {
            pTableheader.push(`<th>${key}</th>`);
          }
        });
        for (const iterator of pItems) {
          pTableBody.push(
            `<tr>
                <td>${iterator.item}</td>
                <td>${iterator.qty}</td>
                <td>${iterator.rate}</td>
                <td>${iterator.tax}</td>
                <td>${iterator.subtotal}</td>
                </tr>`
          );
        }
        var tabledata = `<tr>
              ${pTableheader.join("")}
              </tr>
              ${pTableBody.join("")}
              `;
        doc.html(
          `<div class="invoice_pdf_pdfcontainer">
              <div class="pdfcontainer">
                  <div class="invoice_top">
                      <div class="invo_top_left">
                          <img src="${plogo}" alt="img">
                      </div>
                      <div class="invo_top_right">
                          <div class="invo_type">
                              ${pInvoiceType}
                          </div>
                      </div>
                  </div>

                  <div class="invoice_details">
                      <div class="detail_left">
                          <div class="title_data">
                              <div class="">Form</div>
                              <div class="">${
                                pFrom.firstname + " " + pFrom.lastname
                              }</div>
                              <div class="">${pFrom.email}</div>
                              <div class="">${pFrom.phone}</div>
                              <div class="">${pFrom.website}</div>
                              <div class="">${pFrom.address1}</div>
                          </div>
                      </div>
                      <div class="detail_right">
                          <div class="title_data">
                              <div class="">To</div>
                              <div class="">${
                                pTo.firstname + " " + pTo.lastname
                              }</div>
                              <div class="">${pTo.email}</div>
                              <div class="">${pTo.phone}</div>
                              <div class="">${pTo.website}</div>
                              <div class="">${pTo.address1}</div>
                          </div>
                      </div>
                  </div>

                  <div class="invoice_details">
                      <div class="detail_left">
                          <div class="title">
                              <div class="p_name">Invoice No</div>
                              <div class="domain">Invoice Date</div>
                          </div>
                          <div class="colon">
                              <div>:</div>
                              <div>:</div>
                          </div>
                          <div class="title_data">
                              <div class="p_name_data">${pInvoiceNo}</div>
                              <div class="domain_data">${pInvoiceDate}</div>
                          </div>
                      </div>
                      <div class="detail_left">
                          <div class="title">
                              <div class="p_name">Due Date
                              </div>
                          </div>
                          <div class="colon">
                              <div>:</div>
                          </div>
                          <div class="title_data">
                              <div class="p_name_data">${pDueDate}</div>
                          </div>
                      </div>
                  </div>

                  <table>
                      ${tabledata}
                  </table>

                  <div class="invoice_smmery">
                      <table>
                          <tr>
                              <th colspan="2">Invoice Summery</th>
                          </tr>
                          <tr>
                              <td>Subtotal</td>
                              <td>${pTosubTotal}</td>
                          </tr>
                          <tr>
                              <td>Tax</td>
                              <td>${pTaxTotal}</td>
                          </tr>
                          <tr>
                              <td>Total <span>${pCurrency}</span></td>
                              <td>${pTotal}</td>
                          </tr>
                      </table>
                  </div>

                  <div class="invo_comments">
                      ${pNote}
                  </div>

              </div>
          </div>`,
          {
            callback: function (doc) {
              doc.save(pdfName);
            },
            x: 30,
            y: 30,
          }
        );
      },
    },
  };
</script>

<style scoped>
.add_invo_btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0;
}
.profileitem {
  padding: 5px;
  cursor: pointer;
}
.profileitem:hover {
  background-color: #0075ff;
  color: #ffffff;
}

.top_row {
  align-items: center;
  padding: 30px;
}

.creat_invo_title {
  text-align: left;
  color: #404d61;
  font-size: 20px;
  font-weight: 700;
}

.creat_invo_btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* text-align: right; */
}

.creat_invo_btn button:focus {
  box-shadow: none;
}

.creat_invo_btn button {
  padding: 13px 30px;
  border-radius: 12px;
  /* tab-size: 14px; */
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
}

.creat_invo_btn button:nth-last-child(1) {
  margin-right: 0;
}

.creat_invo_btn button:nth-child(1) {
  background: transparent;
  border:1px solid #757D8A;
  color: #757D8A;
  font-size: 14px;
}
.creat_invo_btn button:nth-child(1):active {
  background: transparent;
  border:1px solid #757D8A;
  color: #757D8A;
  font-size: 14px;
  outline: none;
}
.creat_invo_btn button:nth-child(1):focus {
  outline: none;
}

.creat_invo_btn button:nth-child(2) {
  background: #00BB40;
  border:1px solid #00BB40;
  border: none;
  font-size: 14px;
}

/* From Section Start */

:deep(.modal-body) {
  padding: 0 25px 25px;
}
:deep(.modal-body button) {
  padding: 15px 30px;
}
.from_area {
  max-width:940px;
  padding: 50px 48px;
  width: 760px;
}

/* Subbmit Form area Start  */
/* From Row 1  */
.form_row_1{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_row_1_left, .form_row_1_right{
  text-align: left;
  width: 45%;
}
.form_row_1 .form_row_1_left h3{
  font-size: 20px;
  line-height: 1.2;
  color: #4F4D4D;
  padding-bottom: 10px;
}
.form_row_1 .form_row_1_left  .form_row_1_left_input{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_row_1_left_input_left :deep(select), .form_row_1_right_input_left :deep(select){
  height: 40px;
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
  left: 10px;
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

/* Pop Up Form Design End  */

.form_row_1_left_input_left, .form_row_1_left_input_right{
  width: 48%;
}
.form_row_1_left_input_right :deep(b-butto){
  padding: 7px 25px;
  border: 1px solid #D0D5DD;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  width: 100%;
}
.form_row_1 .form_row_1_right h3{
  font-size: 20px;
  line-height: 1.2;
  color: #4F4D4D;
  padding-bottom: 10px;

}
.form_row_1 .form_row_1_right .form_row_1_right_input{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_row_1_right_input_left, .form_row_1_right_input_right{
  width: 48%;
}
.form_row_1_right_input_right :deep(b-butto){
  padding: 7px 25px;
  border: 1px solid #D0D5DD;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  width: 100%;
}
/* From Row 2  */
.form_row_2{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_row_2_left,
.insert_img {
  display: flex;
  align-items: center;
  color: #93B0C8;
}
.form_row_2_left, .form_row_2_right{
  width: 45%;
}
.from_row_2_input_left, .from_row_2_input_right{
  width: 100%;
}
.from_row_2_input_right{
  cursor: pointer;
  background: #FBFBFB;
  padding: 18px 15px;
  border-radius: 6px;
}
.from_row_2_input_right .insert_img .insert_img_text{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.from_row_2_input_right .insert_img p{
  font-size: 12px;
  line-height: 1.2;
  color: #667085;
  margin: 0;
}
.from_row_2_input_right .insert_img a{
  font-size: 12px;
  line-height: 1.2;
  color: #38427D;
}
.insert_img input {
  display: none;
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.image-div img {
  object-fit: contain;
}

.form_row_1 .material-icons {
  cursor: pointer;
}
/* Form ROw 3  */
.form_row_3{
  display: flex;
  align-items: flex-end;
}
.form_row_3_left, .form_row_3_right{
  width: 35%;
}
.form_row_3_right{
  margin-left: 150px;
}
.form_row_3_left_input_top_left ,.form_row_3_left_input_bottom_left ,.form_row_3_right_input_col{
  display: flex;
  align-items: center;
}
.form_row_3_right_input_col_title,.form_row_3_left_input_bottom_left_title,.form_row_3_left_input_top_left_title{
  width: 35%;
  font-size: 12px;
  color: #667085;
}
.form_row_3_left_input_bottom :deep(.mx-input),  .from_row_3_right_input :deep(.mx-input){
  height: 25px;
}
.form_row_3_left_input_bottom :deep(.mx-datepicker), .from_row_3_right_input :deep(.mx-datepicker){
  width: 50%;
}
.form_row_3_left_input_top_left :deep(.form-control){
  width: 50%;
  height: 25px;
}

/* Item List  */
.item_list{
  background: #F3F1FF;
}

.item_list :deep(.table thead th){
  border-bottom: none;
  border-top: none;
}

.invo_detail-1,
.invo_detail-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

:deep(.invo_detail-1 input) {
  max-width: 100%;
  width: 210px;
  height: 42px;
}

:deep(.invo_detail-1 .invo_no_data input:focus) {
  box-shadow: none;
}

:deep(.invo_detail-2 input) {
  max-width: 100%;
  width: 210px;
  height: 42px;
}

.add_invo_item {
  cursor: pointer;
  padding: 15px;
  border: 2px dashed #8d8d8d;
}

.add_invo_item:hover {
  border: 2px solid #294997;
}

.add_invo_item_text {
  font-size: 14px;
  font-weight: 700;
  color: #9f9f9f;
  text-align: center;
}

/* PoP Up designr start here  */

/* To Whom  */

/* Invoice Type Css Start Here  */

:deep(#modal-invoice-type .modal-content) {
  border-radius: 12px;
}

:deep(#modal-invoice-type .modal-header) {
  background: #f0f7fd;
  padding: 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: #6c6c6c;
}

:deep(.modal-header){
  border: none;
}

:deep(#modal-invoice-type .modal-body) {
  padding: 30px 50px;
}

.invo_typ_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 0 0;
  width: 100%;
}

.invo_typ_btn label {
  font-size: 15px;
  color: #363636;
}

.invo_typ_btn button {
  max-width: 100%;
  width: 100%;
  background: #0075ff;
  border-radius: 5px;
  border: none;
  padding: 14px 100px;
}

.invo_typ_btn button:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.invo_typ_btn .btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  border: none;
  box-shadow: none;
  background: #0075ff;
}

/* invoice items start */

:deep(.table-header-item) {
  max-width: 90px;
}
:deep(.table-rows-item) {
  max-width: 90px;
}
:deep(.table-rows-item input) {
  width: 100%;
  height: 42px;
  border: 1px solid #dcdcdc;
  outline: none;
}
:deep(.table-header) {
  max-width: 40px;
}
:deep(.table-rows) {
  max-width: 40px;
  vertical-align: middle !important;
}
:deep(.table-rows input) {
  width: 100%;
  height: 42px;
  border: 1px solid #dcdcdc;
  outline: none;
}
:deep(.table-rows select) {
  width: 100%;
  height: 42px;
  border: 1px solid #dcdcdc;
  outline: none;
}

:deep(.table-rows .material-icons) {
  font-size: 18px;
  cursor: pointer;
}

/* Summery section start */

.invoice-summery-table {
  display: flex;
  justify-content: flex-end;
  margin: 40px 0 20px;
  max-width: 100%;
}
.summery-data {
  max-width: 100%;
  width: 300px;
}

.summery-data .invoice-summery-title {
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  background: #F3F1FF;
  padding: 15px;
}
.summery-data .subtotal-row,
.summery-data .tax-row,
.summery-data .total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  padding: 10px 10px 10px 0;
  color: #616161;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #9b9b9b;
}

.total-row .btn {
  border: 1px dashed #8d8d8d;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0;
}

.total-row .btn:hover {
  background: transparent;
  color: #000000;
  box-shadow: none;
  border: 1px solid #0075ff;
}

.total-row .btn:focus,
.total-row .btn:active {
  box-shadow: none;
  background: transparent;
  color: #000000;
}

.lower_section {
  padding: 10px 0 20px;
}
.lower_section input {
  background: #fbfbfb;
  border: 2px dashed #8d8d8d;
  border-radius: 0;
  color: #8d8d8d;
}

.lower_section input:focus {
  box-shadow: none;
  border: 2px solid #0075ff;
}

.lower_section input:active {
  border: 1px solid #0075ff;
}
/* Subbmit Form area End  */
/* Templatre area Start */
.additional-area{
  width: 415px;
  padding: 20px;
}

.additional-area .template_style_area_title {
  background: #E1E1FE;
  padding: 20px;
}

.additional-area .template_style_area_title h3{
  font-size: 16px;
  color: #294997;
  margin: 0;
  font-weight: 500;
}

.print_templates{
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  
}
.print_template{
  width: 48%;
  background: #FFFFFF;
  padding: 10px;
  margin-top: 15px;
  margin-right: 15px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.print_template[data-v-0ae725fe]:nth-child(2n+0) {
    margin-right: 0;
}
.download_btn{
  text-align: center;
  margin-top: 20px;
}
.download_btn button{
  background: #614DFF;
  padding: 7px 22px;
}
</style>