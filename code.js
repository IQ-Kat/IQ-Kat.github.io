function checkSecretCode() {
    const codeInput = document.getElementById('secretCode').value;
    
    // Object mapping secret codes to URLs
    const codes = {
        'nirfatDasbor': 'https://iq-kat.github.io/DashboarPenjualanMakeUp',
        'LB7853': 'https://unity-connect-prd.storage.googleapis.com/20210923/c709e76b-3e93-4140-8675-f694b9f04399/Prototype%201%20-%20Starter%20Files.zip',
        'LB5092': 'https://unity-connect-prd.storage.googleapis.com/20210923/c709e76b-3e93-4140-8675-f694b9f04399/Prototype%201%20-%20Starter%20Files.zip',
        // Add more codes and URLs as needed
    };

    // Check if the entered code exists in the object
    if (codes[codeInput]) {
        window.location.href = codes[codeInput];
    } else {
        alert('Kode tidak valid, Silakan coba lagi Atau Hubungi Admin Ikbal; ');
    }
}
