FROM python:3

COPY action.sh /action.sh
COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt && chmod +x /action.sh

ENTRYPOINT ["/action.sh"]
