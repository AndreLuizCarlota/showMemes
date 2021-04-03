import mongoose from "mongoose";

class Connection {
  async Connect() {
    mongoose
      .connect(process.env.CONNECTION_MONGO, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then((response) => {
        console.info("Connections is sucessfull");
      });
  }
  async Close() {
    mongoose.connection.on("disconnected", this.Connect);
  }
}

export default Connection;