const mongoCollections = require("../config/mongoCollections");
const education = mongoCollections.education;
const uuidv1 = require('uuid/v1');

module.exports = {
    getAllEducation() {
        return education().then(educationCollection => {
            return educationCollection.find({}).toArray();
        });
    },

    addDetails(schoolName, degree, favouriteClass, favouriteMemory) {
        return education().then(educationCollection => {
            let newSchool = {
                schoolName: schoolName,
                degree: degree,
                favouriteClass: favouriteClass,
                favouriteMemory: favouriteMemory,
                _id: uuidv1()
            };
            educationCollection
                .insertOne(newSchool)
                .then(newInsertInformation => {
                    return newInsertInformation.insertedId;
                  })

                console.log("Added School");
        });
    }
};