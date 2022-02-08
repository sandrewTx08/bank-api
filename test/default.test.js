require("should");
const supertest = require("supertest");
const request = supertest
  .agent(`localhost:${process.env.PORT || 80}`)
  .set("Content-Type", "application/json");

describe("test principal", () => {
  beforeEach(() => {
    usuario1 = {
      cpf: 12345678921,
      primeiroNome: "Paulo",
      segundoNome: "Joao",
    };

    usuario2 = {
      cpf: 12345678922,
      primeiroNome: "Gabriel",
      segundoNome: "Matheus",
    };
  });

  describe("registrando", () => {
    it("usuario 1", (done) => {
      request
        .post("/api/registro")
        .send(usuario1)
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      request
        .post("/api/registro")
        .send(usuario2)
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  describe("deposito", () => {
    it("usuario 1", (done) => {
      usuario1.credito = 1000;

      request
        .put("/api/deposito")
        .send(usuario1)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      usuario2.credito = 1000;

      request
        .put("/api/deposito")
        .send(usuario2)
        .set("Content-Type", "application/json")
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  describe("transferencia", () => {
    it("usuario 1", (done) => {
      usuario1.credito = 1000;
      usuario1.destinatario = usuario2;

      request
        .put("/api/transferencia")
        .send(usuario1)
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });

    it("usuario 2", (done) => {
      usuario2.credito = 1000;
      usuario2.destinatario = usuario1;

      request
        .put("/api/transferencia")
        .send(usuario2)
        .end((err, res) => {
          should(res.body).have.property("message");
          done();
        });
    });
  });

  after((done) => {
    request
      .delete("/api/remove")
      .send(usuario1)
      .end((err, res) => {
        should(res.body).have.property("message");
        done();
      });
  });

  after((done) => {
    request
      .delete("/api/remove")
      .send(usuario2)
      .end((err, res) => {
        should(res.body).have.property("message");
        done();
      });
  });
});
