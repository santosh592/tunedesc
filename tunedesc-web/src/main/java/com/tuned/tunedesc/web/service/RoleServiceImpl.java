package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.helper.RoleHelper;
import com.tuned.tunedesc.web.repository.RoleRepository;
import com.tuned.tunedesc.web.repository.SequenceIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl  extends BaseServiceImpl<RoleDto,Role> implements  RoleService {

    @Autowired
    private RoleRepository roleRepository;

    private RoleHelper roleHelper;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository, SequenceIdRepository sequenceIdRepository,RoleHelper roleHelper) {
        super(roleRepository,sequenceIdRepository,roleHelper);

    }

    public Role findRoleById(Long id){
        return roleRepository.findOne(id);

    }

}
