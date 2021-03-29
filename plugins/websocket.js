
import Vue from 'vue'
import Echo from "laravel-echo";







const echo = {};

echo.install = function (Vue) {
  Vue.prototype.$pusher = require('pusher-js');
  Vue.prototype.$echo = new Echo({
    authEndpoint: process.env.VUE_APP_API_URL+'/api/broadcasting/auth',
    // auth: {
    //   headers: {
    //     Authorization:
    //   }
    // },
    broadcaster: 'pusher',
    key: process.env.PUSHER_APP_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKET_SERVER,
    wsPort: 6001,
    encrypted: true,
    disableStats: true,
  });
};

Vue.use(echo);


// echo.install= new Echo({
//   broadcaster: Pusher,
//   key:'dalawomen',
//   wsHost: process.env.VUE_APP_WEBSOCKET_SERVER,
//   wsPort: 6001,
//   forceTLS: false,
//   disableStats: true,
//   // authEndpoint: process.env.VUE_APP_API_URL+'/broadcasting/auth',
//   enabledTransports: ['ws', 'wss'],
//   // authorizer: (channel) => {
//   //   return {
//   //     authorize: (socketId, callback) => {
//   //       authClient.post('http://localhost:8000/api/broadcasting/auth', {
//   //         socket_id: socketId,
//   //         channel_name: channel.name
//   //       })
//   //         .then(response => {
//   //           callback(false, response.data);
//   //         })
//   //         .catch(error => {
//   //           callback(true, error);
//   //         });
//   //     }
//   //   };
//   // },
// });
//
// Vue.use(Echo).use(Pusher)
