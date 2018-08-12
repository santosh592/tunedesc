package com.tuned.tunedesc.web.visitor;

import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.entity.Post;
import com.tuned.tunedesc.web.entity.Role;
import com.tuned.tunedesc.web.entity.User;

public interface BaseVisitor


{
    RoleDto visit(Role role);

    UserDto visit(User user);

    PostDto visit(Post post);

    Role visit(RoleDto roleDto);

    User visit(UserDto userDto);

    Post visit(PostDto postDto);
}
