<template>
  <div>
    <v-row class="justify-center">
      <v-col
        d-flex
        cols="6"
      >
        <v-card class="px-8 pt-12 pb-12 patyson-card rounded-xl">
          <p class="card-heading text-center mb-5">Patyson Beach Club</p>
          <p class="card-text text-center mb-2">Введіть номер картки</p>
          <v-otp-input
            length="10"
            outlined
          ></v-otp-input>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">

        <v-card
          class="py-6 patyson-card-pay rounded-xl"
        >

          <v-container fluid>
            <v-row align="center">
              <v-col cols="10">
                <p class="card-text">
                  Кількість днів:
                </p>
              </v-col>

              <v-col cols="2">
                <v-text-field
                  type="number"
                  background-color="white"
                  class="days-number mx-3 "
                ></v-text-field>
              </v-col>
            </v-row>

          </v-container>

          <div CLASS="d-flex">
            <p class="card-text text-start col-10">Ціна за один день</p>
            <label class="col-2 text-center white--text" for="">245</label>
          </div>
          <div class="d-flex">
            <p class="card-text text-start col-10">До сплати:</p>
            <label class="col-2 text-center white--text" for="">245</label>
          </div>

          <v-col
            class="d-flex position-relative">
              <p class="card-text-pay">Сплатити</p>
              <div class="py-5 text-center col-12" v-html="html" />
          </v-col>


        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LiqPay from '@/utils/liqpay'

export default {
  data() {
    return {
      liqpay: null,
      html: null,
    }
  },
  computed: {},
  mounted() {
    this.liqpay = new LiqPay('sandbox_i48236945296', 'sandbox_M9xLfSSIhrgNTLzalw7dOfUC3wwK5koQZYDkAVZI')
    this.html = this.liqpay.cnb_form({
      action: 'pay',
      amount: '1',
      currency: 'UAH',
      description: 'description text',
      order_id: 'order_id_2',
      version: '3',
      language: 'ru',
      result_url: 'http://localhost:8080/success',
    })
  },
}
</script>
<style>
.card-text-pay {
  position: absolute;
  font-size: 30px;
  padding-right: 10px;
  background-color: #6ca91c;
  border-radius: 5px;
  color: white;
  margin: 21px 216px 0px;
  pointer-events: none;
}

.days-number {
  border-radius: 10px;
}

.card-heading {
  color: white;
  font-size: 30px;
}


.card-text {
  color: #ffffff;
  font-size: 20px;
}

.patyson-card {

  background: linear-gradient(240deg, #471469, #032757 94%)
}

.patyson-card-pay {
  background: linear-gradient(40deg, #471469, #032757 94%)
}
</style>
