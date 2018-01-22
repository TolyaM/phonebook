package rnd.users.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import rnd.users.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
