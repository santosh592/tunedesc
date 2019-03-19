package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.exception.SequenceException;

public interface BaseService<T> {

    public ResponseDto saveDocument(T t) throws SequenceException;

    public ResponseDto findAllDocument();

}
