package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.exception.SequenceException;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BaseController<T> {

     ResponseEntity<T> saveDocument(T e) throws SequenceException;

     ResponseEntity<T> findAllDocuments();


}
