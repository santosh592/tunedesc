package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.entity.Role;

public interface RoleService extends BaseService<RoleDto>{

    public Role findRoleById(Long id);

}
