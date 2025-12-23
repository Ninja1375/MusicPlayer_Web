# 🎵 MusicPlayer Web

Um **player de música web moderno, elegante e responsivo**, desenvolvido com **HTML, CSS e JavaScript puro**, permitindo ouvir músicas diretamente no navegador com playlist dinâmica, tema claro/escuro, shuffle, repeat e controles completos.

---

## 📸 Preview

> ![MusicPlayer Web](/assets/Rastafari_Light.png)

---

## 🚀 Funcionalidades

- ▶️ Play / ⏸️ Pause
- ⏭️ Próxima música / ⏮️ Música anterior
- 🔀 Modo **Shuffle (aleatório)**
- 🔁 Modo **Repeat (repetição)**
- 🎚️ Controle de volume interativo
- ⏱️ Barra de progresso clicável
- 📃 Playlist dinâmica
- 🎨 Tema **Claro / Escuro** (salvo no navegador)
- 💿 Capa do álbum com animação de rotação
- 📱 Totalmente responsivo (desktop, tablet e mobile)

---

## 🛠️ Tecnologias Utilizadas

<a href="https://programartudo.blogspot.com/2024/11/html-tudo-o-que-precisa-para-comecar.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/css-como-dar-estilo-ao-teu-website.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/javascript-linguagem-dinamica-da-web.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/></a>

- **HTML5**
- **CSS3**
  - Flexbox
  - Media Queries
  - Animações
  - Gradientes
- **JavaScript (Vanilla JS)**
- **Font Awesome**
- **LocalStorage**

---

## 📂 Estrutura do Projeto

```bash
MusicPlayer-Web/
│
├── index.html        # Estrutura principal do player
├── player.css        # Estilos, temas e responsividade
├── player.js         # Lógica do player e controle das músicas
├── assets/           # Músicas e capas
│   ├── Rastafari_Light.mp3
│   ├── Rastafari_Light.png
│   ├── Aurora_Woman_of_Light.mp3
│   ├── Aurora_Woman_of_Light.png
│   ├── Reggae_da_Cela_do_Capitão.mp3
│   ├── Reggae_da_Cela_do_Capitão.png
│   ├── Sunshine_in_My_Soul.mp3
│   ├── Sunshine_in_My_Soul.png
│   ├── Sweet_Virgínia.mp3
│   └── Sweet_Virginia.png
└── README.md         # Documentação do projeto
```

## ▶️ Como Executar o Projeto 

**Opção 1 — Abrir diretamente**

Clone o repositório:

   ```bash
git clone https://github.com/Ninja1375/MusicPlayer_Web.git
   ```

Abra o arquivo `index.html` no navegador.

**Opção 2 — Servidor local (recomendado)**
   ```bash
python -m http.server
   ```

Acesse: http://localhost:8000 

**⚠️ Usar servidor local evita problemas de bloqueio de áudio pelo navegador.**

## 🎶 Playlist 

As músicas são configuradas diretamente no arquivo `player.js`:
   ```JS

const songs = [
    {
        title: "Rastafari Light",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "3:51",
        cover: "/assets/Rastafari_Light.png",
        src: "/assets/Rastafari_Light.mp3"
    },
    {
        title: "Aurora, Woman of Light",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "4:00",
        cover: "/assets/Aurora_Woman_of_Light.png",
        src: "/assets/Aurora_Woman_of_Light.mp3"
    },
    {
        title: "Reggae da Cela do Capitão",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "2:08",
        cover: "/assets/Reggae_da_Cela_do_Capitao.png",
        src: "/assets/Reggae_da_Cela_do_Capitao.mp3"
    },
    {
        title: "Sunshine in My Soul",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "2:43",
        cover: "/assets/Sunshine_in_My_Soul.png",
        src: "/assets/Sunshine_in_My_Soul.mp3"
    },
    {
        title: "Sweet Virginia",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "3:42",
        cover: "/assets/Sweet_Virginia.png",
        src: "/assets/Sweet_Virginia.mp3"
    }
];
   ```
**🎧 Créditos das Músicas**

Todas as músicas utilizadas neste projeto são de **Dominic**, disponíveis no canal oficial do YouTube:

**🔔 Inscreva-se no canal:
👉 https://www.youtube.com/channel/UCM__F6k8I1-D4hGDckFLqTw?sub_confirmation=1**

### 🎵 Faixas Utilizadas 

**Música:** Rastafari Light

**Link: https://youtu.be/hvsHmZ9zE64**



**Música:** Aurora, Woman of Light

**Link: https://youtu.be/IUSpBb3JqBs**



**Música:** Reggae da Cela do Capitão

**Link: https://youtu.be/wX7wn6zYJwE**



**Música:** Sunshine in My Soul

**Link: https://youtu.be/GJKqkoaE260**



**Música:** Sweet Virginia

**Link: https://youtu.be/PMi1ERirXg8**



**📌 Todas as faixas pertencem ao artista Dominic e são usadas aqui apenas para fins demonstrativos.**

## 🎨 Temas 

**🌙 Dark Theme (padrão)**

**☀️ Light Theme**

Preferência salva automaticamente usando **localStorage**

## 📱 Responsividade 

Compatível com:

**💻 Desktop**

**📱 Smartphones**

**📟 Tablets**

**📐 Telas pequenas (< 350px)**

## 📄 Licença 

Este projeto está sob a licença **MIT**.
Uso livre para fins educacionais e pessoais.

## 👨‍💻 Autor 

Projeto desenvolvido por **[Antônio Nascimento](https://portfolio-antonio-nascimento.netlify.app/)**

**🎶 Música • 💻 Código • 🎨 Design**

**⭐ Se curtir o projeto, deixe uma estrela no repositório!**

## Apoie-me:

<a href="https://buymeacoffee.com/antonio13" target="_blank"><img loading="lazy" src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=seu_nome_de_usuario&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" width="130" height="30"></a>

<a href="https://www.paypal.com/donate/?hosted_button_id=DN574F28FYUNG" target="_blank"><img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="130" height="30"></a>

<a href="https://github.com/sponsors/Ninja1375" target="_blank"><img loading="lazy" src="https://img.shields.io/badge/-Sponsor-ea4aaa?style=for-the-badge&logo=github&logoColor=white" width="130" height="30"></a>
