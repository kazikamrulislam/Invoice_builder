<template>
  <div>
    <section class="can_sav_section bg-white">
      <b-row class="top_row">
        <b-col sm="12" md="4" lg="4" xl="4">
          <div class="creat_invo_title">View Invoice</div>
          Payment Status : <b-badge :variant="isPaymentCompleted?'success':'danger'">{{isPaymentCompleted ? "Completed" : "Pending"}}</b-badge>
        </b-col>
        <b-col sm="12" md="8" lg="8" xl="8">
          <div class="creat_invo_btn">
            <b-button @click="deleteInvoice()" variant="danger" type="subbmit">
              Delete Invoice
            </b-button>
            <b-button @click="editInvoice()" variant="success" type="subbmit">
              Edit Invoice
            </b-button>
            <b-button @click="pdfDownlaod()" variant="info" type="subbmit">
              Download
            </b-button>
            <b-button @click="sendMailInvoice()" variant="dark" type="subbmit">
              Email
            </b-button>
          </div>
        </b-col>
      </b-row>
    </section>

    <div class="d-flex">
    <section class="from_area mt-3 bg-white">
      <div class="invoice_form">
        <!-- Insert Image Here  -->
        <div class="form_row_1">
          <div class="image-div">
            <img height="94" width="94" :src="imageUrl" alt="logo" />
          </div>
          <div class="col_right invoice_name">
            <div class="invoice_name_text">
              <div>{{ builder.invoiceType.text }}</div>
            </div>
          </div>
        </div>

        <div class="form_row_2">
          <div class="left_col_outer">
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
              </div>
            </div>
          </div>

          <div class="right_col_outer">
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
                    disabled
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
                    disabled
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
                    disabled
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
              {{ data.item.item }}
            </template>
            <template #cell(qty)="data">
              {{ data.item.qty }}
            </template>
            <template #cell(rate)="data">
              {{ data.item.rate }}
            </template>
            <template #cell(tax)="data">
              {{ data.item.tax }}
            </template>
            <template #cell(subtotal)="data">
              {{ data.item.subtotal }}
            </template>
            <template #cell(action)> </template>
          </b-table>
        </div>

        <div class="add_invo_item_row">
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
                <b-button dashed variant="outline-secondary">{{
                  builder.currency.currencyCode
                }}</b-button>
              </div>
              <div class="total-data">{{ ttotal }}</div>
            </div>
            <div v-if="isPaymentLink" class="payment-link text-center">
              <a target="_blank" :href="paymentLink">Payment Here</a>
            </div>
          </div>
        </div>

        <div class="lower_section">
          <b-form-input
            disabled
            v-model="builder.note"
            placeholder="Note:"
          >
          </b-form-input>
        </div>
      </div>
    </section>
    <section class="additional-area">
      <div class="additional-items p-2">
        <h4 class="border-bottom">Additional Items</h4>
          <div class="pt-2">
            <b-form-checkbox disabled v-model="isPaymentLink"  class="mb-2 mr-sm-2 mb-sm-0">Payment Link Box</b-form-checkbox>
            <div class="pt-2">
              <b-form-input disabled v-if="isPaymentLink" v-model="paymentLink" type="url" placeholder="https://"></b-form-input>
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
      generatePaymentLink: null,
      apiBASE_URL: null,
      demo: null,
      editData: [],
      uploadFile: null,
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
        logobase64: null,
        invoiceType: {},
        fromData: null,
        toData: null,
        invoiceNo: "#01",
        invoiceDate: null,
        dueDate: null,
        currency: {},
        note: null,
      },
      isPaymentLink: false,
      paymentLink: null,
      isPaymentCompleted: false
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
  mounted() {
    this.apiBASE_URL = process.env.baseUrl;
    this.getSingleInvoiceView();
  },
  methods: {
    // saveImage(){
    //   this.toDataURL(this.builder.logo,function(dataUrl) {
    //       console.log('RESULT:', dataUrl)
    //   });
    // },
    async deleteInvoice() {
      let self = this;

      var dataBody = {
        invoice_id: this.$route.params.id,
      };

      await this.$axios.$post("/deleteinvoice", dataBody).then((response) => {
        self.toast({
          header: "Success",
          body: response.message,
          variant: "success",
          append: true,
        });
        self.$router.back();
      });
    },
    editInvoice() {
      this.$router.push("/dashboard/invoice/edit/" + this.$route.params.id);
    },
    async getSingleInvoiceView(){
            let self = this;
            var dataBody = {
                invoice_id: this.$route.params.id
            }
            await this.$axios.$post('/getsingleinvoice',dataBody).then((response)=>{
                self.imageUrl = this.apiBASE_URL+response.logo;
                self.builder.logo = this.apiBASE_URL+response.logo;
                self.builder.logobase64 = response.logobase64
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
    
//   toDataURL(src, callback, outputFormat) {
//   var img = new Image();
//   img.crossOrigin = 'anonymous';
//   img.onload = function() {
//     var canvas = document.createElement('CANVAS');
//     var ctx = canvas.getContext('2d');
//     var dataURL;
//     canvas.height = this.naturalHeight;
//     canvas.width = this.naturalWidth;
//     ctx.drawImage(this, 0, 0);
//     dataURL = canvas.toDataURL(outputFormat);
//     callback(dataURL);
//   };
//   img.src = src;
//   if (img.complete || img.complete === undefined) {
//     img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//     img.src = src;
//   }
// },

    async pdfDownlaod() {
      let self = this;
      
      document.html2Canvas = html2Canvas;
      var doc = new jsPDF("p", "px", [1056, 816]);
      var date = new Date(Date.now());
      var dateNow = date.toDateString();
      let pdfName = dateNow;
      var plogo = this.builder.logobase64;
      // let img = new Image();
      // img.crossOrigin = 'anonymous';
      // img.src = this.builder.logo;
      
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
      var pPaymentLink = this.paymentLink;
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
                            <div class="invoice_form_web_pdf">${pFrom.website}</div>
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
                            <td><a target="_blank" href="${pPaymentLink}">Payment Here</a></td>
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
            // doc.autoPrint();
            // doc.output('dataurlnewwindow');
          },
          x: 30,
          y: 30,
        }
      );
    },

    async sendMailInvoice() {
      try {
        var mailbody = {
          mlogo: this.builder.logo,
          mInvoiceType: this.builder.invoiceType.text,
          mFrom: this.builder.fromData,
          mTo: this.builder.toData,
          mInvoiceNo: this.builder.invoiceNo,
          mInvoiceDate: this.builder.invoiceDate.toLocaleDateString(),
          mDueDate: this.builder.dueDate.toLocaleDateString(),
          mCurrency: this.builder.currency.currencyCode,
          mNote: this.builder.note,
          mSubtotal: this.tsubtotal,
          mTaxTotal: this.taxCalculation,
          mTotal: this.ttotal,
          mItems: this.items,
        };
        let self = this;
        await this.$axios.$post("/sendivoice", mailbody).then((response) => {
          self.toast({
            header: "Success",
            body: response.message,
            variant: "success",
            append: true,
          });
        });
      } catch (error) {
        console.log(error);
      }
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
  /* text-align: right; */
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
.form_row_2 .right_col_outer {
  cursor: pointer;
  width: 40%;
  padding: 10px;
  border: 2px dashed #8d8d8d;
  background: #fbfbfb;
}

.form_row_2 .left_col_outer:hover,
.form_row_2 .right_col_outer:hover {
  border: 2px solid #0075ff;
  transition: 0.5s;
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
  .from_area{
    max-width: 100%;
  }
  .can_sav_section .creat_invo_btn {
    display: flex;
  }
  .creat_invo_btn button {
    padding: 12px 20px;
    font-size: 12px;
  }

  .form_row_2 .left_col_outer, .form_row_2 .right_col_outer{
    width: 48%;
  }
}

@media all and (max-width: 767px){
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

  .creat_invo_btn button:nth-child(n){
    width: 45%;
    margin-top: 10px;
  }

  .creat_invo_btn button:nth-child(2n){
    margin-right: 0;
  }

  .creat_invo_title{
    text-align: center;
  }
  .can_sav_section .creat_invo_btn{
    justify-content: center;
    padding-top: 20px;
  }

  .form_row_1, .form_row_2, .form_row_3{
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  /* .form_row_2 .left_col_outer, .form_row_2 .left_col_outer{
    width: 100%;
  } */
  .form_row_2 .left_col_outer, .form_row_2 .right_col_outer{
    width: 100%;
    margin: 0 0 10px;
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
    flex-wrap: wrap;
    justify-content: center;
  }

  .creat_invo_btn button {
    padding: 10px;
  }

  .creat_invo_btn button:nth-child(n){
    width: 45%;
    margin-top: 10px;
  }

  .creat_invo_btn button:nth-child(2n){
    margin-right: 0;
  }
  .form_row_1{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0;
  }

  .form_row_2,
  .form_row_3 {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
  }

  .form_row_1 .col_left,
  .form_row_1 .col_right,
  .form_row_2 .left_col_outer,
  .form_row_2 .left_col_outer{
    width: 48%;
  }
  
  .form_row_2 .left_col_outer,
  .form_row_2 .right_col_outer,
  .form_row_3 .col_left,
  .form_row_3 .col_right {
    margin: 20px 0 0;
    width: 100%;
  }

  .form_row_3 .col_left{
    margin-top: 0;
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

.invoice_pdf_pdfcontainer .detail_left,
.invoice_pdf_pdfcontainer .detail_right{
  width: 50%;
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
  align-items: flex-start;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 5px;
  font-size: 11px;
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