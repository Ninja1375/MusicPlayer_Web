// Dados da playlist
const songs = [
    {
        title: "Rastafari Light",
        artist: "Dominic",
        album: "Reggae Roots",
        year: "2025",
        genre: "Reggae",
        duration: "3:51",
        cover: "./assets/Rastafari_Light.png",
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

// Elementos DOM
const audio = new Audio();
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songAlbum = document.getElementById('songAlbum');
const albumArt = document.getElementById('albumArt');
const playBtn = document.getElementById('playBtn');
const playBtnIcon = playBtn.querySelector('i');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const volumePercent = document.getElementById('volumePercent');
const playlistContainer = document.getElementById('playlistContainer');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const container = document.querySelector('.container');
const body = document.body;

// Estado do player
let isPlaying = false;
let currentSongIndex = 0;
let isShuffled = false;
let isRepeating = false;
let shuffledPlaylist = [];

// Inicializar player
function initPlayer() {
    loadSong(currentSongIndex);
    renderPlaylist();
    
    // Definir volume inicial
    audio.volume = 0.5;
    updateVolumeSlider();
    
    // Aplicar tema salvo
    const savedTheme = localStorage.getItem('musicPlayerTheme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon();
    }
    
    // Event listeners
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleSongEnd);
    progressBar.addEventListener('click', setProgress);
    volumeSlider.addEventListener('click', setVolume);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    themeToggle.addEventListener('click', toggleTheme);
}

// Carregar música
function loadSong(index) {
    const song = isShuffled ? shuffledPlaylist[index] : songs[index];
    
    audio.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songAlbum.textContent = `${song.album} • ${song.year} • ${song.genre}`;
    albumArt.src = song.cover;
    durationEl.textContent = song.duration;
    
    // Atualizar item ativo na playlist
    updateActivePlaylistItem();
    
    // Se estava tocando, continuar tocando
    if (isPlaying) {
        playSong();
    }
}

// Tocar música
function playSong() {
    isPlaying = true;
    audio.play().catch(e => {
        console.error("Erro ao reproduzir áudio:", e);
        // Fallback para simulação de reprodução se houver problema com o áudio
        simulatePlayback();
    });
    playBtnIcon.classList.remove('fa-play');
    playBtnIcon.classList.add('fa-pause');
    playBtn.setAttribute('title', 'Pausar');
    container.classList.add('playing');
}

// Pausar música
function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtnIcon.classList.remove('fa-pause');
    playBtnIcon.classList.add('fa-play');
    playBtn.setAttribute('title', 'Reproduzir');
    container.classList.remove('playing');
}

// Alternar play/pause
function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Simular reprodução se houver problemas com o áudio
function simulatePlayback() {
    // Esta função simula a reprodução se os áudios externos não carregarem
    console.log("Simulando reprodução...");
    // Apenas atualiza a UI para mostrar que está "tocando"
    playBtnIcon.classList.remove('fa-play');
    playBtnIcon.classList.add('fa-pause');
    playBtn.setAttribute('title', 'Pausar');
    container.classList.add('playing');
}

// Próxima música
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Música anterior
function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const { currentTime, duration } = audio;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Atualizar tempo atual
        currentTimeEl.textContent = formatTime(currentTime);
    }
}

// Atualizar duração
function updateDuration() {
    durationEl.textContent = formatTime(audio.duration);
}

// Definir progresso ao clicar na barra
function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
}

// Formatar tempo (segundos para MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Atualizar controle de volume
function updateVolumeSlider() {
    volumePercent.style.width = `${audio.volume * 100}%`;
}

// Definir volume
function setVolume(e) {
    const width = volumeSlider.clientWidth;
    const clickX = e.offsetX;
    const volume = clickX / width;
    
    audio.volume = volume;
    updateVolumeSlider();
}

// Renderizar playlist
function renderPlaylist() {
    playlistContainer.innerHTML = '';
    
    const playlist = isShuffled ? shuffledPlaylist : songs;
    
    playlist.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
        songElement.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="playlist-item-info">
                <h4>${song.title}</h4>
                <p>${song.artist} • ${song.duration}</p>
            </div>
        `;
        
        songElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            if (isPlaying) {
                playSong();
            }
        });
        
        playlistContainer.appendChild(songElement);
    });
}

// Atualizar item ativo na playlist
function updateActivePlaylistItem() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Alternar modo shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    
    if (isShuffled) {
        shuffleBtn.classList.add('active');
        
        // Criar playlist embaralhada
        shuffledPlaylist = [...songs];
        for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
        }
        
        // Encontrar índice da música atual na playlist embaralhada
        const currentSong = songs[currentSongIndex];
        currentSongIndex = shuffledPlaylist.findIndex(song => 
            song.title === currentSong.title && song.artist === currentSong.artist);
    } else {
        shuffleBtn.classList.remove('active');
        
        // Encontrar índice da música atual na playlist original
        const currentSong = shuffledPlaylist[currentSongIndex];
        currentSongIndex = songs.findIndex(song => 
            song.title === currentSong.title && song.artist === currentSong.artist);
    }
    
    renderPlaylist();
}

// Alternar modo repeat
function toggleRepeat() {
    isRepeating = !isRepeating;
    
    if (isRepeating) {
        repeatBtn.classList.add('active');
    } else {
        repeatBtn.classList.remove('active');
    }
}

// Lidar com fim da música
function handleSongEnd() {
    if (isRepeating) {
        // Repetir a mesma música
        audio.currentTime = 0;
        playSong();
    } else {
        // Ir para a próxima música
        playNextSong();
    }
}

// Alternar tema claro/escuro
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
    
    updateThemeIcon();
    
    // Salvar preferência no localStorage
    localStorage.setItem('musicPlayerTheme', body.className);
}

// Atualizar ícone do tema
function updateThemeIcon() {
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Inicializar quando a página carregar
window.addEventListener('DOMContentLoaded', initPlayer);

