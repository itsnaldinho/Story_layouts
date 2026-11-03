# 📸 Story & Feed Layouts

**Crie composições incríveis para o Instagram sem precisar de programas complicados de edição!**

O **Story & Feed Layouts** é uma aplicação desenvolvida para facilitar a criação de layouts fotográficos para o Instagram. Com ela, você pode combinar várias imagens em um único Story, criar carrosséis panorâmicos e montar murais que dividem uma imagem em várias publicações para o Feed.

Tudo isso de maneira visual, intuitiva e com possibilidade de ajustar o posicionamento, o zoom e o enquadramento de cada fotografia.

---

## ✨ Funcionalidades

### 📱 1. Criação de Stories

Transforme várias fotografias em uma única composição vertical para publicar nos Stories do Instagram.

- Criação de layouts com 2, 3 ou 4 fotografias.
- Organização automática das imagens.
- Personalização da cor de fundo.
- Opção de ativar ou desativar a zona segura.
- Ajuste individual do posicionamento e enquadramento de cada foto.
- Controle de zoom para melhorar a composição.
- Exportação em resolução 1080 × 1920 ou 2160 × 3840 pixels.

### 🖼️ 2. Criação de layouts para o Feed

Crie composições especiais para o Instagram utilizando uma imagem dividida em várias publicações.

**Carrossel panorâmico**
- Transforme uma imagem panorâmica em várias partes.
- Escolha a quantidade de slides, de 2 até 20.
- Ajuste o formato das imagens exportadas.
- Organize os arquivos automaticamente na ordem de publicação.

**Murais para o Feed**
- Divida uma imagem em 3, 6 ou 9 publicações.
- Visualize como ficará o mural antes de exportar.
- Arquivos numerados automaticamente.
- Ordem de publicação organizada para que o resultado final fique alinhado no perfil.

### ✂️ 3. Edição e enquadramento

A aplicação oferece ferramentas simples para ajustar as fotografias antes da exportação:

- Arrastar a imagem para reposicionar.
- Aumentar ou diminuir o zoom.
- Ajustar o enquadramento individualmente.
- Restaurar o posicionamento original.
- Visualizar as linhas de corte antes de exportar.

### 📂 4. Importação de fotografias

Existem duas maneiras de adicionar imagens:

- **Dispositivo:** selecione várias fotografias diretamente do computador ou celular.
- **Google Drive:** informe o link ou ID de uma pasta do Google Drive para carregar as imagens disponíveis.

A aplicação identifica automaticamente os arquivos de imagem encontrados na pasta.

### ⬇️ 5. Exportação

Personalize a maneira como deseja salvar seus arquivos:

- Formatos JPG e PNG.
- Resolução padrão de 1080 pixels.
- Opção de exportação em 2x (2160 pixels).
- Download individual dos layouts.
- Download de todos os layouts em arquivos ZIP.

---

## 🚀 Como utilizar

### 1. Escolha suas fotografias

Abra a aplicação e selecione as imagens que deseja utilizar.

Você pode carregar fotografias diretamente do dispositivo ou importar imagens de uma pasta do Google Drive.

### 2. Escolha o tipo de composição

Selecione uma das abas disponíveis:

- **Stories:** para criar composições verticais com múltiplas fotografias.
- **Feed:** para criar carrosséis panorâmicos ou murais de publicações.

### 3. Personalize seu layout

Clique nas fotografias e organize suas composições.

Na edição, você poderá arrastar as imagens, ajustar o zoom e escolher o melhor enquadramento.

### 4. Visualize o resultado

Antes de exportar, confira a prévia de cada composição.

Se necessário, volte à edição para realizar os ajustes.

### 5. Exporte suas imagens

Escolha o formato e a resolução desejados.

Você pode baixar cada composição individualmente ou utilizar a opção **Baixar todos (ZIP)** para reunir os arquivos em um único pacote.

---

## 🛠️ Tecnologias utilizadas

O projeto utiliza tecnologias web e serviços do Google para funcionar:

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e interface |
| JavaScript | Funcionamento e interatividade |
| HTML Canvas | Montagem e processamento das imagens |
| Google Apps Script | Integração com os serviços do Google |
| Google Drive API (DriveApp) | Leitura das fotografias armazenadas no Drive |
| JSZip | Criação de arquivos ZIP para download |

---

## 📐 Formatos disponíveis

| Recurso | Formato / Dimensão |
|---|---|
| Stories | 1080 × 1920 px |
| Stories em alta resolução | 2160 × 3840 px |
| Feed 4:5 | 1080 × 1350 px |
| Feed 3:4 | 1080 × 1440 px |
| Feed quadrado | 1080 × 1080 px |
| Carrossel panorâmico | 2 a 20 partes |
| Mural | 3, 6 ou 9 publicações |

---

## ⚙️ Como instalar e executar

Esta aplicação foi desenvolvida utilizando **Google Apps Script**, portanto, precisa ser configurada e publicada no ambiente do Google.

### Passo 1 — Criar um projeto

1. Acesse [Google Apps Script](https://script.google.com/).
2. Clique em **Novo projeto**.
3. Crie um arquivo chamado `Code.gs`.
4. Copie o conteúdo do arquivo `Code.gs` deste repositório.
5. Crie um arquivo HTML chamado `Index`.
6. Copie o conteúdo do arquivo `Index.html` deste repositório.

### Passo 2 — Salvar o projeto

Salve as alterações realizadas no editor do Google Apps Script.

### Passo 3 — Publicar a aplicação

1. Clique em **Implantar**.
2. Selecione **Nova implantação**.
3. Escolha o tipo **App da Web**.
4. Configure as permissões de acesso conforme sua necessidade.
5. Clique em **Implantar**.
6. Autorize as permissões solicitadas pelo Google.

Após a implantação, será disponibilizado um endereço para acessar a aplicação pelo navegador.

**Importante:** para utilizar a integração com o Google Drive, a conta que executa a aplicação precisa ter permissão para acessar as pastas e fotografias selecionadas.

---

## 📌 Observações

- A aplicação não publica automaticamente no Instagram. Ela gera e exporta as imagens para que você possa publicá-las manualmente.
- O acesso às fotografias do Google Drive depende das permissões concedidas à aplicação.
- Para utilizar a importação pelo Google Drive, é necessário executar a aplicação em um ambiente Google Apps Script devidamente autorizado.
- A biblioteca JSZip é carregada externamente pelo CDNJS.

---

## 🎯 Objetivo do projeto

O objetivo do Story & Feed Layouts é simplificar o trabalho de quem precisa organizar e preparar fotografias para publicações no Instagram.

Uma ferramenta prática para fotógrafos, criadores de conteúdo, social media, empresas e qualquer pessoa que queira deixar seu perfil mais organizado e visualmente atraente.

---

**Desenvolvido para facilitar a criação de conteúdo visual para o Instagram.** 📸
