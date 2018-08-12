package com.tuned.tunedesc.web.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.io.Serializable;
import java.util.Date;

public class BaseModel implements Serializable {

    private static final long serialVersionUID = 295265311830636272L;
    @Id
    private Long id;

    private Date date_inserted;

    @Transient
    private Object visited;

    public BaseModel(Long id) {
        this.id=id;
    }

    public BaseModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate_inserted() {
        return date_inserted;
    }

    public void setDate_inserted(Date date_inserted) {
        this.date_inserted = date_inserted;
    }


    public Object getVisited() {
        return visited;
    }

    public void setVisited(Object visited) {
        this.visited = visited;
    }
}
