# Verzel Car

# Pré-requisitos
Este projeto foi desenvolvido com base nas tecnologias abaixo, para uma execução correta é *indispensável* que você tenha essas dependências instaladas.

* Node.js (Caso necessário seguir o guia de instalação: https://nodejs.org/en/)
* Yarn (Caso necessário seguir o guia de instalação: https://yarnpkg.com/)

# O projeto
Para iniciar o projeto você deve seguir os seguintes passos:

## Instalação
1. Faça o clone deste repositório usando `git clone https://github.com/tonoliveira96/`
2. Entre na pasta do projeto.

# Backend
O backend foi desenvolvido usando NodeJs, como banco de dados da aplicação escolhi SQLlite, pois é de facil instalação e não necessita de nenhum SGBD ou server instalado na máquina para funcionar.

Para iniciar o projeto basta seguir os seguintes passos

## Banco de dados
Para criar as tabelas do nosso banco de dados será necessário realizar os passos abaixo.

1. Pelo terminal, entrar na pasta do projeto usando `cd backend`.
2. Executar o comando `yarn database`.
Pronto, tabelas criadas!

## Iniciando o servidor
1. Na pasta `backend` do projeto rode o comando yarn para instalar as dependencias do projeto.
2. Após finalizar a instalação execute o comando `yarn dev`, se estiver tudo certo parecerá uma mensagem no de sucesso no console.


# Mobile
A parte mobile foi desenvolvida utilizando Expo, então para excutar este projeto você deve ter o Expo instalado de forma global na sua máquina, para isso basta executar no terminal `npm install --global expo-cli`.
Para mais informações basta acessar  site do Expo(https://docs.expo.dev/get-started/installation/).

O Expo possui um client para celular que permite realizar o teste no seu disposivo, desde que o o computador e o cerlular esteja na mesma rede wi-fi. Procure por Expo Go na sua loja de aplicativos.

Após a instalação do expo, chegou a hora de iniciar o app.
1. Entrar na pasta `mobile` do projeto.
2. Excutar no terminar o comando `expo start`.
3. Abrirá uma aba no navegar com um QR Code.
4. Caso prefira testar no seu dispositivo abra o Expo Go e escanei o QR Code que irá aparecer(RECOMENDADO).
5. Caso tenha um emulador aberto no computador ele irá instalar o client do Expo automaticamente esse processo pode ser mais demorado.
