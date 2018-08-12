package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.dto.PostDto;

import java.util.List;

public interface PostService extends BaseService<PostDto>{

     List<CatogoryDto> getTypeOfPostList();
     List<CatogoryDto> getTypeOfBusinessList();

}
