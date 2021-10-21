const { ChatRoom } = require("../models/");

class ChatRoomController {
  static getMessages(req, res) {
    ChatRoom.findAll({ include: 'User' })
      .then((messages) => res.send(messages))
      .catch((err) => res.send(err));
  }
  // ???
  
  static getSocketMessages() {
    return new Promise((resolve, reject) => {
      ChatRoom.findAll({ include: 'User' })
        .then((messages) => {
          console.log(messages, "<<<<< included");
          resolve(messages)
        })
        .catch((err) => {
          console.log(err, "<<<<< included");
          reject(err)
        });
    });
 };

 static createSocketMessage(messageObj) {
  const { message, UserId } = messageObj;
  const params = { message, UserId, MovieId: 1};
  return new Promise((resolve) => {
    ChatRoom.create(params)
      .then((data) => resolve(data.dataValues))
      .catch((err) => res.send(err));
    })
  };

}

module.exports = ChatRoomController;
