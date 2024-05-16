ARG ALPINE_VERSION=3.19
ARG PYTHON_VERSION=3.10.14
ARG PORT=5000
FROM python:${PYTHON_VERSION}-alpine${ALPINE_VERSION}

ENV PYTHON_VERSION=${PYTHON_VERSION}

ENV PORT=${PORT}

WORKDIR /app

COPY myapp /app/myapp

ENV FLASK_APP=myapp/app.py

RUN pip install -r /app/myapp/requirements.txt

EXPOSE ${PORT}

CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]

