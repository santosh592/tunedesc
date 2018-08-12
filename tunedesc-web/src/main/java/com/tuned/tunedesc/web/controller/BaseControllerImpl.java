package com.tuned.tunedesc.web.controller;


import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.exception.SequenceException;
import com.tuned.tunedesc.web.service.BaseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.List;


public abstract class BaseControllerImpl<T> implements BaseController<T> {


    private BaseService<T> baseService;

    public BaseControllerImpl(BaseService<T> baseService) {
        this.baseService = baseService;
    }


    @RequestMapping(value = "/saveDocument", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<T> saveDocument(@Valid @RequestBody T e) throws SequenceException {

        ResponseDto responseDto = baseService.saveDocument(e);

        if (responseDto != null)
            return new ResponseEntity<T>((T) responseDto, HttpStatus.OK);
        else
            return new ResponseEntity<T>(HttpStatus.BAD_REQUEST);

    }

    @RequestMapping(value = "/findAll", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<T> findAllDocuments() {
        ResponseDto responseDto = baseService.findAllDocument();
        if (responseDto != null)
            return new ResponseEntity<T>((T) responseDto, HttpStatus.OK);
        else
            return new ResponseEntity<T>(HttpStatus.BAD_REQUEST);
    }


}
