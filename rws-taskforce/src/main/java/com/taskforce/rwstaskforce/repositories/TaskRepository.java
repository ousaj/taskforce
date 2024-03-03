package com.taskforce.rwstaskforce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.taskforce.rwstaskforce.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query(value = "select u from Task u")
    public List<Task> getTasks();

    @Query(value = "select u from Task u where id = :id")
    public Task getTask(@Param("id") Long id);
}
