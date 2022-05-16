<template>
  <div>
    <v-row class='justify-center'>
      <v-col
        d-flex
        cols='6'
      >
        <v-card class='px-8 pt-12 pb-12 patyson-card'>
          <h2 class='text-center mb-5'>Patyson Beach Club</h2>
          <h4 class='text-center mb-2'>Введіть номер картки</h4>
          <v-otp-input
            length='10'
            outlined
          ></v-otp-input>
        </v-card>
      </v-col>
    </v-row>
    <v-row class='justify-center'>
      <v-col cols='6'>

        <v-card
          class='py-6 patyson-card-pay'
        >
          <h3 class='price'>Ціна за один день: 200грн.</h3>
          <v-container fluid>
            <v-row align='center'>
              <v-col cols='6'>
                <h3>
                  Кількість днів
                </h3>
              </v-col>

              <v-col cols='6'>

                <v-select
                  v-model='select'
                  :items='number'
                  item-text='state'
                  item-value='abbr'
                  label='Select'
                  persistent-hint
                  return-object
                  single-line
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <h3 class='text-start pa-3'>Загальна вартість: <v-textarea
            auto-grow
            outlined
          ></v-textarea></h3>
          <v-row class='d-flex'>
            <v-col
              cols='4' class='text-end align-self-center'>
              Оплатити:
            </v-col>
            <v-col cols='8' class='py-5 text-center' v-html='html' />
          </v-row>

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
      select: { state: 'Florida' },
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
.patyson-card {
  background: linear-gradient(240deg, #05ddf1, #f67501 94%)
}

.patyson-card-pay {
  background: linear-gradient(40deg, #05ddf1, #f67501 94%)
}
</style>
