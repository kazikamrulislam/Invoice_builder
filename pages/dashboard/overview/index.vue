<template>
  <div class="overview">
    <section>
      <b-row class="over_top">
        <b-col class="over_title_col" md="6" lg="6" xl="6">
          <div class="over_title">Overview</div>
          <!-- <div class="over_sub_title">
            Welcome Back, {{ $auth.user.firstname }}
          </div> -->
        </b-col>

        <b-col class="add_btn" md="6" lg="6" xl="6">
          <nuxt-link to="/dashboard/invoice/invoice-form">
            <BaseButton @onClick="$router.push('/dashboard/invoice/invoice-form-1')">+ Create Invoice</BaseButton>
          </nuxt-link>
        </b-col>
      </b-row>
    </section>
    <section v-if="dashboardStatistics" class="count_section">
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Total Invoice</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalinvoice }}
          </div>
        </div>
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.6 2H15.6M7 5C7 3.34 8.34 2 10 2H12.62M22 8V14.19C22 15.74 20.74 17 19.19 17M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4ZM22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title"> Paid Invoice</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalinvoice }}
          </div>
        </div>
        <div class="icon">
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.5L21.3636 5L25 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3333 11.3333V15.5C21.3333 19.6667 19.6666 21.3333 15.5 21.3333H10.5C6.33329 21.3333 4.66663 19.6667 4.66663 15.5V10.5C4.66663 6.33332 6.33329 4.66666 10.5 4.66666H14.6666" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.83337 13.8333H13.8334M8.83337 17.1667H12.1667M21.3334 11.3333H18C15.5 11.3333 14.6667 10.5 14.6667 7.99999V4.66666L21.3334 11.3333Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Unpaid Invoice</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalclients }}
          </div>
        </div>
        <div class="icon">
          <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.25 2.00961L20.9722 6.45192M26.2222 4.23077C26.2222 4.83653 26.0589 5.40999 25.7711 5.89461C25.4969 6.37316 25.1074 6.76931 24.641 7.04406C24.1746 7.31881 23.6473 7.46269 23.1111 7.46153C22.5749 7.46269 22.0476 7.31881 21.5812 7.04406C21.1148 6.76931 20.7253 6.37316 20.4511 5.89461C20.155 5.39418 19.9989 4.8181 20 4.23077C20 2.44577 21.3922 1 23.1111 1C24.83 1 26.2222 2.44577 26.2222 4.23077Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3333 11.3333V15.5C21.3333 19.6667 19.6666 21.3333 15.5 21.3333H10.5C6.33329 21.3333 4.66663 19.6667 4.66663 15.5V10.5C4.66663 6.33332 6.33329 4.66666 10.5 4.66666H14.6666" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.83337 13.8333H13.8334M8.83337 17.1667H12.1667M21.3334 11.3333H18C15.5 11.3333 14.6667 10.5 14.6667 7.99999V4.66666L21.3334 11.3333Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Profiles</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalprofiles }}
          </div>
        </div>
        <div class="icon">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_258_8060)">
            <path d="M12.3709 11.37C12.2709 11.36 12.1509 11.36 12.0409 11.37C10.8931 11.331 9.80555 10.8468 9.00854 10.0199C8.21153 9.19307 7.76765 8.08844 7.77091 6.93999C7.77091 4.48999 9.75091 2.49999 12.2109 2.49999C12.7933 2.48948 13.3721 2.5938 13.9142 2.80697C14.4563 3.02014 14.9511 3.338 15.3704 3.7424C15.7896 4.1468 16.1251 4.62982 16.3577 5.16388C16.5903 5.69794 16.7154 6.27258 16.7259 6.85499C16.7364 7.4374 16.6321 8.01618 16.4189 8.55828C16.2058 9.10038 15.8879 9.59518 15.4835 10.0144C15.0791 10.4337 14.5961 10.7692 14.062 11.0018C13.528 11.2344 12.9533 11.3595 12.3709 11.37V11.37ZM7.37091 15.06C4.95091 16.68 4.95091 19.32 7.37091 20.93C10.1209 22.77 14.6309 22.77 17.3809 20.93C19.8009 19.31 19.8009 16.67 17.3809 15.06C14.6409 13.23 10.1309 13.23 7.37091 15.06V15.06Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_258_8060">
            <rect width="24" height="24" fill="white" transform="translate(0.210938 0.5)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Total Billing</div>
          <div class="overview_number_count">
            {{
              dashboardStatistics.totalbillingamount !== undefined ?
              Number(dashboardStatistics.totalbillingamount).toLocaleString(
                undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              ) : ''
            }}
          </div>
        </div>
        <div class="icon_liner">
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
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Paid Billing</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalclients }}
          </div>
        </div>
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51 10.94 9.51 10.02C9.51 9.18 10.16 8.49 10.96 8.49H12.84C13.76 8.49 14.51 9.27 14.51 10.24M12 7.5V16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 6.5L18.3636 8L22 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">Unpaid Billing</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalclients }}
          </div>
        </div>
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.44446 14.5385C8.44446 15.4338 9.11112 16.1538 9.9289 16.1538H11.6C12.3111 16.1538 12.8889 15.5261 12.8889 14.7415C12.8889 13.9015 12.5333 13.5969 12.0089 13.4031L9.33335 12.4338C8.8089 12.24 8.45335 11.9446 8.45335 11.0954C8.45335 10.32 9.03112 9.68307 9.74224 9.68307H11.4133C12.2311 9.68307 12.8978 10.4031 12.8978 11.2985M10.6667 8.76923V17.0769" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5556 12.9231C19.5556 18.0185 15.5734 22.1538 10.6667 22.1538C5.76005 22.1538 1.77783 18.0185 1.77783 12.9231C1.77783 7.82769 5.76005 3.69231 10.6667 3.69231" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5834 3.7789L15.3056 8.2212M20.5556 6.00005C20.5556 6.60582 20.3923 7.17928 20.1045 7.6639C19.8303 8.14245 19.4408 8.5386 18.9744 8.81335C18.508 9.0881 17.9807 9.23198 17.4445 9.23082C16.9083 9.23198 16.381 9.0881 15.9146 8.81335C15.4482 8.5386 15.0587 8.14245 14.7845 7.6639C14.4884 7.16347 14.3322 6.58738 14.3334 6.00005C14.3334 4.21505 15.7256 2.76929 17.4445 2.76929C19.1634 2.76929 20.5556 4.21505 20.5556 6.00005Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="count_col mb-3">
        <div class="total_count">
          <div class="ovaerview_box_title">New Clients</div>
          <div class="overview_number_count">
            {{ dashboardStatistics.totalclients }}
          </div>
        </div>
        <div class="icon">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6209 4.00001C18.5609 4.00001 20.1209 5.57001 20.1209 7.50001C20.1209 9.39001 18.6209 10.93 16.7509 11C16.6645 10.99 16.5773 10.99 16.4909 11M18.5509 20C19.2709 19.85 19.9509 19.56 20.5109 19.13C22.0709 17.96 22.0709 16.03 20.5109 14.86C19.9609 14.44 19.2909 14.16 18.5809 14M9.37091 10.87C9.27091 10.86 9.15091 10.86 9.04091 10.87C7.89311 10.831 6.80555 10.3468 6.00854 9.51996C5.21153 8.69309 4.76765 7.58846 4.77091 6.44001C4.77091 3.99001 6.75091 2.00001 9.21091 2.00001C10.3871 1.97879 11.5236 2.4257 12.3704 3.24242C13.2171 4.05914 13.7047 5.17877 13.7259 6.35501C13.7471 7.53124 13.3002 8.66773 12.4835 9.51446C11.6668 10.3612 10.5471 10.8488 9.37091 10.87ZM4.37091 14.56C1.95091 16.18 1.95091 18.82 4.37091 20.43C7.12091 22.27 11.6309 22.27 14.3809 20.43C16.8009 18.81 16.8009 16.17 14.3809 14.56C11.6409 12.73 7.13091 12.73 4.37091 14.56V14.56Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
    <div class="invoice-table">
      <b-row class="table_over_top p-3">
        <b-col class="over_title_col" md="6" lg="6" xl="6">
          <div class="over_title">Recent Invoices</div> 
          <div class="recent_invoice_count">{{ dashboardStatistics.totalinvoice }} results found</div> 
        </b-col>
        <!-- <b-col class="add_btn" md="6" lg="6" xl="6">
          <BaseButton @onClick="$router.push('/dashboard/invoice/invoice-form')">+ Add Invoice</BaseButton>
        </b-col> -->
      </b-row>
      <b-table
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
        <template #cell(clientName)="data">
          <div class="d-flex justify-content-around">
            <b-avatar   :src="apiBASE_URL+data.item.logo"></b-avatar>
            <div>
              <div>
                {{data.item.clientName}}
              </div>
              <div>
                {{data.item.clientWebsite}}
              </div>
            </div>
          </div>
        </template>
        <template #cell(status)="data">
          <b-badge :variant="data.item.status ? 'success' : 'danger'">{{data.item.status? 'Completed' : 'Pending'}}</b-badge>
          <!-- <b-form-checkbox @input="updatePaymentStatus(data.item.id, data.item.ispaymentcompleted)" v-model="data.item.ispaymentcompleted"  class="mb-2 mr-sm-2 mb-sm-0">
            <b-badge :variant="data.item.ispaymentcompleted ? 'success' : 'danger'">{{data.item.ispaymentcompleted? 'Completed' : 'Pending'}}</b-badge>
          </b-form-checkbox> -->
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

      </b-table>
    </div>
    <div v-if="rows">
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
    </div>
  </div>
  
