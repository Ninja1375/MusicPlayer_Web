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

```text
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

   ```text
git clone https://github.com/Ninja1375/MusicPlayer_Web.git
   ```

Abra o arquivo ```index.html``` no navegador.

**Opção 2 — Servidor local (recomendado)**
   ```text
python -m http.server
   ```

Acesse: http://localhost:8000 

**⚠️ Usar servidor local evita problemas de bloqueio de áudio pelo navegador.**

## 🎶 Playlist 

As músicas são configuradas diretamente no arquivo ```player.js```:
   ```JS

const songs = [ { title: "Rastafari Light", artist: "Dominic", album: "Reggae Roots", year: "2025", genre: "Reggae", duration: "3:51", cover: "/assets/Rastafari_Light.png", src: "/assets/Rastafari_Light.mp3" } ]; 
   ```
**🎧 Créditos das Músicas**

Todas as músicas utilizadas neste projeto são de **Dominic**, disponíveis no canal oficial do YouTube:

**🔔 Inscreva-se no canal:**
👉 https://www.youtube.com/channel/UCM__F6k8I1-D4hGDckFLqTw?sub_confirmation=1

### 🎵 Faixas Utilizadas 

**Música:** Rastafari Light
**Link:** https://youtu.be/hvsHmZ9zE64

**Música:** Aurora, Woman of Light
**Link:** https://youtu.be/IUSpBb3JqBs

**Música:** Reggae da Cela do Capitão
**Link:** https://youtu.be/wX7wn6zYJwE

**Música:** Sunshine in My Soul
**Link:** https://youtu.be/GJKqkoaE260

**Música:** Sweet Virginia
**Link:** https://youtu.be/PMi1ERirXg8

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

## 🔮 Melhorias Futuras

**🔍 Busca na playlist**

**❤️ Favoritar músicas**

**📂 Upload de músicas**

**🎧 Equalizador**

**📝 Letras sincronizadas**

**🌐 Integração com APIs externas**

## 📄 Licença 

Este projeto está sob a licença **MIT**.
Uso livre para fins educacionais e pessoais.

## 👨‍💻 Autor 

Projeto desenvolvido por Antônio Nascimento

**🎶 Música • 💻 Código • 🎨 Design**

**⭐ Se curtir o projeto, deixe uma estrela no repositório!**
