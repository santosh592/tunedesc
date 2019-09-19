package com.tuned.tunedesc.web.service;

import com.tuned.tunedesc.common.entity.User;
import com.tuned.tunedesc.web.dto.AccountDto;
import com.tuned.tunedesc.web.dto.ResponseDto;
import com.tuned.tunedesc.web.dto.UserDto;
import com.tuned.tunedesc.web.helper.UserHelper;
import com.tuned.tunedesc.web.repository.SequenceIdRepository;
import com.tuned.tunedesc.common.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserDto, User> implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserHelper userHelper;

    @Autowired(required = true)
    public UserServiceImpl(UserRepository userRepository, SequenceIdRepository sequenceIdRepository,UserHelper userHelper) {
        super(userRepository, sequenceIdRepository,userHelper);
    }


    @Override
    public AccountDto activete(long id) {
        AccountDto accountDto = new AccountDto();

        if (userRepository.exists(id)) {
            User user1 = userRepository.findByUserId(id);
            user1.setEnabled(true);
            user1.setCredentialsNonExpired(true);
            user1.setAccountNonExpired(true);
            user1.setAccountNonLocked(true);
            userRepository.save(user1);


            accountDto.setActivated(true);
            accountDto.setActivateMessage("Your Account has been activated,please login with your credentials");


            return accountDto;
        } else {
            accountDto.setActivated(false);
            accountDto.setActivateMessage("no user found");
            return accountDto;
        }

    }

    @Override
    public ResponseDto findByUsername(String username) {
        ResponseDto reponsedto = new ResponseDto();
        User user = userRepository.findByname(username);
        if (user != null) {
            UserHelper userHelper=new UserHelper();
            reponsedto.setResposeobject(userHelper.buildDto(user));
            reponsedto.setMessage("userdetails for username " + username);
        } else
            reponsedto.setMessage("user not found");
        return reponsedto;

    }
}
