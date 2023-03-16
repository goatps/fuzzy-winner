package com.activitytracker.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.activitytracker.demo.bean.Tasks;
import com.activitytracker.demo.service.TaskService;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    // lists all Tasks
    @GetMapping("/listTasks")
    public  List<Tasks> listAllTasks(){    
            List<Tasks> listofTasks = taskService.getAllTasks();
            return listofTasks;
    }

    // adds New task
    @PostMapping("/addTask")
    public Tasks addTask(@RequestBody Tasks tsk){
        Tasks data = taskService.addTask(tsk);
        return data;
    }
    // edit task
    @PutMapping("/editTask/{taskid}")
    public Tasks ediTasks(@PathVariable String taskid, @RequestBody Tasks tsk) {
        Tasks editTask = taskService.editEmp(taskid,tsk);
        return editTask;
    }





    

}
