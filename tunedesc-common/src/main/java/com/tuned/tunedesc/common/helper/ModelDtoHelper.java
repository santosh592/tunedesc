package com.tuned.tunedesc.common.helper;

import com.tuned.tunedesc.common.entity.Role;

public interface ModelDtoHelper<T,E> {

    public  T buildDto(E e);
    public  E buildEntity(T t);

}
