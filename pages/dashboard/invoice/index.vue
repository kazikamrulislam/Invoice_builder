<template>
  <div class="all_invoice">

    <div class="invoice-table">
      <b-row class="over_top">
        <b-col class="over_title_col" md="6" lg="6" xl="6">
          <div class="over_title">Invoices</div> 
        </b-col>

        <b-col class="add_btn" md="6" lg="6" xl="6">
          <BaseButton @onClick="$router.push('/dashboard/invoice/invoice-form-1')">+ Add Invoice</BaseButton>
        </b-col>
      </b-row>
      <b-row class="biling_status_row">
        <div class="biling_status">
          <b-row class="biling_status_content">
            <b-col md="6" lg="6" xl="6">
              <h3>Today</h3>
              <h2>$5029.5</h2>
            </b-col>
            <b-col md="6" lg="6" xl="6">
              <div class="icon">
                <svg width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 34C2 34 7.16733 -4.48536 20.1029 13.3418C33.0384 31.1689 38.2057 30.3501 43.1429 16.5823C49.2458 -0.436459 71.7437 14.2172 74 2" stroke="url(#paint0_linear_258_8068)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <defs>
                  <linearGradient id="paint0_linear_258_8068" x1="-0.880013" y1="38.0506" x2="57.6212" y2="-14.2278" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="biling_status">
          <b-row class="biling_status_content">
            <b-col md="6" lg="6" xl="6">
              <h3>This week</h3>
              <h2>$35500.5k</h2>
            </b-col>
            <b-col md="6" lg="6" xl="6">
              <div class="icon">
                <svg width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 34C2 34 7.16733 -4.48536 20.1029 13.3418C33.0384 31.1689 38.2057 30.3501 43.1429 16.5823C49.2458 -0.436459 71.7437 14.2172 74 2" stroke="url(#paint0_linear_258_8068)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <defs>
                  <linearGradient id="paint0_linear_258_8068" x1="-0.880013" y1="38.0506" x2="57.6212" y2="-14.2278" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="biling_status">
          <b-row class="biling_status_content">
            <b-col md="6" lg="6" xl="6">
              <h3>This Month</h3>
              <h2>$90155.5k</h2>
            </b-col>
            <b-col md="6" lg="6" xl="6">
              <div class="icon">
                <svg width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 34C2 34 7.16733 -4.48536 20.1029 13.3418C33.0384 31.1689 38.2057 30.3501 43.1429 16.5823C49.2458 -0.436459 71.7437 14.2172 74 2" stroke="url(#paint0_linear_258_8068)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <defs>
                  <linearGradient id="paint0_linear_258_8068" x1="-0.880013" y1="38.0506" x2="57.6212" y2="-14.2278" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="biling_status">
          <b-row class="biling_status_content">
            <b-col md="6" lg="6" xl="6">
              <h3>Total</h3>
              <h2>$200155.5k</h2>
            </b-col>
            <b-col md="6" lg="6" xl="6">
              <div class="icon">
                <svg width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 34C2 34 7.16733 -4.48536 20.1029 13.3418C33.0384 31.1689 38.2057 30.3501 43.1429 16.5823C49.2458 -0.436459 71.7437 14.2172 74 2" stroke="url(#paint0_linear_258_8068)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <defs>
                  <linearGradient id="paint0_linear_258_8068" x1="-0.880013" y1="38.0506" x2="57.6212" y2="-14.2278" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-row>
      <!-- <b-table
        :items="invoiceItems"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        sticky-header="500px"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
        :busy="tableIsBusy"
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template #cell(logo)="data">
          <b-avatar  :src="apiBASE_URL+data.item.logo"></b-avatar>
        </template>
        <template #cell(ispaymentcompleted)="data">
          <b-form-checkbox @input="updatePaymentStatus(data.item.id, data.item.ispaymentcompleted)" v-model="data.item.ispaymentcompleted"  class="mb-2 mr-sm-2 mb-sm-0">
            <b-badge :variant="data.item.ispaymentcompleted ? 'success' : 'danger'">{{data.item.ispaymentcompleted? 'Completed' : 'Pending'}}</b-badge>
          </b-form-checkbox>
        </template>
        <template #cell(action)="data">
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <span class="material-icons">more_vert</span>
            </template>
            <b-dropdown-item @click="viewInvoice(data.item.id)" href="javascript:void(0)">View</b-dropdown-item>
            <b-dropdown-item @click="editInvoice(data.item.id)" href="javascript:void(0)">Edit</b-dropdown-item>
            <b-dropdown-item @click="deleteInvoice(data.item.id)" href="javascript:void(0)">Delete</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table> -->
    </div>
    <!-- <div v-if="rows">
      <b-pagination
        pills
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="right"
      ></b-pagination>
    </div>
    <div v-if="!rows" class="no-data-invoice">
      No Data Found
    </div> -->
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  layout: "dashboard",
  // auth: false,
  data() {
    return {
      // apiBASE_URL: null,
      // perPage: 10,
      // currentPage: 1,
      // tableIsBusy: false,
      // value: [new Date(2022, 1, 1), new Date(2023, 12, 31)],
      // sortBy: "age",
      // sortDesc: false,
      // fields: [],
      // invoiceItems: []
    };
  },
  computed: {
    rows() {
      // return this.invoiceItems.length;
    },
  },
  mounted(){
    // this.apiBASE_URL = process.env.baseUrl;
    // this.getInvoices();
  },
  methods: {
    // viewInvoice(id){
    //   // this.$router.push("/dashboard/invoice/view/"+id);
    // },
    // editInvoice(id){
    //   // this.$router.push("/dashboard/invoice/edit/"+id);
    // },
    // async getInvoices(){
    //   let self = this;
    //   var headers = [];
    //   await this.$axios.$get("/getinvoices").then((response) => {
    //     if (response.length != 0) {
    //       var keys = Object.keys(response[0])
    //     for (const key of keys) {
    //       if (key != 'id') {
    //         headers.push(
    //         {
    //         key: key,
    //         sortable: true
    //         },
    //       );
    //       }
    //     }
    //     self.fields = [
    //       ...headers,
    //       {
    //         key: "action",
    //       }
    //     ];
    //     self.invoiceItems = response;
    //     }
    //   });
    // },
    // async deleteInvoice(id) {
    //   let self = this;

    //   var dataBody = {
    //             invoice_id: id
    //         }
    //   await this.$axios.$post('/deleteinvoice', dataBody).then((response)=> {
    //     self.toast({
    //                 header: 'Success',
    //                 body: response.message,
    //                 variant: 'success',
    //                 append: true
    //             });
    //     self.getInvoices();
    //   });
    // },
    // async updatePaymentStatus(id, ispayment){
    //   let self = this;

    //   var dataBody = {
    //             invoice_id: id,
    //             ispaymentcompleted: ispayment
    //         }

    //   await this.$axios.$post('/paymentstatus', dataBody).then((response)=> {
    //     self.toast({
    //                 header: 'Success',
    //                 body: response.message,
    //                 variant: 'success',
    //                 append: true
    //             });
    //     self.getInvoices();
    //   });
    // }
  }
};
</script>

<style scoped>
.all_invoice{
  height: 100%;
  padding: 20px;
}
.over_top {
  padding: 0;
  align-items: end;
}
.over_title_col {
  width: 50%;
}
.over_title{
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: #93B0C8;
}
.add_btn {
  text-align: right;
}

.biling_status_row{
  margin: 30px 0;
}

.biling_status{
  padding: 15px;
  border-radius: 12px;
  /* background:linear-gradient(160deg, #868CFF 30%, #4318FF 90%); */
  background: radial-gradient(circle at center, #4318FF -35%, #868CFF 40%);
  flex-wrap: wrap;
  width: 23.68%;
  margin: 10px 10px;
}
.biling_status:nth-child(4n+0){
  margin-right: 0;
}
.biling_status:nth-child(1),.biling_status:nth-child(5n+0){
  margin-left: 0;
}
.biling_status_content{
  align-items: center;
  justify-content: space-between;
}
.biling_status_content .icon{
  text-align: right;
}
.biling_status_content h3{
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: #E9EDF7;
}
.biling_status_content h2{
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: #FFFFFF;
}

/* .over_title{
  font-size: 20px;
  font-weight: 500;
  color: #93B0C8;
} */

/* .count_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
} */

/* .invoice-title{
  font-size: 28px;
  font-weight: 700;
} */

/* .count_col {
  width: 23%;
  background: #f8f8f8;
  padding: 20px 20px 40px;
  border-radius: 10px;
} */

/* .count_col:hover {
  background: #0075ff;
  color: #ffffff;
} */

/* .budget_text {
  font-size: 16px;
  color: #757d8a;
  padding-bottom: 10px;
} */

/* .budget_amount {
  font-size: 22px;
  color: #404d61;
  font-weight: 700;
} */

/* .count_col:hover .budget_amount,
.count_col:hover .budget_text {
  color: #ffffff;
} */

/* button style start */

/* .add_invo_btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0;
} */

/* .invoice_btn {
  background: #0075ff;
  border: 1px solid #0075ff;
} */
/* button style end */

/* filter section start */

/* .search_filter_row {
  align-items: center;
  padding: 20px;
} */

/* .search_filter{
    padding: 20px;
} */

/* .search_input {
  position: relative;
  border-radius: 10px;
  margin: 0;
} */

/* .invo_search {
  padding-left: 35px;
} */

/* .invo_search::placeholder {
  color: #404d61;
} */

/* .search_input .form-control {
  height: 45px;
} */

/* .search_input .form-control:focus {
  outline: none;
  box-shadow: none;
} */

/* .search_filter_row .search_input .fil_search {
  position: absolute;
  left: 2%;
  top: 25%;
  cursor: pointer;
  color: #757d8a;
} */

/* .search_filter_row .search_input .fil_clear {
  position: absolute;
  right: 2%;
  top: 25%;
  cursor: pointer;
  color: #757d8a;
} */

/* .fil_shor_dat {
  display: flex;
  align-items: center;
  justify-content: center;
} */

/* .filter_ic .material-icons {
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #757d8a;
  border-radius: 10px;
  font-size: 25px;
  color: #404d61;
} */

/* .fil_short {
  height: 45px;
  max-width: 35%;
  margin: 0 0 0 10px;
} */

/* .fil_date {
  margin: 0 0 0 10px;
} */

/* :deep(.fil_date .mx-input) {
  height: 45px;
} */

/* Invoice Table CSS */

/* :deep(.table th, .table td){
  min-width: 120px;
} */

/* width */
/* .invoice-table ::-webkit-scrollbar {
  height: 5px;
} */

/* Track */
/* .invoice-table ::-webkit-scrollbar-track {
  background: #f1f1f1;
} */

/* Handle */
/* .invoice-table ::-webkit-scrollbar-thumb {
  background: #c6e1ff;
} */

/* Handle on hover */
/* .invoice-table ::-webkit-scrollbar-thumb:hover {
  background: #0075ff;
} */

/* .no-data-invoice{
  padding: 24px;
  text-align: center;
} */

@media all and (max-width: 1024px) {
  .count_col {
    margin-top: 20px;
    width: 49%;
  }
}

@media all and (max-width: 480px) {
  .count_col {
    width: 100%;
  }

  .add_invo_btn {
    display: inline-block;
    width: 100%;
    padding: 0;
  }

  .add_invo_btn button {
    padding: 10px 10px;
    width: 100%;
  }

  .search_filter_row {
    padding: 10px 0;
  }

  .fil_shor_dat {
    display: inline-block;
  }

  .fil_shor_dat .filter_ic .material-icons {
    border-radius: 3px;
    border: 1px solid #ced4da;
  }

  .fil_shor_dat .fil_short,
  .fil_shor_dat .filter_ic .material-icons,
  .fil_shor_dat .fil_date {
    max-width: 100%;
    width: 100%;
    text-align: center;
    margin: 10px 0 0 0;
  }

  :deep(.pagination) {
    justify-content: center !important;
  }
}
</style>