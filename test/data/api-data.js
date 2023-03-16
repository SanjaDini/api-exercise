const faker = require('faker');

module.exports.dataApi = {
    main_key: faker.name.title(),
    value: faker.datatype.number(),
  };