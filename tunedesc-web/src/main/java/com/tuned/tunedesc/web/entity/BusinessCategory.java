package com.tuned.tunedesc.web.entity;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "businesscategory")
public class BusinessCategory extends  Catogory{


    public BusinessCategory() {
    }
}
