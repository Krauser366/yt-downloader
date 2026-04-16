const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors'); // Instala con: npm install cors
const app = express();

app.use(cors()); // Permite peticiones desde cualquier origen

app.get('/download', (req, res) => {
    const url = req.query.url;
    // yt-dlp envía los datos binarios del video
    const ytDlp = spawn('yt-dlp', ['-f', 'best', '--output', '-', url]);

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');

    ytDlp.stdout.pipe(res);
});

app.listen(3000);
