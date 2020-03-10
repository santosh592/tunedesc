package com.tuned.tunedesc.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.tuned.tunedesc.*")
public class TunedescWebApp {
    public static void main(String[] args) {
        SpringApplication.run(TunedescWebApp.class, args);
    }

}

