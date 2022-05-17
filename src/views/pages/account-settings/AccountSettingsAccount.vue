<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-card-text class="d-flex">
      <v-avatar
        rounded
        size="120"
        class="me-6"
      >
        <v-img :src="accountData.photoURL"></v-img>
      </v-avatar>

      <!-- upload photo -->
      <div>
        <v-btn
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <v-icon class="d-sm-none">
            {{ icons.mdiCloudUploadOutline }}
          </v-icon>
          <span class="d-none d-sm-block">Завантажити нове фото</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="true"
        />

        <v-btn
          color="error"
          outlined
          class="mt-5"
        >
          Скинути
        </v-btn>
        <p class="text-sm mt-5">
          Розширення фото або картинки JPG, GIF чи PNG. Максимальний розмір 800K
        </p>
      </div>
    </v-card-text>

    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountData.lastName"
              label="Фамілія"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountData.firstName"
              label="Ім'я"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountData.email"
              label="E-mail"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountData.phoneNumber"
              dense
              label="Номер телефона"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-alert
              color="warning"
              text
              class="mb-0"
            >
              <div class="d-flex align-start">
                <v-icon color="warning">
                  {{ icons.mdiAlertOutline }}
                </v-icon>

                <div class="ms-3">
                  <p class="text-base font-weight-medium mb-1">
                    Ваш e-mail не підтверджено. Будь ласка, перевірте свою пошту.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="text-decoration-none warning--text"
                  >
                    <span class="text-sm">Повторно надіслати підтвердження</span>
                  </a>
                </div>
              </div>
            </v-alert>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-4"
              :loading="saveLoading"
              @click="updateProfile()"
            >
              Зберегти зміни
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-4"
              type="reset"
              @click.prevent=""
            >
              Скасувати
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import { auth } from '@/utils/firebase'

export default {
  props: {
    accountData: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {
      saveLoading: false,
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
      },
    }
  },
  methods: {
    updateProfile() {
      this.saveLoading = true
      const user = auth.currentUser
      const {
        firstName,
        lastName,
        email,
        cardNumber,
      } = this.accountData
      user.updateProfile({
        displayName: JSON.stringify({
          firstName,
          lastName,
          email,
          cardNumber,
        }),
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      })
        .then(userResult => {
          console.log(userResult)
          this.saveLoading = false
        })
    },
  },
}
</script>
