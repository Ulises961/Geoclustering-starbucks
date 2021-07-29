FROM python
COPY ./requirements.txt /
WORKDIR /
RUN pip install -r requirements.txt
COPY . /
ENTRYPOINT [ "python" ]
CMD [ "api.py" ]

