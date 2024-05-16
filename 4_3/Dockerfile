ARG PYTHON_VERSION=3.11
FROM python:${PYTHON_VERSION}

WORKDIR /app

COPY myapp /app/myapp

ENV FLASK_APP=myapp/app.py

RUN pip install -r /app/myapp/requirements.txt

CMD ["flask", "run", "--host=0.0.0.0"]