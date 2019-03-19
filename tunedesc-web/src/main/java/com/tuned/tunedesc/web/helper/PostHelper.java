package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.PostDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.entity.Post;
import org.springframework.stereotype.Component;

@Component
public class PostHelper implements ModelDtoHelper<PostDto, Post> {

    @Override
    public PostDto buildDto(Post post) {
        PostDto postDto;

        if (post != null) {
            postDto = new PostDto();
            postDto.setDescription(post.getDescription());
            postDto.setPostType(post.getPostType());
            postDto.setTitle(post.getTitle());
            postDto.setPostExpirationDate(post.getPostExprationDate());

            UserDto userDto = new UserDto();
            userDto.setId(post.getUser().getId());
            postDto.setUserId(post.getUser().getId());

            postDto.setId(post.getId());


            return postDto;
        }

        return null;


    }

    public Post buildEntity(PostDto postDto) {

        Post post;

        if (postDto != null) {
            post = new Post();
            post.setDescription(postDto.getDescription());
            post.setPostType(postDto.getPostType());
            post.setTitle(postDto.getTitle());
            post.setPostExprationDate(postDto.getPostExpirationDate());
            User user = new User();
            user.setId(postDto.getUserId());
            post.setUser(user);
            post.setId(postDto.getId());


            return post;
        }
        return null;


    }


}
