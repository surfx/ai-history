# AI History

Projeto HTML e CSS

O projeto graphql está em [graphql-projeto001](https://github.com/surfx/graphql-projeto001) e está hospedado em [render.com](https://render.com), disponível em [graphql-projeto001.onrender.com](https://graphql-projeto001.onrender.com/)

exemplo de curl:

```bash
$ curl --request POST \
    --header 'content-type: application/json' \
    --url https://graphql-projeto001.onrender.com/ \
    --data '{"query":"query ExampleQuery($nome: String, $usuarioId: Int) {\n  usuarios {\n    idade\n  }\n  produtos {\n    id\n    nome\n    valor\n  }\n  usuario(nome: $nome, id: $usuarioId) {\n    ativo\n    id\n    idade\n    nome\n    salario\n  }\n}","variables":{"nome":null,"usuarioId":null}}'
```

acesso localhost: curl na url [http://localhost:4000/](http://localhost:4000/)


# About

AI History - castle init - [AI History - index.html](https://surfx.github.io/ai-history/)

<img src="resources\imagens\site-index-image\site-index-html.png" alt="Password Generator">

# node

```bash
$ npm init -y
$ npm i express --save
```

# URLS

- [localhost](http://localhost:8000)
- [Fooocus](https://github.com/lllyasviel/Fooocus)
- [Gothic A1](https://fonts.google.com/specimen/Gothic+A1?query=gothic)

# Github Page

- [github index](https://surfx.github.io/ai-history/)

# render.com

- [ai render.com](https://ai-history-nodejs.onrender.com)
- [ai render.com hello world](https://ai-history-nodejs.onrender.com/hello_world)

# Página HTML

- [AI History - index.html](https://surfx.github.io/ai-history/)