FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/usermanagement.war usermanagement.war
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/usermanagement.war"]