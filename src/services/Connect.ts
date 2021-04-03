import mongoose from "mongoose";

type TInput = {
  connectionString: string;
};

export default ({ connectionString }: TInput) => {
  const Connect = () => {
    mongoose
      .connect(connectionString, { useNewUrlParser: true })
      .then(() => {
        return console.info(`Successfully connected to ${connectionString}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };

  Connect();

  mongoose.connection.on("disconnected", Connect);
};
