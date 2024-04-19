FROM python:3.8-alpine
WORKDIR /app
COPY reqs.txt .
RUN pip install -r reqs.txt
COPY app.py .
CMD ["python", "app.py"]