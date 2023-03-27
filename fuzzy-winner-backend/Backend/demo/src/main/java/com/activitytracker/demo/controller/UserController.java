package com.activitytracker.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.activitytracker.demo.bean.Tasks;
import com.activitytracker.demo.bean.Users;
import com.activitytracker.demo.service.UserService;
// import com.activitytracker.demo.bean.Tasks;
// import com.activitytracker.demo.service.TaskService;
// import org.springframework.web.bind.annotation.PathVariable;

//import com.activitytracker.demo.bean.Tasks;
//import com.activitytracker.demo.service.TaskService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    // adds new user
    @PostMapping("/signup")
    public Users signUp(@RequestBody Users usr){
        Users data = userService.addEmployee(usr);
        return data;
    }
    
    // authenticates user and sends all the tasks for the respective user
    // if creds dont match it will return null

    @PutMapping("/authenticate")
    public List<Tasks> auth(@RequestBody Users usr){
        List<Tasks> u = userService.getAll(usr);
        return u;
    }
}
