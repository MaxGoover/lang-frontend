<template>
  <div>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>{{ $t('pageSignUp.registration') }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  name="email"
                  prepend-icon="mdi-account"
                  required
                  type="email"
                  :label="$t('pageSignUp.eMail')"
                ></v-text-field>

                <v-text-field
                  id="password"
                  name="password"
                  prepend-icon="mdi-lock"
                  required
                  type="password"
                  :label="$t('pageSignUp.password')"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">{{ $t('pageSignUp.signUp') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: null,
      password: null
    }
  }
}
</script>

<style scoped>

</style>
