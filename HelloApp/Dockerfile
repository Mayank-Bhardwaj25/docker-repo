FROM openjdk:17-jdk-slim
COPY target/helloapp.war helloapp.war
ENTRYPOINT ["java","-jar","/helloapp.war"]