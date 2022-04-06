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
        <!-- <v-icon size="25" color="grey lighten-2">mdi-camera</v-icon> -->
        <div
          class="my-2 mr-2 text-h6 d-inline-flex align-center"
          style="color: white"
        >
          {{ nameOfDevice }}
        </div>
      </v-sheet>

      <v-divider light></v-divider>
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
  nameOfDevice: '-',
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
    watch: {
      // отслеживаю переменную drawer для открытия/закрытия боковой панели
      group() {
        this.drawer = false
      },
    },
  }),
  async created() {
    try {
      let response = await fetch('http://127.0.0.1:8000/SystemInfs/')
      if (response.ok) {
        let dataJson = await response.json()
        let newDataJson = { ...dataJson[0] }
        this.nameOfDevice = newDataJson.name_of_device
      }
    } catch (err) {
      this.nameOfDevice = '-'
    }
  },
}
</script>
