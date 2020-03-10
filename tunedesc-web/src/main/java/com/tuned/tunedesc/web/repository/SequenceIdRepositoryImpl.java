package com.tuned.tunedesc.web.repository;

import com.tuned.tunedesc.web.entity.SequenceId;
import com.tuned.tunedesc.web.exception.SequenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class SequenceIdRepositoryImpl implements SequenceIdRepository {

    @Autowired
    private MongoOperations mongoOperation;

    @Autowired
    public SequenceIdRepositoryImpl(MongoOperations mongoOperation) {
        this.mongoOperation = mongoOperation;
    }

    @Override
    public Long getNextSequenceId(String hostingSeqKey) throws SequenceException {
        // get sequence id
        Query query = new Query(Criteria.where("_id").is(hostingSeqKey));

        // increase sequence id by 1
        Update update = new Update();
        update.inc("seq", 1);

        // return new increased id
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);


        // this is the magic happened
        SequenceId seqId = mongoOperation.findAndModify(query, update, options, SequenceId.class);

        /*
        if no id, throws SequenceException
        optional, just a way to tell user when the sequence id is failed to
        generate.
        */
        if (seqId == null) {
            throw new SequenceException("Unable to get sequence id for key : "
                    + hostingSeqKey);
        }

        return seqId.getSeq();
    }
}
