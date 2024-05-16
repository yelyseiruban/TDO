# Użyj oficjalny obraz Node.js w wersji 14
FROM node:14

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json (jeśli istnieje)
COPY package*.json ./

# Zainstaluj zależności aplikacji
RUN npm install

# Skopiuj resztę kodu aplikacji
COPY . .

# Egzekwuj aplikację
CMD ["node", "server.js"]
