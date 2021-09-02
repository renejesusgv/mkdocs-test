FROM python:3

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD mkdocs serve -a 0.0.0.0:9090 --dirtyreload
