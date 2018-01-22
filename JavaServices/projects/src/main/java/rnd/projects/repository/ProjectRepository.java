package rnd.projects.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rnd.projects.model.Project;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    public List<Project> findAllByUserId(Long userId); //Вот и всё просто реализуй этот метод в контроллере и вызывай его

}
