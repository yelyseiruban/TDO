
FROM golang:latest


WORKDIR /app


COPY main.go .


COPY index.html .

RUN go mod init test
RUN go build -o main .


EXPOSE 8081


CMD ["./main"]