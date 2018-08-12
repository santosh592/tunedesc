package com.tuned.tunedesc.web.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.io.Serializable;


public interface BaseRepository<E extends Serializable> extends MongoRepository<E, Long> {


}
