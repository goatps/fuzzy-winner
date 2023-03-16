package com.activitytracker.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.activitytracker.demo.bean.Tasks;



public interface TaskRepository extends JpaRepository<Tasks, Long>{
    
}
