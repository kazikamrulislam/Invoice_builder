<template>
  <div>
    <section class="can_sav_section bg-white">
      <b-row class="top_row">
        <b-col sm="12" md="6" lg="6" xl="6">
          <div class="creat_invo_title">Create Invoices</div>
        </b-col>
        <b-col sm="12" md="6" lg="6" xl="6">
          <div class="creat_invo_btn">
            <b-button @click="$router.back()" variant="danger" type="subbmit"
              >Cancle Invoice
            </b-button>
            <b-button @click="saveInvoice()" variant="success" type="subbmit"
              >Save Invoice
            </b-button>
            <b-button @click="pdfDownlaod()" variant="info" type="subbmit"
              >Downlaod</b-button
            >
          </div>
        </b-col>
      </b-row>
    </section>
    <div class="d-flex">
    <section class="from_area mt-3 bg-white">
      <div class="invoice_form">
        <!-- For Curency  -->
        <b-modal
          scrollable
          hide-footer
          centered
          id="modal-currency"
          size="lg"
          title="Select Currency"
        >
          <b-row class="pb-3">
            <b-col sm="12" md="4" lg="4" xl="4">
              <label for="cur">Search Currency</label>
              <b-form-input
                      v-model="currency_search"
                      @input="getAllCurrecies(currency_search)"
                      id="cur"
                      type="text"
                      placeholder="Currency..."
                      required
                    ></b-form-input>
            </b-col>
          </b-row>
          <b-list-group v-if="currenciesList.length !== 0">
            <b-list-group-item
              @click="clickCurrency(index)"
              v-for="(item, index) in currenciesList"
              :key="index"
              href="#"
              button
            >
              {{ item.currencyName }}
            </b-list-group-item>
          </b-list-group>
          <div v-else>
            No Data Found
          </div>

        </b-modal>
        <!-- From whome  -->
        <b-modal
          scrollable
          hide-footer
          centered
          id="modal-from"
          size="lg"
          title="FROM"
        >
          <div>
            <b-tabs content-class="mt-3" justified>
              <b-tab title="Custom Profile" active>
                <b-form @submit.prevent="addCustomProfile()" >
                    <b-row>
                      <b-col sm="12" md="8" lg="8" xl="8">
                        <b-form-group
                          id="input-group-1"
                          label="Organization Name"
                          label-for="input-1"
                        >
                          <b-form-input
                            v-model="addcustomProfile.organizationName"
                            id="input-1"
                            type="text"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col sm="12" md="4" lg="4" xl="4">
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
                    </b-row>
                    <b-row>
                      <b-col sm="12" md="6" lg="6" xl="6">
                        <b-form-group
                          id="input-group-3"
                          label="First Name"
                          label-for="input-3"
                        >
                          <b-form-input
                            v-model="addcustomProfile.firstname"
                            id="input-3"
                            type="text"
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
                            v-model="addcustomProfile.lastname"
                            id="input-4"
                            type="text"
                            required
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
                            v-model="addcustomProfile.tin"
                            id="input-10"
                            type="number"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col sm="12" md="6" lg="6" xl="6">
                        <b-form-group
                          id="input-group-5"
                          label="Email Address"
                          label-for="input-5"
                        >
                          <b-form-input
                            v-model="addcustomProfile.email"
                            id="input-5"
                            type="email"
                            required
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div class="border-bottom mb-2 mt-2"></div>
                    <b-row>
                      <b-col sm="12" md="6" lg="6" xl="6">
                        <b-form-group
                          id="input-group-6"
                          label="Address 1"
                          label-for="input-6"
                        >
                          <b-form-input
                            v-model="addcustomProfile.address1"
                            id="input-6"
                            type="text"
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
                            v-model="addcustomProfile.address2"
                            id="input-7"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12" md="6" lg="6" xl="6">
                        <b-form-group
                          id="input-group-8"
                          label="Phone"
                          label-for="input-8"
                        >
                          <b-form-input
                            v-model="addcustomProfile.phone"
                            id="input-8"
                            type="number"
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
                            v-model="addcustomProfile.website"
                            id="input-9"
                            type="url"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-button type="submit" block variant="primary">Add Profile</b-button>
                  </b-form>
              </b-tab>
              <b-tab title="Add from save">
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
              </b-tab>
            </b-tabs>
          </div>
          

        </b-modal>
        <!-- Send TO whome Stert Here  -->
        <b-modal hide-footer  centered id="modal-to" size="lg" title="TO">
          <div>
            <b-tabs content-class="mt-3"  justified>
              <b-tab title="Custom Client" active>
                <b-form
                  @submit.prevent="addCustomClient()"
                >
                  <b-row>
                    <b-col sm="12" md="8" lg="8" xl="8">
                      <b-form-group
                        id="input-group-1"
                        label="Organization Name"
                        label-for="input-1"
                      >
                        <b-form-input
                          v-model="addcustomClient.organizationName"
                          id="input-1"
                          type="text"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="12" md="4" lg="4" xl="4">
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
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12" md="12" lg="12" xl="12">
                      <b-form-group
                        id="input-group-5"
                        label="Email Address"
                        label-for="input-5"
                      >
                        <b-form-input
                          v-model="addcustomClient.email"
                          id="input-5"
                          type="email"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div class="border-bottom mb-2 mt-2"></div>
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
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
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
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-button type="submit" block variant="primary">ADD CLIENT</b-button>
                </b-form>
              </b-tab>
              <b-tab title="Add from save">
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
              </b-tab>
            </b-tabs>
          </div>
        </b-modal>

        <!-- invoice Html Start Here  -->
        <b-modal
          hide-footer
          centered
          id="modal-invoice-type"
          size="md"
          title="INVOICE TYPE"
        >
          <b-form class="form_type">
            <label class="mr-sm-2" for="inline-form-custom-select-pref"
              >Type</label
            >
            <b-form-select
              id="inline-form-custom-select-pref"
              v-model="invoicetype"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="invoicetypeOptions"
            ></b-form-select>
            <div class="invo_typ_btn">
              <b-button @click="setInvoiceType()">SET INVOICE TYPE</b-button>
            </div>
          </b-form>
        </b-modal>

        <!-- Insert Image Here  -->
        <div class="form_row_2">
          <div class="from_whom">
            <h2 class="title_from">FROM</h2>
            <div class="left_col_outer" @click="$bvModal.show('modal-from')">
              <div class="col_left">
                <div class="invoice_from">
                  <div v-if="builder.fromData">
                    <div class="invoice_from_name">
                      {{
                        builder.fromData.firstname + " " + builder.fromData.lastname
                      }}
                    </div>
                    <div class="invoice_from_mail">
                      {{ builder.fromData.email }}
                    </div>
                    <div class="invoice_from_phone">
                      {{ builder.fromData.phone }}
                    </div>
                    <div class="invoice_from_web">
                      {{ builder.fromData.website }}
                    </div>
                    <div >
                      {{ builder.fromData.address1 }}
                    </div>
                  </div>
                  <span
                    v-if="!builder.fromData"
                    id="invoice-from-i"
                    class="material-icons"
                    >person</span
                  >
                  <div v-if="!builder.fromData" class="invo_from_text">
                    <h3>Sender Name</h3>
                    <a href="#">Sender Contact Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="to">
            <h2 class="title_from">TO</h2>
            <div class="right_col_outer" @click="$bvModal.show('modal-to')">
              
              <div class="col_right">
                <div class="invoice_from">
                  <div v-if="builder.toData">
                    <div class="invoice_to_name">
                      {{
                        builder.toData.firstname + " " + builder.toData.lastname
                      }}
                    </div>
                    <div class="invoice_to_mail">
                      {{ builder.toData.email }}
                    </div>
                    <div class="invoice_to_phone">
                      {{ builder.toData.phone }}
                    </div>
                    <div class="invoice_to_web">
                      {{ builder.toData.website }}
                    </div>
                    <div class="invoice_to_address">
                      {{ builder.toData.address1 }}
                    </div>
                  </div>
                  <span
                    v-if="!builder.toData"
                    id="invoice-from-i-to"
                    class="material-icons"
                    >person</span
                  >
                  <div v-if="!builder.toData" class="invo_from_text">
                    <h3>Recipient Name</h3>
                    <a href="#">Recipient Contact Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form_row_1">
          <div
            class="col_right invoice_name"
            @click="$bvModal.show('modal-invoice-type')"
          >
            <div class="invoice_name_text">
              <div>{{ builder.invoiceType.text }}</div>
            </div>
          </div>
          <div
            v-if="imageUrl == null"
            @click="$refs.importimage.$el.click()"
            class="col_left insert_img"
          >
            <span id="insert-img-i" class="material-icons"
              >add_photo_alternate
            </span>
            <div class="insert_img_text">
              <h3>Drag your logo here or</h3>
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

        <div class="form_row_3">
          <div class="col_left">
            <div class="invo_detail-1">
              <div class="title">
                <div class="invo_no">Invoice No</div>
              </div>
              <div class="colon">
                <div>:</div>
              </div>
              <div class="det_value">
                <div class="invo_no_data">
                  <b-form-input
                    v-model="builder.invoiceNo"
                    id="invo-no"
                    type="text"
                    required
                  ></b-form-input>
                </div>
              </div>
            </div>
            <div class="invo_detail-2">
              <div class="title">
                <div class="invo_date">Invoice Date</div>
              </div>
              <div class="colon">
                <div>:</div>
              </div>
              <div class="det_value">
                <div class="invo_date_data">
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

          <div class="col_right">
            <div class="invo_detail-1">
              <div class="title">
                <div class="date">Due Date</div>
              </div>
              <div class="colon">
                <div>:</div>
              </div>
              <div class="det_value">
                <div class="date_data">
                  <date-picker
                    v-model="builder.dueDate"
                    type="date"
                    placeholder="Select date "
                  ></date-picker>
                </div>
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
                class="material-icons"
              >
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
    </section>
    <section class="additional-area">
      <div class="additional-items p-2">
        <h4 class="border-bottom">Additional Items</h4>
          <div class="pt-2">
            <b-form-checkbox v-model="isPaymentLink"  class="mb-2 mr-sm-2 mb-sm-0">Payment Link Box</b-form-checkbox>
            <div class="pt-2">
              <b-form-input v-if="isPaymentLink" v-model="paymentLink" type="url" placeholder="https://"></b-form-input>
            </div>
          </div>
      </div>
    </section>
    </div>
  </div>
