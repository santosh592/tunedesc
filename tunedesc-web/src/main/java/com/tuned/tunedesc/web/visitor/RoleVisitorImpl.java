package com.tuned.tunedesc.web.visitor;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.helper.RoleHelper;

public class RoleVisitorImpl implements BaseVisitor<Role, RoleDto> {
    @Override
    public Role visit(RoleDto roleDto) {

        return new RoleHelper().buildEntity(roleDto);
    }
}
