FROM oraclelinux:7-slim

# RUN yum upgrade -y && yum install yum-utils
# RUN  yum -y install oracle-release-el7 && \
#      yum-config-manager --enable ol7_oracle_instantclient && \
#      yum -y install oracle-instantclient19.3-basiclite && \
#      rm -rf /var/cache/yum

RUN yum-config-manager --enable *addons
RUN yum install -y gcc-c++ make libaio

RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum install -y nodejs

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install

RUN npm install -g nodemon
COPY . .
EXPOSE 3000

CMD [ "node", "server.js" ]