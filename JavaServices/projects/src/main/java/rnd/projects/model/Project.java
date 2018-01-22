package rnd.projects.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "projects")
public class Project implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    @Size(min = 2, max = 50)
    @NotNull
    private String Project_name;

    @Column
    @NotNull
    private long userId;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public void Project(){

    }

    public void Project(long id, String Project_name){
        this.id = id;
        this.Project_name = Project_name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProject_name() {
        return Project_name;
    }

    public void setProject_name(String project_name) {
        Project_name = project_name;
    }
}
