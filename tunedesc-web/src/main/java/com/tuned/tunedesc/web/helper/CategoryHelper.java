package com.tuned.tunedesc.web.helper;

import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.CatogoryDto;
import com.tuned.tunedesc.web.entity.Catogory;
import org.springframework.stereotype.Component;

@Component
public class CategoryHelper implements ModelDtoHelper<CatogoryDto, Catogory> {

    public CatogoryDto buildDto(Catogory catogory) {
        CatogoryDto catogoryDto = new CatogoryDto();
        catogoryDto.setId(catogory.getId());
        catogoryDto.setType(catogory.getType());
        catogoryDto.setDescription(catogory.getDescription());

        catogoryDto.setImagelocation(catogory.getImagelocation());
        return catogoryDto;

    }

    public Catogory buildEntity(CatogoryDto catogoryDto) {
        Catogory catogory = new Catogory();

        catogory.setId(catogoryDto.getId());
        catogory.setType(catogoryDto.getType());
        catogory.setDescription(catogoryDto.getDescription());
        catogory.setImagelocation(catogoryDto.getImagelocation());
        return catogory;

    }
}
