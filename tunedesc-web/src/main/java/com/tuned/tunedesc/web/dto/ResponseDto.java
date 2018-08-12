package com.tuned.tunedesc.web.dto;

import java.util.List;

public class ResponseDto<T> {


    private T resposeobject;
    private List<T>  listOfobjects;

    private String Message;


    public T getResposeobject() {
        return resposeobject;
    }

    public void setResposeobject(T resposeobject) {
        this.resposeobject = resposeobject;
    }

    public List<T> getListOfobjects() {
        return listOfobjects;
    }

    public void setListOfobjects(List<T> listOfobjects) {
        this.listOfobjects = listOfobjects;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        Message = message;
    }
}
