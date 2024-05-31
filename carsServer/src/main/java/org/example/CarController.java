package org.example;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin
public class CarController {

    private final CarDao carDao;

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/public/uploads";

    @Autowired
    public CarController(CarDao carDao) {
        this.carDao = carDao;
    }

    @PostMapping("/cars/new")
    public void addUser(@RequestBody CarDTO userDTO) {
        System.out.println(userDTO.toString());
        carDao.addCar(userDTO);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(
            @RequestParam("model") String model,
            @RequestParam("year") String year,
            @RequestParam("mileage") String mileage,
            @RequestParam("price") String price,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("description") String description,
            @RequestParam("images") MultipartFile[] files
    ) {
        try {
            StringBuilder fileNames = new StringBuilder();
            for (MultipartFile file : files) {
                String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
                Path filePath = Paths.get(UPLOAD_DIR, fileName);
                Files.createDirectories(filePath.getParent());
                Files.write(filePath, file.getBytes());
                fileNames.append(fileName).append(";");
            }

            CarDTO carDTO = new CarDTO();
            carDTO.setModel(model);
            carDTO.setYear(year);
            carDTO.setMileage(Double.parseDouble(mileage));
            carDTO.setPrice(Double.parseDouble(price));
            carDTO.setPhoneNumber(phoneNumber);
            carDTO.setDescription(description);
            carDTO.setImages(fileNames.toString());

            carDao.addCar(carDTO);

            return ResponseEntity.ok("Form submitted and files uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Error uploading files: " + e.getMessage());
        }
    }

    @GetMapping("/cars/all")
    public List<CarDTO> getAllUser() {
        return carDao.getAllCars();
    }



}
