package com.tuned.tunedesc.common.repository;



import com.tuned.tunedesc.common.entity.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<User>{
    @Query("{ 'username' : ?0 }")
    User findByname(String username);

    @Query("{ 'email' : ?0 }")
    User findByemail(String email);

    @Query("{ '_id' : ?0 }")
    User findByUserId(long id);
}
