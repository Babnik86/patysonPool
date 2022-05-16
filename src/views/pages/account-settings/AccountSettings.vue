<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <account-settings-account :account-data="currentUser"></account-settings-account>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import AccountSettingsAccount from './AccountSettingsAccount.vue'

export default {
  components: {
    AccountSettingsAccount,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['currentUser']),
  },
}
</script>
