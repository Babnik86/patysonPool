<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <account-settings-account :account-data="accountSettingData.account"></account-settings-account>

  </v-card>
</template>

<script>
import AccountSettingsAccount from './AccountSettingsAccount.vue'

export default {
  components: {
    AccountSettingsAccount,
  },
  data() {
    return {
      accountSettingData: {
        account: {
          avatarImg: require('@/assets/images/avatars/1.png'),
          username: 'Smith',
          name: 'John',
          email: 'johnSmith@example.com',
          role: '098-000-00-00',
          status: 'Active',
          company: 'Google.inc',
        },
      },
    }
  },
}
</script>
