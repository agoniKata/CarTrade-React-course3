package org.example;

import org.springframework.stereotype.Repository;
import java.sql.*;

@Repository
public class UserDAO {
    private Connection connection;

    public UserDAO() {
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bdCar", "root", "1234");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void registerUser(UserDTO userDTO) {
        try {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            statement.setString(1, userDTO.getUsername());
            statement.setString(2, userDTO.getEmail());
            statement.setString(3, userDTO.getPassword());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public UserDTO loginUser(String email, String password) {
        UserDTO user = null;
        try {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM users WHERE email = ? AND password = ?");
            statement.setString(1, email);
            statement.setString(2, password);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                user = new UserDTO();
                user.setUsername(resultSet.getString("username"));
                user.setEmail(resultSet.getString("email"));
                user.setPassword(resultSet.getString("password"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return user;
    }
}
