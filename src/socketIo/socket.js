import io from 'socket.io-client'

//连接服务器
const socket = io('ws://localhost:4000');

//发送消息
  socket.emit('reactSend',{title:'123'});
//绑定监听接收消息
  socket.on('backgroundSend',function (data) {
       console.log('接收到：'+data)
  });