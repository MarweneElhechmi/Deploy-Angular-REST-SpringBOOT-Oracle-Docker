package org.catsid.services;

import org.catsid.dao.UserRepository;
import org.catsid.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/** 
 * @author 
 *
 */
@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public User save(User user) {
		return userRepository.save(user);
	}

	public User update(User user) {
		return userRepository.saveAndFlush(user);
	}

	public User find(String userName) {
		return userRepository.findOneByUsername(userName);
	}

	public User find(Long id) {
		return userRepository.findOne(id);
	}
	
	public User authentification(String username, String password) {
		return userRepository.findUser(username, password);
	}
}
