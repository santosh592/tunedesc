package com.tuned.tunedesc.web.repository;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.tuned.tunedesc.web.entity.Role;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

public class RoleByIdRepository {


   /* public Role findRoleById(Integer roleId){

        BasicDBObject query = new BasicDBObject();
        query.put("_id", new ObjectId(roleId.toString()));
        MongoCollection<Document> collection = database.getCollection("sampleCollection");

        DBObject dbObj = collection.findOne(query);
        return dbObj;
        return null;
    }*/

}
