# Wybierz obraz bazowy
FROM python:3.8-slim

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /

# Skopiowanie plików aplikacji do kontenera
COPY . .

# Instalacja zależności
RUN pip install -r requirements.txt

# Definicja portu, na którym będzie działać aplikacja
EXPOSE 8080

# Uruchomienie aplikacji
CMD ["python", "app.py"]
