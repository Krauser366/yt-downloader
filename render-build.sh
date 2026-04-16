#!/usr/bin/env bash
# Salir ante errores
set -o errexit

# Crear carpeta bin si no existe
mkdir -p bin

# Descargar yt-dlp directamente a la carpeta bin
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o ./bin/yt-dlp
chmod a+rx ./bin/yt-dlp
