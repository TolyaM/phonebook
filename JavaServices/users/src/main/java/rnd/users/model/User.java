package rnd.users.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column
    @NotNull
    @Size(min = 2, max = 40)
    private String First_name;

    @Column
    @NotNull
    @Size(min = 2, max = 40)
    private String Last_name;

    @Column
    @NotNull
    @Size(min = 2, max = 70)
    private String Position;

    @Column
    @NotNull
    private String photoUrl;

    protected User() {

    }

    public User(long id, String First_name, String Last_name,String Position) {
        this.id = id;
        this.First_name = First_name;
        this.Last_name = Last_name;
        this.Position = Position;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return First_name;
    }

    public void setFirst_name(String first_name) {
        First_name = first_name;
    }

    public String getLast_name() {
        return Last_name;
    }

    public void setLast_name(String last_name) {
        Last_name = last_name;
    }

    public String getPosition() {
        return Position;
    }

    public void setPosition(String position) {
        Position = position;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", FirstName='" + First_name + '\'' +
                ", LastName='" + Last_name + '\'' +
                ", Position='" + Position +
                '}';
    }
}

