const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const { faker } = require("@faker-js/faker");
//Load env vars
dotenv.config({ path: "./.env" });

// load models
const song = require("./models/song");

// connect database
mongoose.connect(process.env.DNS);

// import into db
const importData = async () => {
  

  // create song
  for (i = 1; i <= 14; i++) {
    const songObj = {
      title: `Song ${i}`,
      description: `Song description test${i}`,
      file: `${i}.mp3`,
      image: `${i}.jpg`,
      user: `6563109dab57420942305e74`
    };
    let u = await song.create(songObj);
  }
  // exit from the process
  console.log("Data imported".green.inverse);
  process.exit();
};

const deleteData = async () => {
  try {
    await user.deleteMany();
    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
