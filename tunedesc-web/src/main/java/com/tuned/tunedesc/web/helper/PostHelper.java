package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.entity.Post;
import com.tuned.tunedesc.web.entity.PostType;
import org.springframework.stereotype.Component;

@Component
public class PostHelper implements ModelDtoHelper<PostDto, Post> {

    @Override
    public PostDto buildDto(Post post) {
        PostDto postDto;

        if (post != null) {


            postDto = new PostDto();

            PostType postType = new PostType();
            postType.setType(post.getPostType().getType());

            postDto.setPostType(postType);

            UserDto userDto = new UserDto();


            userDto.setId(post.getUser().getId());
            postDto.setUserId(post.getUser().getId());

            postDto.setId(post.getId());
            postDto.setTitle(post.getTitle());
            postDto.setContent(post.getContent());


            return postDto;
        }

        return null;


    }

    public Post buildEntity(PostDto postDto) {

        Post post;

        if (postDto != null) {
            post = new Post();
            PostType postType = new PostType();
            postType.setType(postDto.getPostType().getType());

            post.setPostType(postDto.getPostType());

            User user = new User();
            user.setId(postDto.getUserId());
            post.setUser(user);
            post.setId(postDto.getId());
            post.setTitle(postDto.getTitle());
            post.setContent(postDto.getContent());


            return post;
        }
        return null;


    }


}
