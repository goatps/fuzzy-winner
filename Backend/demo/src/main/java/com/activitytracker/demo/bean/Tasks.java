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
    @GeneratedValue(strategy = GenerationType.AUTO )
    private long taskid;
    private long id;
    private String tasktitle;
    private String task;
    private String startdate;
    private String enddate;
    private Boolean pending;
    private Boolean inprogress;
    private Boolean done;

    public long getTaskid() {
        return taskid;
    }

    public void setTaskid(long taskid) {
        this.taskid = taskid;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTasktitle() {
        return tasktitle;
    }

    public void setTasktitle(String tasktitle) {
        this.tasktitle = tasktitle;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public Boolean getPending() {
        return pending;
    }

    public void setPending(Boolean pending) {
        this.pending = pending;
    }

    public Boolean getInprogress() {
        return inprogress;
    }

    public void setInprogress(Boolean inprogress) {
        this.inprogress = inprogress;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public Tasks(long id, String tasktitle,String task,String startdate,String enddate, Boolean pending,Boolean inprogress,Boolean done){
        this.id=id;
        this.tasktitle=tasktitle;
        this.task=task;
        this.startdate=startdate;
        this.enddate=enddate;
        this.pending =pending;
        this.inprogress=inprogress;
        this.done=done;
    }


    

}
