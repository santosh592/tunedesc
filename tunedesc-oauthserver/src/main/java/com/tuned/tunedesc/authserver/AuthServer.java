package com.tuned.tunedesc.authserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.Collections;

@ComponentScan (basePackages = "com.tuned.tunedesc.web.repository")
@SpringBootApplication
public class AuthServer {

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(AuthServer.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", "8083"));
        app.run(args);
    }

}