</template>

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
  font-size: 28px;
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
  background: #f63f3f;
  border: none;
}

.creat_invo_btn button:nth-child(2) {
  background: #0075ff;
  border: none;
}

/* From Section Start */

:deep(.modal-body) {
  padding: 25px;
}
:deep(.modal-body button) {
  padding: 15px 30px;
}
.from_area {
  max-width:940px;
  padding: 20px;
  width: 760px;
}

.additional-area{
  max-width: 500px;
  padding: 20px;
  width: 400px;
}

.form_row_1,
.form_row_2,
.form_row_3 {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.form_row_1 .col_left,
.form_row_1 .col_right {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 45%;
  padding: 5px;
  border: 2px solid #8d8d8d;
  border-radius: 8px;
  background: #fbfbfb;
}

.form_row_1 .col_left:hover,
.form_row_1 .col_right:hover {
  border: 2px solid #0075ff;
  transition: 0.5s;
}

.form_row_1 .col_left #insert-img-i {
  font-size: 30px;
  padding-right: 10px;
}

.form_row_1 .col_left .insert_img_text h3 {
  font-size: 12px;
  font-weight: 400;
  color: #404d61;
  line-height: 1;
  margin: 0;
}
.form_row_1 .col_left .insert_img_text a {
  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  color: #404d61;
}

