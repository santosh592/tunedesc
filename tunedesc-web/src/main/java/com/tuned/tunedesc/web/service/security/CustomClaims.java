package com.tuned.tunedesc.web.service.security;

import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class CustomClaims implements TokenEnhancer {

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken,
			OAuth2Authentication authentication) {
		Map<String, Object> additionalInfo = new HashMap<String, Object>();
		additionalInfo.put("organization", authentication.getName()
				+ UUID.randomUUID());
		((DefaultOAuth2AccessToken) accessToken)
				.setAdditionalInformation(additionalInfo);
		return accessToken;
	}

	

}
