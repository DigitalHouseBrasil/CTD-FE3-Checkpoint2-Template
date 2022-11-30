## Funcionalidades

## Indice
* [Funcionalidades obrigatórias](#funcionalidades-obrigatórias)
  * [Rotas](#rotas)
    * [Página 1: Inicio (/home)](#pagina-1-inicio-home)
    * [Página 2: Login (/login)](#pagina-2-login)
    * [Página 3: Detalhe do dentista (/dentist/:id)](#pagina-3-detalhe-do-dentista)
      * [Página 3.1: Marcar consulta (/dentist/:id)](#pagina-3.1-consulta)
* [Resultado final](#resultado-final)

## Funcionalidades obrigatórias

As seguintes funcionalidades são requisitos mínimos necessários para a aprovação da final e é fundamental que funcionem corretamente.

**O requerimento deve ter 3 (quatro) páginas: Home, Login, Detalhe de cada dentista e um modal de marcação de consulta**

**A navegação correta entre as páginas através dos Links próprios do React Router será obrigatória para aprovação**

**A presença homogênea em todas as páginas da [Navbar](/src/Components/Navbar.jsx) e [Footer](/src/Components/Footer.jsx)** é crucial**

### Criação do Contexto
Deverá ser criado um contexto global em seu aplicativo que disponibilize as seguintes informações:
* Tema de cores para todo o aplicativo (claro ou escuro)
* Informação trazida pela API (você pode usar fetch ou axios para fazer a chamada)
* Para gerenciar e atualizar o estado global, você deve implementar o hook useReducer. Com esse hook é necessário implementar a mudança do tema de cores (com um botão no app específico para isso dentro da Navbar), de claro para escuro e vice-versa, salvar o token de autenticação no localstorage e retorna-lo.

### Criação de rotas
Usando o React Router você deve criar os seguintes endereços descritos em [routes](#rotas)

### Estilos
Com base no tema (claro ou escuro) consumido do contexto global, estilize os quatro [rotas](#rotas) do App (atribua certos estilos se for “dark” ou “light”).

### Teste
Realize pelo menos 5 casos de teste que verifiquem alguma funcionalidade do aplicativo (lembre-se de que não apenas a quantidade será avaliada, mas também a eficácia ou relevância do caso de teste escolhido neste momento)

## Rotas
### Pagina 1: Inicio Home

Esta página deve mostrar uma lista em forma de grade dos dentistas retornados pela API

O seguinte deve ser levado em consideração:
* Deve ser a página inicial do site.
* A grade deve mostrar um [Card](/src/Components/Card.jsx) para cada dentista retornado pela API.
* Cada dentista deve conter `name` e `username`, juntamente com um `link` que permite navegar para a página _dentist/:id_ com base no id do dentista.

### Pagina 2: Login

Nesta página deve-se implementar um [Form](/src/Components/LoginForm.jsx) (com suas respectivas validações) que capture as informações do usuário que deseja logar na aplicação. Os campos serão os seguintes:
* Login (com comprimento maior que 5)
* Senha
* Em caso de erro, exiba a seguinte mensagem de erro: **Verifique suas informações novamente**
* Uma vez enviado o formulário, o token de autenticação deve ser salvo no localstorage através do context api e o usuário deve ser redirecionado até a Home.


### Página 3: Detalhe do dentista

Essa página deve exibir os detalhes de um dentista especifico.

O seguinte deve ser levado em consideração:
* Deve estar no caminho `/dentist/:id`.
* A página deve indicar pelo menos as seguintes informações:
  * Nome 
  * Sobrenome
  * Matricula (id)
  * Nome do usuário
Nessa página também deverá ter um botão de marcar consulta que quando clicado abre um modal.

### Página 3.1: Marcar consulta

Essa página deve permitir selecionar de dois selects um dentista e um paciente, além de poder selecionar uma data e hora para a consulta.

Quando o botão de marcar consulta for clicado, deve ser feito uma chamada api passando os dados necessários e o token. Se ocorrer tudo bem, deverá aparecer um aviso de sucesso e o usuário será redirecionado pra home, se não, aparecerá um aviso de erro e o usuário continuará na mesma tela

## Resultado final

Deixamos um exemplo de como deve funcionar a sua aplicação na [vercel](https://ctd-fe3-final-solution.vercel.app/home)