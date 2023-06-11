const db = require("../models");
const Person = db.persons;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Campo está vazio"
    });
    return;
  }


  const Person = {
    nome: req.body.nome,
    rg: req.body.rg,
    cpf: req.body.cpf,
    data_nascimento: req.body.data_nascimento,
    data_admissao: req.body.data_admissao,
    funcao: req.body.funcao,
  };

  // Save Tutorial in the database
  Person.create(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro no registro"
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  const condition = nome ? { title: { [Op.like]: `%${nome}%` } } : null;

  Person.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algo deu errado."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id_pessoa;

  Person.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não encontou o id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Person.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não foi encontrado com esse ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "erro no id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Person.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Deletado com sucesso!"
        });
      } else {
        res.send({
          message: `Não foi possivel deletar o id=${id_pesssoa}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao deletar o id_pesssoa=" + id_pesssoa
      });
    });
};

exports.deleteAll = (req, res) => {
  Person.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Deletado todos!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao deletar todos."
      });
    });
};

