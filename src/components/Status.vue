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
              <v-divider v-if="ind != 2" :key="'A' + ind" inset />
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
    objectData: [],
    parametrs: [
      {
        title: 'Status',
        arr: [
          {
            key: 'Адрес отдаваемого потока (rtsp/srt/tcp/udp):',
            value: '172.18.191.51',
          },
          {
            key: 'Running Time:',
            value: '0000-00-00 09:00:57',
          },
          {
            key: 'Device Time:',
            value: '2022-02-27 13:00:15',
          },
          {
            key: 'CPU Usage:',
            value: '9%',
          },
          {
            key: 'CPU Temperature:',
            value: '59°C',
          },
          {
            key: 'Memory Usage:',
            value: '28.4M/247.6M',
          },
          {
            key: 'Input Size:',
            value: '1024x768p@0',
          },
          {
            key: 'Collected Video Frames:',
            value: '0',
          },
          {
            key: 'Lost Video Frames:',
            value: '0',
          },
          {
            key: 'Audio Samplerate:',
            value: '48000',
          },
          {
            key: 'Collected Audio Frames:',
            value: '1516482',
          },
          {
            key: 'Net Packet Sent:',
            value: '25',
          },
          {
            key: 'Net Packet Dropped:',
            value: '0',
          },
        ],
      },
      {
        title: 'Main Stream',
        arr: [
          {
            key: 'Encoding Type:',
            value: 'H.264',
          },
          {
            key: 'Encoded Size:',
            value: '1024x768@25',
          },
          {
            key: 'Bitrate(kbit):',
            value: '4096',
          },
          {
            key: 'TS URL:',
            value: 'http://172.18.191.51/0.ts',
          },
          {
            key: 'HLS URL:',
            value: 'Disable',
          },
          {
            key: 'FLV URL:',
            value: 'http://172.18.191.51/0.flv',
          },
          {
            key: 'RTSP URL:',
            value: 'Disable',
          },
          {
            key: 'RTMP(S) PUSH URL:',
            value: 'Disable',
          },
          {
            key: 'Multicast URL:',
            value: 'Disable',
          },
          {
            key: 'SRT URL:srt:',
            value: 'srt://172.18.191.51:9000',
          },
          {
            key: 'SRT PUSH URL:',
            value: 'Disable',
          },
          {
            key: 'HLS PUSH URL:',
            value: 'Disable',
          },
        ],
      },
      {
        title: 'DHCP Status',
        arr: [
          {
            key: 'IP:',
            value: '172.18.191.51',
          },
          {
            key: 'Netmask:',
            value: '255.255.255.0',
          },
          {
            key: 'Gateway:',
            value: '172.18.191.1',
          },
        ],
      },
    ],
  }),
  async created() {
    console.log('Server have created...')
    let response = await fetch('http://127.0.0.1:8000/SystemInfs/?format=json')
    console.log(response.json())
    // получить один заголовок
    // console.log(response.headers.get('Content-Type'))
  },
}
// class Request {
//       async getData(url) {
//         console.log('I am trying...')
//         var response = await fetch(url)
//         console.log(response.headers.get('Content-Type'))
//         // if (response.ok) {
//         //   var dataJson = await response.json()
//         //   return dataJson
//         // } else {
//         //   alert('Error: ', response.status)
//         // }
//       }
//     }
//     const instance = new Request()
//     console.log('I am going to the function...')
//     this.objectData = await instance.getData(
//       'http://127.0.0.1:8000/SystemInfs/'
//     )
//     // 'http://127.0.0.1:8000/SystemInfs/'

// https://nvr.miem.hse.ru/api/erudite/rooms
</script>
