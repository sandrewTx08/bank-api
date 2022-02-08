const supertest = require("supertest");
const should = require("should");
const server = supertest.agent(`localhost:${process.env.PORT || 80}`);

describe("test principal", () => {
  let usuario1 = {
    cpf: 12345678921,
    primeiroNome: "Paulo",
    segundoNome: "Joao",
  };

  let usuario2 = {
    cpf: 12345678922,
    primeiroNome: "Gabriel",
    segundoNome: "Matheus",
  };

  describe("registrando", () => {
    it("usuario 1", (done) => {
      let usuario = usuario1;

      server
        .post("/api/registro")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      let usuario = usuario2;

      server
        .post("/api/registro")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  describe("deposito", () => {
    it("usuario 1", (done) => {
      let usuario = usuario1;
      usuario.credito = 1000;

      server
        .put("/api/deposito")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      let usuario = usuario2;
      usuario.credito = 1000;

      server
        .put("/api/deposito")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  describe("transferencia", () => {
    it("usuario 1", (done) => {
      let usuario = usuario1;
      usuario.credito = 1000;
      usuario.destinatario = usuario2;

      server
        .put("/api/transferencia")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      let usuario = usuario2;
      usuario.credito = 1000;
      usuario.destinatario = usuario1;

      server
        .put("/api/transferencia")
        .send(usuario)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  after((done) => {
    let usuario = usuario1;

    server
      .delete("/api/remove")
      .send(usuario)
      .set("Content-Type", "application/json")
      .end((err, res) => {
        should(res.body).have.property("message");
        done();
      });
  });

  after((done) => {
    let usuario = usuario2;

    server
      .delete("/api/remove")
      .send(usuario)
      .set("Content-Type", "application/json")
      .end((err, res) => {
        should(res.body).have.property("message");
        done();
      });
  });
});