</template>

<script>
import "vue2-datepicker/index.css";
export default {
  layout: "dashboard",
  data() {
    return {
      dashboardStatistics: {},
      apiBASE_URL: null,
      perPage: 10,
      currentPage: 1,
      tableIsBusy: false,
      value: [new Date(2022, 1, 1), new Date(2023, 12, 31)],
      sortBy: "age",
      sortDesc: false,
      fields: [],
      invoiceItems: []
    };
  },
  computed: {
    rows() {
      return this.invoiceItems.length;
    },
  },
  mounted() {
    this.apiBASE_URL = process.env.baseUrl;
    this.getInvoices();
    this.getDashStatistics();
  },
  methods: {
    clickbtn() {
      console.log("Button Click Dichos ken?");
    },
    getDashStatistics() {
      this.$axios.$get("/getdashstatistics").then((response) => {
        this.dashboardStatistics = response;
      });
    },
    viewInvoice(id){
      this.$router.push("/dashboard/invoice/view/"+id);
    },
    editInvoice(id){
      this.$router.push("/dashboard/invoice/edit/"+id);
    },
    async getInvoices(){
      let self = this;
      var headers = [];
      await this.$axios.$get("/getinvoices").then((response) => {
        if (response.length != 0) {
          var keys = Object.keys(response[0])
        for (const key of keys) {
          if (key != 'id' && key != 'logo' && key != 'clientWebsite') {
            headers.push(
            {
            key: key,
            sortable: true
            },
          );
          }
        }
        self.fields = [
          ...headers,
          {
            key: "action",
          }
        ];
        self.invoiceItems = response;
        }
      });
    },
    async deleteInvoice(id) {
      let self = this;

      var dataBody = {
                invoice_id: id
            }
      await this.$axios.$post('/deleteinvoice', dataBody).then((response)=> {
        self.toast({
                    header: 'Success',
                    body: response.message,
                    variant: 'success',
                    append: true
                });
        self.getInvoices();
      });
    },
    async updatePaymentStatus(id, ispayment){
      let self = this;

      var dataBody = {
                invoice_id: id,
                ispaymentcompleted: ispayment
            }

      await this.$axios.$post('/paymentstatus', dataBody).then((response)=> {
        self.toast({
                    header: 'Success',
                    body: response.message,
                    variant: 'success',
                    append: true
                });
        self.getInvoices();
      });
    }
  },
};
</script>

