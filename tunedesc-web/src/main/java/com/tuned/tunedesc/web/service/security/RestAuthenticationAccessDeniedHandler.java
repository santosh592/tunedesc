package com.tuned.tunedesc.web.service.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

public class RestAuthenticationAccessDeniedHandler implements
		AccessDeniedHandler {

	@Override
	public void handle(HttpServletRequest arg0, HttpServletResponse arg1,
			AccessDeniedException arg2) throws IOException, ServletException {
		 arg1.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");

	}

}
