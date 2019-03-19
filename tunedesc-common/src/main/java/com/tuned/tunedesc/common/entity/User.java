package com.tuned.tunedesc.common.entity;


import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.common.visitor.Visitable;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Document(collection = "user")
public class User extends BaseModel implements Visitable {


    private String username;
    private String email;
    private String password;
    private String phonenumber;

    private boolean enabled = false;
    private boolean accountNonExpired = false;
    private boolean credentialsNonExpired = false;
    private boolean accountNonLocked = false;
    @Transient
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    @DBRef
    private List<Role> role;

    @PersistenceConstructor
    public User(Long id, String username, String email, String password, String phonenumber, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, List<Role> role) {
        super(id);
        this.username = username;
        this.email = email;
        this.password = password;
        this.phonenumber = phonenumber;

        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.credentialsNonExpired = credentialsNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.role = role;
    }

    public User() {

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
        this.password = encodePassword(password);
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

    public List<Role> getRole() {
        return role;
    }

    public void setRole(List<Role> role) {
        this.role = role;
    }


    public String encodePassword(String password) {

        return passwordEncoder.encode(password);
    }




    @Override
    public void accept(BaseVisitor visitor) {
        setVisited(visitor.visit(this));

    }

    @Override
    public Object getVisitor() {
        return getVisited();
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phonenumber='" + phonenumber + '\'' +

                ", enabled=" + enabled +
                ", accountNonExpired=" + accountNonExpired +
                ", credentialsNonExpired=" + credentialsNonExpired +
                ", accountNonLocked=" + accountNonLocked +
                ", role=" + role +
                '}';
    }
}
