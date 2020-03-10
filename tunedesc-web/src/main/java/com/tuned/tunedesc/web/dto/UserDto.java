package com.tuned.tunedesc.web.dto;


import com.tuned.tunedesc.common.dto.BaseDto;
import com.tuned.tunedesc.common.visitor.BaseVisitor;

import javax.validation.constraints.NotNull;
import java.util.List;

public class UserDto extends BaseDtoImpl implements BaseDto {


    @NotNull
    private String username;
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String phonenumber;


    private boolean enabled = false;
    private boolean accountNonExpired = false;
    private boolean credentialsNonExpired = false;
    private boolean accountNonLocked = false;

    private List<RoleDto> roleDtos;

    public List<RoleDto> getRoleDtos() {
        return roleDtos;
    }

    public void setRoleDtos(List<RoleDto> roleDtos) {
        this.roleDtos = roleDtos;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }


    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
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
