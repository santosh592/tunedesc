package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/role")
public class RoleControllerImpl extends BaseControllerImpl<RoleDto> implements RoleController {

    @Autowired
    public RoleControllerImpl(RoleService baseService) {
        super(baseService);
    }
}
