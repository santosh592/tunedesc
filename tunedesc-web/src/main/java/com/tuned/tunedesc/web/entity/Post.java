package com.tuned.tunedesc.web.entity;

import com.tuned.tunedesc.common.entity.BaseModel;
import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.common.visitor.Visitable;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "post")
public class Post extends BaseModel implements Visitable {

    private String title;

    private String content;
    @DBRef
    private PostType postType;

    private String description;

    @DBRef
    private User user;

    @PersistenceConstructor
    public Post(Long id, String title, String content, PostType postType, String description, User user) {
        super(id);
        this.title = title;
        this.content = content;
        this.postType = postType;

        this.description = description;
        this.user = user;

    }

    public Post() {

    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
                "content='" + content + '\'' +
                ", postType=" + postType +
                ", description='" + description + '\'' +
                ", user=" + user +
                '}';
    }
}
