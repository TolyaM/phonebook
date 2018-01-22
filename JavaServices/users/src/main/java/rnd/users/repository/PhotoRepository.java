package rnd.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rnd.users.model.Photo;
import rnd.users.model.User;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    Photo findOneByUrl(String url);
/*    Photo save(Photo photo);
    Photo findOne(long id);*/
}
