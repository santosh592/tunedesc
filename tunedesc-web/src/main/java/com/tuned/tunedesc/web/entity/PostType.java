package com.tuned.tunedesc.web.entity;


import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document ( collection = "posttype" )
public class PostType extends Catogory {


    public PostType() {
    }
}
