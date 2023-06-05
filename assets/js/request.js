(async () => {
    const res = await fetch('https://api.github.com/users/ricalope');
    if(res.ok) {
        const data = await res.json();
        console.log("🚀 ~ file: request.js:5 ~ data:", data);

        const portfolioImage = document.getElementById('portfolio-img');
        const portfolioBio = document.getElementById('portfolio-bio');
        portfolioImage.src = data.avatar_url;
        portfolioBio.innerText = data.bio;
    }
})()
