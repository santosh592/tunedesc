package com.tuned.tunedesc.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
public class ResourceManagerConfig extends ResourceServerConfigurerAdapter

{

    public ResourceManagerConfig() {
        super();
    }


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .antMatcher("/**")
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/requestdetails/view-all-details/**").permitAll()
                .antMatchers("/api/**").authenticated();


    }

}
