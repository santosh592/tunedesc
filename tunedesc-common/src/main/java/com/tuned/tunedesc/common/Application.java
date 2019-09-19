package com.tuned.tunedesc.common;

import com.tuned.tunedesc.common.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Arrays;

@SpringBootApplication
public class Application   {

   /* @Autowired
    private ApplicationContext appContext;*/

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }

    /*@Override
    public void run(String... args) throws Exception {

        String[] beans = appContext.getBeanDefinitionNames();
        Arrays.sort(beans);
        for (String bean : beans) {
            System.out.println(bean);
        }

    }*/
}
