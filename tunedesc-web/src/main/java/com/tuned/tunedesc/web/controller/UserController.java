package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.dto.AccountDto;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;

public interface UserController {

    ResponseEntity<ResponseDto<UserDto>> currentUserName(Authentication authentication);

    ResponseEntity<ResponseDto<AccountDto>> activateAccount(@PathVariable long id);
}
