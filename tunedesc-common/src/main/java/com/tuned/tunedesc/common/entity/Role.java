package com.tuned.tunedesc.common.entity;


import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.common.visitor.Visitable;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "role")
public class Role extends BaseModel implements Visitable {


    private String role;
    private String roleDescription;

    @PersistenceConstructor
    public Role(Long id, String role, String roleDescription) {
        super(id);
        this.role = role;
        this.roleDescription = roleDescription;
    }

    public Role() {

    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

    @Override
    public void accept(BaseVisitor visitor) {
        setVisited(
                visitor.visit(this));
    }


    @Transient
    @Override
    public Object getVisitor() {
        return getVisitor();
    }


    @Override
    public String toString() {
        return "Role{" +
                "role='" + role + '\'' +
                ", roleDescription='" + roleDescription + '\'' +
                '}';
    }
}
