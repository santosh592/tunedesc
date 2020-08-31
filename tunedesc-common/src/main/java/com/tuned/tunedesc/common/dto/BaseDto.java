package com.tuned.tunedesc.common.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tuned.tunedesc.common.visitor.BaseVisitor;


public interface BaseDto {
    void accept(BaseVisitor baseVisitorDto);
    @JsonIgnore
    Object getVistorDto();
}
