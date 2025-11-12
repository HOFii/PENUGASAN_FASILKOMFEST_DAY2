// Variable Global
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatOptions = document.querySelectorAll('.chat-option');

// Function untuk menambah pesan ke Chatbot
/**
 * Menambahkan pesan ke jendela pesan chatbot.
 * @param {string} text - Isi pesan.
 * @param {string} sender - 'user' atau 'bot'.
 */
function addMessage(text, sender) {
    // DOM Manipulation: Membuat elemen div baru untuk pesan
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);

    // DOM Manipulation: Scroll ke bawah secara otomatis
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function untuk memproses pilihan pengguna dan memberikan jawaban
function handleOptionClick(event) {
    // Variable lokal
    const selectedTopic = event.target.getAttribute('data-topic');
    let botResponse = "";
    
    // Tampilkan pesan pengguna
    const userMessageText = event.target.textContent;
    addMessage(userMessageText, 'user');

    // If-Else Statement untuk menentukan jawaban bot
    if (selectedTopic === 'about') {
        botResponse = "A member of the Stellaron Hunters and a genius hacker. Silver Wolf has mastered the skill known as aether editing, which can be used to tamper with the data of reality.";
    } else if (selectedTopic === 'interest') {
        botResponse = "Ketertarikan utama saya meliputi Network Security Engineer, eksplorasi Linux (OS Desktop/Server Open Source), dan tentu saja, bermain game untuk bersantai!";
    } else if (selectedTopic === 'contact') {
        botResponse = "Anda dapat menghubungi saya melalui email siwolWolfie@yopmail.com, atau coba koordinat HSR Universe saya. Klik tombol Let's Talk di laman Home!";
    } else {
        // Jawaban default jika ada error
        botResponse = "Maaf, saya tidak mengerti pilihan tersebut. Pilih salah satu opsi yang tersedia.";
    }

    // Tunda sedikit untuk simulasi membalas
    setTimeout(() => {
        addMessage(botResponse, 'bot');
    }, 500);
}

// Function untuk membuka/menutup Chatbot
function toggleChatbot() {
    // DOM Manipulation: Mengubah class untuk animasi buka/tutup
    chatbotContainer.classList.toggle('closed');
}

// Event Listener: Menambahkan event click ke tombol pilihan
chatOptions.forEach(button => {
    button.addEventListener('click', handleOptionClick);
});

// Event Listener: Menambahkan event click ke header untuk buka/tutup
document.getElementById('chatbot-header').addEventListener('click', toggleChatbot);

// Inisialisasi: Tutup chatbot secara default saat memuat
document.addEventListener('DOMContentLoaded', () => {
    chatbotContainer.classList.add('closed');
});

