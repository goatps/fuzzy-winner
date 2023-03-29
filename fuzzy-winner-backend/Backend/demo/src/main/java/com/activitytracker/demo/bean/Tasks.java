package com.activitytracker.demo.bean;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
// import jakarta.persistence.UniqueConstraint;

@Entity
//@Table(name = "tasks", uniqueConstraints = {@UniqueConstraint(columnNames = {"id"})})
@Table(name = "tasks")
public class Tasks {
    protected Tasks() {
    }
    @Id
   // @GeneratedValue(strategy = GenerationType.AUTO )
    private long id;
    private long uid;
    private String title;
    private String description;
    private String status;
    private String createdAt;
    

    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public long getUid() {
        return uid;
    }


    public void setUid(long uid) {
        this.uid = uid;
    }


    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    public String getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }
    

    
    public Tasks(long id, long uid, String title,String description,String createdAt,String status){
        this.id=id;
        this.uid = uid;
        this.title=title;
        this.description=description;
        this.createdAt=createdAt;
        this.status=status;
       
    }


    

}
