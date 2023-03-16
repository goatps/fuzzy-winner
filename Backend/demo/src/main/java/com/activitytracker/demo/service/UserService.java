package com.activitytracker.demo.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activitytracker.demo.bean.Tasks;
import com.activitytracker.demo.bean.Users;
import com.activitytracker.demo.repository.TaskRepository;
import com.activitytracker.demo.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TaskRepository taskRepository;

    // Sign Up
    public Users addEmployee(Users usr) {
        return userRepository.save(usr);
    }

    // Sign in (also sends data in the same call)
   public List<Tasks> getAll(Users usr){
       List<Users> userList =  userRepository.findAll();
       List<Tasks> taskList = taskRepository.findAll();
       List<Tasks> TasksOfUser = new ArrayList<>();
       for(Users user:userList ){
          

            if(user.getEmail().equals(usr.getEmail()) && user.getPassword().equals(usr.getPassword()) ){
                
                long check = user.getId();
                for(Tasks task: taskList){
                    if (task.getId() == check){
                        TasksOfUser.add(task);
                    }
                }
                return TasksOfUser;
            }
            
       }
       return null;
    }

}
