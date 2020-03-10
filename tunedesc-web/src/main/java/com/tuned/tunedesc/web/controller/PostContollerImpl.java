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

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping(value = "/post")
public class PostContollerImpl extends BaseControllerImpl<PostDto> implements PostController {


    @Autowired
    private PostService postService;

    @Autowired
    public PostContollerImpl(PostService postService) {
        super(postService);
        this.postService = postService;


    }

    @RequestMapping(value = "/content-type", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ResponseDto<CatogoryDto>> findAllContentType() throws SequenceException {
        List<CatogoryDto> postTypeDtos = postService.getTypeOfPostList();
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


    @RequestMapping(value = "/content", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<ResponseDto<PostDto>> postContent(@Valid @RequestBody PostDto postDto) throws SequenceException {
        PostDto postedDocument = postService.postContent(postDto);
        ResponseDto responseDto = null;
        if (postedDocument != null) {
            responseDto = new ResponseDto();
            responseDto.setResposeobject(postedDocument);
            responseDto.setMessage("post document inserted Sucessfully {}");

            return new ResponseEntity<ResponseDto<PostDto>>(responseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<ResponseDto<PostDto>>(HttpStatus.BAD_REQUEST);
        }

    }

}
