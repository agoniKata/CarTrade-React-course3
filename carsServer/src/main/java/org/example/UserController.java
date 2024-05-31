package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserDTO userDTO) {
        userDAO.registerUser(userDTO);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserDTO userDTO) {
        UserDTO user = userDAO.loginUser(userDTO.getEmail(), userDTO.getPassword());
        if (user != null) {
            return "Login successful";
        } else {
            return "Invalid email or password";
        }
    }
}
