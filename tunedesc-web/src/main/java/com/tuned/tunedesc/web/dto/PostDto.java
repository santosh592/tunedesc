package com.tuned.tunedesc.web.dto;

import com.tuned.tunedesc.common.dto.BaseDto;
import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.web.entity.PostType;


public class PostDto extends BaseDtoImpl implements BaseDto {
    private String title;
    private String content;
    private PostType postType;

    private Long userId;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

