import io from "socket.io-client";

export function websocketOn(values) {
  return {
    type: "WEBSOCKET_ON",
    payload: true
  };
}

export const changeToken = event => {
  return {
    type: "CHANGE_TOKEN",
    payload: event.target.value
  };
};

export const addToken = (token, setCountID) => {
  const socket = io("ws://staging-notifications.ingaia.com.br:8080", {
    query: {
      Authorization: "Bearer " + token
    },
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 5000,
    reconnectionDelayMax: 5000
  });

  socket.on("emitNotificationsUser", function(data) {
    setCountID(data._id);
    alert(`Nova Notificação => ID: ${data._id}
        Identity: ${data.identity}
        Subject: ${data.subject}
        Message: ${data.message} 
        Appointment Date: ${data.appointment_date}
        Status: ${data.status} 
        Created At: ${data.createdAt}
        User Id: ${data.user_id}`);

    console.log(data);
  });

  socket.on("disconnect", function(data) {
    alert("Disconectado do socket");
  });

  socket.on("connect", function(data) {
    alert("Conectado do socket");
  });

  return {
    type: "ADD",
    payload: { token: token, nova: true }
  };
};
