package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.AccountDto;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.dto.UserDto;


public interface UserService extends BaseService<UserDto> {
    AccountDto activete(long id);

    ResponseDto findByUsername(String username);
}
