const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const about = data.about;
const story = data.story;
const education = data.education;

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();
  
  //const aboutdata = await about.addDetails("Devesh Jain", 10435361, 'Born and brought up in India,\nCurrently in the states pursuing MS in CS', [ "Got", "Friends", "Flash" ], [ "Swimming", "Football"]);

  //const storyData = await story.addDetails("The legends of Mahabharata", 'Mahabharata is a Hindu verse\nWritten by renowed author kavi maharishi\nIt is one of th most sacred manuscripts of the Hindu religion');

  const school1 = await education.addDetails("abc", "high school", "first class", "leaving");

  const school2 = await education.addDetails("def", "BE", "second class", "going home");

  const school3 = await education.addDetails("ghi", "MS", "third class", "orientation");

  console.log("Done seeding Db");
  await db.serverConfig.close();
};

main().catch(console.log);