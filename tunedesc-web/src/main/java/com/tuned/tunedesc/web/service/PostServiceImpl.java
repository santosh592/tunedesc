package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.entity.BusinessCategory;
import com.tuned.tunedesc.web.entity.Post;
import com.tuned.tunedesc.web.entity.PostType;
import com.tuned.tunedesc.web.helper.BusinessCatHelper;
import com.tuned.tunedesc.web.helper.PostTypeHelper;
import com.tuned.tunedesc.web.repository.BusinessCategoryRepository;
import com.tuned.tunedesc.web.repository.PostRepository;
import com.tuned.tunedesc.web.repository.PostTypeRepository;
import com.tuned.tunedesc.web.repository.SequenceIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl extends BaseServiceImpl<PostDto, Post> implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostTypeRepository postTypeRepository;

    @Autowired
    private BusinessCategoryRepository businessCategoryRepository;


    @Autowired ( required = true )
    public PostServiceImpl(PostRepository postRepository, SequenceIdRepository sequenceIdRepository, PostTypeRepository postTypeRepository, BusinessCategoryRepository businessCategoryRepository) {
        super(postRepository, sequenceIdRepository);

        this.postTypeRepository = postTypeRepository;
        this.businessCategoryRepository = businessCategoryRepository;
    }


    @Override
    public List<CatogoryDto> getTypeOfPostList() {
        List<PostType> posttypelist = postTypeRepository.findAll();
        List<CatogoryDto> postTypeDtos = new ArrayList<>();
        posttypelist.forEach(posttype -> {
            CatogoryDto postTypeDto =  PostTypeHelper.buildDto(posttype);
            postTypeDtos.add(postTypeDto);
        });
        return postTypeDtos;
    }

    @Override
    public List<CatogoryDto> getTypeOfBusinessList() {
        List<BusinessCategory> businessCategorylist = businessCategoryRepository.findAll();
        List<CatogoryDto> businessTypeDtos = new ArrayList<>();
        businessCategorylist.forEach(business -> {
            CatogoryDto businessTypeDto =  BusinessCatHelper.buildDto(business);
            businessTypeDtos.add(businessTypeDto);
        });
        return businessTypeDtos;


    }

}
