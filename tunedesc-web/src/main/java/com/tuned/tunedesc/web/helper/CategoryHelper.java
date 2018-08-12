package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.entity.Catogory;

public class CategoryHelper {

    public static CatogoryDto buildDto(Catogory catogory) {
        CatogoryDto catogoryDto = new CatogoryDto();
        catogoryDto.setId(catogory.getId());
        catogoryDto.setType(catogory.getType());
        return catogoryDto;

    }

    public static Catogory buildEntitiy(CatogoryDto catogoryDto) {
        Catogory catogory = new Catogory();

        catogory.setId(catogoryDto.getId());
        catogory.setType(catogoryDto.getType());
        return catogory;

    }
}
