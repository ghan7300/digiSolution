# How to Run This Project

## Backend (Spring Boot + MySQL)
1. **Set up MySQL**:
   ```sql
   CREATE DATABASE digiprint;

## Configure application.properties:
   
spring.application.name=Test
# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/digiprint

spring.datasource.username=root

spring.datasource.password=root

# Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Server Port
server.port=8080

## Run Spring Boot:

cd backend

mvn spring-boot:run

## Frontend (Angular)

Install dependencies:
cd FE
npm install

Run Angular:
ng serve
