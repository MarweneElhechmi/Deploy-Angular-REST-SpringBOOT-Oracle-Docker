package org.catsid.dao;

import org.catsid.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/** 
 * @author 
 *
 */
/* this the user  Repository interface  */ 
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

public User findOneByUsername(String username);

@Query("select u from User u where u.username like :x and u.password like :y")
public User findUser(@Param("x") String username,@Param("y") String password);
}
