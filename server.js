const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors'); // Instala con: npm install cors
const app = express();

app.use(cors({
    origin: 'https://redkstudios.boxmine.xyz', // Permite explícitamente tu dominio
    methods: ['GET', 'POST']
}));

app.get('/download', (req, res) => {
const path = require('path');
const ytDlpPath = path.join(__dirname, 'bin', 'yt-dlp');

const ytDlp = spawn(ytDlpPath, [
    '-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
    '--output', '-', 
    url

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');

    ytDlp.stdout.pipe(res);
});

app.listen(3000);
