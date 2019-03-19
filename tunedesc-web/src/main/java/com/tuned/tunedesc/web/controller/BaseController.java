package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.exception.SequenceException;
import org.springframework.http.ResponseEntity;

public interface BaseController<T> {

     ResponseEntity<T> saveDocument(T e) throws SequenceException;

     ResponseEntity<T> findAllDocuments();


}
