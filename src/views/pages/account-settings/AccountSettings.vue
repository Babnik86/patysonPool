<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <account-settings-account :account-data="account"></account-settings-account>
  </v-card>
</template>

<script>
import { auth } from '@/utils/firebase'
import AccountSettingsAccount from './AccountSettingsAccount.vue'

export default {
  components: {
    AccountSettingsAccount,
  },
  data() {
    return {
      account: {
        avatarImg: require('@/assets/images/avatars/1.png'),
      },
    }
  },
  mounted() {
    const { phone } = auth.currentUser
    this.account.phone = phone
  },
}
</script>
