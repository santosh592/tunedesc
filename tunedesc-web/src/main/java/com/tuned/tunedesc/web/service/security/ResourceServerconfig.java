package com.tuned.tunedesc.web.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableResourceServer
@EnableWebSecurity
public class ResourceServerconfig extends
        ResourceServerConfigurerAdapter {
    @Autowired
    private CustomAuthenticationEntryPoint customautheticationEntryPoint;
    @Autowired
    private CustomLogoutSuccessHandler customlogoutSuccessHandler;
    @Autowired
    private TunedescResourceConfig tundescResourceConfig;

    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.
                anonymous().and()
                .authorizeRequests()
                .antMatchers("/user/saveDocument").permitAll()
                .antMatchers("/user/activate/{\\\\d+}").permitAll().and()
                .exceptionHandling()
                .authenticationEntryPoint(customautheticationEntryPoint)
                .and()
                .logout()
                .logoutUrl("/oauth/logout")
                .logoutSuccessHandler(customlogoutSuccessHandler)
                .and()
                .csrf()
                .requireCsrfProtectionMatcher(
                        new AntPathRequestMatcher("/oauth/authorize"))
                .disable().headers().frameOptions().disable()
                .and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests().antMatchers("/**").authenticated();

    }

    @Bean
    public ResourceServerTokenServices tokenService() {
        RemoteTokenServices tokenServices = new RemoteTokenServices();
        tokenServices.setClientId("tunedesc");
        tokenServices.setClientSecret("txsLnIXH1FBAHhCppqAnZcESq1Gku3df");
        tokenServices.setCheckTokenEndpointUrl("http://localhost"
                + ":"
                + "8090"
                + "/"
                + "oauth/check_token");
        return tokenServices;
    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources)
            throws Exception {
        resources.tokenServices(tokenService());

    }

}

