package com.tuned.tunedesc.common.helper;

import com.tuned.tunedesc.common.entity.Role;

public interface ModelDtoHelper<T,E> {

    T buildDto(E e);
    E buildEntity(T t);

}
