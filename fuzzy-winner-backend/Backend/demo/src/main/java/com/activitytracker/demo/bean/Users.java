package com.activitytracker.demo.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
// import jakarta.persistence.UniqueConstraint;


@Entity

//@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = {"uid"})})
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private long uid;
    private String name;
    private String email;
    private String password;

    public Users(){
        
    }
    // Getter setters
    public Users(long uid, String name, String email, String password){
        this.uid=uid;
        this.name=name;
        this.email=email;
        this.password=password;
    }
    public long getId() {
        return uid;
    }
    public void setId(long uid) {
        this.uid = uid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

    

}
