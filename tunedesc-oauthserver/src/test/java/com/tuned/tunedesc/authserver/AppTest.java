package com.tuned.tunedesc.authserver;

import com.tuned.tunedesc.authserver.config.MongoUserDetailsService;
import com.tuned.tunedesc.authserver.config.OAuth2Configuration;
import javafx.application.Application;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Arrays;

/**
 * Unit test for simple App.
 */
@SpringBootApplication
public class AppTest  implements CommandLineRunner {
    @Autowired
    private ApplicationContext appContext;

    public static void main(String[] args) throws Exception {
        SpringApplication.run(AuthServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        String[] beans = appContext.getBeanDefinitionNames();
        Arrays.sort(beans);
        for (String bean : beans) {
            System.out.println(bean);
        }
System.out.println("oauth bean"+appContext.getBean(MongoUserDetailsService.class));
    }
}

