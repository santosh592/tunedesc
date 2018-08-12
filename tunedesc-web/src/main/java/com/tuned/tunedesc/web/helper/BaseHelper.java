package com.tuned.tunedesc.web.helper;
import com.tuned.tunedesc.web.dto.BaseDto;
import com.tuned.tunedesc.web.visitor.Visitable;
import com.tuned.tunedesc.web.visitor.BaseVistitorImpl;

import java.io.Serializable;

public class BaseHelper<T, E extends Serializable> {

    public E buildEntity(T t) {
        E entity = null;
        if (t instanceof BaseDto && entity==null) {
            BaseDto basedto = (BaseDto) t;
            BaseVistitorImpl baseVistitor = new BaseVistitorImpl();
            basedto.accept(baseVistitor);
            entity= (E) basedto.getVistorDto();
            return entity;
        }

        return entity;
    }

    public T buildDto(E e1) {
        T dto=null;
        if (e1 instanceof Visitable) {
            Visitable basemodel = (Visitable) e1;
            BaseVistitorImpl baseVistitor = new BaseVistitorImpl();
            basemodel.accept(baseVistitor);
          dto= (T) basemodel.getVisitor();
          return dto;
        }
        return dto;
    }
}
