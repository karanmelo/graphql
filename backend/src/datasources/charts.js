var faker = require("faker");

faker.locale = "pt_BR";

class ChartsAPI {
  async getRankingPerson() {
    var { name, random } = faker;

    const ranking = [
      {
        nome: name.findName(),
        value: faker.random.number({ min: 0, max: 100, precision: 0.01 }),
      },
      {
        nome: name.findName(),
        value: random.number({ min: 0, max: 100, precision: 0.01 }),
      },
      {
        nome: name.findName(),
        value: random.number({ min: 0, max: 100, precision: 0.01 }),
      },
      {
        nome: name.findName(),
        value: random.number({ min: 0, max: 100, precision: 0.01 }),
      },
      {
        nome: name.findName(),
        value: random.number({ min: 0, max: 100, precision: 0.01 }),
      },
    ].sort((a, b) => {

      if (a.value < b.value) return 1;
      if (a.value > b.value) return -1;
      return 0;
    });

    return ranking;
  }
}

module.exports = ChartsAPI;
