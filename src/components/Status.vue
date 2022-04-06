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
              <h2 :key="ind" class="px-4 mt-4">
                {{ item.title }}
              </h2>
              <v-list-item selectable :key="'S' + ind">
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
              <v-divider
                v-if="parametrsData.length - 1"
                :key="'A' + ind"
                inset
              />
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
    nameOfDevice: 'Name of device',
    parametrsData: [],
    proba: '',
  }),
  async created() {
    try {
      // отправляю GET запрос на локальный сервер для получения данных
      let response = await fetch('http://127.0.0.1:8000/SystemInfs/')
      if (response.ok) {
        let dataJson = await response.json()
        let newDataJson = { ...dataJson[0] }
        // записываю данные с сервера в массив parametrsData
        this.parametrsData.push(
          {
            title: 'Status',
            arr: [
              {
                key: 'Output adress:',
                value: newDataJson.output_address,
              },
              {
                key: 'Running Time:',
                value: newDataJson.running_time,
              },
              {
                key: 'Device Time:',
                value: newDataJson.device_time,
              },
              {
                key: 'CPU Usage:',
                value: newDataJson.cpu_usage,
              },
              {
                key: 'CPU Temperature:',
                value: newDataJson.cpu_temperature,
              },
              {
                key: 'Memory Usage:',
                value: newDataJson.memory_usage,
              },
            ],
          },
          {
            title: 'DHCP Status',
            arr: [
              {
                key: 'IP:',
                value: newDataJson.ip,
              },
              {
                key: 'Netmask:',
                value: newDataJson.netmask,
              },
              {
                key: 'Gateway:',
                value: newDataJson.default_gateway,
              },
            ],
          }
        )
      } else {
        alert('Error: ', response.status)
      }
    } catch (err) {
      // в случае ошибки вывожу её на экран, в консоль с стэком и в верстку
      this.parametrsData.push({
        title: 'Ошибка ' + err.name,
        arr: [
          {
            key: '',
            value: err.message,
          },
        ],
      })
      alert('Ошибка ' + err.name + ': ' + err.message)
      console.log('Ошибка ' + err.name + ': ' + err.message + '\n' + err.stack)
    }
  },
}

// https://nvr.miem.hse.ru/api/erudite/rooms
//       {
//         title: 'Main Stream',
//         arr: [
//           {
//             key: 'Encoding Type:',
//             value: 'H.264',
//           },
//           {
//             key: 'Encoded Size:',
//             value: '1024x768@25',
//           },
//           {
//             key: 'Bitrate(kbit):',
//             value: '4096',
//           },
//           {
//             key: 'TS URL:',
//             value: 'http://172.18.191.51/0.ts',
//           },
//           {
//             key: 'HLS URL:',
//             value: 'Disable',
//           },
//           {
//             key: 'FLV URL:',
//             value: 'http://172.18.191.51/0.flv',
//           },
//           {
//             key: 'RTSP URL:',
//             value: 'Disable',
//           },
//           {
//             key: 'RTMP(S) PUSH URL:',
//             value: 'Disable',
//           },
//           {
//             key: 'Multicast URL:',
//             value: 'Disable',
//           },
//           {
//             key: 'SRT URL:srt:',
//             value: 'srt://172.18.191.51:9000',
//           },
//           {
//             key: 'SRT PUSH URL:',
//             value: 'Disable',
//           },
//           {
//             key: 'HLS PUSH URL:',
//             value: 'Disable',
//           },
//         ],
//       },
</script>
