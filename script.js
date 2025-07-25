document.addEventListener('DOMContentLoaded', function() {
    // Animasi awal
    setTimeout(() => {
        document.getElementById('channelBanner').classList.add('visible');
        document.getElementById('channelInfo').classList.add('visible');
        document.getElementById('optionsContainer').classList.add('visible');
    }, 300);

    // Efek scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const maxScroll = 500;
        const scrollRatio = Math.min(scrollPosition / maxScroll, 1);
        
        // Ubah warna background
        const lightBlue = [88, 180, 255];
        const darkBlue = [0, 74, 132];
        
        const currentColor = lightBlue.map((channel, index) => {
            return Math.round(channel + (darkBlue[index] - channel) * scrollRatio);
        });
        
        document.body.style.backgroundColor = `rgb(${currentColor.join(',')})`;
        
        // Toggle class untuk wave effect
        if (scrollPosition > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Tombol white paper
    document.getElementById('whitePaperBtn').addEventListener('click', function() {
        window.open('assets/whitepaper.pdf', '_blank');
    });
});
