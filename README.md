# Busca CEP Integrado (PWA)

## 1. Sobre o Projeto
Esta é uma aplicação web voltada para a consulta de endereços e códigos postais brasileiros. O sistema permite que o usuário encontre informações completas a partir de um CEP ou descubra o CEP a partir de um nome de rua/logradouro.

### Objetivos
* Facilitar a busca de dados geográficos.
* Demonstrar o uso de APIs externas (ViaCEP e IBGE).
* Implementar conceitos de aplicações progressivas (PWA).

### Tecnologias Utilizadas
* **HTML5/CSS3**: Estruturação e estilização.
* **Materialize CSS**: Framework front-end para design responsivo.
* **JavaScript (ES6+)**: Lógica de consumo de APIs e manipulação do DOM.
* **Fetch API**: Para requisições assíncronas aos serviços ViaCEP e IBGE.
* **Service Workers & Manifest**: Para transformar o site em um PWA.

---

## 2. Conceitos de PWA
Uma **PWA (Progressive Web App)** é uma evolução das páginas web tradicionais, que combina a facilidade de acesso do navegador com funcionalidades típicas de aplicativos nativos.

### Principais Características
* **Instalável**: Pode ser adicionado à tela inicial do smartphone ou desktop sem passar por uma loja de apps.
* **Offline (Service Worker)**: Através do Service Worker, a aplicação consegue carregar recursos básicos (HTML, CSS, JS) mesmo sem conexão com a internet.
* **Responsividade**: Adapta-se perfeitamente a qualquer tamanho de tela (Mobile, Tablet, PC).
* **manifest.json**: Arquivo que contém os metadados do app (nome, ícones, cores).
* **Service Worker**: Script que roda em segundo plano, gerenciando o cache e a rede.

---

## 3. Como rodar o projeto localmente
1. Clone este repositório ou baixe os arquivos.
2. Certifique-se de manter a estrutura de pastas:
   - `/css` (materialize.css, style.css)
   - `/js` (materialize.js, script.js)
   - `index.html`
   - `sw.js`
   - `manifest.json`
3. Utilize a extensão **Live Server** do VS Code ou qualquer servidor HTTP local para abrir o `index.html`.
   > *Nota: PWAs exigem um servidor (localhost ou HTTPS) para que o Service Worker funcione.*

---

## 4. Como fazer o deploy no Netlify
1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Conecte seu repositório do GitHub ou faça o upload manual da pasta do projeto.
3. Certifique-se de que o arquivo principal se chama `index.html` e está na raiz.
4. O Netlify gerará automaticamente um link seguro (HTTPS), requisito obrigatório para o funcionamento do PWA.
5. **Link da aplicação:** [COLE_AQUI_O_SEU_LINK_FINAL]
