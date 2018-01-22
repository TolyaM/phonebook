package rnd.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.supercsv.cellprocessor.Optional;
import org.supercsv.cellprocessor.ParseLong;
import org.supercsv.cellprocessor.ift.CellProcessor;
import org.supercsv.io.CsvBeanReader;
import org.supercsv.io.CsvBeanWriter;
import org.supercsv.prefs.CsvPreference;
import rnd.users.model.Photo;
import rnd.users.model.User;
import rnd.users.repository.PhotoRepository;
import rnd.users.repository.UserRepository;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

@RequestMapping(path = "/api")
@RestController
@CrossOrigin
public class UserController {

    private static final String[] USERS_HEADER = {"id", "firstName", "lastName"};

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PhotoRepository photoRepository;

    @Async
    @CrossOrigin
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Async
    @CrossOrigin
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @Async
    @CrossOrigin
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId) {
        User note = userRepository.findOne(userId);
        if(note == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(note);
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public void uploadUsers(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        Reader br = new BufferedReader(new InputStreamReader(multipartFile.getInputStream()));
        CsvBeanReader reader = new CsvBeanReader(br, CsvPreference.EXCEL_NORTH_EUROPE_PREFERENCE);

        reader.getHeader(false);

        CellProcessor[] cellProcessors = {new Optional(new ParseLong()), null, null, null};

        User user;
        while( (user = reader.read(User.class, USERS_HEADER, cellProcessors)) != null ) {
            userRepository.save(user);
        }

        reader.close();
    }

    @RequestMapping(value = "/download", method = RequestMethod.GET)
    public void downloadUsers(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=\"users.csv\"");

        CsvBeanWriter writer = new CsvBeanWriter(response.getWriter(), CsvPreference.EXCEL_NORTH_EUROPE_PREFERENCE);

        writer.writeHeader(USERS_HEADER);

        for (User user : userRepository.findAll()) {
            writer.write(user, USERS_HEADER);
        }

        writer.close();
    }

    @Async
    @CrossOrigin
    @PutMapping("/user")
    public ResponseEntity<User> updateUser(@RequestBody User userDetails) {
        User user = userRepository.findOne(userDetails.getId());
        if(user == null) {
            return ResponseEntity.notFound().build();
        }
        user.setFirst_name(userDetails.getFirst_name());
        user.setLast_name(userDetails.getLast_name());
        user.setPhotoUrl(userDetails.getPhotoUrl());
        user.setPosition(userDetails.getPosition());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @Async
    @CrossOrigin
    @DeleteMapping("/user/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable(value = "id") Long noteId) {
        User user = userRepository.findOne(noteId);
        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "/photo/{url}",  produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    @CrossOrigin
    public byte[] getPhotoByUrl(@PathVariable(value = "url") String url){
        return photoRepository.findOneByUrl(url).getPhoto();
    }

//    @Async
//    @CrossOrigin
//    @PutMapping("/photo")
//    public ResponseEntity<Photo> updatePhoto(@RequestBody Photo photoDetails) {
//        Photo photo = PhotoRepository.findOne(photoDetails.getId());
//        if(photo == null) {
//            return ResponseEntity.notFound().build();
//        }
//        photo.setPhoto(photoDetails.getPhoto());
//        photo.setUrl(photoDetails.getUrl());
//
//        Photo updatedPhoto = PhotoRepository.save(photo);
//        return ResponseEntity.ok(updatedPhoto);
//    }
}