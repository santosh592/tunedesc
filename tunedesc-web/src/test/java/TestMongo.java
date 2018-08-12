import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.Mongo;

import java.net.UnknownHostException;

public class TestMongo {

    public static void main(String[] argv) throws UnknownHostException {


        Mongo mongo = new Mongo("localhost", 27017);
        DB db = mongo.getDB("tunedesc");

        // get a single collection
        DBCollection collection = db.getCollection("sequence");



        System.out.println("1. Find first matched document");
        DBObject dbObject = collection.findOne();
        System.out.println(dbObject);



    }

}
