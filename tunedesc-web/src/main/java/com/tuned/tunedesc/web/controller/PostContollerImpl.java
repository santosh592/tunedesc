package com.tuned.tunedesc.web.controller;

import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.exception.SequenceException;
import com.tuned.tunedesc.web.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(value = "/post")
public class PostContollerImpl extends BaseControllerImpl<PostDto> implements PostController {


    @Autowired
    private PostService postService;

    @Autowired
    public PostContollerImpl(PostService postService) {
        super(postService);
        this.postService = postService;


    }

    @RequestMapping(value = "/postType", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ResponseDto<CatogoryDto>> findAllPostType() throws SequenceException {
       List<CatogoryDto> postTypeDtos= postService.getTypeOfPostList();
        ResponseDto responseDto = null;
        if (postTypeDtos != null) {
            responseDto = new ResponseDto();
            responseDto.setListOfobjects(postTypeDtos);
            responseDto.setMessage("type of post available");

            return new ResponseEntity<ResponseDto<CatogoryDto>>(responseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<ResponseDto<CatogoryDto>>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/businessType", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ResponseDto<CatogoryDto>> findAllbusinessType() throws SequenceException {
        List<CatogoryDto> businessTypeDtos= postService.getTypeOfBusinessList();
        ResponseDto responseDto = null;
        if (businessTypeDtos != null) {
            responseDto = new ResponseDto();
            responseDto.setListOfobjects(businessTypeDtos);
            responseDto.setMessage("type of business ");

            return new ResponseEntity<ResponseDto<CatogoryDto>>(responseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<ResponseDto<CatogoryDto>>(HttpStatus.BAD_REQUEST);
        }

    }

}
