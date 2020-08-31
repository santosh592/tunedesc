package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.web.dto.RoleDto;


public interface RoleService extends BaseService<RoleDto> {

    Role findRoleById(Long id);

}
