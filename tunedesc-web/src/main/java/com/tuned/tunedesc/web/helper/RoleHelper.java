package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.RoleDto;
import org.springframework.stereotype.Component;

@Component
public class RoleHelper implements ModelDtoHelper<RoleDto, Role> {


    public RoleDto buildDto(Role role) {

        RoleDto roledto;

        if (role != null) {

            roledto = new RoleDto();
            roledto.setId(role.getId());
            roledto.setRoleDescription(role.getRoleDescription());
            roledto.setRole(role.getRole());
            return roledto;
        }

        return null;

    }

    public Role buildEntity(RoleDto roleDto) {
        Role role;

        if (roleDto != null) {
            role = new Role();
            role.setId(roleDto.getId());
            role.setRole(roleDto.getRole());
            role.setRoleDescription(roleDto.getRoleDescription());
            return role;
        }
        return null;
    }


}
