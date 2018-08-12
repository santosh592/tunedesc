package com.tuned.tunedesc.authserver.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "tuned.client")
public class BarhaClientConfig {

    private String clientid;
    private String secret;
    private List<String> scope = new ArrayList<String>();
    private List<String> grantTypes = new ArrayList<String>();
    private List<String> authorities = new ArrayList<String>();
    private int tokenValiditySecs = 3600;
    private int refreshTokenValiditySecs = 3601;

    public String getClientid() {
        return clientid;
    }

    public void setClientid(String clientid) {
        this.clientid = clientid;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public List<String> getScope() {
        return scope;
    }

    public void setScope(List<String> scope) {
        this.scope = scope;
    }

    public List<String> getGrantTypes() {
        return grantTypes;
    }

    public void setGrantTypes(List<String> grantTypes) {
        this.grantTypes = grantTypes;
    }

    public int getTokenValiditySecs() {
        return tokenValiditySecs;
    }

    public void setTokenValiditySecs(int tokenValiditySecs) {
        this.tokenValiditySecs = tokenValiditySecs;
    }

    public int getRefreshTokenValiditySecs() {
        return refreshTokenValiditySecs;
    }

    public void setRefreshTokenValiditySecs(int refreshTokenValiditySecs) {
        this.refreshTokenValiditySecs = refreshTokenValiditySecs;
    }

    public List<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<String> authorities) {
        this.authorities = authorities;
    }

}
