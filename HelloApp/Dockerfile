FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/helloapp.war helloapp.war
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/helloapp.war"]
