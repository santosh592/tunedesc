package com.tuned.tunedesc.authserver.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
// @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final Logger log = LoggerFactory
            .getLogger(SecurityConfig.class);
    @Autowired
    private MongoUserDetailsService userDetailsService;


    /*
     * @Autowired private ResourceServerconfig ressourceServerConfig;
     */
    @Autowired
    private OAuth2Configuration authorizationServerConfiguration;

    public SecurityConfig() {

    }

    public SecurityConfig(
            OAuth2Configuration authorizationServerConfiguration) {

        this.authorizationServerConfiguration = authorizationServerConfiguration;
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());

    }


    @Override
    public void configure(WebSecurity wSecurity) throws Exception {
        wSecurity.ignoring().antMatchers("/user/saveDocument");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider());

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        log.info("WEB SEC - CONFIG HTTP");
        http.httpBasic();
        http.sessionManagement().sessionCreationPolicy(
                SessionCreationPolicy.STATELESS);

        http.authorizeRequests().and().formLogin()
                .usernameParameter("username").permitAll().and().logout()
                .logoutSuccessUrl("/").permitAll();

        http.csrf().disable();

    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Bean
    public DaoAuthenticationProvider authProvider() {
        final DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @EnableGlobalMethodSecurity(prePostEnabled = true, jsr250Enabled = true, proxyTargetClass = true)
    public static class GlobalSecurityConfiguration extends
            GlobalMethodSecurityConfiguration {

        protected MethodSecurityExpressionHandler createExpressionHandler() {

            return super.createExpressionHandler();
        }

    }


}
