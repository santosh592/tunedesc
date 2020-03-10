package com.tuned.tunedesc.web.visitor;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.helper.RoleHelper;

public class RoleDtoVisitorImpl implements BaseVisitor<RoleDto, Role> {


    @Override
    public RoleDto visit(Role role) {

        return new RoleHelper().buildDto(role);
    }
}
