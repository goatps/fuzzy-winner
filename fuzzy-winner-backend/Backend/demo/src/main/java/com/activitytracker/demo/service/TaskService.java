package com.activitytracker.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import org.springframework.stereotype.Service;
import com.activitytracker.demo.bean.Tasks;
import com.activitytracker.demo.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Tasks> getAllTasks() {
        List<Tasks> list= taskRepository.findAll();
        return list;
    }

    // adds new Task
    public Tasks addTask(Tasks tsk) {
        return taskRepository.save(tsk);
    }
    
    //edit Task
    public Tasks editEmp(String id, Tasks tsk) {
        long i =Integer.parseInt(id);
        
        Tasks updateTask = taskRepository.findById(i).orElse(null);

        updateTask.setId(tsk.getId());
        updateTask.setUid(tsk.getUid());
        updateTask.setStatus(tsk.getStatus());
        updateTask.setTitle(tsk.getTitle());
        updateTask.setDescription(tsk.getDescription());


        taskRepository.save(updateTask);

        return null;
    }

    public void delEmp(String id) {
        long i =Integer.parseInt(id);
        
        Tasks delTask = taskRepository.findById(i).orElse(null);
        taskRepository.delete(delTask);
        
    }
}
