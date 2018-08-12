package com.tuned.tunedesc.web.dto;



public class BaseDtoImpl {

    private Long id;
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Object varhelper;



    public Object getVarhelper() {
        return varhelper;
    }

    public void setVarhelper(Object varhelper) {
        this.varhelper = varhelper;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



}
