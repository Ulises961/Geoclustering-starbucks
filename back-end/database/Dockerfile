FROM postgres:11.1-alpine

COPY . /database

ENTRYPOINT ["python"]

CMD ["db_create.py"]