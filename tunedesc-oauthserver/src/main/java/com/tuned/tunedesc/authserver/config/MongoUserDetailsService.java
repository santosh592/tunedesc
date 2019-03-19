
package com.tuned.tunedesc.authserver.config;


import java.util.ArrayList;
import java.util.List;


import com.tuned.tunedesc.web.entity.Role;
import com.tuned.tunedesc.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongoUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    public MongoUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public MongoUserDetailsService() {
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        com.tuned.tunedesc.web.entity.User user = userRepository.findByname(username);

        if (user.isEnabled()) {

            return new User(user.getUsername(), user.getPassword(),
                    user.isEnabled(), user.isAccountNonExpired(),
                    user.isCredentialsNonExpired(), user.isAccountNonLocked(),
                    getAuthorities(user.getRole()));
        } else {

        }

        return null;
    }

    public List<GrantedAuthority> getAuthorities(List<Role> roles) {

        List<GrantedAuthority> authList = new ArrayList<GrantedAuthority>();
        for (Role role : roles) {
            if (role.getId() == 1) {
                authList.add(new SimpleGrantedAuthority(role.getRole()));

            } else if (role.getId() == 2) {
                authList.add(new SimpleGrantedAuthority(role.getRole()));
            }
            System.out.println(authList);
            return authList;
        }

        return null ;
    }


}

