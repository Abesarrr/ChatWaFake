document.addEventListener('DOMContentLoaded', function () {
    appendMessage('received', 'Hallo, sayang 😘');
    setTimeout(() => {
        appendMessage('received', 'Semangat yaa walaupun aku ga ada disamping kamu 🫠');
    }, 1000);
    setTimeout(() => {
        appendMessage('received', 'Kamu jangan nakal disana ya 😋');
    }, 2000);
    setTimeout(() => {
        appendMessage('received', 'Makannya yang teratur, Jangan sampe sakit yaa 🫠');
    }, 3000);
    setTimeout(() => {
        appendMessage('received', 'Kalo kamu sakit nanti Siapa yang nemenin akuu? 🥹');
    }, 4000);
    setTimeout(() => {
        appendMessage('received', 'Jangan lupain aku ya di sana, Jangan berpindah ke lain hati 🥰');
    }, 5000);
    setTimeout(() => {
        appendMessage('received', 'kamu semangat terus ngejalanin hari-harinya yaa, aku ga bakal ngelupain kamu.. 💐 Dan satu hal yang harus kamu tau, aku engga akan pernah mau kehilanganmu karena kamu adalah penyemangatku sekaligus kesayangankuu 🫠. i love uuu moreee 🫣💗');
    }, 6000);
});

document.getElementById('sendBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;
    
    if (messageText !== '') {
        appendMessage('sent', messageText);
        messageInput.value = '';

        let replyText = '';

        if (messageText.toLowerCase().includes('mas adi')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('mass adi')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('mass')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('kangen')) {
            replyText = 'mas juga kangen banget sama ayang... 🥺';
        } else if (messageText.toLowerCase().includes('loveyoumore')) {
            replyText = 'makasih sayangku... 😚';
        } else {
            replyText = 'Lanjut di whatsapp ori aja gasih sayaaangku ❤️';
        }

        setTimeout(() => {
            appendMessage('received', replyText);
        }, 1500);
    }
});

function appendMessage(type, text) {
    const chatArea = document.getElementById('chat-area');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatArea.appendChild(messageDiv);

    chatArea.scrollTop = chatArea.scrollHeight;
}

const creditDiv = document.createElement('div');
creditDiv.className = 'credit';
creditDiv.innerHTML = '&copy; Made with ❤️ by Wahyu Adi Suryanto / Abesar';
const tiktokUrl = 'https://www.tiktok.com/@wahyuadisuryanto_'; 
creditDiv.addEventListener('click', function() {
    window.open(tiktokUrl, '_blank');
});
document.body.appendChild(creditDiv);