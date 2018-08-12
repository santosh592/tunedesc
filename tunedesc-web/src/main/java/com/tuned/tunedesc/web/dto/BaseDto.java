package com.tuned.tunedesc.web.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tuned.tunedesc.web.visitor.BaseVisitor;


public interface BaseDto {
    public void accept(BaseVisitor baseVisitorDto);
    @JsonIgnore
    public Object getVistorDto();
}