.insert_img {
  display: flex;
  align-items: center;
}

.insert_img input {
  display: none;
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

.image-div img {
  object-fit: contain;
}

.form_row_1 .material-icons {
  cursor: pointer;
}

.form_row_1 .col_right .invoice_name_text {
  display: flex;
  align-items: center;
}

.invoice_from {
  display: flex;
  align-items: center;
}

.from_whom, .to{
  width: 45%;
}

.form_row_2 .left_col_outer,
.form_row_2 .right_col_outer {
  cursor: pointer;
  width: 50%;
  padding: 5px;
  border: 2px solid #8d8d8d;
  border-radius: 8px;
  background: #fbfbfb;
   /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.form_row_2 .left_col_outer:hover,
.form_row_2 .right_col_outer:hover {
  border: 2px solid #0075ff;
  transition: 0.5s;
}

.form_row_2 .col_left .invo_from_text h3 {
  font-size: 12px;
  font-weight: 400;
  color: #404d61;
  line-height: 1;
  margin: 0;
}

.form_row_2 .col_left .invo_from_text a {
  font-size: 8px;
  font-weight: 400;
  text-decoration: none;
  color: #888888;
}

.title_from {
  font-size: 14px;
  color: #363636;
  margin: 0;
  padding-bottom: 10px;
}

.form_row_2 .col_left #invoice-from-i {
  font-size: 30px;
  padding-right: 10px;
}

.form_row_2 .col_right .invo_from_text h3 {
  font-size: 12px;
  font-weight: 400;
  color: #404d61;
  line-height: 1;
  margin: 0;
}

.form_row_2 .col_right .invo_from_text a {
  font-size: 8px;
  font-weight: 400;
  text-decoration: none;
  color: #888888;
}

.form_row_2 .col_right #invoice-from-i-to {
  font-size: 30px;
  padding-right: 10px;
}

.form_row_3 .col_left,
.form_row_3 .col_right {
  width: 45%;
}

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

