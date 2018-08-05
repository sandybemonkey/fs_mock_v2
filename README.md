# Service-providers-example

An example of Service Provider for FranceConnect.

[`doc de référence`](https://partenaires.franceconnect.gouv.fr/fournisseur-service#glossary)

`Config valide exemple` :
```json
{
  "fcURL": "https://fcp.integ01.dev-franceconnect.fr",
  "openIdParameters": {
    "clientID": "9c771146e9ff7f45a7613ced4be01581b3abbd8e25d45fb3e45559b2577c5030",
    "clientSecret": "3eb1c3fdd79669e3e4a5971ea0ac06804f27f6cbb20f29daebda95e755677ecb",
    "callbackURL": "http://localhost:8000/callback",
    "authorizationURL": "https://fcp.integ01.dev-franceconnect.fr/api/v1/authorize",
    "tokenURL": "https://fcp.integ01.dev-franceconnect.fr/api/v1/token",
    "userInfoURL": "https://fcp.integ01.dev-franceconnect.fr/api/v1/userinfo",
    "logoutURL":"https://fcp.integ01.dev-franceconnect.fr/api/v1/logout",
    "scope": "openid email phone given_name",
    "state": "myTestServiceState",
    "nonce": "timestamp123"
  }
}
```

## Install
```bash
git clone git@github.com:france-connect/service-providers-examples.git
cd service-providers-examples
npm install
```

##  Run the App

```bash
npm start