module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("pessoas", {
    nome: {
      type: Sequelize.STRING
    },
    rg: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    },
    data_nascimento: {
      type: Sequelize.STRING
    },
    data_admissao: {
      type: Sequelize.STRING
    },
    funcao: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
