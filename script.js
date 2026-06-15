document.getElementById('yesBtn').addEventListener('click', function() {
    // Soru baloncuğunu gizle
    document.getElementById('questionBubble').style.display = 'none';
    
    // Sonuç ekranını göster
    document.getElementById('resultScreen').style.display = 'flex';
    
    // Çiçek ve kalpleri oluştur
    createFlowersAndHearts();
});

function createFlowersAndHearts() {
    const container = document.getElementById('flowersHearts');
    const flowers = ['🌼', '🌻', '🌷', '🌹'];
    const hearts = ['❤️', '💕', '💖', '💗'];
    
    // 30 çiçek ve kalp oluştur
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        
        // Rastgele çiçek veya kalp seç
        if (Math.random() > 0.4) {
            element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            element.className = 'flower';
        } else {
            element.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            element.className = 'heart';
        }
        
        // Rastgele konum
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        
        // Rastgele delay
        element.style.animationDelay = Math.random() * 2 + 's';
        
        // Rastgele animasyon süresi
        const duration = 5 + Math.random() * 4;
        element.style.animationDuration = duration + 's';
        
        container.appendChild(element);
    }
    
    // Belirli aralıklarla daha fazla çiçek ve kalp ekle
    setInterval(() => {
        if (document.getElementById('resultScreen').style.display !== 'none') {
            const element = document.createElement('div');
            
            if (Math.random() > 0.4) {
                element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
                element.className = 'flower';
            } else {
                element.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                element.className = 'heart';
            }
            
            element.style.left = Math.random() * 100 + '%';
            element.style.top = '100%';
            element.style.animationDelay = '0s';
            
            const duration = 5 + Math.random() * 4;
            element.style.animationDuration = duration + 's';
            
            container.appendChild(element);
        }
    }, 500);
}
