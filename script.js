document.addEventListener('DOMContentLoaded', function() {
    // Affiliate Link
    const affiliateBtn = document.getElementById('affiliate-btn');
    const affiliateLink = 'https://vt.tokopedia.com/t/ZSSNRTPeq/';
    
    affiliateBtn.addEventListener('click', function() {
        // Buka link affiliate di tab baru
        window.open(affiliateLink, '_blank');
        
        // Optional: Tracking klik (gunakan API tracking Anda sendiri)
        trackAffiliateClick();
    });
    
    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 0);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `Penawaran berakhir dalam ${Math.floor(hours).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update countdown setiap detik
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Fungsi untuk tracking klik (contoh)
    function trackAffiliateClick() {
        // Ganti dengan kode tracking Anda
        console.log('Affiliate link clicked:', affiliateLink);
        // Contoh: Menggunakan Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                'event_category': 'engagement',
                'event_label': 'Tokopedia Affiliate'
            });
        }
    }
    
    // Animasi tombol saat hover
    affiliateBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 5px 15px rgba(66, 181, 73, 0.3)';
    });
    
    affiliateBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    // Dynamic Product Data (contoh)
    // Anda bisa mengganti ini dengan data dinamis dari API
    const productData = {
        title: "Produk Eksklusif Kreator Tokopedia",
        description: "Produk berkualitas tinggi dari kreator terbaik di Tokopedia. Dapatkan sekarang dengan harga spesial sebelum kehabisan!",
        price: "Rp199.000",
        imageUrl: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/10/25/5f4f3c1c-0e5b-4c4f-9c7c-7c8a3b0d3f7e.jpg"
    };
    
    // Set product data
    document.getElementById('product-title').textContent = productData.title;
    document.getElementById('product-desc').textContent = productData.description;
    document.getElementById('product-price').textContent = productData.price;
    document.getElementById('product-img').src = productData.imageUrl;
    document.getElementById('product-img').alt = productData.title;
});