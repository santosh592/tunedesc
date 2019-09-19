package com.tuned.tunedesc.authserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.Collections;

@ComponentScan (basePackages = { "com.tuned.tunedesc.common.repository", "com.tuned.tunedesc.config","com.tuned.tunedesc.*"})
@SpringBootApplication
public class AuthServer {

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(AuthServer.class);

        app.run(args);

    }
}