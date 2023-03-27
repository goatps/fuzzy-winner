package com.activitytracker.demo.repository;
import com.activitytracker.demo.bean.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    
}
