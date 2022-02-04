# Desafio de Backend

- Para abrir uma conta é necessário apenas o nome completo e CPF da pessoa, mas só é permitido uma conta por pessoa;
- Com essa conta é possível realizar transferências para outras contas e depositar;
- Não aceitamos valores negativos nas contas;
- Por questão de segurança cada transação de depósito não pode ser maior do que R$2.000;
- As transferências entre contas são gratuitas e ilimitadas;

# Routes

| Method   | Endpoint      | Parse data                                               | Descrição                                           |
| -------- | ------------- | -------------------------------------------------------- | --------------------------------------------------- |
| `POST`   | /api/registro | cpf, primeiroNome && segundoNome, credito, destinatario  | Registra usuário com CPF e primeiro e segundo nome. |
| `DELETE` | /api/remove   | cpf, primeiroNome && segundoNome                         | Deleta usuário.                                     |
| `PUT`    | /api/deposito | cpf, primeiroNome && segundoNome, deposito, destinatario | Movimenta valores para outro usuário.               |

# Registrando usuário

```cmd
curl -X POST -H "Content-Type: application/json" \
  -d '{
      "cpf":12345678911,
      "primeiroNome":"Joao",
      "segundoNome":"Santos",
      "credito":1000
    }' \
  http://localhost/api/register
```

```cmd
curl -X POST -H "Content-Type: application/json" \
  -d '{
      "cpf":12345678911,
      "primeiroNome":"Matheus",
      "segundoNome":"Gabriel",
      "credito":1000
    }' \
  http://localhost/api/register
```

O campo `credito` corresponde ao valor inicial do usuário.

# Depositando valores para outra conta

```cmd
curl -X PUT -H "Content-Type: application/json" \
  -d '{
        "cpf":12345678911,
        "primeiroNome":"Joao",
        "segundoNome":"Santos",
        "deposito":1000,
        "destinatario": {
          "cpf":12345678912,
          "primeiroNome":"Matheus",
          "segundoNome":"Gabriel"
        }
      }' \
  http://localhost/api/deposito
```

O campo `deposito` corresponde o valor a ser enviado ao destinatario.
