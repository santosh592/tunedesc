package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.dto.AccountDto;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.exception.SequenceException;
import com.tuned.tunedesc.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping(value = "/user")


public class UserControllerImpl extends BaseControllerImpl<UserDto> implements UserController {

    @Autowired
    private UserService userService;

    @Autowired
    public UserControllerImpl(UserService userService) {
        super(userService);
        this.userService = userService;
    }

    @RequestMapping(value = "/activate/{id}", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ResponseDto<AccountDto>> activateAccount(@PathVariable long id) throws SequenceException {
        AccountDto accountDto = userService.activete(id);
        ResponseDto responseDto = null;
        if (accountDto != null) {
            responseDto = new ResponseDto();
            responseDto.setResposeobject(accountDto);
            responseDto.setMessage("");

            return new ResponseEntity<ResponseDto<AccountDto>>(responseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<ResponseDto<AccountDto>>(HttpStatus.BAD_REQUEST);
        }

    }


    @RequestMapping(value = "/userdetails", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<ResponseDto<UserDto>> currentUserName(Authentication authentication) {

        ResponseDto responseDto = userService.findByUsername(authentication.getName());

        return new ResponseEntity<ResponseDto<UserDto>>(responseDto, HttpStatus.OK);


    }

}


