# Projeto Busca CEP - PWA

## 1. Sobre o Projeto
O Busca CEP é uma aplicação web desenvolvida para facilitar a consulta de endereços brasileiros. O objetivo principal é permitir que o usuário obtenha dados completos de logradouro, bairro e localidade a partir da inserção de um Código de Endereçamento Postal, ou realize o caminho inverso, buscando o código a partir do nome da rua, município e estado. 

Tecnologias utilizadas na construção da solução:
* HTML
* CSS
* JavaScript
* Fetch API para consumo de dados
* Web Services (ViaCEP e IBGE)

## 2. Conceitos de PWA
Uma Aplicação Web Progressiva (PWA) é uma aplicação web que utiliza capacidades modernas dos navegadores para fornecer uma experiência semelhante à de um aplicativo nativo em dispositivos móveis e computadores.

Principais características implementadas:
* Instalável: Permite que o usuário adicione a aplicação à tela inicial do seu dispositivo.
* Offline: Garante o funcionamento básico ou o carregamento da interface mesmo em situações de conectividade nula ou instável.
* Responsividade: Adaptação visual fluida em telas de diferentes dimensões.

Elementos centrais:
* manifest.json: Arquivo de configuração que define a identidade da aplicação perante o sistema operacional (nome, ícones, cores de tema).
* Service Worker: Arquivo de controle executado em segundo plano que gerencia o armazenamento em cache e a interceptação de requisições de rede.

## 3. Como rodar o projeto localmente
Para executar esta aplicação em seu ambiente de desenvolvimento local, siga os passos descritos:
1. Clone o repositório ou faça o descarregamento dos arquivos.
2. Abra a pasta do projeto em um editor de código, como o Visual Studio Code.
3. Inicie um servidor local utilizando extensões como o Live Server.
4. Acesse o endereço local gerado (geralmente http://127.0.0.1:5500) no seu navegador.

## 4. Como fazer o deploy
O processo de publicação foi realizado na plataforma Netlify, seguindo a esteira abaixo:
1. Criação de uma conta na plataforma Netlify.
2. Acesso ao painel de controle e seleção da opção de adição de um novo site de forma manual.
3. Envio da pasta do projeto contendo os arquivos estruturais diretamente para a área de transferência do painel.
4. Configuração do domínio personalizado fornecido pela plataforma.
5. O link final da aplicação online ficou disponível para acesso público.
