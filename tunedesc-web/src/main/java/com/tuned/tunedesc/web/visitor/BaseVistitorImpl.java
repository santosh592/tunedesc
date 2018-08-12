package com.tuned.tunedesc.web.visitor;

import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.entity.Post;
import com.tuned.tunedesc.web.entity.Role;
import com.tuned.tunedesc.web.entity.User;
import com.tuned.tunedesc.web.helper.PostHelper;
import com.tuned.tunedesc.web.helper.RoleHelper;
import com.tuned.tunedesc.web.helper.UserHelper;

public class BaseVistitorImpl implements BaseVisitor {

    @Override
    public RoleDto visit(Role role) { return  RoleHelper.buildDto(role);

    }

    @Override
    public UserDto visit(User user) { return UserHelper.buildDto(user);
    }

    @Override
    public PostDto visit(Post post) {
        return PostHelper.buildDto(post);
    }

    @Override
    public Role visit(RoleDto roleDto) { return RoleHelper.buildEntity(roleDto);
    }

    @Override
    public User visit(UserDto userDto) { return UserHelper.buildEntity(userDto);
    }

    @Override
    public Post visit(PostDto postDto) {
        return PostHelper.buildEntity(postDto);
    }
}
