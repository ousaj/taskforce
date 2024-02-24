package com.taskforce.rwstaskforce.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.taskforce.rwstaskforce.models.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
    
}
