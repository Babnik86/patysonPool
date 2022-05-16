<template>
  <div>
    <v-row class="justify-center" >
      <v-col
        d-flex
        cols="6"
      >
        <v-card class="px-8 pt-12 pb-12 bg-gradient-primary">
          <h2 class='text-center mb-5'>Patyson Beach Club</h2>
          <h4 class="text-center mb-2">Введіть номер картки</h4>
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
          class="py-6"
        >
          <div class="py-5 text-center" v-html="html" />
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
      language: 'uk',
      result_url: 'http://localhost:8080/success',
    })
      .replace('//static.liqpay.ua/buttons/p1uk.radius.png', 'https://www.liqpay.ua/logo_liqpay_main.svg?v=1651580791759')
  },
}
</script>
<style>

</style>
