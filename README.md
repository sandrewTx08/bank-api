# Desafio de Backend

- Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;
- Com essa conta é possível realizar transferências para outras contas e depositar;
- Não aceitamos valores negativos nas contas;
- Por questão de segurança cada transação de depósito não pode ser maior do que R$2.000;
- As transferências entre contas são gratuitas e ilimitadas;

# Routes

| Method   | Endpoint           | Parse data                                            | Descrição                                           |
| -------- | ------------------ | ----------------------------------------------------- | --------------------------------------------------- |
| `POST`   | /api/registro      | cpf, primeiroNome, segundoNome, credito **(opcional)**    | Registra usuário com CPF e primeiro e segundo nome. |
| `DELETE` | /api/remove        | cpf, primeiroNome, segundoNome                        | Deleta usuário.                                     |
| `PUT`    | /api/transferencia | cpf, primeiroNome, segundoNome, credito, destinatario | Movimenta valores para outro usuário.               |
| `PUT`    | /api/deposito      | cpf, primeiroNome, segundoNome, credito               | Deposita valores até R$2000.                        |

# Registrando usuário

```cmd
curl -X POST -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678911,
        "primeiroNome":"Joao",
        "segundoNome":"Santos"
      }' \
  https://banco-backend-08.herokuapp.com/api/registro
```

```cmd
curl -X POST -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678912,
        "primeiroNome":"Matheus",
        "segundoNome":"Gabriel",
        "credito":50
      }' \
  https://banco-backend-08.herokuapp.com/api/registro
```

O campo `credito` corresponde ao valor inicial do usuário.

# Deletando usuário

```cmd
curl -X DELETE -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678911,
        "primeiroNome":"Joao",
        "segundoNome":"Santos"
      }' \
  https://banco-backend-08.herokuapp.com/api/remove
```

```cmd
curl -X DELETE -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678912,
        "primeiroNome":"Matheus",
        "segundoNome":"Gabriel"
      }' \
  https://banco-backend-08.herokuapp.com/api/remove
```

# Transferindo valores para outra conta

```cmd
curl -X PUT -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678911,
        "primeiroNome":"Joao",
        "segundoNome":"Santos",
        "credito":1000,
        "destinatario": {
          "cpf":12345678912,
          "primeiroNome":"Matheus",
          "segundoNome":"Gabriel"
        }
      }' \
  https://banco-backend-08.herokuapp.com/api/transferencia
```

```cmd
curl -X PUT -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678912,
        "primeiroNome":"Matheus",
        "segundoNome":"Gabriel",
        "credito":1000,
        "destinatario": {
          "cpf":12345678911,
          "primeiroNome":"Joao",
          "segundoNome":"Santos"
        }
      }' \
  https://banco-backend-08.herokuapp.com/api/transferencia
```

O campo `credito` corresponde o valor a ser enviado ao destinatario.

# Depositando valores

```cmd
curl -X PUT -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678911,
        "primeiroNome":"Joao",
        "segundoNome":"Santos",
        "credito":1000
      }' \
  https://banco-backend-08.herokuapp.com/api/deposito
```

```cmd
curl -X PUT -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678912,
        "primeiroNome":"Matheus",
        "segundoNome":"Gabriel",
        "credito":1000
      }' \
  https://banco-backend-08.herokuapp.com/api/deposito
```

O campo `credito` corresponde o valor a ser depositado.

# Configurando o Database

Dentro da pasta do projeto crie um arquivo com o nome `.env` e nele crie uma variável `MONGO_DB`.

Exemplo:

**.env**

```
MONGO_DB=mongodb://username:password@host:port/database?options
```
