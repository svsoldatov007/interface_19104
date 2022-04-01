<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="7">
          <div style="background-color: #4caf50">
            <v-card-title style="height: 70px"></v-card-title>
          </div>
          <v-list>
            <template v-for="(item, ind) in parametrs">
              <h2 :key="ind" class="px-4 mt-4">{{ item.title }}</h2>
              <v-list-item selectable :key="ind">
                <v-list-item-content>
                  <v-list-item-title
                    class="pl-5 ma-3"
                    v-for="(setting, ind2) in item.arr"
                    :key="ind2"
                  >
                    <b>{{ setting.key }}</b> {{ setting.value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'StatusVue',
  data: () => ({
    parametrs: [
      {
        title: 'Settings',
        arr: [
          {
            key: 'IP:',
            value: '172.18.191.51',
          },
          {
            key: 'DNS:',
            value: '192.168.1.1',
          },
          {
            key: 'NTP:',
            value: '194.190.168.1',
          },
        ],
      },
    ],
  }),
}
</script>
