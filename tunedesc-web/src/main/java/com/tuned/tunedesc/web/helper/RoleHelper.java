package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.entity.Role;

public class RoleHelper {


    public static RoleDto buildDto(Role role) {

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

    public static Role buildEntity(RoleDto roleDto) {
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
