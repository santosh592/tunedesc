package com.tuned.tunedesc.web.dto;

import com.tuned.tunedesc.common.dto.BaseDto;
import com.tuned.tunedesc.common.visitor.BaseVisitor;


public class RoleDto extends BaseDtoImpl implements BaseDto {


    private String role;
    private String roleDescription;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }


    @Override
    public void accept(BaseVisitor baseVisitorDto) {
        setVarhelper(baseVisitorDto.visit(this));
    }


    @Override
    public Object getVistorDto() {
        return getVarhelper();
    }
}
