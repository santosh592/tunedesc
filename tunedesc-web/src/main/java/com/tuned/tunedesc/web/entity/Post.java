package com.tuned.tunedesc.web.entity;

import com.tuned.tunedesc.web.visitor.BaseVisitor;
import com.tuned.tunedesc.web.visitor.Visitable;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "post")
public class Post extends BaseModel implements Visitable {


    private PostType postType;

    private String title;

    private BusinessCategory businessCategory;

    private String description;
    private Date postExprationDate;
    @DBRef
    private User user;

    @PersistenceConstructor
    public Post(Long id, PostType postType, String title, String description, User user, BusinessCategory businessCategory, Date postExprationDate) {
        super(id);
        this.postType = postType;
        this.title = title;
        this.description = description;
        this.user = user;
        this.businessCategory=businessCategory;
        this.postExprationDate = postExprationDate;
    }

    public Post() {

    }


    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BusinessCategory getBusinessCategory() {
        return businessCategory;
    }

    public void setBusinessCategory(BusinessCategory businessCategory) {
        this.businessCategory = businessCategory;
    }

    public Date getPostExprationDate() {
        return postExprationDate;
    }

    public void setPostExprationDate(Date postExprationDate) {
        this.postExprationDate = postExprationDate;
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
        return "Post{" +
                "postType=" + postType +
                ", title='" + title + '\'' +
                ", businessCategory=" + businessCategory +
                ", description='" + description + '\'' +
                ", user=" + user +
                '}';
    }
}
