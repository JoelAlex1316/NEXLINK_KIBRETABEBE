document.getElementById("saveContact").addEventListener("click", async () => {
    // Convert profile picture to base64
    const profilePic = await fetch('pp.jpg')
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }));

    // Contact information
    const contactInfo = {
        name: "Kibret Abebe",
        company: "Tebita Ambulance",
        address: "Addis Ababa, Ethiopia",
        phone: "+251910912773",
        email: "kibret1@yahoo.com",
        website: "hrrps://tebitambulance.com",
        photo: profilePic
    };

    // Generate vCard content
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
ADR;TYPE=WORK,PREF:;;${contactInfo.address}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
PHOTO;ENCODING=b;TYPE=JPEG:${contactInfo.photo.split(',')[1]}
END:VCARD`;

    // Create a blob for the vCard file
    const blob = new Blob([vCard], { type: "text/vcard" });

    // Create a link element to download the file
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${contactInfo.name.replace(/\s+/g, "_")}_Contact.vcf`;
    a.click();
});


function createMusicParticles() {
    const particleContainer = document.querySelector('.music-particles');
    const numParticles = 5; // Number of particles

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('music-particle');
        particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        particle.style.animationDuration = `${Math.random() * 8 + 5}s`; // Random animation speed
        particle.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        particleContainer.appendChild(particle);
    }
}

createMusicParticles();