:deep(.modal-header) {
  background: #f0f7fd;
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

/* Additional Area CSS */

.additional-items{
  background-color: #ffffff;
}

@media all and (max-width: 1024px) {
  .can_sav_section .creat_invo_btn {
    display: flex;
  }
  .creat_invo_btn button {
    padding: 13px 15px;
    font-size: 11px;
  }
}

@media all and (max-width: 767px){
  .creat_invo_title{
    text-align: center;
  }
  .can_sav_section .creat_invo_btn{
    justify-content: center;
    padding-top: 20px;
  }

  .form_row_3{
    flex-wrap: wrap;
  }

  /* .form_row_3 .col_left, .form_row_3 .col_right{
    width: 100%;
  } */

  .invo_detail-1, .invo_detail-2{
    display: inline-block;
    width: 100%;
  }

  .invo_detail-1 .colon, .invo_detail-2 .colon{
    /* padding: 0 10px; */
    display: none;
  }
}

@media all and (max-width: 480px) {
  .creat_invo_title {
    text-align: center;
  }

  :deep(.can_sav_section .creat_invo_btn) {
    display: inline-block;
  }

  .creat_invo_btn button {
    padding: 10px;
  }
  
  

  .creat_invo_btn button:nth-child(n) {
    width: 100%;
    margin-top: 10px;
  }

  .form_row_1 .col_left,
  .form_row_1 .col_right,
  .form_row_2 .left_col_outer,
  .form_row_2 .right_col_outer,
  .form_row_3 .col_left,
  .form_row_3 .col_right {
    width: 100%;
  }

  .form_row_1 .col_left,
  .form_row_1 .col_right,
  .form_row_2 .left_col_outer,
  .form_row_2 .right_col_outer{
    margin: 20px 0 0;
    height: 94px;
  }

  .form_row_1,
  .form_row_2,
  .form_row_3 {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
  }

  .invo_detail-1,
  .invo_detail-2,
  .invo_detail-3 {
    display: inline-block;
    width: 100%;
  }

  .mx-datepicker {
    width: 100%;
  }

  .mx-input-wrapper {
    width: 100%;
  }

  :deep(.invo_detail-1 input) {
    width: 100%;
  }

  :deep(.invo_detail-2 input) {
    width: 100%;
  }

  .colon {
    display: none;
  }
}
</style>

<style lang=css>
.invoice_pdf_pdfcontainer img {
  height: 80px;
}

.invoice_pdf_pdfcontainer {
  /* max-width: 595px; */
  width: 750px;
  /* height: 842px; */
  background-color: #fff;
  margin: 0 auto;
}

.invoice_pdf_pdfcontainer .pdfcontainer {
  /* max-width: 459px; */
  width: 750px;
  margin: 0 auto;
}

.invoice_pdf_pdfcontainer .invoice_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.invoice_pdf_pdfcontainer .invo_top_left {
  max-width: 64%;
  width: 100%;
}

.invoice_pdf_pdfcontainer .invo_top_right {
  max-width: 36%;
  width: 100%;
}

.invoice_pdf_pdfcontainer .invo_type {
  font-size: 20px;
}

.invoice_pdf_pdfcontainer .invoice_title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0 28px;
}

.invoice_pdf_pdfcontainer .invoice_title img {
  object-fit: contain;
}

.invoice_pdf_pdfcontainerv .invoice_title h2 {
  font-size: 32px;
  font-weight: 900;
  line-height: 0;
}

.invoice_pdf_pdfcontainer .invoice_details {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 1.7rem;
  font-weight: 400;
}

.invoice_pdf_pdfcontainer .invoice_details .detail_left {
  display: flex;
}

.invoice_pdf_pdfcontainer .colon {
  padding: 0 10px;
}

/* Table style start here */

.invoice_pdf_pdfcontainer table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: #ffffff;
  margin-top: 39px;
}

.invoice_pdf_pdfcontainer th {
  font-size: 12px;
  background: #f0f0f0;
  font-weight: 400;
}

.invoice_pdf_pdfcontainer td {
  font-size: 10px;
  line-height: 12.1px;
}

.invoice_pdf_pdfcontainer td,
th {
  text-align: left;
  padding: 9px;
}

.invoice_pdf_pdfcontainer tr:nth-child(n) {
  border-bottom: 1px solid #d0d0d0;
}

.invoice_pdf_pdfcontainer .invoice_smmery {
  display: flex;
  justify-content: flex-end;
}

.invoice_pdf_pdfcontainer .invoice_smmery table {
  width: 40%;
}

.invoice_pdf_pdfcontainer .invoice_smmery table th {
  text-align: center;
}

.invoice_pdf_pdfcontainer .invo_comments {
  font-size: 10px;
  padding: 30px 0;
  text-align: center;
}
</style>