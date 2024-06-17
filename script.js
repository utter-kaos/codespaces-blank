document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'f3a148e0492f87dae334038606d4a89f';
    const username = 'bikwong';
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recentTrack = data.recenttracks.track[0];
            const trackName = recentTrack.name;
            const artistName = recentTrack.artist['#text'];
            const albumArt = recentTrack.image[2]['#text']; // Medium size image

            document.getElementById('track-name').textContent = trackName;
            document.getElementById('artist-name').textContent = artistName;
            document.getElementById('album-art').src = albumArt;
        })
        .catch(error => console.error('Error fetching data:', error));
});
