<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="7">
          <div style="background-color: #4caf50">
            <v-card-title style="height: 70px"></v-card-title>
          </div>
          <v-list>
            <template v-for="(item, ind) in parametrsData">
              <h2 :key="ind" class="px-4 mt-4">{{ item.title }}</h2>
              <v-list-item selectable :key="ind + 'A'">
                <v-list-item-content>
                  <v-list-item-title
                    class="pl-5 ma-3"
                    v-for="(setting, ind2) in item.arr"
                    :key="ind2 + 'B'"
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
    ipDevice: '',
    parametrsData: [],
  }),
  async created() {
    try {
      //считываю данные из конфиг файла
      let req = await fetch('./settings.txt')
      if (req.ok) {
        let receivedIP = await req.text()
        receivedIP = receivedIP.split('= ')[1]
        this.ipDevice = receivedIP
      }

      this.ipDevice = 'http://' + this.ipDevice + ':8000/SystemInfs/'

      let response = await fetch(this.ipDevice)
      if (response.ok) {
        let dataJson = await response.json()
        let newDataJson = { ...dataJson[0] }
        this.parametrsData.push({
          title: 'Settings',
          arr: [
            {
              key: 'IP:',
              value: newDataJson.ip,
            },
            {
              key: 'DNS:',
              value: '-',
            },
            {
              key: 'NTP:',
              value: '-',
            },
          ],
        })
      } else {
        alert('Error: ', response.status)
      }
    } catch (err) {
      this.parametrsData.push({
        title: 'Ошибка ' + err.name,
        arr: [
          {
            key: '',
            value: err.message,
          },
        ],
      })
    }
  },
}
</script>
