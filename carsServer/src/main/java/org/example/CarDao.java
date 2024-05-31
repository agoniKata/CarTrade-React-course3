package org.example;

import org.springframework.stereotype.Repository;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CarDao {
    private Connection connection;

    public CarDao() {
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/bdCar", "root", "1234");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addCar(CarDTO carDTO) {
        try {
            PreparedStatement statement = connection.prepareStatement(
                    "INSERT INTO carList (model, year, mileage, price, phoneNumber, description, images) VALUES (?, ?, ?, ?, ?, ?, ?)"
            );
            statement.setString(1, carDTO.getModel());
            statement.setString(2, carDTO.getYear());
            statement.setDouble(3, carDTO.getMileage());
            statement.setDouble(4, carDTO.getPrice());
            statement.setString(5, carDTO.getPhoneNumber());
            statement.setString(6, carDTO.getDescription());
            statement.setString(7, carDTO.getImages());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<CarDTO> getAllCars() {
        List<CarDTO> cars = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM carList");
            while (resultSet.next()) {
                CarDTO car = new CarDTO();
                car.setModel(resultSet.getString("model"));
                car.setYear(resultSet.getString("year"));
                car.setMileage(resultSet.getDouble("mileage"));
                car.setPrice(resultSet.getDouble("price"));
                car.setPhoneNumber(resultSet.getString("phoneNumber"));
                car.setDescription(resultSet.getString("description"));
                car.setImages(resultSet.getString("images"));
                cars.add(car);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return cars;
    }
}
