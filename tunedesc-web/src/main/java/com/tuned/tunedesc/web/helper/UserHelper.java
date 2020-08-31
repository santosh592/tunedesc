package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.common.entity.Role;
import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserHelper implements ModelDtoHelper<UserDto, User> {

    final static Logger log = LoggerFactory.getLogger(RoleHelper.class);
    private RoleHelper roleHelper = new RoleHelper();

    public UserDto buildDto(User user) {

        UserDto userDto;
        if (user != null) {
            userDto = new UserDto();
            userDto.setId(user.getId());
            userDto.setUsername(user.getUsername());
            userDto.setAccountNonExpired(user.isAccountNonExpired());
            userDto.setAccountNonLocked(user.isAccountNonExpired());

            userDto.setCredentialsNonExpired(user.isCredentialsNonExpired());
            userDto.setEmail(user.getEmail());


            userDto.setPassword(user.getPassword());

            userDto.setPhonenumber(user.getPhonenumber());
            userDto.setEnabled(user.isEnabled());
            List<RoleDto> roleDtos = new ArrayList<>();

            user.getRole().forEach((Role role) -> {

                roleDtos.add(roleHelper.buildDto(role));

            });

            userDto.setRoleDtos(roleDtos);

            return userDto;
        }
        log.info("data is null");
        return null;
    }


    public User buildEntity(UserDto userDto) {

        User user;
        if (userDto != null) {
            user = new User();
            user.setId(userDto.getId());
            user.setUsername(userDto.getUsername());
            user.setAccountNonExpired(userDto.isAccountNonExpired());
            user.setAccountNonLocked(userDto.isAccountNonExpired());

            user.setCredentialsNonExpired(userDto.isCredentialsNonExpired());
            user.setEmail(userDto.getEmail());

            user.setPassword(userDto.getPassword());
            user.setPhonenumber(userDto.getPhonenumber());
            user.setEnabled(userDto.isEnabled());

            List<Role> roles = new ArrayList<>();
            userDto.getRoleDtos().forEach(roleDto -> {
                roles.add(roleHelper.buildEntity(roleDto));
            });

            user.setRole(roles);

            return user;
        }
        log.info("data is null");
        return null;
    }


}
