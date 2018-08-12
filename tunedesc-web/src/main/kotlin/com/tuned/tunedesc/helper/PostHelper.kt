package com.tuned.tunedesc.helper

import com.tuned.tunedesc.data.Location
import com.tuned.tunedesc.data.Post
import com.tuned.tunedesc.vo.PostVo

class PostHelper {
    val postEntity = Post()
    fun fromVo(postvo: PostVo) = Post(
            postEntity.id = postvo.id,
            postEntity.content = postvo.content,
            postEntity.location = postvo.location)


}