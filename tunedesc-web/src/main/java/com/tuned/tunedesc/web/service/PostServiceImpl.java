package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.entity.Post;
import com.tuned.tunedesc.web.entity.PostType;
import com.tuned.tunedesc.web.helper.PostHelper;
import com.tuned.tunedesc.web.helper.PostTypeHelper;
import com.tuned.tunedesc.web.repository.PostRepository;
import com.tuned.tunedesc.web.repository.PostTypeRepository;
import com.tuned.tunedesc.web.repository.SequenceIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl extends BaseServiceImpl<PostDto, Post> implements PostService {

    private static final String HOSTING_SEQ_KEY = "hosting";
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private PostTypeRepository postTypeRepository;

    @Autowired
    private PostHelper postHelper;

    @Autowired
    private PostTypeHelper postTypeHelper;
    @Autowired
    private SequenceIdRepository sequenceIdRepository;


    @Autowired(required = true)
    public PostServiceImpl(PostRepository postRepository, SequenceIdRepository sequenceIdRepository, PostTypeRepository postTypeRepository, PostHelper postHelper,
                           PostTypeHelper postTypeHelper) {
        super(postRepository, sequenceIdRepository, postHelper);
        this.postHelper = postHelper;
        this.postTypeRepository = postTypeRepository;

        this.postTypeHelper = postTypeHelper;
        this.sequenceIdRepository = sequenceIdRepository;
    }


    @Override
    public List<CatogoryDto> getTypeOfPostList() {
        List<PostType> posttypelist = postTypeRepository.findAll();
        List<CatogoryDto> postTypeDtos = new ArrayList<>();
        posttypelist.forEach(posttype -> {
            CatogoryDto postTypeDto = postTypeHelper.buildDto(posttype);
            postTypeDtos.add(postTypeDto);
        });
        return postTypeDtos;
    }

    @Override
    public PostDto postContent(PostDto postDto) {
        String posttype = postDto.getPostType().getType();
        CatogoryDto catogoryDto = getTypeOfPostList().stream().filter(postype -> posttype.equals(postype.getType())).findAny().orElse(null);

        postDto.getPostType().setId(catogoryDto.getId());
        Post userPost = postHelper.buildEntity(postDto);
        userPost.setId(sequenceIdRepository.getNextSequenceId(HOSTING_SEQ_KEY));
        userPost.setDate_inserted(new Timestamp(System.currentTimeMillis()));
        Post savedPost = postRepository.save(userPost);
        return postHelper.buildDto(savedPost);
    }


}
