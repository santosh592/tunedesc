package com.tuned.tunedesc.web.repository;

import com.tuned.tunedesc.web.exception.SequenceException;


public interface SequenceIdRepository {

    Long getNextSequenceId(String hostingSeqKey) throws SequenceException;


}
