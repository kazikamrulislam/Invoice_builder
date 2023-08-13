<template>
  <div>
    <section class="can_sav_section bg-white">
      
      <b-row class="top_row">
        <b-col  md="4" lg="4" xl="4">
          <div class="creat_invo_title">Edit Invoice</div>
          Payment Status : <b-badge :variant="isPaymentCompleted?'success':'danger'">{{isPaymentCompleted ? "Completed" : "Pending"}}</b-badge>
        </b-col>
        <b-col  md="8" lg="8" xl="8">
          <div class="creat_invo_btn">
            <b-button @click="$router.back()" variant="danger" type="subbmit"
              >Cancle Invoice
            </b-button>
            <b-button @click="updateInvoice()" variant="success" type="subbmit"
              >Update Invoice
            </b-button>
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

        <!-- Fron whome  -->
        <b-modal
          scrollable
          hide-footer
          centered
          id="modal-from"
          size="lg"
          title="FROM"
        >
          <div class="add_invo_btn">
            <nuxt-link to="/dashboard/profile">
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
        </b-modal>

        <!-- Send TO whome Stert Here  -->
        <b-modal hide-footer centered id="modal-to" size="lg" title="TO">
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
        <div class="form_row_1">
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
          <div
            class="col_right invoice_name"
            @click="$bvModal.show('modal-invoice-type')"
          >
            <div class="invoice_name_text">
              <div>{{ builder.invoiceType.text }}</div>
            </div>
          </div>
        </div>

        <div class="form_row_2">
          <div class="left_col_outer" @click="$bvModal.show('modal-from')">
            <h2 class="title_from">FROM</h2>
            <div class="col_left">
              <div class="invoice_from">
                <div class="invoice_fro" v-if="builder.fromData">
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
                    <p>{{ builder.fromData.website }}</p>
                  </div>
                  <div class="invoice_from_adddress">
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

          <div class="left_col_outer" @click="$bvModal.show('modal-to')">
            <h2 class="title_from">TO</h2>
            <div class="col_right">
              <div class="invoice_from">
                <div class="invoice_to" v-if="builder.toData">
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
                @input="calculateItemSubtotal(data.index, data.item.tax)"
                width="20px"
                v-model="data.item.qty"
                type="number"
              />
            </template>
            <template #cell(rate)="data">
              <input
                @input="calculateItemSubtotal(data.index, data.item.tax)"
                v-model="data.item.rate"
                type="number"
              />
            </template>
            <template #cell(tax)="data">
              <b-form-select
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
                @click="removeInvoiceItem(data.index, data.item.id)"
                class="material-icons"
              >
                clear
              </span>
            </template>
          </b-table>
        </div>

        <div @click="addInvoiceItem()" class="add_invo_item_row">
          <div class="add_invo_item">
            <div class="add_invo_item_text">Add New Invoice Item</div>
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
                  >{{ builder.currency.currencyCode }}</b-button
                >
              </div>
              <div class="total-data">{{ ttotal }}</div>
            </div>
            <div v-if="isPaymentLink" class="payment-link text-center">
              <a target="_blank" :href="paymentLink">Payment Here</a>
          </div>
          </div>
        </div>

        <div class="lower_section">
          <b-form-input v-model="builder.note" placeholder="Invoice Terms">
          </b-form-input>
        </div>
      </div>
    </section>
        <section class="additional-area">
      <div class="additional-items p-2">
        <h4 class="border-bottom">Additional Items</h4>
          <div v-if="genButtonShow" class="pt-2">
            <div class="d-flex justify-content-between">
              <b-form-checkbox v-model="isPaymentLink"  class="mb-2 mr-sm-2 mb-sm-0">Payment link</b-form-checkbox>
            <b-form-checkbox switch v-if="isPaymentLink" v-model="isGenPaymentLink" @input="generatePayLink(isGenPaymentLink)" class="mb-2 mr-sm-2 mb-sm-0">Generate Link</b-form-checkbox>
            </div>
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
export default {
  components: { DatePicker },
  layout: "dashboard",
  data() {
    return {
      // Additiona Items Variables
      isPaymentLink: false,
      isGenPaymentLink: false,
      paymentAccInfo: null,
      genButtonShow: false,
      paymentLink: null,
      // 
      isPaymentCompleted: false,
      apiBASE_URL: null,
      demo: null,
      editData: [],
      currency_search: null,
      uploadFile: null,
      logoUploadURL: null,
      imageUrl: null,
      countryOptions: [{ text: "Select One", value: null }],
      country: null,

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
        note: null,
      },
    };
  },
  computed: {
    ttotal() {
      return Number(this.tsubtotal) + Number(this.taxCalculation);
    },
    tsubtotal() {
      if (this.items) {
        return this.items.reduce((accumulator, object) => {
          return accumulator + Number(object.subtotal);
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
    },
    isGenPaymentLink: function(value){
      if (!value) {
        this.paymentLink = null;
      }
    }
  },
  mounted() {
    this.apiBASE_URL = process.env.baseUrl;
    this.getCountries();
    this.getInvoicetype();
    this.getAllCurrecies(null);
    this.getProfiles();
    this.getClients();
    this.getSingleInvoiceView();
    this.getAccountinfo();
  },
  methods: {
    // Generate Payment Link
    /**
     * URL QUERY ful fromate 
     * 'provider' => Invoice Generator or User
     * 'inv' => Invoice ID
     * 'pmpro' => Payment Provider 's' for Stripe 'p' For Payoneer
     * 'pid' => User Payment Account Id what get from stripe or payoneer
     */ 
    generatePayLink(bool){
      if (bool) {
        var urlendpoint = window.location.origin+'/payment-portal';
        var userId = this.$auth.user.id;
        var invoiceId = this.$route.params.id;
        var paymentprovider = 's';
        var paymentId = this.paymentAccInfo.stripeacid;
        var genUrl = `${urlendpoint+'?provider='+userId+'&inv='+invoiceId+'&pmpro='+paymentprovider+'&pid='+paymentId}`;
        this.paymentLink = genUrl;
      }
    },
    async getAccountinfo(){
      this.genButtonShow = false;
        let self = this;
        await this.$axios.$get('/getconnectedacinfo').then((response) => {
          if (response.length !== 0) {
            self.paymentAccInfo = response;
            self.genButtonShow = true;
          }
        });
      },
    async getSingleInvoiceView(){
            let self = this;
            var dataBody = {
                invoice_id: this.$route.params.id
            }
            await this.$axios.$post('/getsingleinvoice',dataBody).then((response)=>{
                self.imageUrl = this.apiBASE_URL+response.logo;
                self.builder.logo = response.logo;
                self.builder.currency = response.currency;
                self.builder.invoiceType = {
                    text: response.invoiceType.invoicetype,
                    value: response.invoiceType.id
                };
                self.builder.fromData = response.fromData;
                self.builder.toData = response.toData;
                self.builder.invoiceNo = response.invoiceNo;
                self.builder.invoiceDate = new Date(response.invoiceDate);
                self.builder.dueDate = new Date(response.dueDate);
                self.builder.note = response.note;
                self.items = response.invoiceItems;
                self.isPaymentLink = response.ispayment == 0 ? false : true;
                self.paymentLink = response.paymentlink;
                self.isPaymentCompleted = response.ispaymentcompleted == 0 ? false : true;
            });
        },
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
    async updateInvoice() {
      var finalBuilderData = {
        ...this.builder,
        invoiceItems: this.items,
        subtotal: this.tsubtotal,
        totalTax: this.taxCalculation,
        total: this.ttotal,
        ispayment: this.isPaymentLink,
        paymentlink: this.paymentLink,
        ispaymentcompleted: this.isPaymentCompleted
      };
      try {
        let self = this;
        var invoiceBody = {
          invoiceid: this.$route.params.id,
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
          ispaymentcompleted: finalBuilderData.ispaymentcompleted
        };
        await this.$axios
          .$post("/updateinvoice", invoiceBody)
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

    async deleteItem(id) {
      await this.$axios.$get("/deleteitem/" + id).then((response) => {
        self.toast({
          header: "Success",
          body: response.message,
          variant: "success",
          append: true,
        });
      });
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
    removeInvoiceItem(index, id) {
      this.items.splice(index, 1);
      this.deleteItem(id);
    },
    async importImage(file) {
      var reader = new FileReader(),
        name = file.name,
        self = this;
      reader.onload = (e) => {
        const data = e.target.result;
        this.logoUpload(self.imageUrl);
        self.imageUrl = data;
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
      await this.$axios.$get("/currencylist/"+curpost).then((response) => {
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
  font-size: 24px;
  font-weight: 700;
}

.creat_invo_btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.creat_invo_btn button:focus {
  box-shadow: none;
}

.creat_invo_btn button {
  padding: 13px 15px;
  border-radius: 12px;
  /* tab-size: 14px; */
  font-size: 13px;
  margin-right: 10px;
  font-weight: 700;
}

.creat_invo_btn button:nth-child(1) {
  margin-right: 15px;
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
  padding: 15px 0;
}
.from_area {
  max-width: 800px;
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
  margin-bottom: 50px;
}

.form_row_1 .col_left,
.form_row_1 .col_right {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 40%;
  padding: 20px;
  border: 2px dashed #8d8d8d;
  background: #fbfbfb;
}

.form_row_1 .col_left:hover,
.form_row_1 .col_right:hover {
  border: 2px solid #0075ff;
  transition: 0.5s;
}

.form_row_1 .col_left #insert-img-i {
  font-size: 50px;
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

.form_row_2 .left_col_outer,
.form_row_2 .left_col_outer {
  cursor: pointer;
  width: 48%;
  padding: 10px;
  border: 2px dashed #8d8d8d;
  background: #fbfbfb;
}

.invoice_fro{
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

.invoice_to{
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
.form_row_2 .left_col_outer:hover {
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
}

.form_row_2 .col_left #invoice-from-i {
  font-size: 50px;
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
  font-size: 50px;
  padding-right: 10px;
}

.form_row_3 .col_left,
.form_row_3 .col_right {
  width: 45%;
}

.invo_detail-1,
.invo_detail-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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
  border: 2px solid #0075ff;
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
  background: #f0f0f0;
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
    padding: 20px 20px;
  }
}

@media all and (max-width: 768px) {
  .creat_invo_title {
    text-align: center;
  }

  :deep(.can_sav_section .creat_invo_btn) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .creat_invo_btn button {
    padding: 10px;
  }

  .creat_invo_btn button:nth-child(n) {
    width: 45%;
    margin-top: 10px;
  }

  .creat_invo_btn button:nth-child(2n) {
    margin-right: 0;
  }

  .creat_invo_title {
    text-align: center;
  }
  .can_sav_section .creat_invo_btn {
    justify-content: center;
    padding-top: 20px;
  }

  .form_row_3 {
    flex-wrap: wrap;
  }

  /* .form_row_3 .col_left, .form_row_3 .col_right{
    width: 100%;
  } */

  .invo_detail-1,
  .invo_detail-2 {
    display: inline-block;
    width: 100%;
  }

  .invo_detail-1 .colon,
  .invo_detail-2 .colon {
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

  .creat_invo_btn button:nth-child(1),
  .creat_invo_btn button:nth-child(2) {
    width: 100%;
    margin-top: 10px;
  }

  .form_row_1 .col_left,
  .form_row_1 .col_right,
  .form_row_2 .left_col_outer,
  .form_row_2 .left_col_outer,
  .form_row_3 .col_left,
  .form_row_3 .col_right {
    width: 100%;
  }

  .form_row_1 .col_left,
  .form_row_1 .col_right,
  .form_row_2 .left_col_outer,
  .form_row_2 .left_col_outer {
    margin: 20px 0 0;
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