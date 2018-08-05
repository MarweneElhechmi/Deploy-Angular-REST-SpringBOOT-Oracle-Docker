# Deploy-Angular-REST-SpringBOOT-Oracle-Docker

  1. Vérifier si la virtualisation est Enabled ou nn.
      Si elle n'est pas activée, il faut aller au BIOS et l'activée.
  
  2. Installer docker toolbox : 
      https://docs.docker.com/toolbox/toolbox_install_windows/ 
      
  3. Faire les tutos pour apprendre à meiux utiliser docker : 
      Docker getting started : https://docs.docker.com/get-started/#prepare-your-docker-environment 
      
      Spring Boot Docker getting started : https://spring.io/guides/gs/spring-boot-docker/ 
  
  4. Faire un projet Spring boot comme comité dans ce repo : biat-sdm . ( Il faut un nom tout en miniscule pour déployer l'image sur                                                                                  docker ) 
  
  5. Ajouter un file Dockerfile qui contient : 
  
      FROM openjdk:8-jdk-alpine
      VOLUME /tmp
      ARG JAR_FILE
      COPY ${JAR_FILE} app.jar
      ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
      
  6. Ajouter dans le pom.xml : <docker.image.prefix>springio</docker.image.prefix> 
                                          et 
                                <!-- tag::plugin[] -->
                                <plugin>
                                  <groupId>com.spotify</groupId>
                                  <artifactId>dockerfile-maven-plugin</artifactId>
                                  <version>1.3.6</version>
                                  <configuration>
                                    <repository>${docker.image.prefix}/${project.artifactId}</repository>
                                    <buildArgs>
                                      <JAR_FILE>target/${project.build.finalName}.jar</JAR_FILE>
                                    </buildArgs>
                                  </configuration>
                                </plugin>
                                <!-- end::plugin[] -->
      
  

        <?xml version="1.0" encoding="UTF-8"?>
	<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>org.sid</groupId>
	<artifactId>biat-sdm</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>
	<name>biat-sdm</name>
	<description>Spring Angular </description>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.5.9.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<properties>
		<docker.image.prefix>springio</docker.image.prefix>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<start-class>org.catsid.Application</start-class>
		<java.version>1.8</java.version>
	</properties>
	<dependencies>
		<!-- marked the embedded servlet container as provided -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>com.oracle</groupId>
			<artifactId>ojdbc7</artifactId>
			<version>12.1.0.1</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>
	<build>
		<!-- <finalName>MyCatalogue-0.0.1-SNAPSHOT</finalName> -->
		<!-- Lien devient du localhost:8080/ à localhost:8080/MyCatalogue-0.0.1-SNAPSHOT/ -->
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
			<!-- tag::plugin[] -->
			<plugin>
				<groupId>com.spotify</groupId>
				<artifactId>dockerfile-maven-plugin</artifactId>
				<version>1.3.6</version>
				<configuration>
					<repository>${docker.image.prefix}/${project.artifactId}</repository>
					<buildArgs>
						<JAR_FILE>target/${project.build.finalName}.jar</JAR_FILE>
					</buildArgs>
				</configuration>
			</plugin>
			<!-- end::plugin[] -->
		</plugins>
	</build>
	</project>

  7. Faire les commandes maven : 
  
      mvnw package
      mvnw install dockerfile:build
   
  8. Aller dans le shell docker : 
  
      $ docker image ls
      $ docker run -p 8080:8080 -t springio/biat-sdm
      
  9. Si vous êtes sorti de la console docker et vous voulez avoir le log du projet : 
      
      $ docker container ls 
      prendre l'id du container sur lequelle vous travaillez ( exemple : 45cd3f795215 ) 
      $ docker logs 45cd3f795215
  
  10. Pour arrêtervle container : 
  
      $ docker stop container 45cd3f795215 
      
