package com.tuned.tunedesc.common.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.io.Serializable;


public interface BaseRepository<E extends Serializable> extends MongoRepository<E, Long> {


}
