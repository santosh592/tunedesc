package com.tuned.tunedesc.web.dto;

import com.tuned.tunedesc.common.dto.BaseDto;
import com.tuned.tunedesc.common.visitor.BaseVisitor;
import com.tuned.tunedesc.web.entity.BusinessCategory;
import com.tuned.tunedesc.web.entity.PostType;

import java.util.Date;


public class PostDto extends BaseDtoImpl implements BaseDto {


    private PostType postType;

    private String title;

    private String companyName;

    private BusinessCategory businessCategory;

    private String aboutcompany;

    private String description;

    private Date postExpirationDate;

    private Long userId;


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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public BusinessCategory getBusinessCategory() {
        return businessCategory;
    }

    public void setBusinessCategory(BusinessCategory businessCategory) {
        this.businessCategory = businessCategory;
    }

    public String getAboutcompany() {
        return aboutcompany;
    }

    public void setAboutcompany(String aboutcompany) {
        this.aboutcompany = aboutcompany;
    }

    public Date getPostExpirationDate() {
        return postExpirationDate;
    }

    public void setPostExpirationDate(Date postExpirationDate) {
        this.postExpirationDate = postExpirationDate;
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

