<template>
  <v-app>
    <v-app-bar elevation="0" app color="grey lighten-3">
      <v-btn icon large fab @click.stop="drawer = !drawer"
        ><v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon large fab>
        <v-icon large color="#2C2A2A">mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="grey darken-4" v-model="drawer" app>
      <v-sheet color="grey darken-4" class="pa-4">
        <v-icon size="25" color="grey lighten-2">mdi-camera</v-icon>
        <div
          class="ps-4 text-h6 d-inline-flex align-center"
          style="color: white"
        >
          Name of a device
        </div>
      </v-sheet>

      <v-divider></v-divider>
      <!-- "#4CAF50" -->
      <v-list nav>
        <v-list-item-group dark active-class="green darken-3">
          <router-link to="/" style="color: white; text-decoration: none">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="grey lighten-2">mdi-key</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="color: white">
                Status
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link
            to="/settings"
            style="color: white; text-decoration: none"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="grey lighten-2">mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Settings </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background-color: #eeeeee">
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: null,
    status: [
      { name: 'DHCP Status', way: '/dhcp_status' },
      { name: 'Main Stream', way: '/main_str' },
    ],
    links: [
      ['mdi-key', 'Статус'],
      ['mdi-cog', 'Настройки'],
    ],
    methods: {
      moveOn() {
        // this.$router.push(way)
        console.log('way')
      },
    },
    watch: {
      group() {
        this.drawer = false
      },
    },
  }),
}
</script>
