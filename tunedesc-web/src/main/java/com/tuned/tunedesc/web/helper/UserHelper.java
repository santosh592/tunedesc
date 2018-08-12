package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.web.dto.RoleDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.entity.Role;
import com.tuned.tunedesc.web.entity.User;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class UserHelper {

    final static Logger log = Logger.getLogger(UserHelper.class);


    public static UserDto buildDto(User user) {

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

            user.getRole().forEach(role -> {

                roleDtos.add(RoleHelper.buildDto(role));

            });

            userDto.setRoleDtos(roleDtos);

            return userDto;
        }
        log.info("data is null");
        return null;
    }


    public static User buildEntity(UserDto userDto) {

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
            Role role = new Role();


            List<Role> roles = new ArrayList<>();
            userDto.getRoleDtos().forEach(roleDto -> {
                roles.add(RoleHelper.buildEntity(roleDto));
            });

            user.setRole(roles);

            return user;
        }
        log.info("data is null");
        return null;
    }


}
