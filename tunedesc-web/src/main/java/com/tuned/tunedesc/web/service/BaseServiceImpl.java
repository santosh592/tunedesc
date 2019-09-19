package com.tuned.tunedesc.web.service;


import com.tuned.tunedesc.common.entity.BaseModel;
import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.common.helper.ModelDtoHelper;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.exception.SequenceException;
import com.tuned.tunedesc.web.helper.UserHelper;
import com.tuned.tunedesc.common.repository.BaseRepository;
import com.tuned.tunedesc.web.repository.SequenceIdRepository;
import com.tuned.tunedesc.common.repository.UserRepository;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public abstract class BaseServiceImpl<T, E extends Serializable> implements BaseService<T> {


    private BaseRepository<E> baseRepository;

    private ModelDtoHelper<T, E> baseHelper;
    private static final String HOSTING_SEQ_KEY = "hosting";
    private SequenceIdRepository sequenceDao;

    public BaseServiceImpl(BaseRepository<E> baseRepository, SequenceIdRepository sequenceIdRepository, ModelDtoHelper<T, E> baseHelper) {
        this.sequenceDao = sequenceIdRepository;
        this.baseRepository = baseRepository;
        this.baseHelper=baseHelper;

    }


    public ResponseDto<T> saveDocument(T t) throws SequenceException {
        E model = null;

        ResponseDto responseDto = null;
        if (t != null) {
            E savedEntity = null;
            model = baseHelper.buildEntity(t);
            if (model instanceof User && baseRepository instanceof UserRepository) {
                return saveUserAndActivation(model);
            } else {
                if (model instanceof BaseModel) {
                    ((BaseModel) model).setId(sequenceDao.getNextSequenceId(HOSTING_SEQ_KEY));
                    ((BaseModel) model).setDate_inserted(new Timestamp(System.currentTimeMillis()));
                    savedEntity = baseRepository.save(model);
                    T todto = baseHelper.buildDto(savedEntity);
                    responseDto = new ResponseDto();
                    responseDto.setResposeobject(todto);
                    responseDto.setMessage("Document inserted");
                    return responseDto;
                }
            }
        } else
            responseDto.setMessage("Entity is null, provide atleast one value");
        return responseDto;
    }


    public ResponseDto<T> findAllDocument() {
        ResponseDto responseDto = null;
        List<E> entities = baseRepository.findAll();

        List<T> dtolist = new ArrayList<>();

        if (entities != null) {
            for (E singleEnity : entities) {

                T tdto = baseHelper.buildDto(singleEnity);
                dtolist.add(tdto);
            }
            responseDto.setListOfobjects(dtolist);
            responseDto.setMessage("Document list of" + dtolist.getClass().getName());
            return responseDto;
        }
        responseDto.setMessage("no documents found");
        return responseDto;
    }

    private ResponseDto<T> saveUserAndActivation(E model) {
        ResponseDto responseDto = null;
        User user = (User) model;
        UserRepository userRepository = (UserRepository) baseRepository;
        User userbyemail = userRepository.findByemail(user.getEmail());

        if (userbyemail != null) {
            responseDto = new ResponseDto();
            responseDto.setMessage("User Already Registered");
            return responseDto;
        } else {
            user.setId(sequenceDao.getNextSequenceId(HOSTING_SEQ_KEY));
            user.setDate_inserted(new Timestamp(System.currentTimeMillis()));

            User usersaved = userRepository.save(user);
            EmailService emailService = new EmailService();
            emailService.sendEmail(usersaved.getEmail(), "http://localhost:3000/activateaccount/" + usersaved.getId());
            UserHelper userHelper=new UserHelper();
            UserDto userDto = userHelper.buildDto(usersaved);
            responseDto = new ResponseDto();
            responseDto.setMessage("link for activating your account sent to your email");
            responseDto.setResposeobject(userDto);

            return responseDto;
        }
    }
}








