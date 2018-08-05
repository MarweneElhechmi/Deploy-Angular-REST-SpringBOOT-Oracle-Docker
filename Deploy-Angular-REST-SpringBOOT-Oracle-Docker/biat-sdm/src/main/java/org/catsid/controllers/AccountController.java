package org.catsid.controllers;

import java.security.Principal;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.catsid.entities.User;
import org.catsid.services.UserService;
import org.catsid.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/** 
 * @author 
 *
 */
@RestController
@CrossOrigin("*")
@RequestMapping("account")
public class AccountController {

	public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private UserService userService;

	// request method to create a new account by a guest
	@CrossOrigin("*")
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User newUser) {
		if (userService.find(newUser.getUsername()) != null) {
			logger.error("username Already exist " + newUser.getUsername());
			return new ResponseEntity(
					new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
					HttpStatus.CONFLICT);
		}
		newUser.setRole("USER");
		
		return new ResponseEntity<User>(userService.save(newUser), HttpStatus.CREATED);
	}

	// this is the login api/service
	@CrossOrigin("*")
	@RequestMapping("/login")
	public User user(Principal principal,@RequestParam(name="username",defaultValue="")String username,
			@RequestParam(name="password",defaultValue="")String password) {
		logger.info("user logged "+principal);
		logger.info("user hech "+userService.find((long)1));
		logger.info("username"+username);
		logger.info("password"+password);
		logger.info("user jdid"+userService.authentification(username, password));
		logger.info("user marwene "+System.getProperty("user.name"));

		return userService.authentification(username, password);
	}

	
	
}
