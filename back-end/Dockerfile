FROM python
COPY ./requirements.txt /
RUN pip install -r requirements.txt
COPY . /
ENTRYPOINT [ "python" ]
CMD [ "api.py" ]

