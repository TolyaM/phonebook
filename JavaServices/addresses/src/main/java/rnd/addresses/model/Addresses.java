package rnd.addresses.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "addresses")
public class Addresses {
        @Id
        @GeneratedValue(strategy= GenerationType.AUTO)
        private long id;

        @Column
        @NotNull
        @Size(min = 2, max = 50)
        private String Email;

        @Column
        @NotNull
        @Size(min = 2, max = 50)
        private String Skype;

        @Column
        @NotNull
        @Size(min = 2, max = 50)
        private String Phone;

        @Column
        @NotNull
        private long Room;

        public void Addresses(){

        }

        public void Addresses(long id, String Email, String Skype, String Phone, long Room){
                this.id = id;
                this.Email = Email;
                this.Skype = Skype;
                this.Phone = Phone;
                this.Room = Room;
        }

        public long getId() {
                return id;
        }

        public void setId(long id) {
                this.id = id;
        }

        public String getEmail() {
                return Email;
        }

        public void setEmail(String email) {
                Email = email;
        }

        public String getSkype() {
                return Skype;
        }

        public void setSkype(String skype) {
                Skype = skype;
        }

        public String getPhone() {
                return Phone;
        }

        public void setPhone(String phone) {
                Phone = phone;
        }

        public long getRoom() {
                return Room;
        }

        public void setRoom(long room) {
                Room = room;
        }
}
