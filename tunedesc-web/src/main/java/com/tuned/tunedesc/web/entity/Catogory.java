package com.tuned.tunedesc.web.entity;

import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.Date;

public class Catogory implements Serializable {


    private static final long serialVersionUID = -6926282691950389004L;
    @Id
    private Long id;

    private String type;

    private Date date_inserted;


    public Long getId() {
        return id;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    public void setDate_inserted(Date date_inserted) {
        this.date_inserted = date_inserted;
    }

    public Date getDate_inserted() {
        return date_inserted;
    }

    @Override
    public String toString() {
        return "Catogory{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }

}