<style scoped>
.count_section {
  display: flex;
  padding: 15px 0;
  flex-wrap: wrap;
}

.count_col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23.69%;
  background:linear-gradient(160deg, #868CFF 30%, #4318FF 90%);;
  padding: 15px;
  border-radius: 12px;
  margin: 10px 10px;
}
.count_col:nth-child(4n+0){
  margin-right: 0;
}
.count_col:nth-child(1),.count_col:nth-child(5n+0){
  margin-left: 0;
}

.count_col .icon{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border-radius: 50%;
  background:linear-gradient(142deg, #ffffff 0%, #4318FF 93.7%);
  /* box-shadow: 0px 0px 10px 2px #4318ff; */
}

/* .count_col:hover {
  background: #0075ff;
  color: #E9EDF7;
} */

.ovaerview_box_title {
  font-size: 16px;
  color: #E9EDF7;
  padding-bottom: 10px;
}

.overview_number_count {
  font-size: 22px;
  color: #E9EDF7;
  font-weight: 700;
}

.count_col:hover .overview_number_count,
.count_col:hover .ovaerview_box_title {
  color: #ffffff;
}

.overview {
  height: 100%;
  /* background: #ffffff; */
  padding: 15px;
}

.row {
  margin: 0;
  padding: 0;
}

.table_over_top {
  align-items: end;
  background: #EFEDFF;
  border-radius: 8px;
}

.over_title {
  color: #93B0C8;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
}
.recent_invoice_count{
  font-size: 14px;
  font-weight: 500;
  color: #707EAE;
}
:deep(thead){
  background: transparent;
}
.over_sub_title {
  font-size: 18px;
  font-weight: 300;
}

.over_title_col {
    padding-left: 0 !important;
  }

.add_btn {
  text-align: right;
  padding-right: 0;
}

.invo_btn {
  padding: 18px 60px;
  border-radius: 12px;
  background: #0075ff;
  border: none;
  font-size: 14px;
  font-weight: 700;
}

.stat_overw {
  padding: 40px 40px;
  flex-wrap: wrap;
}

.stst_col {
  width: 25%;
  align-items: center;
  background: #ffffff;
  padding: 24px 20px;
  border: 1px solid #e6e7e9;
  border-radius: 12px;
}

.stst_col:nth-child(1) {
  margin-right: 40px;
}

.stst_col:nth-child(2) {
  margin-right: 40px;
}

.stst_col:nth-child(1) .stst_persent,
.stst_col:nth-child(1) .material-icons {
  color: #4a4de6;
}

.stst_col:nth-child(2) .stst_persent,
.stst_col:nth-child(2) .material-icons {
  color: #ff8f00;
}

.stst_col:nth-child(3) .stst_persent,
.stst_col:nth-child(3) .material-icons {
  color: #e83274;
}

.stst_persent,
.material-icons {
  margin-right: 15px;
}

.stst_persent {
  font-size: 16px;
  font-weight: 500;
}

.material-icons {
  font-size: 45px;
}

.stat_title span {
  font-weight: 600;
}

:deep(.fil_date .mx-input) {
  height: 45px;
}

/* Invoice Table CSS */

:deep(.table th, .table td){
  min-width: 120px;
}
:deep(.table td){
  min-width: 120px;
}

:deep(.btn.dropdown-toggle.btn-link.btn-lg.text-decoration-none.dropdown-toggle-no-caret span){
  font-size: 22px;
}

@media all and (max-width: 1024px) {
  .over_title_col {
    width: 50%;
    padding-left: 0 !important;
  }
  .add_btn {
    width: 50%;
    padding-right: 0 !important;
  }
  .count_col {
    margin-top: 20px;
    width: 49%;
  }

  .stst_col {
    max-width: 100%;
    width: 45%;
  }

  .stst_col:nth-child(1) {
    margin-right: 25px;
  }

  .stst_col:nth-child(2) {
    margin-right: 25px;
  }
  .stst_col:nth-child(3) {
    margin-top: 20px;
  }
}
@media all and (min-width: 481px) and (max-width: 768px) {
    .over_top{
        padding: 10px 10px 0;
    }
  .over_title_col {
    width: 50%;
    padding-left: 0 !important;
  }
  .add_btn {
    width: 50%;
    padding-right: 0 !important;
  }
  .base-btn {
    padding: 15px 30px;
  }
}

@media all and (max-width: 480px) {
  .count_col {
    width: 100%;
  }

  .over_top {
    padding: 20px 0 0;
  }

  .add_btn {
    text-align: center;
    margin-top: 10px;
    padding: 0;
  }

  .add_btn button {
    width: 100%;
    padding: 10px 20px;
  }

  .stat_overw {
    padding: 20px 0;
  }

  .stst_col {
    width: 100%;
  }

  .stst_col:nth-child(1) {
    margin: 0;
  }

  .stst_col:nth-child(2) {
    margin: 20px 0 0 0;
  }
  .stst_col:nth-child(3) {
    margin: 20px 0 0 0;
  }
}
</style>