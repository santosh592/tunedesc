package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.exception.SequenceException;

public interface BaseService<T> {

    ResponseDto saveDocument(T t) throws SequenceException;

    ResponseDto findAllDocument();

}
